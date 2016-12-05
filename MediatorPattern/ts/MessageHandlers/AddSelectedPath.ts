namespace PathsCalculator {
    export class AddSelectedPath implements IMessageHandler {
        constructor(private multiplePathsChooser: MultiplePathsChooser) { }

        canHandle(message: MessageType): boolean {
            return message === MessageType.SelectPath;
        }

        handle(message: MessageType) {
            this.multiplePathsChooser.addPathToSelected();
        }
    }
}