var PathsCalculator;
(function (PathsCalculator) {
    var Dashboard = (function () {
        function Dashboard() {
            $(document)
                .ready(this.init);
        }
        Dashboard.prototype.init = function () {
            var mediator = PathsCalculator.Mediator.getInstance();
            PathsCalculator.HtmlTemplate.createTemplates();
            var topPanel = new PathsCalculator.TopPanel(mediator);
            var multiplePathsChooser = new PathsCalculator.MultiplePathsChooser(mediator);
            var calculationsTable = new PathsCalculator.CalculationsTable();
            mediator.registerHandler(new PathsCalculator.AddPathsToResults(calculationsTable));
            mediator.registerHandler(new PathsCalculator.AddSelectedPath(multiplePathsChooser));
        };
        return Dashboard;
    }());
    PathsCalculator.Dashboard = Dashboard;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=Dashboard.js.map