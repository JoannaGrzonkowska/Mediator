var PathsCalculator;
(function (PathsCalculator) {
    var HtmlTemplate = (function () {
        function HtmlTemplate() {
        }
        HtmlTemplate.createTemplates = function () {
            this.createTemplate(this.pathTemplate);
            this.createTemplate(this.calculationRowTemplate);
        };
        HtmlTemplate.insertTemplate = function (container, templateName, object) {
            container.empty();
            return HtmlTemplate.appendTemplate(container, templateName, object);
        };
        HtmlTemplate.appendTemplate = function (container, templateName, object) {
            var filledTemplate = this.jquery.tmpl(templateName, object);
            filledTemplate.appendTo(container);
        };
        HtmlTemplate.createTemplate = function (name) {
            this.jquery.template(name, $("#" + name));
        };
        HtmlTemplate.jquery = $;
        HtmlTemplate.pathTemplate = "path-template";
        HtmlTemplate.calculationRowTemplate = "calculation-row-template";
        return HtmlTemplate;
    }());
    PathsCalculator.HtmlTemplate = HtmlTemplate;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=HtmlTemplate.js.map