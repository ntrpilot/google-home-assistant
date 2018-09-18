import { ThenableWebDriver, By } from "selenium-webdriver";
import { ResponseMessage } from "../../response-management/responses/response";
import { SuccessResponse } from "../../response-management/responses/success-response";
import { RespondWithError } from "../../response-management/errors/respond-with.error";

export function clickButton(browser: ThenableWebDriver, selector: By): Promise<ResponseMessage> {
    return new Promise<ResponseMessage>((resolve, reject) => {
        const findElement = browser.findElement(selector)

        findElement.then(element => element.click())
            .then(() => resolve(new SuccessResponse()));

        findElement.catch(err => reject(err));

    }).catch(err => new RespondWithError(err));
}