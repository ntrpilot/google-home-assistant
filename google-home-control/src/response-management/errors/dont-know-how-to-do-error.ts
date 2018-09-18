import { ResponseMessage } from "../responses/response";

export class DontKnowHowToDoError extends ResponseMessage {
    constructor(action: string, subject: string) { 
        super(`I don't know how to ${action} ${subject}`) 
    }
}