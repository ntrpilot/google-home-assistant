"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("./response");
class SuccessResponse extends response_1.ResponseMessage {
    constructor() {
        super(SuccessResponse.randomResponse());
    }
    static randomResponse() {
        const responses = SuccessResponse.responses;
        const i = Math.floor(Math.random() * responses.length);
        return responses[i];
    }
}
SuccessResponse.responses = [
    "Ok", "Done", "Sure"
];
exports.SuccessResponse = SuccessResponse;
