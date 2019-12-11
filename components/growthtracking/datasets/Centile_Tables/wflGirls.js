const wflGirls = {
  '45.0': { L: -0.3833, M: 2.4607, S: 0.09029, P01: 1.888, P1: 2.011, P3: 2.087, P5: 2.13, P10: 2.197, P15: 2.245, P25: 2.317, P50: 2.461, P75: 2.617, P85: 2.707, P90: 2.77, P95: 2.867, P97: 2.933, P99: 3.063, P999: 3.305 },
  '45.5': { L: -0.3833, M: 2.5457, S: 0.09033, P01: 1.953, P1: 2.08, P3: 2.159, P5: 2.203, P10: 2.273, P15: 2.322, P25: 2.397, P50: 2.546, P75: 2.708, P85: 2.8, P90: 2.866, P95: 2.967, P97: 3.035, P99: 3.169, P999: 3.42 },
  '46.0': { L: -0.3833, M: 2.6306, S: 0.09037, P01: 2.018, P1: 2.149, P3: 2.231, P5: 2.277, P10: 2.349, P15: 2.399, P25: 2.477, P50: 2.631, P75: 2.798, P85: 2.894, P90: 2.961, P95: 3.066, P97: 3.136, P99: 3.275, P999: 3.535 },
  '46.5': { L: -0.3833, M: 2.7155, S: 0.0904, P01: 2.083, P1: 2.218, P3: 2.303, P5: 2.35, P10: 2.424, P15: 2.477, P25: 2.557, P50: 2.716, P75: 2.888, P85: 2.987, P90: 3.057, P95: 3.165, P97: 3.237, P99: 3.381, P999: 3.649 },
  '47.0': { L: -0.3833, M: 2.8007, S: 0.09044, P01: 2.148, P1: 2.288, P3: 2.375, P5: 2.423, P10: 2.5, P15: 2.554, P25: 2.637, P50: 2.801, P75: 2.979, P85: 3.081, P90: 3.153, P95: 3.264, P97: 3.339, P99: 3.488, P999: 3.764 },
  '47.5': { L: -0.3833, M: 2.8867, S: 0.09048, P01: 2.213, P1: 2.358, P3: 2.448, P5: 2.498, P10: 2.577, P15: 2.633, P25: 2.718, P50: 2.887, P75: 3.071, P85: 3.176, P90: 3.25, P95: 3.365, P97: 3.442, P99: 3.595, P999: 3.88 },
  '48.0': { L: -0.3833, M: 2.9741, S: 0.09052, P01: 2.28, P1: 2.429, P3: 2.522, P5: 2.573, P10: 2.655, P15: 2.712, P25: 2.8, P50: 2.974, P75: 3.164, P85: 3.272, P90: 3.349, P95: 3.467, P97: 3.547, P99: 3.704, P999: 3.998 },
  '48.5': { L: -0.3833, M: 3.0636, S: 0.09056, P01: 2.348, P1: 2.502, P3: 2.598, P5: 2.65, P10: 2.735, P15: 2.794, P25: 2.884, P50: 3.064, P75: 3.259, P85: 3.371, P90: 3.45, P95: 3.571, P97: 3.654, P99: 3.816, P999: 4.119 },
  '49.0': { L: -0.3833, M: 3.156, S: 0.0906, P01: 2.419, P1: 2.577, P3: 2.676, P5: 2.73, P10: 2.817, P15: 2.878, P25: 2.971, P50: 3.156, P75: 3.357, P85: 3.473, P90: 3.554, P95: 3.679, P97: 3.764, P99: 3.932, P999: 4.244 },
  '49.5': { L: -0.3833, M: 3.252, S: 0.09064, P01: 2.492, P1: 2.655, P3: 2.757, P5: 2.813, P10: 2.903, P15: 2.965, P25: 3.061, P50: 3.252, P75: 3.46, P85: 3.579, P90: 3.662, P95: 3.792, P97: 3.879, P99: 4.052, P999: 4.374 },
  '50.0': { L: -0.3833, M: 3.3518, S: 0.09068, P01: 2.569, P1: 2.736, P3: 2.841, P5: 2.899, P10: 2.992, P15: 3.056, P25: 3.155, P50: 3.352, P75: 3.566, P85: 3.688, P90: 3.775, P95: 3.908, P97: 3.998, P99: 4.176, P999: 4.508 },
  '50.5': { L: -0.3833, M: 3.4557, S: 0.09072, P01: 2.648, P1: 2.821, P3: 2.929, P5: 2.989, P10: 3.084, P15: 3.151, P25: 3.253, P50: 3.456, P75: 3.676, P85: 3.803, P90: 3.892, P95: 4.03, P97: 4.123, P99: 4.306, P999: 4.649 },
  '51.0': { L: -0.3833, M: 3.5636, S: 0.09076, P01: 2.73, P1: 2.909, P3: 3.021, P5: 3.082, P10: 3.18, P15: 3.249, P25: 3.354, P50: 3.564, P75: 3.791, P85: 3.922, P90: 4.014, P95: 4.156, P97: 4.252, P99: 4.441, P999: 4.795 },
  '51.5': { L: -0.3833, M: 3.6754, S: 0.0908, P01: 2.816, P1: 3, P3: 3.115, P5: 3.179, P10: 3.28, P15: 3.351, P25: 3.46, P50: 3.675, P75: 3.91, P85: 4.045, P90: 4.14, P95: 4.286, P97: 4.385, P99: 4.581, P999: 4.946 },
  '52.0': { L: -0.3833, M: 3.7911, S: 0.09085, P01: 2.904, P1: 3.094, P3: 3.213, P5: 3.278, P10: 3.383, P15: 3.456, P25: 3.568, P50: 3.791, P75: 4.034, P85: 4.173, P90: 4.271, P95: 4.422, P97: 4.524, P99: 4.726, P999: 5.102 },
  '52.5': { L: -0.3833, M: 3.9105, S: 0.09089, P01: 2.995, P1: 3.191, P3: 3.314, P5: 3.381, P10: 3.489, P15: 3.565, P25: 3.681, P50: 3.911, P75: 4.161, P85: 4.304, P90: 4.405, P95: 4.561, P97: 4.667, P99: 4.875, P999: 5.264 },
  '53.0': { L: -0.3833, M: 4.0332, S: 0.09093, P01: 3.089, P1: 3.291, P3: 3.418, P5: 3.487, P10: 3.599, P15: 3.677, P25: 3.796, P50: 4.033, P75: 4.291, P85: 4.44, P90: 4.544, P95: 4.705, P97: 4.814, P99: 5.029, P999: 5.43 },
  '53.5': { L: -0.3833, M: 4.1591, S: 0.09098, P01: 3.184, P1: 3.393, P3: 3.524, P5: 3.596, P10: 3.711, P15: 3.791, P25: 3.914, P50: 4.159, P75: 4.426, P85: 4.578, P90: 4.686, P95: 4.852, P97: 4.964, P99: 5.186, P999: 5.6 },
  '54.0': { L: -0.3833, M: 4.2875, S: 0.09102, P01: 3.282, P1: 3.498, P3: 3.632, P5: 3.707, P10: 3.825, P15: 3.908, P25: 4.035, P50: 4.288, P75: 4.562, P85: 4.72, P90: 4.831, P95: 5.002, P97: 5.118, P99: 5.347, P999: 5.774 },
  '54.5': { L: -0.3833, M: 4.4179, S: 0.09106, P01: 3.382, P1: 3.604, P3: 3.743, P5: 3.819, P10: 3.941, P15: 4.027, P25: 4.158, P50: 4.418, P75: 4.701, P85: 4.864, P90: 4.978, P95: 5.155, P97: 5.274, P99: 5.51, P999: 5.95 },
  '55.0': { L: -0.3833, M: 4.5498, S: 0.0911, P01: 3.482, P1: 3.711, P3: 3.854, P5: 3.933, P10: 4.059, P15: 4.147, P25: 4.282, P50: 4.55, P75: 4.842, P85: 5.009, P90: 5.127, P95: 5.309, P97: 5.432, P99: 5.675, P999: 6.129 },
  '55.5': { L: -0.3833, M: 4.6827, S: 0.09114, P01: 3.584, P1: 3.819, P3: 3.966, P5: 4.048, P10: 4.177, P15: 4.268, P25: 4.407, P50: 4.683, P75: 4.983, P85: 5.156, P90: 5.277, P95: 5.464, P97: 5.591, P99: 5.842, P999: 6.309 },
  '56.0': { L: -0.3833, M: 4.8162, S: 0.09118, P01: 3.686, P1: 3.928, P3: 4.079, P5: 4.163, P10: 4.296, P15: 4.389, P25: 4.532, P50: 4.816, P75: 5.125, P85: 5.303, P90: 5.428, P95: 5.621, P97: 5.751, P99: 6.009, P999: 6.489 },
  '56.5': { L: -0.3833, M: 4.95, S: 0.09121, P01: 3.788, P1: 4.037, P3: 4.192, P5: 4.278, P10: 4.415, P15: 4.511, P25: 4.658, P50: 4.95, P75: 5.268, P85: 5.45, P90: 5.579, P95: 5.777, P97: 5.911, P99: 6.176, P999: 6.67 },
  '57.0': { L: -0.3833, M: 5.0837, S: 0.09125, P01: 3.889, P1: 4.145, P3: 4.305, P5: 4.393, P10: 4.534, P15: 4.633, P25: 4.784, P50: 5.084, P75: 5.41, P85: 5.598, P90: 5.73, P95: 5.934, P97: 6.071, P99: 6.344, P999: 6.851 },
  '57.5': { L: -0.3833, M: 5.2173, S: 0.09128, P01: 3.991, P1: 4.254, P3: 4.418, P5: 4.509, P10: 4.653, P15: 4.754, P25: 4.909, P50: 5.217, P75: 5.553, P85: 5.745, P90: 5.881, P95: 6.09, P97: 6.231, P99: 6.511, P999: 7.032 },
  '58.0': { L: -0.3833, M: 5.3507, S: 0.0913, P01: 4.093, P1: 4.362, P3: 4.531, P5: 4.624, P10: 4.772, P15: 4.876, P25: 5.035, P50: 5.351, P75: 5.695, P85: 5.892, P90: 6.031, P95: 6.246, P97: 6.391, P99: 6.678, P999: 7.213 },
  '58.5': { L: -0.3833, M: 5.4834, S: 0.09132, P01: 4.194, P1: 4.47, P3: 4.643, P5: 4.738, P10: 4.89, P15: 4.997, P25: 5.16, P50: 5.483, P75: 5.836, P85: 6.038, P90: 6.181, P95: 6.401, P97: 6.55, P99: 6.844, P999: 7.392 },
  '59.0': { L: -0.3833, M: 5.6151, S: 0.09134, P01: 4.295, P1: 4.578, P3: 4.754, P5: 4.852, P10: 5.008, P15: 5.116, P25: 5.283, P50: 5.615, P75: 5.976, P85: 6.184, P90: 6.33, P95: 6.555, P97: 6.707, P99: 7.008, P999: 7.57 },
  '59.5': { L: -0.3833, M: 5.7454, S: 0.09135, P01: 4.395, P1: 4.684, P3: 4.865, P5: 4.964, P10: 5.124, P15: 5.235, P25: 5.406, P50: 5.745, P75: 6.115, P85: 6.327, P90: 6.476, P95: 6.707, P97: 6.863, P99: 7.171, P999: 7.746 },
  '60.0': { L: -0.3833, M: 5.8742, S: 0.09136, P01: 4.493, P1: 4.789, P3: 4.974, P5: 5.076, P10: 5.239, P15: 5.352, P25: 5.527, P50: 5.874, P75: 6.252, P85: 6.469, P90: 6.622, P95: 6.858, P97: 7.017, P99: 7.332, P999: 7.92 },
  '60.5': { L: -0.3833, M: 6.0014, S: 0.09137, P01: 4.59, P1: 4.892, P3: 5.081, P5: 5.186, P10: 5.352, P15: 5.468, P25: 5.647, P50: 6.001, P75: 6.388, P85: 6.609, P90: 6.765, P95: 7.006, P97: 7.169, P99: 7.491, P999: 8.092 },
  '61.0': { L: -0.3833, M: 6.127, S: 0.09137, P01: 4.686, P1: 4.995, P3: 5.188, P5: 5.294, P10: 5.464, P15: 5.583, P25: 5.765, P50: 6.127, P75: 6.521, P85: 6.747, P90: 6.907, P95: 7.153, P97: 7.319, P99: 7.648, P999: 8.261 },
  '61.5': { L: -0.3833, M: 6.2511, S: 0.09136, P01: 4.781, P1: 5.096, P3: 5.293, P5: 5.401, P10: 5.575, P15: 5.696, P25: 5.882, P50: 6.251, P75: 6.653, P85: 6.884, P90: 7.047, P95: 7.298, P97: 7.467, P99: 7.803, P999: 8.428 },
  '62.0': { L: -0.3833, M: 6.3738, S: 0.09135, P01: 4.875, P1: 5.196, P3: 5.397, P5: 5.507, P10: 5.684, P15: 5.808, P25: 5.997, P50: 6.374, P75: 6.784, P85: 7.019, P90: 7.185, P95: 7.441, P97: 7.614, P99: 7.956, P999: 8.593 },
  '62.5': { L: -0.3833, M: 6.4948, S: 0.09133, P01: 4.968, P1: 5.295, P3: 5.499, P5: 5.612, P10: 5.792, P15: 5.918, P25: 6.111, P50: 6.495, P75: 6.913, P85: 7.152, P90: 7.321, P95: 7.582, P97: 7.758, P99: 8.106, P999: 8.756 },
  '63.0': { L: -0.3833, M: 6.6144, S: 0.09131, P01: 5.06, P1: 5.393, P3: 5.601, P5: 5.716, P10: 5.899, P15: 6.027, P25: 6.224, P50: 6.614, P75: 7.04, P85: 7.284, P90: 7.456, P95: 7.721, P97: 7.9, P99: 8.255, P999: 8.916 },
  '63.5': { L: -0.3833, M: 6.7328, S: 0.09129, P01: 5.151, P1: 5.489, P3: 5.701, P5: 5.818, P10: 6.005, P15: 6.135, P25: 6.335, P50: 6.733, P75: 7.166, P85: 7.414, P90: 7.589, P95: 7.859, P97: 8.041, P99: 8.402, P999: 9.075 },
  '64.0': { L: -0.3833, M: 6.8501, S: 0.09126, P01: 5.241, P1: 5.585, P3: 5.801, P5: 5.92, P10: 6.11, P15: 6.242, P25: 6.446, P50: 6.85, P75: 7.29, P85: 7.543, P90: 7.721, P95: 7.995, P97: 8.181, P99: 8.548, P999: 9.232 },
  '64.5': { L: -0.3833, M: 6.9662, S: 0.09123, P01: 5.33, P1: 5.68, P3: 5.9, P5: 6.02, P10: 6.213, P15: 6.348, P25: 6.555, P50: 6.966, P75: 7.414, P85: 7.67, P90: 7.851, P95: 8.13, P97: 8.319, P99: 8.692, P999: 9.388 },
  '65.0': { L: -0.3833, M: 7.0812, S: 0.09119, P01: 5.419, P1: 5.775, P3: 5.997, P5: 6.12, P10: 6.316, P15: 6.453, P25: 6.664, P50: 7.081, P75: 7.536, P85: 7.797, P90: 7.981, P95: 8.264, P97: 8.456, P99: 8.835, P999: 9.542 },
  '65.5': { L: -0.3833, M: 7.195, S: 0.09115, P01: 5.506, P1: 5.868, P3: 6.094, P5: 6.219, P10: 6.418, P15: 6.557, P25: 6.771, P50: 7.195, P75: 7.657, P85: 7.922, P90: 8.108, P95: 8.396, P97: 8.591, P99: 8.976, P999: 9.694 },
  '66.0': { L: -0.3833, M: 7.3076, S: 0.0911, P01: 5.593, P1: 5.96, P3: 6.19, P5: 6.317, P10: 6.519, P15: 6.66, P25: 6.877, P50: 7.308, P75: 7.776, P85: 8.045, P90: 8.235, P95: 8.527, P97: 8.725, P99: 9.115, P999: 9.844 },
  '66.5': { L: -0.3833, M: 7.4189, S: 0.09106, P01: 5.679, P1: 6.052, P3: 6.285, P5: 6.413, P10: 6.618, P15: 6.762, P25: 6.982, P50: 7.419, P75: 7.895, P85: 8.167, P90: 8.36, P95: 8.656, P97: 8.857, P99: 9.253, P999: 9.992 },
  '67.0': { L: -0.3833, M: 7.5288, S: 0.09101, P01: 5.764, P1: 6.142, P3: 6.379, P5: 6.509, P10: 6.717, P15: 6.863, P25: 7.086, P50: 7.529, P75: 8.011, P85: 8.288, P90: 8.483, P95: 8.784, P97: 8.987, P99: 9.389, P999: 10.138 },
  '67.5': { L: -0.3833, M: 7.6375, S: 0.09096, P01: 5.848, P1: 6.231, P3: 6.471, P5: 6.603, P10: 6.814, P15: 6.962, P25: 7.188, P50: 7.638, P75: 8.127, P85: 8.407, P90: 8.605, P95: 8.91, P97: 9.116, P99: 9.523, P999: 10.283 },
  '68.0': { L: -0.3833, M: 7.7448, S: 0.0909, P01: 5.931, P1: 6.32, P3: 6.563, P5: 6.697, P10: 6.911, P15: 7.06, P25: 7.289, P50: 7.745, P75: 8.241, P85: 8.525, P90: 8.725, P95: 9.034, P97: 9.243, P99: 9.656, P999: 10.425 },
  '68.5': { L: -0.3833, M: 7.8509, S: 0.09085, P01: 6.013, P1: 6.407, P3: 6.653, P5: 6.789, P10: 7.006, P15: 7.157, P25: 7.389, P50: 7.851, P75: 8.353, P85: 8.641, P90: 8.844, P95: 9.157, P97: 9.368, P99: 9.787, P999: 10.566 },
  '69.0': { L: -0.3833, M: 7.9559, S: 0.09079, P01: 6.095, P1: 6.494, P3: 6.743, P5: 6.881, P10: 7.1, P15: 7.253, P25: 7.489, P50: 7.956, P75: 8.464, P85: 8.756, P90: 8.962, P95: 9.278, P97: 9.493, P99: 9.916, P999: 10.705 },
  '69.5': { L: -0.3833, M: 8.0599, S: 0.09074, P01: 6.175, P1: 6.579, P3: 6.832, P5: 6.971, P10: 7.193, P15: 7.349, P25: 7.587, P50: 8.06, P75: 8.575, P85: 8.87, P90: 9.078, P95: 9.399, P97: 9.616, P99: 10.044, P999: 10.843 },
  '70.0': { L: -0.3833, M: 8.163, S: 0.09068, P01: 6.255, P1: 6.664, P3: 6.92, P5: 7.061, P10: 7.286, P15: 7.443, P25: 7.684, P50: 8.163, P75: 8.684, P85: 8.983, P90: 9.193, P95: 9.518, P97: 9.738, P99: 10.171, P999: 10.98 },
  '70.5': { L: -0.3833, M: 8.2651, S: 0.09062, P01: 6.335, P1: 6.748, P3: 7.007, P5: 7.15, P10: 7.377, P15: 7.537, P25: 7.781, P50: 8.265, P75: 8.792, P85: 9.095, P90: 9.308, P95: 9.636, P97: 9.858, P99: 10.297, P999: 11.115 },
  '71.0': { L: -0.3833, M: 8.3666, S: 0.09056, P01: 6.414, P1: 6.832, P3: 7.094, P5: 7.238, P10: 7.469, P15: 7.63, P25: 7.876, P50: 8.367, P75: 8.9, P85: 9.206, P90: 9.421, P95: 9.754, P97: 9.978, P99: 10.422, P999: 11.249 },
  '71.5': { L: -0.3833, M: 8.4676, S: 0.0905, P01: 6.492, P1: 6.916, P3: 7.18, P5: 7.326, P10: 7.559, P15: 7.722, P25: 7.972, P50: 8.468, P75: 9.007, P85: 9.316, P90: 9.534, P95: 9.87, P97: 10.097, P99: 10.546, P999: 11.382 },
  '72.0': { L: -0.3833, M: 8.5679, S: 0.09043, P01: 6.57, P1: 6.999, P3: 7.266, P5: 7.414, P10: 7.649, P15: 7.814, P25: 8.067, P50: 8.568, P75: 9.113, P85: 9.426, P90: 9.646, P95: 9.986, P97: 10.215, P99: 10.669, P999: 11.514 },
  '72.5': { L: -0.3833, M: 8.6674, S: 0.09037, P01: 6.648, P1: 7.081, P3: 7.352, P5: 7.501, P10: 7.739, P15: 7.905, P25: 8.161, P50: 8.667, P75: 9.219, P85: 9.535, P90: 9.757, P95: 10.101, P97: 10.333, P99: 10.791, P999: 11.646 },
  '73.0': { L: -0.3833, M: 8.7661, S: 0.09031, P01: 6.724, P1: 7.162, P3: 7.436, P5: 7.587, P10: 7.828, P15: 7.996, P25: 8.254, P50: 8.766, P75: 9.323, P85: 9.643, P90: 9.868, P95: 10.215, P97: 10.449, P99: 10.913, P999: 11.776 },
  '73.5': { L: -0.3833, M: 8.8638, S: 0.09025, P01: 6.801, P1: 7.243, P3: 7.52, P5: 7.672, P10: 7.915, P15: 8.086, P25: 8.346, P50: 8.864, P75: 9.427, P85: 9.75, P90: 9.977, P95: 10.328, P97: 10.564, P99: 11.033, P999: 11.905 },
  '74.0': { L: -0.3833, M: 8.9601, S: 0.09018, P01: 6.876, P1: 7.323, P3: 7.602, P5: 7.756, P10: 8.002, P15: 8.174, P25: 8.437, P50: 8.96, P75: 9.529, P85: 9.855, P90: 10.084, P95: 10.438, P97: 10.678, P99: 11.151, P999: 12.031 },
  '74.5': { L: -0.3833, M: 9.0552, S: 0.09012, P01: 6.95, P1: 7.402, P3: 7.684, P5: 7.839, P10: 8.088, P15: 8.261, P25: 8.527, P50: 9.055, P75: 9.63, P85: 9.959, P90: 10.191, P95: 10.548, P97: 10.79, P99: 11.267, P999: 12.156 },
  '75.0': { L: -0.3833, M: 9.149, S: 0.09005, P01: 7.023, P1: 7.479, P3: 7.764, P5: 7.921, P10: 8.172, P15: 8.347, P25: 8.616, P50: 9.149, P75: 9.729, P85: 10.061, P90: 10.295, P95: 10.656, P97: 10.9, P99: 11.382, P999: 12.279 },
  '75.5': { L: -0.3833, M: 9.2418, S: 0.08999, P01: 7.096, P1: 7.556, P3: 7.844, P5: 8.003, P10: 8.256, P15: 8.433, P25: 8.704, P50: 9.242, P75: 9.827, P85: 10.163, P90: 10.399, P95: 10.763, P97: 11.009, P99: 11.496, P999: 12.401 },
  '76.0': { L: -0.3833, M: 9.3337, S: 0.08992, P01: 7.168, P1: 7.632, P3: 7.923, P5: 8.083, P10: 8.338, P15: 8.517, P25: 8.791, P50: 9.334, P75: 9.924, P85: 10.263, P90: 10.501, P95: 10.869, P97: 11.117, P99: 11.608, P999: 12.521 },
  '76.5': { L: -0.3833, M: 9.4252, S: 0.08985, P01: 7.239, P1: 7.708, P3: 8.002, P5: 8.163, P10: 8.421, P15: 8.601, P25: 8.877, P50: 9.425, P75: 10.021, P85: 10.363, P90: 10.603, P95: 10.974, P97: 11.224, P99: 11.72, P999: 12.641 },
  '77.0': { L: -0.3833, M: 9.5166, S: 0.08979, P01: 7.311, P1: 7.784, P3: 8.08, P5: 8.243, P10: 8.503, P15: 8.685, P25: 8.964, P50: 9.517, P75: 10.118, P85: 10.463, P90: 10.705, P95: 11.079, P97: 11.332, P99: 11.831, P999: 12.761 },
  '77.5': { L: -0.3833, M: 9.6086, S: 0.08972, P01: 7.383, P1: 7.861, P3: 8.159, P5: 8.324, P10: 8.586, P15: 8.77, P25: 9.051, P50: 9.609, P75: 10.215, P85: 10.563, P90: 10.808, P95: 11.185, P97: 11.44, P99: 11.944, P999: 12.881 },
  '78.0': { L: -0.3833, M: 9.7015, S: 0.08965, P01: 7.456, P1: 7.938, P3: 8.239, P5: 8.405, P10: 8.67, P15: 8.855, P25: 9.139, P50: 9.702, P75: 10.314, P85: 10.664, P90: 10.911, P95: 11.292, P97: 11.549, P99: 12.057, P999: 13.003 },
  '78.5': { L: -0.3833, M: 9.7957, S: 0.08959, P01: 7.529, P1: 8.016, P3: 8.32, P5: 8.487, P10: 8.755, P15: 8.942, P25: 9.228, P50: 9.796, P75: 10.413, P85: 10.767, P90: 11.016, P95: 11.4, P97: 11.66, P99: 12.172, P999: 13.126 },
  '79.0': { L: -0.3833, M: 9.8915, S: 0.08952, P01: 7.605, P1: 8.096, P3: 8.402, P5: 8.571, P10: 8.841, P15: 9.03, P25: 9.318, P50: 9.892, P75: 10.515, P85: 10.872, P90: 11.123, P95: 11.51, P97: 11.772, P99: 12.289, P999: 13.251 },
  '79.5': { L: -0.3833, M: 9.9892, S: 0.08946, P01: 7.681, P1: 8.177, P3: 8.486, P5: 8.657, P10: 8.929, P15: 9.119, P25: 9.411, P50: 9.989, P75: 10.618, P85: 10.978, P90: 11.232, P95: 11.623, P97: 11.887, P99: 12.409, P999: 13.38 },
  '80.0': { L: -0.3833, M: 10.0891, S: 0.0894, P01: 7.759, P1: 8.259, P3: 8.572, P5: 8.744, P10: 9.019, P15: 9.211, P25: 9.505, P50: 10.089, P75: 10.724, P85: 11.087, P90: 11.343, P95: 11.738, P97: 12.004, P99: 12.531, P999: 13.511 },
  '80.5': { L: -0.3833, M: 10.1916, S: 0.08934, P01: 7.839, P1: 8.344, P3: 8.66, P5: 8.834, P10: 9.111, P15: 9.305, P25: 9.602, P50: 10.192, P75: 10.832, P85: 11.199, P90: 11.458, P95: 11.856, P97: 12.125, P99: 12.656, P999: 13.645 },
  '81.0': { L: -0.3833, M: 10.2965, S: 0.08928, P01: 7.921, P1: 8.431, P3: 8.75, P5: 8.926, P10: 9.206, P15: 9.402, P25: 9.701, P50: 10.297, P75: 10.943, P85: 11.314, P90: 11.575, P95: 11.977, P97: 12.248, P99: 12.785, P999: 13.783 },
  '81.5': { L: -0.3833, M: 10.4041, S: 0.08923, P01: 8.005, P1: 8.52, P3: 8.842, P5: 9.02, P10: 9.302, P15: 9.5, P25: 9.803, P50: 10.404, P75: 11.057, P85: 11.431, P90: 11.695, P95: 12.101, P97: 12.375, P99: 12.916, P999: 13.924 },
  '82.0': { L: -0.3833, M: 10.514, S: 0.08918, P01: 8.091, P1: 8.611, P3: 8.937, P5: 9.116, P10: 9.401, P15: 9.601, P25: 9.907, P50: 10.514, P75: 11.174, P85: 11.551, P90: 11.817, P95: 12.227, P97: 12.504, P99: 13.051, P999: 14.069 },
  '82.5': { L: -0.3833, M: 10.6263, S: 0.08914, P01: 8.178, P1: 8.704, P3: 9.033, P5: 9.214, P10: 9.502, P15: 9.704, P25: 10.013, P50: 10.626, P75: 11.293, P85: 11.674, P90: 11.943, P95: 12.357, P97: 12.637, P99: 13.189, P999: 14.217 },
  '83.0': { L: -0.3833, M: 10.741, S: 0.0891, P01: 8.267, P1: 8.799, P3: 9.131, P5: 9.314, P10: 9.605, P15: 9.809, P25: 10.121, P50: 10.741, P75: 11.414, P85: 11.8, P90: 12.071, P95: 12.49, P97: 12.772, P99: 13.33, P999: 14.369 },
  '83.5': { L: -0.3833, M: 10.8578, S: 0.08906, P01: 8.358, P1: 8.895, P3: 9.231, P5: 9.416, P10: 9.71, P15: 9.916, P25: 10.232, P50: 10.858, P75: 11.538, P85: 11.928, P90: 12.202, P95: 12.625, P97: 12.91, P99: 13.474, P999: 14.523 },
  '84.0': { L: -0.3833, M: 10.9767, S: 0.08903, P01: 8.45, P1: 8.993, P3: 9.332, P5: 9.519, P10: 9.817, P15: 10.025, P25: 10.344, P50: 10.977, P75: 11.664, P85: 12.058, P90: 12.335, P95: 12.762, P97: 13.051, P99: 13.62, P999: 14.68 },
  '84.5': { L: -0.3833, M: 11.0974, S: 0.089, P01: 8.544, P1: 9.093, P3: 9.435, P5: 9.624, P10: 9.925, P15: 10.136, P25: 10.458, P50: 11.097, P75: 11.792, P85: 12.19, P90: 12.47, P95: 12.902, P97: 13.193, P99: 13.769, P999: 14.84 },
  '85.0': { L: -0.3833, M: 11.2198, S: 0.08898, P01: 8.639, P1: 9.193, P3: 9.54, P5: 9.731, P10: 10.035, P15: 10.248, P25: 10.573, P50: 11.22, P75: 11.922, P85: 12.324, P90: 12.607, P95: 13.044, P97: 13.338, P99: 13.92, P999: 15.003 },
  '85.5': { L: -0.3833, M: 11.3435, S: 0.08897, P01: 8.734, P1: 9.295, P3: 9.645, P5: 9.838, P10: 10.146, P15: 10.361, P25: 10.69, P50: 11.344, P75: 12.054, P85: 12.46, P90: 12.746, P95: 13.187, P97: 13.485, P99: 14.073, P999: 15.168 },
  '86.0': { L: -0.3833, M: 11.4684, S: 0.08895, P01: 8.831, P1: 9.398, P3: 9.752, P5: 9.947, P10: 10.258, P15: 10.475, P25: 10.808, P50: 11.468, P75: 12.186, P85: 12.597, P90: 12.886, P95: 13.332, P97: 13.633, P99: 14.228, P999: 15.334 },
  '86.5': { L: -0.3833, M: 11.594, S: 0.08895, P01: 8.928, P1: 9.501, P3: 9.859, P5: 10.056, P10: 10.37, P15: 10.59, P25: 10.926, P50: 11.594, P75: 12.32, P85: 12.735, P90: 13.027, P95: 13.478, P97: 13.782, P99: 14.384, P999: 15.502 },
  '87.0': { L: -0.3833, M: 11.7201, S: 0.08895, P01: 9.025, P1: 9.604, P3: 9.966, P5: 10.165, P10: 10.483, P15: 10.705, P25: 11.045, P50: 11.72, P75: 12.454, P85: 12.873, P90: 13.169, P95: 13.625, P97: 13.932, P99: 14.54, P999: 15.67 },
  '87.5': { L: -0.3833, M: 11.8461, S: 0.08895, P01: 9.122, P1: 9.707, P3: 10.073, P5: 10.274, P10: 10.595, P15: 10.82, P25: 11.164, P50: 11.846, P75: 12.587, P85: 13.012, P90: 13.311, P95: 13.771, P97: 14.082, P99: 14.696, P999: 15.839 },
  '88.0': { L: -0.3833, M: 11.972, S: 0.08896, P01: 9.218, P1: 9.81, P3: 10.18, P5: 10.383, P10: 10.708, P15: 10.935, P25: 11.282, P50: 11.972, P75: 12.721, P85: 13.15, P90: 13.452, P95: 13.918, P97: 14.232, P99: 14.853, P999: 16.008 },
  '88.5': { L: -0.3833, M: 12.0976, S: 0.08898, P01: 9.315, P1: 9.913, P3: 10.286, P5: 10.492, P10: 10.82, P15: 11.049, P25: 11.401, P50: 12.098, P75: 12.855, P85: 13.288, P90: 13.594, P95: 14.064, P97: 14.382, P99: 15.009, P999: 16.177 },
  '89.0': { L: -0.3833, M: 12.2229, S: 0.089, P01: 9.411, P1: 10.015, P3: 10.392, P5: 10.6, P10: 10.932, P15: 11.164, P25: 11.519, P50: 12.223, P75: 12.988, P85: 13.426, P90: 13.735, P95: 14.21, P97: 14.531, P99: 15.166, P999: 16.345 },
  '89.5': { L: -0.3833, M: 12.3477, S: 0.08903, P01: 9.506, P1: 10.116, P3: 10.498, P5: 10.708, P10: 11.043, P15: 11.277, P25: 11.636, P50: 12.348, P75: 13.121, P85: 13.564, P90: 13.876, P95: 14.356, P97: 14.681, P99: 15.322, P999: 16.514 },
  '90.0': { L: -0.3833, M: 12.4723, S: 0.08906, P01: 9.601, P1: 10.218, P3: 10.603, P5: 10.816, P10: 11.154, P15: 11.391, P25: 11.753, P50: 12.472, P75: 13.254, P85: 13.701, P90: 14.016, P95: 14.502, P97: 14.83, P99: 15.477, P999: 16.682 },
  '90.5': { L: -0.3833, M: 12.5965, S: 0.08909, P01: 9.696, P1: 10.319, P3: 10.708, P5: 10.923, P10: 11.265, P15: 11.504, P25: 11.87, P50: 12.597, P75: 13.386, P85: 13.838, P90: 14.156, P95: 14.647, P97: 14.978, P99: 15.633, P999: 16.85 },
  '91.0': { L: -0.3833, M: 12.7205, S: 0.08913, P01: 9.79, P1: 10.42, P3: 10.813, P5: 11.03, P10: 11.375, P15: 11.617, P25: 11.986, P50: 12.721, P75: 13.518, P85: 13.975, P90: 14.297, P95: 14.792, P97: 15.127, P99: 15.788, P999: 17.018 },
  '91.5': { L: -0.3833, M: 12.8443, S: 0.08918, P01: 9.884, P1: 10.52, P3: 10.917, P5: 11.136, P10: 11.485, P15: 11.729, P25: 12.103, P50: 12.844, P75: 13.65, P85: 14.112, P90: 14.437, P95: 14.937, P97: 15.276, P99: 15.944, P999: 17.187 },
  '92.0': { L: -0.3833, M: 12.9681, S: 0.08923, P01: 9.978, P1: 10.62, P3: 11.021, P5: 11.243, P10: 11.595, P15: 11.842, P25: 12.219, P50: 12.968, P75: 13.782, P85: 14.249, P90: 14.577, P95: 15.083, P97: 15.424, P99: 16.1, P999: 17.356 },
  '92.5': { L: -0.3833, M: 13.092, S: 0.08928, P01: 10.072, P1: 10.721, P3: 11.126, P5: 11.349, P10: 11.705, P15: 11.954, P25: 12.335, P50: 13.092, P75: 13.914, P85: 14.385, P90: 14.717, P95: 15.228, P97: 15.573, P99: 16.256, P999: 17.525 },
  '93.0': { L: -0.3833, M: 13.2158, S: 0.08934, P01: 10.165, P1: 10.82, P3: 11.23, P5: 11.455, P10: 11.815, P15: 12.066, P25: 12.451, P50: 13.216, P75: 14.047, P85: 14.522, P90: 14.857, P95: 15.374, P97: 15.723, P99: 16.412, P999: 17.694 },
  '93.5': { L: -0.3833, M: 13.3399, S: 0.08941, P01: 10.259, P1: 10.92, P3: 11.334, P5: 11.562, P10: 11.925, P15: 12.179, P25: 12.568, P50: 13.34, P75: 14.179, P85: 14.66, P90: 14.998, P95: 15.52, P97: 15.872, P99: 16.569, P999: 17.864 },
  '94.0': { L: -0.3833, M: 13.4643, S: 0.08948, P01: 10.352, P1: 11.021, P3: 11.438, P5: 11.668, P10: 12.035, P15: 12.292, P25: 12.684, P50: 13.464, P75: 14.312, P85: 14.798, P90: 15.14, P95: 15.667, P97: 16.023, P99: 16.726, P999: 18.035 },
  '94.5': { L: -0.3833, M: 13.5892, S: 0.08955, P01: 10.446, P1: 11.121, P3: 11.543, P5: 11.775, P10: 12.146, P15: 12.405, P25: 12.802, P50: 13.589, P75: 14.446, P85: 14.936, P90: 15.281, P95: 15.814, P97: 16.174, P99: 16.884, P999: 18.207 },
  '95.0': { L: -0.3833, M: 13.7146, S: 0.08963, P01: 10.54, P1: 11.222, P3: 11.648, P5: 11.882, P10: 12.256, P15: 12.518, P25: 12.919, P50: 13.715, P75: 14.58, P85: 15.075, P90: 15.424, P95: 15.962, P97: 16.326, P99: 17.044, P999: 18.38 },
  '95.5': { L: -0.3833, M: 13.8408, S: 0.08972, P01: 10.635, P1: 11.323, P3: 11.753, P5: 11.99, P10: 12.368, P15: 12.632, P25: 13.037, P50: 13.841, P75: 14.715, P85: 15.215, P90: 15.568, P95: 16.112, P97: 16.479, P99: 17.204, P999: 18.555 },
  '96.0': { L: -0.3833, M: 13.9676, S: 0.08981, P01: 10.73, P1: 11.424, P3: 11.859, P5: 12.098, P10: 12.48, P15: 12.747, P25: 13.156, P50: 13.968, P75: 14.85, P85: 15.356, P90: 15.712, P95: 16.262, P97: 16.633, P99: 17.366, P999: 18.731 },
  '96.5': { L: -0.3833, M: 14.0953, S: 0.0899, P01: 10.825, P1: 11.527, P3: 11.965, P5: 12.207, P10: 12.592, P15: 12.862, P25: 13.275, P50: 14.095, P75: 14.987, P85: 15.498, P90: 15.858, P95: 16.413, P97: 16.788, P99: 17.529, P999: 18.908 },
  '97.0': { L: -0.3833, M: 14.2239, S: 0.09, P01: 10.921, P1: 11.629, P3: 12.072, P5: 12.316, P10: 12.706, P15: 12.978, P25: 13.395, P50: 14.224, P75: 15.125, P85: 15.641, P90: 16.005, P95: 16.566, P97: 16.944, P99: 17.693, P999: 19.087 },
  '97.5': { L: -0.3833, M: 14.3537, S: 0.0901, P01: 11.017, P1: 11.733, P3: 12.18, P5: 12.427, P10: 12.82, P15: 13.095, P25: 13.517, P50: 14.354, P75: 15.264, P85: 15.786, P90: 16.153, P95: 16.72, P97: 17.102, P99: 17.859, P999: 19.268 },
  '98.0': { L: -0.3833, M: 14.4848, S: 0.09021, P01: 11.114, P1: 11.837, P3: 12.289, P5: 12.538, P10: 12.936, P15: 13.214, P25: 13.639, P50: 14.485, P75: 15.405, P85: 15.932, P90: 16.303, P95: 16.876, P97: 17.262, P99: 18.027, P999: 19.451 },
  '98.5': { L: -0.3833, M: 14.6174, S: 0.09033, P01: 11.212, P1: 11.943, P3: 12.399, P5: 12.651, P10: 13.052, P15: 13.333, P25: 13.763, P50: 14.617, P75: 15.547, P85: 16.08, P90: 16.455, P95: 17.034, P97: 17.425, P99: 18.198, P999: 19.638 },
  '99.0': { L: -0.3833, M: 14.7519, S: 0.09044, P01: 11.312, P1: 12.05, P3: 12.511, P5: 12.765, P10: 13.17, P15: 13.454, P25: 13.889, P50: 14.752, P75: 15.691, P85: 16.23, P90: 16.609, P95: 17.194, P97: 17.589, P99: 18.37, P999: 19.826 },
  '99.5': { L: -0.3833, M: 14.8882, S: 0.09057, P01: 11.412, P1: 12.158, P3: 12.623, P5: 12.88, P10: 13.29, P15: 13.577, P25: 14.016, P50: 14.888, P75: 15.838, P85: 16.382, P90: 16.765, P95: 17.356, P97: 17.756, P99: 18.546, P999: 20.018 },
  '100.0': { L: -0.3833, M: 15.0267, S: 0.09069, P01: 11.515, P1: 12.267, P3: 12.738, P5: 12.998, P10: 13.412, P15: 13.701, P25: 14.145, P50: 15.027, P75: 15.986, P85: 16.536, P90: 16.924, P95: 17.522, P97: 17.926, P99: 18.724, P999: 20.213 },
  '100.5': { L: -0.3833, M: 15.1676, S: 0.09083, P01: 11.618, P1: 12.379, P3: 12.854, P5: 13.117, P10: 13.535, P15: 13.828, P25: 14.276, P50: 15.168, P75: 16.138, P85: 16.694, P90: 17.086, P95: 17.69, P97: 18.099, P99: 18.907, P999: 20.412 },
  '101.0': { L: -0.3833, M: 15.3108, S: 0.09096, P01: 11.724, P1: 12.492, P3: 12.973, P5: 13.238, P10: 13.661, P15: 13.957, P25: 14.41, P50: 15.311, P75: 16.291, P85: 16.854, P90: 17.25, P95: 17.861, P97: 18.274, P99: 19.091, P999: 20.614 },
  '101.5': { L: -0.3833, M: 15.4564, S: 0.0911, P01: 11.83, P1: 12.607, P3: 13.093, P5: 13.361, P10: 13.788, P15: 14.087, P25: 14.546, P50: 15.456, P75: 16.448, P85: 17.017, P90: 17.417, P95: 18.036, P97: 18.453, P99: 19.28, P999: 20.82 },
  '102.0': { L: -0.3833, M: 15.6046, S: 0.09125, P01: 11.939, P1: 12.724, P3: 13.215, P5: 13.486, P10: 13.918, P15: 14.22, P25: 14.684, P50: 15.605, P75: 16.607, P85: 17.183, P90: 17.588, P95: 18.213, P97: 18.636, P99: 19.472, P999: 21.031 },
  '102.5': { L: -0.3833, M: 15.7553, S: 0.09139, P01: 12.05, P1: 12.843, P3: 13.339, P5: 13.613, P10: 14.05, P15: 14.356, P25: 14.824, P50: 15.755, P75: 16.769, P85: 17.351, P90: 17.761, P95: 18.394, P97: 18.821, P99: 19.667, P999: 21.244 },
  '103.0': { L: -0.3833, M: 15.9087, S: 0.09155, P01: 12.161, P1: 12.963, P3: 13.465, P5: 13.742, P10: 14.184, P15: 14.493, P25: 14.967, P50: 15.909, P75: 16.935, P85: 17.523, P90: 17.938, P95: 18.578, P97: 19.011, P99: 19.867, P999: 21.463 },
  '103.5': { L: -0.3833, M: 16.0645, S: 0.0917, P01: 12.275, P1: 13.086, P3: 13.594, P5: 13.873, P10: 14.32, P15: 14.633, P25: 15.112, P50: 16.064, P75: 17.102, P85: 17.698, P90: 18.117, P95: 18.765, P97: 19.203, P99: 20.069, P999: 21.684 },
  '104.0': { L: -0.3833, M: 16.2229, S: 0.09186, P01: 12.391, P1: 13.211, P3: 13.724, P5: 14.007, P10: 14.458, P15: 14.775, P25: 15.259, P50: 16.223, P75: 17.273, P85: 17.875, P90: 18.3, P95: 18.955, P97: 19.398, P99: 20.275, P999: 21.91 },
  '104.5': { L: -0.3833, M: 16.3837, S: 0.09203, P01: 12.508, P1: 13.337, P3: 13.856, P5: 14.142, P10: 14.599, P15: 14.919, P25: 15.409, P50: 16.384, P75: 17.446, P85: 18.056, P90: 18.485, P95: 19.149, P97: 19.597, P99: 20.485, P999: 22.141 },
  '105.0': { L: -0.3833, M: 16.547, S: 0.09219, P01: 12.627, P1: 13.465, P3: 13.99, P5: 14.279, P10: 14.741, P15: 15.065, P25: 15.561, P50: 16.547, P75: 17.622, P85: 18.239, P90: 18.674, P95: 19.345, P97: 19.799, P99: 20.697, P999: 22.374 },
  '105.5': { L: -0.3833, M: 16.7129, S: 0.09236, P01: 12.747, P1: 13.595, P3: 14.126, P5: 14.419, P10: 14.886, P15: 15.213, P25: 15.715, P50: 16.713, P75: 17.801, P85: 18.425, P90: 18.865, P95: 19.545, P97: 20.004, P99: 20.914, P999: 22.611 },
  '106.0': { L: -0.3833, M: 16.8814, S: 0.09254, P01: 12.869, P1: 13.727, P3: 14.264, P5: 14.56, P10: 15.033, P15: 15.364, P25: 15.872, P50: 16.881, P75: 17.982, P85: 18.614, P90: 19.06, P95: 19.748, P97: 20.213, P99: 21.134, P999: 22.853 },
  '106.5': { L: -0.3833, M: 17.0527, S: 0.09271, P01: 12.994, P1: 13.861, P3: 14.404, P5: 14.704, P10: 15.182, P15: 15.517, P25: 16.031, P50: 17.053, P75: 18.167, P85: 18.807, P90: 19.258, P95: 19.954, P97: 20.425, P99: 21.358, P999: 23.099 },
  '107.0': { L: -0.3833, M: 17.2269, S: 0.09289, P01: 13.12, P1: 13.997, P3: 14.547, P5: 14.85, P10: 15.334, P15: 15.673, P25: 16.193, P50: 17.227, P75: 18.355, P85: 19.002, P90: 19.459, P95: 20.164, P97: 20.642, P99: 21.586, P999: 23.35 },
  '107.5': { L: -0.3833, M: 17.4039, S: 0.09307, P01: 13.248, P1: 14.136, P3: 14.692, P5: 14.998, P10: 15.488, P15: 15.831, P25: 16.357, P50: 17.404, P75: 18.546, P85: 19.201, P90: 19.664, P95: 20.378, P97: 20.861, P99: 21.818, P999: 23.604 },
  '108.0': { L: -0.3833, M: 17.5839, S: 0.09326, P01: 13.378, P1: 14.276, P3: 14.839, P5: 15.149, P10: 15.645, P15: 15.992, P25: 16.524, P50: 17.584, P75: 18.74, P85: 19.404, P90: 19.872, P95: 20.596, P97: 21.085, P99: 22.054, P999: 23.864 },
  '108.5': { L: -0.3833, M: 17.7668, S: 0.09344, P01: 13.511, P1: 14.419, P3: 14.988, P5: 15.302, P10: 15.804, P15: 16.155, P25: 16.694, P50: 17.767, P75: 18.937, P85: 19.61, P90: 20.084, P95: 20.816, P97: 21.312, P99: 22.294, P999: 24.127 },
  '109.0': { L: -0.3833, M: 17.9526, S: 0.09363, P01: 13.645, P1: 14.564, P3: 15.14, P5: 15.458, P10: 15.965, P15: 16.321, P25: 16.867, P50: 17.953, P75: 19.138, P85: 19.819, P90: 20.299, P95: 21.041, P97: 21.543, P99: 22.538, P999: 24.396 },
  '109.5': { L: -0.3833, M: 18.1412, S: 0.09382, P01: 13.781, P1: 14.711, P3: 15.294, P5: 15.615, P10: 16.129, P15: 16.489, P25: 17.042, P50: 18.141, P75: 19.341, P85: 20.031, P90: 20.518, P95: 21.269, P97: 21.778, P99: 22.785, P999: 24.668 },
  '110.0': { L: -0.3833, M: 18.3324, S: 0.09401, P01: 13.919, P1: 14.86, P3: 15.45, P5: 15.775, P10: 16.296, P15: 16.66, P25: 17.219, P50: 18.332, P75: 19.548, P85: 20.246, P90: 20.739, P95: 21.5, P97: 22.016, P99: 23.037, P999: 24.945 }
};

export default wflGirls;