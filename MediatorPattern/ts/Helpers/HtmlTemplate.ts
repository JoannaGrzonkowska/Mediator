namespace PathsCalculator {

    export class HtmlTemplate {

        private static jquery: any = $;

        static pathTemplate = "path-template";
        static calculationRowTemplate = "calculation-row-template";

        static createTemplates() {
            this.createTemplate(this.pathTemplate);
            this.createTemplate(this.calculationRowTemplate);
        }

        static insertTemplate(container: JQuery, templateName: string, object: any) {
            container.empty();
            return HtmlTemplate.appendTemplate(container, templateName, object);
        }

        static appendTemplate(container: JQuery, templateName: string, object: any) {
            let filledTemplate = this.jquery.tmpl(templateName, object);
            filledTemplate.appendTo(container);
        }

        private static createTemplate(name: string) {
            this.jquery.template(name, $("#" + name));
        }
    }
}