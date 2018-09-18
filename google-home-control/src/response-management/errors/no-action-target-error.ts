import { ResponseMessage } from "../responses/response";

export class NoActionTargetError extends ResponseMessage {
    constructor(target: string) { 
        super("I can't find a controller for " + target); 
    }
}