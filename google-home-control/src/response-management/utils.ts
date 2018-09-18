import { RespondWithError } from "./errors/respond-with.error";
import { ResponseMessage } from "./responses/response";

export type TPossibleValue<T> = T | null | undefined | Promise<T | null | undefined>;
export type TValue<T> = T | Promise<T>;

export function responseIfNoValue<T>(possibleValue: TPossibleValue<T>, error: () => RespondWithError): TValue<T> {
    return Promise.resolve(possibleValue)
        .then(value => value != null ? value : Promise.reject(error()) as Promise<any>);
}

export function resolveResponse<T>(value: TValue<T>, response: () => ResponseMessage): Promise<ResponseMessage> {
    return Promise.resolve(value)
        .then(() => response())
        .catch(err => new RespondWithError(err));
}