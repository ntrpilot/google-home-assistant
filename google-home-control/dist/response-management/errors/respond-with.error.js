"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RespondWithError {
    constructor(error) {
        if (error.response != null) {
            this.response = error.message;
        }
        else {
            this.response = "Something has gone very wrong";
        }
    }
}
exports.RespondWithError = RespondWithError;
