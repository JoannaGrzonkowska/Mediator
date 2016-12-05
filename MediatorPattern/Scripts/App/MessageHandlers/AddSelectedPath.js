var PathsCalculator;
(function (PathsCalculator) {
    var AddSelectedPath = (function () {
        function AddSelectedPath(multiplePathsChooser) {
            this.multiplePathsChooser = multiplePathsChooser;
        }
        AddSelectedPath.prototype.canHandle = function (message) {
            return message === PathsCalculator.MessageType.SelectPath;
        };
        AddSelectedPath.prototype.handle = function (message) {
            this.multiplePathsChooser.addPathToSelected();
        };
        return AddSelectedPath;
    }());
    PathsCalculator.AddSelectedPath = AddSelectedPath;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=AddSelectedPath.js.map