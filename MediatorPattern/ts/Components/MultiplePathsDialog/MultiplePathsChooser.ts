namespace PathsCalculator {
    export class MultiplePathsChooser {
        private sources: PointChooser;
        private destinations: PointChooser;
        private pathsManager: PathsManager;
        private addToCalculationButton: JQuery;
        private clearPathsButton: JQuery;

        constructor(private mediator: IMediator) {
            this.sources = new PointChooser(this.mediator, this.find("#sources"), ".source-point", () => {this.addPathToSelected()});
            this.destinations = new PointChooser(this.mediator, this.find("#destinations"), ".destination-point", () => {this.addPathToSelected()});
            this.pathsManager = new PathsManager(this.find("#routes"));

            this.clearPathsButton = this.find(".js-clear-paths-button");
            this.addToCalculationButton = this.find(".js-add-to-calculation-button");

            this.init();
        }

        addPathToSelected() {
            let selectedSource = this.sources.getSelectedPoint;
            let selectedDestination = this.destinations.getSelectedPoint;

            if (this.pathsManager.canPathBeAdded(selectedSource, selectedDestination)) {
                this.pathsManager.addPath(selectedSource, selectedDestination);

                this.sources.clearSelectedPoint();
                this.destinations.clearSelectedPoint();
            }
        }

        private init() {
            this.clearPathsButton.click(() => {
                this.pathsManager.clear();
            });

            this.addToCalculationButton.click(() => {
                let paths = this.pathsManager.getPaths;
                this.mediator.request(MessageType.AddPathsToResults, paths);

                this.closeDialog();
            });
        }

        private closeDialog() {
            let d: any = this.dialog();
            d.modal("hide");
        }

        private find(elementName: string) {
            return this.dialog().find(elementName);
        }

        private dialog() {
            return $("#addMultiplePathsDialog");
        }
    }
}