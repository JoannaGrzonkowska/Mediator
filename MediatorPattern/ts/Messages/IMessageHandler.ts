namespace PathsCalculator {
    export interface IMessageHandler {
        canHandle(message: MessageType): boolean;
        handle(message: MessageType, params: any);
    }
}