"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../responses/response");
class NoActionTargetError extends response_1.ResponseMessage {
    constructor(target) {
        super("I can't find a controller for " + target);
    }
}
exports.NoActionTargetError = NoActionTargetError;
