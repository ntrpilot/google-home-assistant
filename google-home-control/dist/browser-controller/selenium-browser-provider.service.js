"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const success_response_1 = require("../response-management/responses/success-response");
const respond_with_error_1 = require("../response-management/errors/respond-with.error");
class SeleniumBrowserProviderService {
    constructor() {
        this.browserCache = null;
    }
    getBrowser() {
        if (this.browserCache != null) {
            return this.browserCache;
        }
        return this.browserCache = SeleniumBrowserProviderService.BUILDER
            .forBrowser(SeleniumBrowserProviderService.BROWSER)
            .build();
    }
    closeBrowser() {
        if (this.browserCache == null) {
            return Promise.resolve(new success_response_1.SuccessResponse());
        }
        const cache = this.browserCache;
        this.browserCache = null;
        return new Promise(resolve => {
            cache.quit()
                .then(() => resolve(new success_response_1.SuccessResponse()))
                .catch(err => resolve(new respond_with_error_1.RespondWithError(err)));
        });
    }
}
SeleniumBrowserProviderService.BUILDER = new selenium_webdriver_1.Builder();
SeleniumBrowserProviderService.BROWSER = selenium_webdriver_1.Browser.CHROME;
exports.seleniumBrowserProviderService = new SeleniumBrowserProviderService();
