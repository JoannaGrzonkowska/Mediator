var PathsCalculator;
(function (PathsCalculator) {
    var Mediator = (function () {
        function Mediator() {
            this.handlers = [];
            if (Mediator.instance) {
                throw new Error("Use Mediator.getInstance() to get Mediator instance instead of creating new object.");
            }
        }
        Mediator.getInstance = function () {
            return Mediator.instance;
        };
        Mediator.prototype.registerHandler = function (handler) {
            this.handlers.push(handler);
        };
        Mediator.prototype.request = function (message, params) {
            for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                if (handler.canHandle(message)) {
                    handler.handle(message, params);
                }
            }
        };
        Mediator.instance = new Mediator();
        return Mediator;
    }());
    PathsCalculator.Mediator = Mediator;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=Mediator.js.map