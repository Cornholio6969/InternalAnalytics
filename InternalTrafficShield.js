// ==UserScript==
// @name         GA4 Internal Traffic Tag via dataLayer
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Set traffic_type to internal for Google Analytics 4 via dataLayer on all sites
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Cornholio6969/InternalAnalytics/main/InternalTrafficShield.js
// @downloadURL  https://raw.githubusercontent.com/Cornholio6969/InternalAnalytics/main/InternalTrafficShield.js
// ==/UserScript==

(function() {
    'use strict';

    function setInternalTrafficTag() {
        window.dataLayer.push({
            'traffic_type': 'internal'
        });
    }

    function waitForDataLayer() {
        const maxAttempts = 100; // ~10 seconds with 100ms interval
        let attempts = 0;

        const interval = setInterval(() => {
            if (window.dataLayer && Array.isArray(window.dataLayer)) {
                setInternalTrafficTag();
                clearInterval(interval);
            } else if (attempts++ >= maxAttempts) {
                clearInterval(interval);
            }
        }, 100);
    }

    waitForDataLayer();
})();
