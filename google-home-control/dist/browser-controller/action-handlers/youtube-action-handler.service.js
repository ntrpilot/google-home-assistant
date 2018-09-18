"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const utilities_1 = require("./utilities");
const youtubeActionMap = new Map();
const selectors = {
    playPause: selenium_webdriver_1.By.css(".ytp-play-button.ytp-button"),
    fullscreen: selenium_webdriver_1.By.css(".ytp-fullscreen-button.ytp-button"),
};
const playPause = (browser) => utilities_1.clickButton(browser, selectors.playPause);
youtubeActionMap.set("play", playPause);
youtubeActionMap.set("pause", playPause);
youtubeActionMap.set("fullscreen", (browser) => utilities_1.clickButton(browser, selectors.fullscreen));
exports.youtubeActionHandlers = youtubeActionMap;
