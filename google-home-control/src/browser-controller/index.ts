import { seleniumControllerService } from "./selenium-controller.service";
import { ResponseMessage } from "../response-management/responses/response";
import { TTarget, TAnyActions } from "./action-handlers";

export interface IBrowserControllerService {
    loadUrl(url: string): Promise<ResponseMessage>;
    perform(target: TTarget, action: TAnyActions, args?: any): Promise<ResponseMessage>;
}

export const browserControllerService: IBrowserControllerService = seleniumControllerService;

browserControllerService.loadUrl("https://www.youtube.com/watch?v=4QZfNDkuYeA")
    .then(() => {
        return new Promise<ResponseMessage>(resolve => {
            setTimeout(() => {
                browserControllerService.perform("youtube", "fullscreen")
                    .then(resolve);
            }, 1000)
        });
    })
    .then(res => console.log(res.response));