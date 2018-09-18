import { IBrowserControllerService } from ".";
import { seleniumBrowserProviderService } from "./selenium-browser-provider.service";
import { resolveResponse } from "../response-management/utils";
import { SuccessResponse } from "../response-management/responses/success-response";
import { ResponseMessage } from "../response-management/responses/response";
import { RespondWithError } from "../response-management/errors/respond-with.error";
import { actionHandlers, TTarget, TAnyActions } from "./action-handlers";
import { NoActionTargetError } from "../response-management/errors/no-action-target-error";
import { DontKnowHowToDoError } from "../response-management/errors/dont-know-how-to-do-error";

class SeleniumControllerService implements IBrowserControllerService {

    loadUrl(url: string): Promise<ResponseMessage> {
        return new Promise(resolve => {
            seleniumBrowserProviderService.getBrowser()
                .then(browser => browser.get(url))
                .then(() => resolve(new SuccessResponse()));
        });
    }

    perform(target: TTarget, action: TAnyActions, args?: any): Promise<ResponseMessage> {
        const handlers = actionHandlers.get(target);

        if (handlers == null) {
            return Promise.resolve(new NoActionTargetError(target));
        }

        const handlerFn = handlers.get(action);

        if (handlerFn == null) {
            return Promise.reject(new DontKnowHowToDoError(action, target));
        }

        const browser = seleniumBrowserProviderService.getBrowser();
        return handlerFn(browser);
    }

}

export const seleniumControllerService = new SeleniumControllerService();