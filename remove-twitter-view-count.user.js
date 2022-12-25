// ==UserScript==
// @name         Remove Twitter View Count
// @version      1.0.1
// @description  Browser extension to remove the view count from tweets
// @author       Luca Voges
// @match        *://*.twitter.com/*
// @icon         https://hub.sociant.de/twitter_views_icon128.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function () {
        const root = document.getElementById("react-root");
        const regex = /([^\/]+)\/status\/(\d+)\/analytics/;

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === "childList") {
                    const links = document.querySelectorAll('a[href*="/analytics"]');
                    links
                        .forEach((link) => {
                        const href = link.getAttribute("href");

                        if (!regex.test(href)) {
                            return;
                        }

                        let parent = link.parentNode;

                        while (parent.parentNode.children.length === 1) {
                            parent = parent.parentNode;
                        }

                        parent.remove();
                    });
                }
            });
        });

        observer.observe(root, {
            childList: true,
            subtree: true,
        });
    };
})();