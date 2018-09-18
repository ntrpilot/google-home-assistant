"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const youtube_action_handler_service_1 = require("./youtube-action-handler.service");
const targetMap = new Map();
targetMap.set("youtube", youtube_action_handler_service_1.youtubeActionHandlers);
exports.actionHandlers = targetMap;
