namespace PathsCalculator {
    export class AddPathsToResults implements IMessageHandler {
        constructor(private calculationsTable: CalculationsTable) { }

        canHandle(message: MessageType): boolean {
            return message === MessageType.AddPathsToResults;
        }

        handle(message: MessageType, paths: Path[]) {
            this.calculationsTable.addToCalculation(paths);
        }
    }
}