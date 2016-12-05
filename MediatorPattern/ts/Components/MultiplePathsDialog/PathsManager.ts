namespace PathsCalculator {
    export class PathsManager {

        private paths: Array<Path> = [];
       
        constructor(private pathsContainer: JQuery) { }

        get getPaths(): Array<Path> {
            return this.paths;
        }

        canPathBeAdded(source: string, destination: string) {
            return source !== null && destination !== null;
        }

        addPath(source: string, destination: string) {
            let path = new Path(source, destination);
            this.paths.push(path);

            HtmlTemplate.appendTemplate(this.pathsContainer, HtmlTemplate.pathTemplate, path);
        }

        clear() {
            this.paths = [];
            this.pathsContainer.empty();
        }
    }
}