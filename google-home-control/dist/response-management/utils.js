"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const respond_with_error_1 = require("./errors/respond-with.error");
function responseIfNoValue(possibleValue, error) {
    return Promise.resolve(possibleValue)
        .then(value => value != null ? value : Promise.reject(error()));
}
exports.responseIfNoValue = responseIfNoValue;
function resolveResponse(value, response) {
    return Promise.resolve(value)
        .then(() => response())
        .catch(err => new respond_with_error_1.RespondWithError(err));
}
exports.resolveResponse = resolveResponse;
