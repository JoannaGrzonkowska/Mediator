namespace PathsCalculator {
    export class Dashboard {
        constructor() {
            $(document)
                .ready(this.init);
        }

        init() {
            let mediator = Mediator.getInstance();
      
            HtmlTemplate.createTemplates();

            let topPanel = new TopPanel(mediator);
            let multiplePathsChooser = new MultiplePathsChooser(mediator);
            let calculationsTable = new CalculationsTable();

            mediator.registerHandler(new AddPathsToResults(calculationsTable));
            mediator.registerHandler(new AddSelectedPath(multiplePathsChooser));
        }
    }
}