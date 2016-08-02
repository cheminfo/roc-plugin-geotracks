'use strict';
var Route = require('route-stat');

module.exports = {
    jpath: ['tracks'],
    process: function (filename, content) {
        return Route.fromGpx(content).then(function (route) {
            return {
                speed: route.meanSpeed,
                pace: route.meanPace,
                distance: route.totalDistance,
                duration: route.totalDuration,
                up: route.totalUp,
                down: route.totalDown,
                elevation: route.totalElevation
            };
        });

    },

    find: function (arr, filename) {
        return arr.find(el => {
            if(el.file && el.file.filename) {
                return el.file.filename.includes(filename);
            }
        });
    },

    getProperty: function() {
        return 'file';
    },

    getFilename: function (filename) {
        return filename;
    }
};