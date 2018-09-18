import { ThenableWebDriver } from "selenium-webdriver";
import { ResponseMessage } from "../../response-management/responses/response";

export type TActionFn = (browser: ThenableWebDriver) => Promise<ResponseMessage>;
export type TActionMap<TAction> = Map<TAction, TActionFn>;