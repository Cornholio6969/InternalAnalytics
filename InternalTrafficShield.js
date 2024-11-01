// ==UserScript==
// @name         GA4 Internal Traffic Tag via dataLayer
// @namespace    http://tampermonkey.net/
// @version      1.5
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
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
            setInternalTrafficTag();
        } else {
            const observer = new MutationObserver(() => {
                if (window.dataLayer && Array.isArray(window.dataLayer)) {
                    setInternalTrafficTag();
                    observer.disconnect();
                }
            });
            observer.observe(document, { childList: true, subtree: true });
        }
    }

    waitForDataLayer();
})();
