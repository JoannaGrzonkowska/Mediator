var PathsCalculator;
(function (PathsCalculator) {
    var MultiplePathsChooser = (function () {
        function MultiplePathsChooser(mediator) {
            var _this = this;
            this.mediator = mediator;
            this.sources = new PathsCalculator.PointChooser(this.mediator, this.find("#sources"), ".source-point", function () { _this.addPathToSelected(); });
            this.destinations = new PathsCalculator.PointChooser(this.mediator, this.find("#destinations"), ".destination-point", function () { _this.addPathToSelected(); });
            this.pathsManager = new PathsCalculator.PathsManager(this.find("#routes"));
            this.clearPathsButton = this.find(".js-clear-paths-button");
            this.addToCalculationButton = this.find(".js-add-to-calculation-button");
            this.init();
        }
        MultiplePathsChooser.prototype.addPathToSelected = function () {
            var selectedSource = this.sources.getSelectedPoint;
            var selectedDestination = this.destinations.getSelectedPoint;
            if (this.pathsManager.canPathBeAdded(selectedSource, selectedDestination)) {
                this.pathsManager.addPath(selectedSource, selectedDestination);
                this.sources.clearSelectedPoint();
                this.destinations.clearSelectedPoint();
            }
        };
        MultiplePathsChooser.prototype.init = function () {
            var _this = this;
            this.clearPathsButton.click(function () {
                _this.pathsManager.clear();
            });
            this.addToCalculationButton.click(function () {
                var paths = _this.pathsManager.getPaths;
                _this.mediator.request(PathsCalculator.MessageType.AddPathsToResults, paths);
                _this.closeDialog();
            });
        };
        MultiplePathsChooser.prototype.closeDialog = function () {
            var d = this.dialog();
            d.modal("hide");
        };
        MultiplePathsChooser.prototype.find = function (elementName) {
            return this.dialog().find(elementName);
        };
        MultiplePathsChooser.prototype.dialog = function () {
            return $("#addMultiplePathsDialog");
        };
        return MultiplePathsChooser;
    }());
    PathsCalculator.MultiplePathsChooser = MultiplePathsChooser;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=MultiplePathsChooser.js.map