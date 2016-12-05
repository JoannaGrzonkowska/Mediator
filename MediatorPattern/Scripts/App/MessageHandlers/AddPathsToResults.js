var PathsCalculator;
(function (PathsCalculator) {
    var AddPathsToResults = (function () {
        function AddPathsToResults(calculationsTable) {
            this.calculationsTable = calculationsTable;
        }
        AddPathsToResults.prototype.canHandle = function (message) {
            return message === PathsCalculator.MessageType.AddPathsToResults;
        };
        AddPathsToResults.prototype.handle = function (message, paths) {
            this.calculationsTable.addToCalculation(paths);
        };
        return AddPathsToResults;
    }());
    PathsCalculator.AddPathsToResults = AddPathsToResults;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=AddPathsToResults.js.map