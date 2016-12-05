namespace PathsCalculator {
    export class TopPanel {
        private sourceInput: JQuery;
        private destinationInput: JQuery;
        private addToResultsButton: JQuery;

        constructor(private mediator: IMediator) {
            this.sourceInput = this.find(".js-source-input");
            this.destinationInput = this.find(".js-destination-input");
            this.addToResultsButton = this.find(".js-add-to-results-button");

            this.init();
        }

        private init() {
            this.addToResultsButton.click(() => {
                this.mediator.request(MessageType.AddPathsToResults, [new Path(this.sourceInput.val(), this.destinationInput.val())]);
            });
        }

        private find(elementName: string) {
            return $(".js-top-panel").find(elementName);
        }
    }
}