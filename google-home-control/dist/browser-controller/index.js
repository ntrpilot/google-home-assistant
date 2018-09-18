"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_controller_service_1 = require("./selenium-controller.service");
exports.browserControllerService = selenium_controller_service_1.seleniumControllerService;
exports.browserControllerService.loadUrl("https://www.youtube.com/watch?v=4QZfNDkuYeA")
    .then(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            exports.browserControllerService.perform("youtube", "fullscreen")
                .then(resolve);
        }, 1000);
    });
})
    .then(res => console.log(res.response));
