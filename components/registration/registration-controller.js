/* global trackerCapture, angular */

var trackerCapture = angular.module('trackerCapture');
trackerCapture.controller('RegistrationController', 
        function($rootScope,
                $scope,
                $location,
                $timeout,
                $modal,
                $translate,
                $parse,
                orderByFilter,
                AttributesFactory,
                DHIS2EventFactory,
                TEService,
                CustomFormService,
                EnrollmentService,
                NotificationService,
                CurrentSelection,
                MetaDataFactory,
                EventUtils,
                RegistrationService,
                DateUtils,
                TEIGridService,
                TEIService,
                TrackerRulesFactory,
                TrackerRulesExecutionService,
                TCStorageService,
                ModalService,
                // for AES
                 CustomIDGenerationService,
                 OrganisationUnitService,
                 AESService) {
    $scope.today = DateUtils.getToday();
    $scope.trackedEntityForm = null;
    $scope.customRegistrationForm = null;    
    $scope.selectedTei = {};
    $scope.tei = {};    
    $scope.warningMessages = [];
    $scope.hiddenFields = [];    
    $scope.assignedFields = [];
    $scope.errorMessages = {};
    $scope.hiddenSections = [];
    $scope.currentEvent = null;
    $scope.prStDes = null;
    $scope.registrationAndDataEntry = false;
    $scope.model={autoGeneratedAttFailed : false, savingRegistration: false};
    $scope.helpTexts = {};
    $scope.registrationMode = 'REGISTRATION';

//for AES
    $scope.admissionDate ='frHKjT3SpU9';
    $scope.illnessOnsetDate = 'h5k2QBRqKdK';
    $scope.feverOnsetDate = 'l5ArtCcXvbr';
    $scope.stateList = [];
    $scope.districtList = [];
    $scope.blockTalukOrgUnits = [];
    $scope.villageList = [];
    $scope.tempAllChildrenList = [];
    $scope.level5OrgList = [];
    $scope.tempSelectedStateName = null;
    $scope.tempVillageExist = 'yes';
    $scope.ageInMonths ='oQioOj2ECeU';
    $scope.ageInYears = 'g6aPl383VUZ';


    $scope.selectedStateName = null;
    $scope.selectedDistrictName = null;
    $scope.selectedBlockTalukName = null;
    $scope.selectedVillageName = null;

		
    var flag = {debug: true, verbose: false};
    $rootScope.ruleeffects = {};

    $scope.attributesById = CurrentSelection.getAttributesById();

    if(!$scope.attributesById){
        $scope.attributesById = [];
        AttributesFactory.getAll().then(function(atts){
            angular.forEach(atts, function(att){
                $scope.attributesById[att.id] = att;
            });
            
            CurrentSelection.setAttributesById($scope.attributesById);
        });
    }
    
    //get ouLevels
    $scope.ouLevels = CurrentSelection.getOuLevels();
    if(!$scope.ouLevels){
        TCStorageService.currentStore.open().done(function(){
            TCStorageService.currentStore.getAll('ouLevels').done(function(response){
                var ouLevels = angular.isObject(response) ? orderByFilter(response, '-level').reverse() : [];
                CurrentSelection.setOuLevels(orderByFilter(ouLevels, '-level').reverse());
            });
        });
    }
    
    $scope.optionSets = CurrentSelection.getOptionSets();        
    if(!$scope.optionSets){
        $scope.optionSets = [];
        MetaDataFactory.getAll('optionSets').then(function(optionSets){
            angular.forEach(optionSets, function(optionSet){                        
                $scope.optionSets[optionSet.id] = optionSet;
            });
            CurrentSelection.setOptionSets($scope.optionSets);
        });
    }
    
 
   // update for MSF for disable attribute patient_identifier
    $scope.isDisabled = function(attribute) {
        if( attribute.code === 'patient_identifier')
        {
            return true;
        }
        else
        {
            return attribute.generated || $scope.assignedFields[attribute.id] || $scope.editingDisabled;
        }
    }
	
	
	
    var selectedOrgUnit = CurrentSelection.get()["orgUnit"];

    if (selectedOrgUnit) {
        $scope.selectedOrgUnit = selectedOrgUnit;
        $scope.model.orgUnitId = $scope.selectedOrgUnit.id;
    } else {
        $scope.model.orgUnitId = ($location.search()).ou;
    }

    $scope.selectedEnrollment = {
        enrollmentDate: $scope.today,
        incidentDate: $scope.today,
        orgUnitName: $scope.selectedOrgUnit ? $scope.selectedOrgUnit.displayName : ""
    };

    $scope.trackedEntities = {available: []};
    TEService.getAll().then(function (entities) {
        $scope.trackedEntities.available = entities;
        $scope.trackedEntities.selected = $scope.trackedEntities.available[0];
    });

    var getProgramRules = function () {
        $scope.trackedEntityForm = null;
        $scope.customRegistrationForm = null;
        $scope.allProgramRules = {
            constants: [],
            programIndicators: {},
            programVariables: [],
            programRules: []
        };
        if (angular.isObject($scope.selectedProgram) && $scope.selectedProgram.id) {
            return TrackerRulesFactory.getRules($scope.selectedProgram.id).then(function (rules) {
                $scope.allProgramRules = rules;
            });
        }
    };



    // for casecading 
    OrganisationUnitService.getLevel3OrganisationUnit().then(function(level3OrgUnit){
            $scope.stateList = level3OrgUnit.organisationUnits;
        });

        $scope.getDistrict = function( selectedStateUid ) {
            
            // alert( selectedStateUid );
            $scope.selectedStateName = null;
            $scope.selectedDistrictName = null;
            $scope.selectedBlockTalukName = null;
            $scope.selectedVillageName = null;
            //$scope.tempVillageExist = 'yes';

            $scope.districtList = [];
            $scope.blockTalukOrgUnits = [];
            $scope.villageList = [];
            OrganisationUnitService.getAllChildrenOrganisationUnits( selectedStateUid ).then(function(allChildren){
                $scope.tempAllChildrenList = allChildren.organisationUnits;

                OrganisationUnitService.getLevel5OrganisationUnit().then(function(level5OrgUnit){
                    $scope.level5OrgList = level5OrgUnit.organisationUnits;

                    angular.forEach( $scope.tempAllChildrenList, function(child){
                            angular.forEach( $scope.level5OrgList, function(level5Org){
                                if( child.id === level5Org.id )
                                {
                                    $scope.districtList.push( level5Org );
                                }
                            });
                        });
                        console.log( "district OrgUnit List length  is -- " + $scope.districtList.length );
                       OrganisationUnitService.getOrganisationUnitObject( selectedStateUid ).then(function(orgUnitStateObject){
                            //$scope.selectedDistrict = orgUnitObject;
                            $scope.selectedStateName = orgUnitStateObject.displayName;
                            $scope.tempSelectedStateName = $scope.selectedStateName;
                            if( $scope.tempSelectedStateName == 'Out of India')
                            {
                                $scope.tempVillageExist = 'no';
                            }
                            else
                            {
                                $scope.tempVillageExist = 'yes';
                            }
                            
                           //alert($scope.tempSelectedStateName);
                          
                    });

                });
            });

        /*
          $scope.filteredOrgUnitList=[];
            OrganisationUnitService.getAllChildrenOfSelectedOrgUnit( $scope.selOrgUnit ).then(function(orgUnitList){
                    $scope.allChildrenList = orgUnitList.organisationUnits;
                    angular.forEach( $scope.allChildrenList, function(child){
                        angular.forEach( $scope.dataSetSource, function(dataSetSource){
                            if( child.id === dataSetSource.id )
                            {
                                $scope.filteredOrgUnitList.push( dataSetSource );
                            }
                        });
                    });
                    console.log( "filtered OrgUnit List length  is -- " + $scope.filteredOrgUnitList.length );
                }
            );
    */


    };


    $scope.getAnotherDistrict = function( anotherDistrictName ){
        //alert( anotherDistrictName );
        $scope.selectedDistrictName = anotherDistrictName;
    };

 $scope.getBlockTaluk = function( districtUid ){

    //alert(districtUid);
    $scope.blockTalukOrgUnits = [];
    $scope.villageList = [];
    
    $scope.selectedDistrictName = null;
    $scope.selectedBlockTalukName = null;
    $scope.selectedVillageName = null;
    //$scope.tempVillageExist = 'yes';

    OrganisationUnitService.getChildrenOrganisationUnits( districtUid ).then(function(blockTalukOrganisationUnits){
        $scope.blockTalukOrgUnits = blockTalukOrganisationUnits.children;
                                
        OrganisationUnitService.getOrganisationUnitObject( districtUid ).then(function(orgUnitDistrictObject){
            //$scope.selectedDistrict = orgUnitObject;
            $scope.selectedDistrictName = orgUnitDistrictObject.displayName;
            
         });
     });
}


    $scope.getVillage = function( blockTalukUid ){
    //alert(districtUid);
        $scope.villageList = [];
        $scope.selectedBlockTalukName = null;
        $scope.selectedVillageName = null;

        OrganisationUnitService.getChildrenOrganisationUnits( blockTalukUid ).then(function(villageOrganisationUnits){
            $scope.villageList = villageOrganisationUnits.children;
           
                OrganisationUnitService.getOrganisationUnitObject( blockTalukUid ).then(function(orgUnitBlockTalukObject){
                //$scope.selectedDistrict = orgUnitObject;
                $scope.selectedBlockTalukName = orgUnitBlockTalukObject.displayName;
                if( $scope.villageList.length < 1 )
                {
                    $scope.tempVillageExist = 'no';
                    //alert($scope.villageList.length + " -- "  + tempVillageExist);
                }
                else
                {
                    $scope.tempVillageExist = 'yes';
                    //alert($scope.villageList.length + " -- "  + tempVillageExist);
                }
            });
        });
}


    $scope.getVillageName = function( villageUid ){
       //alert(villageUid);
        
        $scope.selectedVillageName = null;
        OrganisationUnitService.getOrganisationUnitObject( villageUid ).then(function(orgUnitVillageObject){
            $scope.selectedVillageName = orgUnitVillageObject.displayName;
            //alert($scope.selectedStateName + " --- " + $scope.selectedDistrictName + " --- " + $scope.selectedBlockTalukName + " --- " + $scope.selectedVillageName);
        });
    }

     $scope.getAnotherVillage = function( anotherVillageName ){
        //alert( anotherDistrictName );
      //  $scope.selectedVillageName = null;
        $scope.selectedVillageName = anotherVillageName;
    };   


    //watch for selection of program
    $scope.$watch('selectedProgram', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            getProgramRules();

            if ($scope.registrationMode === 'REGISTRATION') {
                $scope.getAttributes($scope.registrationMode);
            }
        }
        $scope.model.minEnrollmentDate = "";
        $scope.model.maxEnrollmentDate =  ($scope.selectedProgram && $scope.selectedProgram.selectEnrollmentDatesInFuture) ? '' : "0";
        if ($scope.selectedOrgUnit.reportDateRange) {
            if ($scope.selectedOrgUnit.reportDateRange.minDate) {
                $scope.model.minEnrollmentDate = $scope.selectedOrgUnit.reportDateRange.minDate;
            }
            if ($scope.selectedOrgUnit.reportDateRange.maxDate) {
                $scope.model.maxEnrollmentDate = $scope.selectedOrgUnit.reportDateRange.maxDate;
            }
        }
    });



    //listen to modes of registration
    $scope.$on('registrationWidget', function (event, args) {
        $scope.selectedTei = {};
        $scope.tei = {};
        $scope.registrationMode = args.registrationMode;
        $scope.orgUnitNames = CurrentSelection.getOrgUnitNames();

        if ($scope.registrationMode !== 'REGISTRATION') {
            $scope.selectedTei = args.selectedTei;
            $scope.tei = angular.copy(args.selectedTei);
        }

        $scope.teiOriginal = angular.copy($scope.tei);

        if ($scope.registrationMode === 'PROFILE') {
            $scope.selectedEnrollment = args.enrollment ? args.enrollment : {};
        }

        $scope.getAttributes($scope.registrationMode);

        if ($scope.selectedProgram && $scope.selectedProgram.id) {
            getProgramRules().then( function (rules) {
                $scope.executeRules();
            });
        }
    });

    $scope.getAttributes = function (_mode) {
        var mode = _mode ? _mode : 'ENROLLMENT';
        $scope.customRegistrationFormExists = false;
        $scope.customDataEntryForm = null;
        $scope.schedulingEnabled = true;

        if( $scope.selectedProgram && $scope.selectedProgram.captureCoordinates && angular.isObject($scope.selectedEnrollment) ){                
            $scope.selectedEnrollment.coordinate = $scope.selectedEnrollment.coordinate ? $scope.selectedEnrollment.coordinate : {};
        }

        AttributesFactory.getByProgram($scope.selectedProgram).then(function (atts) {
            $scope.attributes = TEIGridService.generateGridColumns(atts, null, false).columns;
            fetchGeneratedAttributes();
            if ($scope.selectedProgram && $scope.selectedProgram.id) {
                if ($scope.selectedProgram.dataEntryForm && $scope.selectedProgram.dataEntryForm.htmlCode) {
                    $scope.customRegistrationFormExists = true;
                    $scope.trackedEntityForm = $scope.selectedProgram.dataEntryForm;
                    $scope.trackedEntityForm.attributes = $scope.attributes;
                    $scope.trackedEntityForm.selectIncidentDatesInFuture = $scope.selectedProgram.selectIncidentDatesInFuture;
                    $scope.trackedEntityForm.selectEnrollmentDatesInFuture = $scope.selectedProgram.selectEnrollmentDatesInFuture;
                    $scope.trackedEntityForm.displayIncidentDate = $scope.selectedProgram.displayIncidentDate;
                    $scope.customRegistrationForm = CustomFormService.getForTrackedEntity($scope.trackedEntityForm, mode);
                }

                if ($scope.selectedProgram.programStages && $scope.selectedProgram.programStages[0] && $scope.selectedProgram.useFirstStageDuringRegistration && $scope.registrationMode === 'REGISTRATION') {
                    $scope.currentEvent = {};
                    $scope.registrationAndDataEntry = true;
                    $scope.prStDes = [];
                    $scope.currentStage = $scope.selectedProgram.programStages[0];
                    $scope.currentEvent.event = 'SINGLE_EVENT';
                    $scope.currentEvent.providedElsewhere = {};
                    $scope.currentEvent.orgUnit = $scope.selectedOrgUnit.id;
                    $scope.currentEvent.program = $scope.selectedProgram.id;
                    $scope.currentEvent.programStage = $scope.currentStage.id;
                    $scope.currentEvent.enrollmentStatus = $scope.currentEvent.status = 'ACTIVE';
                    $scope.currentEvent.executionDateLabel = $scope.currentStage.executionDateLabel;
                    $rootScope.ruleeffects[$scope.currentEvent.event] = {};
                    $scope.selectedEnrollment.status = 'ACTIVE';

                    if( $scope.currentStage.captureCoordinates ){                            
                        $scope.currentEvent.coordinate = {};
                    }

                    angular.forEach($scope.currentStage.programStageDataElements, function (prStDe) {                            
                        $scope.prStDes[prStDe.dataElement.id] = prStDe;
                        if (prStDe.allowProvidedElsewhere) {
                            $scope.allowProvidedElsewhereExists[$scope.currentStage.id] = true;
                        }
                    });

                    $scope.customDataEntryForm = CustomFormService.getForProgramStage($scope.currentStage, $scope.prStDes);
                }
            }
        });
    };

    var fetchGeneratedAttributes = function() {
        angular.forEach($scope.attributes, function(att) {
            if (att.generated && !$scope.selectedTei[att.id]) {
                TEIService.getGeneratedAttributeValue(att.id).then(function (data) {
                    if (data && data.status === "ERROR") {
                        NotificationService.showNotifcationDialog($translate.instant("error"), data.message);
                        $scope.model.autoGeneratedAttFailed = true;
                    } else {
                        if (att.valueType === "NUMBER") {
                            $scope.selectedTei[att.id] = Number(data);
                        } else {
                            $scope.selectedTei[att.id] = data;
                        }
                        $scope.model.autoGeneratedAttFailed = false;
                    }
                });
            }
        });
    };

    var goToDashboard = function (destination, teiId) {
        //reset form
        $scope.selectedTei = {};
        $scope.selectedEnrollment = {
            enrollmentDate: $scope.today,
            incidentDate: $scope.today,
            orgUnitName: $scope.selectedOrgUnit.displayName
        };
        $scope.outerForm.submitted = false;
        $scope.outerForm.$setPristine();

        if (destination === 'DASHBOARD') {
            $location.path('/dashboard').search({
                tei: teiId,
                program: $scope.selectedProgram ? $scope.selectedProgram.id : null,
                ou:$scope.selectedOrgUnit.id
            });
        }
        else if (destination === 'SELF') {
            //notify user
            var headerText =  $translate.instant("success");
            var bodyText =  $translate.instant("registration_complete");
            NotificationService.showNotifcationDialog(headerText, bodyText);
            $scope.selectedTei = {};
            $scope.tei = {};
            $scope.currentEvent = {};
            $timeout(function() {
                $rootScope.$broadcast('registrationWidget', {registrationMode: 'REGISTRATION'});
            });
        }
    };

    var reloadProfileWidget = function () {
        var selections = CurrentSelection.get();
        CurrentSelection.set({
            tei: $scope.selectedTei,
            te: $scope.selectedTei.trackedEntity,
            prs: selections.prs,
            pr: $scope.selectedProgram,
            prNames: selections.prNames,
            prStNames: selections.prStNames,
            enrollments: selections.enrollments,
            selectedEnrollment: $scope.selectedEnrollment,
            optionSets: selections.optionSets,
            orgUnit: selections.orgUnit
        });
        $timeout(function () {
            $rootScope.$broadcast('profileWidget', {});
        }, 200);
    };

    var notifyRegistrtaionCompletion = function (destination, teiId) {
        if ($scope.registrationMode === 'ENROLLMENT') {
            broadcastTeiEnrolled();
        }
        else {
  // goToDashboard(destination ? destination : 'DASHBOARD', teiId);
		  // CustomIDGenerationService
// add for Generate CustomId for plan-customizations
       CustomIDGenerationService.validateAndCreateCustomId($scope.tei,$scope.selectedEnrollment.program,$scope.attributes,destination,$scope.optionSets,$scope.attributesById,$scope.selectedEnrollment.enrollmentDate).then(function(){
           console.log("Custom ID")
           goToDashboard( destination ? destination : 'DASHBOARD', teiId );
       });
	}
    };

    var performRegistration = function (destination) {
        if (destination === "DASHBOARD" || destination === "SELF") {
           $scope.model.savingRegistration = true;
        }
        RegistrationService.registerOrUpdate($scope.tei, $scope.optionSets, $scope.attributesById).then(function (registrationResponse) {
            var reg = registrationResponse.response ? registrationResponse.response : {};
            if (reg.reference && reg.status === 'SUCCESS') {
                $scope.tei.trackedEntityInstance = reg.reference;

                if ($scope.registrationMode === 'PROFILE') {
                    reloadProfileWidget();
                    $rootScope.$broadcast('teiupdated', {});
                    $scope.model.savingRegistration = false;
                }
                else {
                    if ($scope.selectedProgram) {

                        //enroll TEI
                        var enrollment = {};
                        enrollment.trackedEntityInstance = $scope.tei.trackedEntityInstance;
                        enrollment.program = $scope.selectedProgram.id;
                        enrollment.status = 'ACTIVE';
                        enrollment.orgUnit = $scope.selectedOrgUnit.id;
                        enrollment.enrollmentDate = $scope.selectedEnrollment.enrollmentDate;
                        enrollment.incidentDate = $scope.selectedEnrollment.incidentDate === '' ? $scope.selectedEnrollment.enrollmentDate : $scope.selectedEnrollment.incidentDate;

                        if( $scope.selectedEnrollment.coordinate ){
                            enrollment.coordinate = $scope.selectedEnrollment.coordinate;
                        }

                        EnrollmentService.enroll(enrollment).then(function (enrollmentResponse) {
                            $scope.model.savingRegistration = false;
                            if(enrollmentResponse) {
                                var en = enrollmentResponse.response && enrollmentResponse.response.importSummaries &&
                                enrollmentResponse.response.importSummaries[0] ? enrollmentResponse.response.importSummaries[0] : {};
                                if (en.reference && en.status === 'SUCCESS') {
                                    enrollment.enrollment = en.reference;
                                    $scope.selectedEnrollment = enrollment;
                                    var avilableEvent = $scope.currentEvent && $scope.currentEvent.event ? $scope.currentEvent : null;
                                    var dhis2Events = EventUtils.autoGenerateEvents($scope.tei.trackedEntityInstance, $scope.selectedProgram, $scope.selectedOrgUnit, enrollment, avilableEvent);
                                    if (dhis2Events.events.length > 0) {
                                        DHIS2EventFactory.create(dhis2Events).then(function () {
                                            notifyRegistrtaionCompletion(destination, $scope.tei.trackedEntityInstance);
                                        });
                                    } else {
                                        notifyRegistrtaionCompletion(destination, $scope.tei.trackedEntityInstance);
                                    }
                                }
                                else {
                                    //enrollment has failed
                                    NotificationService.showNotifcationDialog($translate.instant("enrollment_error"), enrollmentResponse.message);
                                    return;
                                }
                            }
                        });
                    }
                    else {
                        notifyRegistrtaionCompletion(destination, $scope.tei.trackedEntityInstance);
                        $scope.model.savingRegistration = false;
                    }
                }
            }
            else {//update/registration has failed
                var headerText = $scope.tei && $scope.tei.trackedEntityInstance ? $translate.instant('update_error') :
                                 $translate.instant('registration_error');
                var bodyText = registrationResponse.message;
                NotificationService.showNotifcationDialog(headerText, bodyText);
                $scope.model.savingRegistration = false;
                return;
            }
        });

    };

    function broadcastTeiEnrolled() {
        $rootScope.$broadcast('teienrolled', {});
    }

    $scope.registerEntity = function (destination) {
        //check for form validity
        $scope.outerForm.submitted = true;
        if ($scope.outerForm.$invalid) {
            return false;
        }

        if ($scope.model.autoGeneratedAttFailed) {
            NotificationService.showNotifcationDialog($translate.instant("registration_error"), $translate.instant("auto_generate_failed"));
            return false;
        }

        if ($scope.registrationAndDataEntry) {
            $scope.outerDataEntryForm.submitted = true;
            if ($scope.outerDataEntryForm.$invalid) {
                return false;
            }
        }

        //form is valid, continue the registration
        //get selected entity
        if (!$scope.selectedTei.trackedEntityInstance) {
            $scope.selectedTei.trackedEntity = $scope.tei.trackedEntity = $scope.selectedProgram && $scope.selectedProgram.trackedEntity && $scope.selectedProgram.trackedEntity.id ? $scope.selectedProgram.trackedEntity.id : $scope.trackedEntities.selected.id;
            $scope.selectedTei.orgUnit = $scope.tei.orgUnit = $scope.selectedOrgUnit.id;
            $scope.selectedTei.attributes = $scope.tei.attributes = [];
        }

        //get tei attributes and their values
        //but there could be a case where attributes are non-mandatory and
        //registration form comes empty, in this case enforce at least one value
        //var result = RegistrationService.processForm($scope.tei, $scope.selectedTei, $scope.teiOriginal, $scope.attributesById);
        var result = RegistrationService.processForm($scope.tei, $scope.selectedTei, $scope.teiOriginal, $scope.attributesById,$scope.selectedStateName,$scope.selectedDistrictName,$scope.selectedBlockTalukName,$scope.selectedVillageName);
        $scope.formEmpty = result.formEmpty;
        $scope.tei = result.tei;

        if ($scope.formEmpty) {//registration form is empty
            NotificationService.showNotifcationDialog($translate.instant("error"), $translate.instant("form_is_empty_fill_at_least_one"));
            return;
        }
        performRegistration(destination);
    };

    $scope.executeRules = function () {
        //repopulate attributes with updated values
        $scope.selectedTei = $scope.selectedTei || {};
        $scope.selectedTei.attributes = [];
        angular.forEach($scope.attributes, function (metaAttribute) {
            var newAttributeInArray = {
                attribute: metaAttribute.id,
                code: metaAttribute.code,
                displayName: metaAttribute.displayName,
                type: metaAttribute.valueType,
                value: $scope.selectedTei[metaAttribute.id]
            };

            $scope.selectedTei.attributes.push(newAttributeInArray);
        });

        if ($scope.selectedProgram && $scope.selectedProgram.id) {            
            var eventExists = $scope.currentEvent && $scope.currentEvent.event;
            var evs = null;
            if( eventExists ){
                evs = {all: [], byStage: {}};
                evs.all = [$scope.currentEvent];
                evs.byStage[$scope.currentStage.id] = [$scope.currentEvent];
            }
            
            TrackerRulesExecutionService.executeRules(
                $scope.allProgramRules, 
                eventExists ? $scope.currentEvent : 'registration', 
                evs,
                $scope.prStDes, 
                $scope.attributesById,
                $scope.selectedTei, 
                $scope.selectedEnrollment, 
                $scope.optionSets, 
                flag);
        }
    };

    //check if field is hidden
    $scope.isHidden = function (id) {
        //In case the field contains a value, we cant hide it.
        //If we hid a field with a value, it would falsely seem the user was aware that the value was entered in the UI.

        $scope.selectedTei = $scope.selectedTei || {};
        $scope.currentEvent = $scope.currentEvent || {};
        if( $scope.attributesById[id] ){//it is attributes
            return $scope.selectedTei[id] ? false : $scope.hiddenFields[id];
        }
        // it is data elements
        return $scope.currentEvent[id] ? false : $scope.hiddenFields[id];                
    };

    $scope.teiValueUpdated = function (tei, field) {
        $scope.executeRules();
    };


    $scope.saveDataValueForRadio = function(field, context, value){
        if(field.dataElement) {
            //The saveDataValueForRadio was called from the dataentry template. Update dataelement og current event:
            context[field.dataElement.id] = value;
        }
        else {
            //The saveDataValueForRadio was called from the registration controller. Update the selected TEI:
            context[field.id] = value;
        }

        $scope.executeRules();
    }

    $scope.warningMessages = [];
    $scope.hiddenFields = [];
    $scope.assignedFields = [];
    $scope.errorMessages = {};
    $scope.hiddenSections = [];

    //listen for rule effect changes attribute / data element
    $scope.$on('ruleeffectsupdated', function (event, args) {
        if (args.event === "registration") {
            var effectResult = TrackerRulesExecutionService.processRuleEffectAttribute(args.event, $scope.selectedTei, $scope.tei, $scope.currentEvent, {}, $scope.currentEvent, $scope.attributesById, $scope.prStDes, $scope.hiddenFields, $scope.hiddenSections, $scope.warningMessages, $scope.assignedFields, $scope.optionSets);
            $scope.selectedTei = effectResult.selectedTei;
            $scope.currentEvent = effectResult.currentEvent;
            $scope.hiddenFields = effectResult.hiddenFields;
            $scope.hiddenSections = effectResult.hiddenSections;
            $scope.assignedFields = effectResult.assignedFields;
            $scope.warningMessages = effectResult.warningMessages;
        }

        if (args.event === "SINGLE_EVENT" ) {
            var effectResult = TrackerRulesExecutionService.processRuleEffectsForEvent('SINGLE_EVENT', $scope.currentEvent, {}, $scope.prStDes, $scope.optionSets);
            $scope.selectedTei = effectResult.selectedTei;
            $scope.currentEvent = effectResult.currentEvent;
            $scope.hiddenFields = effectResult.hiddenFields;
            $scope.hiddenSections = effectResult.hiddenSections;
            $scope.assignedFields = effectResult.assignedFields;
            $scope.warningMessages = effectResult.warningMessages;
        }
    });

    $scope.interacted = function (field) {
        var status = false;
        if (field) {
            status = $scope.outerForm.submitted || field.$dirty;
        }
        return status;
    };

    $scope.getTrackerAssociate = function (selectedAttribute, existingAssociateUid) {
        var modalInstance = $modal.open({
            templateUrl: 'components/teiadd/tei-add.html',
            controller: 'TEIAddController',
            windowClass: 'modal-full-window',
            resolve: {
                relationshipTypes: function () {
                    return $scope.relationshipTypes;
                },
                addingRelationship: function () {
                    return false;
                },
                selections: function () {
                    return CurrentSelection.get();
                },
                selectedTei: function () {
                    return $scope.selectedTei;
                },
                selectedAttribute: function () {
                    return selectedAttribute;
                },
                existingAssociateUid: function () {
                    return existingAssociateUid;
                },
                selectedProgram: function () {
                    return $scope.selectedProgram;
                },
                relatedProgramRelationship: function () {
                    return $scope.relatedProgramRelationship;
                }
            }
        });
        modalInstance.result.then(function (res) {
            if (res && res.id) {
                $scope.selectedTei[selectedAttribute.id] = res.id;
            }
        });
    };

// custom methods

    $scope.yearToMonths = function (ageInYear) {
        $scope.ToMonths = ageInYear*12;
        $scope.selectedTei[$scope.ageInMonths] =( Math.round($scope.ToMonths*100))/100;//put calculated value in month text box
        
    };

    $scope.monthsToYear = function (ageInMonth) {
        $scope.ToYear = ageInMonth/12;
        $scope.selectedTei[$scope.ageInYears] = ( Math.round($scope.ToYear*100))/100;//put calculated value in year text box
        
    };

    $scope.cancelRegistrationWarning = function (cancelFunction) {
        var result = RegistrationService.processForm($scope.tei, $scope.selectedTei, $scope.teiOriginal, $scope.attributesById);
        var prStDe;
        if (!result.formChanged) {
            if ($scope.currentStage &&  $scope.currentStage.programStageDataElements) {
                for (var index = 0; index < $scope.currentStage.programStageDataElements.length; index++) {
                    prStDe = $scope.currentStage.programStageDataElements[index];
                    if ($scope.currentEvent[prStDe.dataElement.id]) {
                        result.formChanged = true;
                        break;
                    }
                }
            }
        }
        if (result.formChanged) {
            var modalOptions = {
                closeButtonText: 'no',
                actionButtonText: 'yes',
                headerText: 'cancel',
                bodyText: 'are_you_sure_to_cancel_registration'
            };

            ModalService.showModal({}, modalOptions).then(function () {
                $scope.outerForm.$setPristine();
                cancelFunction();
            });
        }
        else {
            $scope.outerForm.$setPristine();
            cancelFunction();
        }
    };

    $scope.showAttributeMap = function (obj, id) {
        var lat = "",
            lng = "";
        if (obj[id] && obj[id].length > 0) {
            var coordinates = obj[id].split(",");
            lng = coordinates[0];
            lat = coordinates[1];
        }
        var modalInstance = $modal.open({
            templateUrl: '../dhis-web-commons/angular-forms/map.html',
            controller: 'MapController',
            windowClass: 'modal-full-window',
            resolve: {
                location: function () {
                    return {lat: lat, lng: lng};
                }
            }
        });

        modalInstance.result.then(function (location) {
            if (angular.isObject(location)) {
                obj[id] = location.lng + ',' + location.lat;
            }
        }, function () {
        });
    };
	
	$scope.dateValidationCheck = function()
	{
		/*console.log($scope.selectedTei[$scope.illnessOnsetDate]);
		console.log($scope.selectedTei[$scope.admissionDate]);
		console.log($scope.selectedTei[$scope.feverOnsetDate]);*/
		
		 if( $scope.selectedTei[$scope.illnessOnsetDate] > $scope.selectedTei[$scope.admissionDate])
		 {
			 alert("Admission date cannot be before Illness Onset date");
			 $scope.selectedTei[$scope.admissionDate] = "";
		 }
		 else if($scope.selectedTei[$scope.illnessOnsetDate] > $scope.selectedTei[$scope.feverOnsetDate])
		 {	
			alert("Fever onset date cannot be before Illness Onset date");
			 $scope.selectedTei[$scope.feverOnsetDate] = ""; 
		 }
		 else
		 {
		 }
	};

    $scope.showDataElementMap = function (obj, id) {
        var lat = "",
            lng = "";
        if (obj[id] && obj[id].length > 0) {
            var coordinates = obj[id].split(",");
            lng = coordinates[0];
            lat = coordinates[1];
        }
        var modalInstance = $modal.open({
            templateUrl: '../dhis-web-commons/angular-forms/map.html',
            controller: 'MapController',
            windowClass: 'modal-full-window',
            resolve: {
                location: function () {
                    return {lat: lat, lng: lng};
                }
            }
        });

        modalInstance.result.then(function (location) {
            if (angular.isObject(location)) {
                obj[id] = location.lng + ',' + location.lat;
            }
        }, function () {
        });
    };

    $scope.showProgramStageMap = function(event){
        var modalInstance = $modal.open({
            templateUrl: '../dhis-web-commons/angular-forms/map.html',
            controller: 'MapController',
            windowClass: 'modal-full-window',
            resolve: {
                location: function () {
                    return {lat: event.coordinate.latitude, lng: event.coordinate.longitude};
                }
            }
        });

        modalInstance.result.then(function (location) {
            if(angular.isObject(location)){
                event.coordinate.latitude = location.lat;
                event.coordinate.longitude = location.lng;
            }
        }, function () {
        });
    };

    $scope.saveDatavalue = function () {
        $scope.executeRules();
    };

    $scope.verifyExpiryDate = function(eventDateStr) {
        var dateGetter, dateSetter, date;
        dateGetter = $parse(eventDateStr);
        dateSetter = dateGetter.assign;
        date = dateGetter($scope);
        if(!date) {
            return;
        }
        if($scope.model.ouDates) {
            if (!DateUtils.verifyOrgUnitPeriodDate(date, $scope.model.ouDates.startDate, $scope.model.ouDates.endDate)) {
                dateSetter($scope, null);
                return;
            }
        }
        if (!DateUtils.verifyExpiryDate(date, $scope.selectedProgram.expiryPeriodType, $scope.selectedProgram.expiryDays)) {
            dateSetter($scope, null);
        }
    };
});
