namespace PathsCalculator {
    export class PointChooser {
        private selectedPoint:string;

        constructor(private mediator: IMediator, private pointsContainer:JQuery, private pointSelector:string, private cb:()=>void) {
            this.init();
        }

        clearSelectedPoint() {
            this.selectedPoint = null;
        }

        private init() {
            this.pointsContainer.find(this.pointSelector)
                .click((event) => {
                    let pointDiv = $(event.target);
                    this.selectedPoint = pointDiv.text();
                    //this.mediator.request(MessageType.SelectPath);
                    this.cb();
                });

            this.clearSelectedPoint();
        }

        get getSelectedPoint(): string {
            return this.selectedPoint;
        }
    }
}