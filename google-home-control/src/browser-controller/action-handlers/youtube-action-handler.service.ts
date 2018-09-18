import { TVideoActions } from ".";
import { By } from "selenium-webdriver";
import { clickButton } from "./utilities";
import { TActionMap, TActionFn } from "./action-handler.models";

export type TYoutubeAction = TVideoActions;
const youtubeActionMap: TActionMap<TYoutubeAction> = new Map();

const selectors = {
    playPause: By.css(".ytp-play-button.ytp-button"),
    fullscreen: By.css(".ytp-fullscreen-button.ytp-button"),
}

const playPause: TActionFn = (browser) => clickButton(browser, selectors.playPause);
youtubeActionMap.set("play", playPause);
youtubeActionMap.set("pause", playPause);

youtubeActionMap.set("fullscreen", (browser) => clickButton(browser, selectors.fullscreen));

export const youtubeActionHandlers = youtubeActionMap;