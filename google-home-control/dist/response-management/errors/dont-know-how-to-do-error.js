"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../responses/response");
class DontKnowHowToDoError extends response_1.ResponseMessage {
    constructor(action, subject) {
        super(`I don't know how to ${action} ${subject}`);
    }
}
exports.DontKnowHowToDoError = DontKnowHowToDoError;
