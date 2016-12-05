var PathsCalculator;
(function (PathsCalculator) {
    var PathsManager = (function () {
        function PathsManager(pathsContainer) {
            this.pathsContainer = pathsContainer;
            this.paths = [];
        }
        Object.defineProperty(PathsManager.prototype, "getPaths", {
            get: function () {
                return this.paths;
            },
            enumerable: true,
            configurable: true
        });
        PathsManager.prototype.canPathBeAdded = function (source, destination) {
            return source !== null && destination !== null;
        };
        PathsManager.prototype.addPath = function (source, destination) {
            var path = new PathsCalculator.Path(source, destination);
            this.paths.push(path);
            PathsCalculator.HtmlTemplate.appendTemplate(this.pathsContainer, PathsCalculator.HtmlTemplate.pathTemplate, path);
        };
        PathsManager.prototype.clear = function () {
            this.paths = [];
            this.pathsContainer.empty();
        };
        return PathsManager;
    }());
    PathsCalculator.PathsManager = PathsManager;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=PathsManager.js.map