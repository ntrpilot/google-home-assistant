import { ThenableWebDriver, Builder, Browser } from "selenium-webdriver";
import { ResponseMessage } from "../response-management/responses/response";
import { SuccessResponse } from "../response-management/responses/success-response";
import { RespondWithError } from "../response-management/errors/respond-with.error";

class SeleniumBrowserProviderService {

    private static readonly BUILDER = new Builder();
    private static readonly BROWSER = Browser.CHROME;

    private browserCache: ThenableWebDriver | null = null;

    getBrowser(): ThenableWebDriver {
        if (this.browserCache != null) {
            return this.browserCache;
        }

        return this.browserCache = SeleniumBrowserProviderService.BUILDER
            .forBrowser(SeleniumBrowserProviderService.BROWSER)
            .build();
    }

    closeBrowser(): Promise<ResponseMessage> {
        if (this.browserCache == null) {
            return Promise.resolve(new SuccessResponse());
        }

        const cache = this.browserCache;
        this.browserCache = null;

        return new Promise(resolve => {
            cache.quit()
                .then(() => resolve(new SuccessResponse()))
                .catch(err => resolve(new RespondWithError(err)));
        });
    }

}

export const seleniumBrowserProviderService = new SeleniumBrowserProviderService();