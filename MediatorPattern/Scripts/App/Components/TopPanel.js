var PathsCalculator;
(function (PathsCalculator) {
    var TopPanel = (function () {
        function TopPanel(mediator) {
            this.mediator = mediator;
            this.sourceInput = this.find(".js-source-input");
            this.destinationInput = this.find(".js-destination-input");
            this.addToResultsButton = this.find(".js-add-to-results-button");
            this.init();
        }
        TopPanel.prototype.init = function () {
            var _this = this;
            this.addToResultsButton.click(function () {
                _this.mediator.request(PathsCalculator.MessageType.AddPathsToResults, [new PathsCalculator.Path(_this.sourceInput.val(), _this.destinationInput.val())]);
            });
        };
        TopPanel.prototype.find = function (elementName) {
            return $(".js-top-panel").find(elementName);
        };
        return TopPanel;
    }());
    PathsCalculator.TopPanel = TopPanel;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=TopPanel.js.map