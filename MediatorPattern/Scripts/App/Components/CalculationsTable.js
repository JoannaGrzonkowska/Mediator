var PathsCalculator;
(function (PathsCalculator) {
    var CalculationsTable = (function () {
        function CalculationsTable() {
            this.tableContainer = $("#calculationsTable");
        }
        CalculationsTable.prototype.addToCalculation = function (paths) {
            var _this = this;
            var calculations = paths.map(function (path) {
                return {
                    source: path.source,
                    destination: path.destination,
                    price: "$" + _this.getRandom() + " 000",
                    duration: _this.getRandom() + " day"
                };
            });
            PathsCalculator.HtmlTemplate.appendTemplate(this.tableContainer, PathsCalculator.HtmlTemplate.calculationRowTemplate, calculations);
        };
        CalculationsTable.prototype.getRandom = function () {
            return Math.floor((Math.random() * 10) + 1);
        };
        return CalculationsTable;
    }());
    PathsCalculator.CalculationsTable = CalculationsTable;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=CalculationsTable.js.map