import { ResponseMessage } from "../responses/response";

export class RespondWithError implements ResponseMessage {

    public readonly response: string;

    constructor(error: any) {
        if ((error as ResponseMessage).response != null) {
            this.response = error.message;
        } else {
            this.response = "Something has gone very wrong";
        }
    }

}