var PathsCalculator;
(function (PathsCalculator) {
    var PointChooser = (function () {
        function PointChooser(mediator, pointsContainer, pointSelector, cb) {
            this.mediator = mediator;
            this.pointsContainer = pointsContainer;
            this.pointSelector = pointSelector;
            this.cb = cb;
            this.init();
        }
        PointChooser.prototype.clearSelectedPoint = function () {
            this.selectedPoint = null;
        };
        PointChooser.prototype.init = function () {
            var _this = this;
            this.pointsContainer.find(this.pointSelector)
                .click(function (event) {
                var pointDiv = $(event.target);
                _this.selectedPoint = pointDiv.text();
                //this.mediator.request(MessageType.SelectPath);
                _this.cb();
            });
            this.clearSelectedPoint();
        };
        Object.defineProperty(PointChooser.prototype, "getSelectedPoint", {
            get: function () {
                return this.selectedPoint;
            },
            enumerable: true,
            configurable: true
        });
        return PointChooser;
    }());
    PathsCalculator.PointChooser = PointChooser;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=PointChooser.js.map