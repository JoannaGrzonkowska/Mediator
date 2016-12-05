namespace PathsCalculator {
    export interface IMediator {
        request(message: MessageType, params?: any);
    }

    export class Mediator implements IMediator {

        private static instance = new Mediator();

        private handlers: IMessageHandler[] = [];

        constructor() {
            if (Mediator.instance) {
                throw new Error("Use Mediator.getInstance() to get Mediator instance instead of creating new object.");
            }
        }

        static getInstance() {
            return Mediator.instance;
        }

        registerHandler(handler: IMessageHandler) {
            this.handlers.push(handler);
        }

        request(message: MessageType, params?: any) {
            for (let handler of this.handlers) {
                if (handler.canHandle(message)) {
                    handler.handle(message, params);
                }
            }
        }
    }
}