"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const success_response_1 = require("../../response-management/responses/success-response");
const respond_with_error_1 = require("../../response-management/errors/respond-with.error");
function clickButton(browser, selector) {
    return new Promise((resolve, reject) => {
        const findElement = browser.findElement(selector);
        findElement.then(element => element.click())
            .then(() => resolve(new success_response_1.SuccessResponse()));
        findElement.catch(err => reject(err));
    }).catch(err => new respond_with_error_1.RespondWithError(err));
}
exports.clickButton = clickButton;
