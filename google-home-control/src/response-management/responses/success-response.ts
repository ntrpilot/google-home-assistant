import { ResponseMessage } from "./response";

export class SuccessResponse extends ResponseMessage {

    constructor() { 
        super(SuccessResponse.randomResponse());
    }

    private static readonly responses = [
        "Ok", "Done", "Sure"
    ];

    private static randomResponse(): string {
        const responses = SuccessResponse.responses;
        const i = Math.floor(Math.random() * responses.length);

        return responses[i];
    }
}