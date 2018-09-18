"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_browser_provider_service_1 = require("./selenium-browser-provider.service");
const success_response_1 = require("../response-management/responses/success-response");
const action_handlers_1 = require("./action-handlers");
const no_action_target_error_1 = require("../response-management/errors/no-action-target-error");
const dont_know_how_to_do_error_1 = require("../response-management/errors/dont-know-how-to-do-error");
class SeleniumControllerService {
    loadUrl(url) {
        return new Promise(resolve => {
            selenium_browser_provider_service_1.seleniumBrowserProviderService.getBrowser()
                .then(browser => browser.get(url))
                .then(() => resolve(new success_response_1.SuccessResponse()));
        });
    }
    perform(target, action, args) {
        const handlers = action_handlers_1.actionHandlers.get(target);
        if (handlers == null) {
            return Promise.resolve(new no_action_target_error_1.NoActionTargetError(target));
        }
        const handlerFn = handlers.get(action);
        if (handlerFn == null) {
            return Promise.reject(new dont_know_how_to_do_error_1.DontKnowHowToDoError(action, target));
        }
        const browser = selenium_browser_provider_service_1.seleniumBrowserProviderService.getBrowser();
        return handlerFn(browser);
    }
}
exports.seleniumControllerService = new SeleniumControllerService();
