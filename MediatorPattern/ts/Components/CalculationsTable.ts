namespace PathsCalculator {
    export class CalculationsTable {

        private tableContainer: JQuery;

        constructor() {
            this.tableContainer = $("#calculationsTable");
        }

        addToCalculation(paths: Path[]) {
            let calculations = paths.map(path => {
                return {
                    source: path.source,
                    destination: path.destination,
                    price: "$" + this.getRandom() + " 000",
                    duration: this.getRandom() + " day"
                }
            });

            HtmlTemplate.appendTemplate(this.tableContainer, HtmlTemplate.calculationRowTemplate, calculations);
        }

        private getRandom(): number {
            return Math.floor((Math.random() * 10) + 1);
        }
    }
}