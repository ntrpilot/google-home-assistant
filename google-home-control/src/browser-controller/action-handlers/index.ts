import { ThenableWebDriver } from "selenium-webdriver";
import { ResponseMessage } from "../../response-management/responses/response";

import { youtubeActionHandlers } from "./youtube-action-handler.service";
import { TActionMap } from "./action-handler.models";

export type TVideoActions = "play" | "pause" | "fullscreen";
export type TAnyActions = TVideoActions;

export type TTarget = "youtube" | "netflix" | "native";

const targetMap: Map<TTarget, TActionMap<TAnyActions>> = new Map();

targetMap.set("youtube", youtubeActionHandlers);

export const actionHandlers = targetMap;