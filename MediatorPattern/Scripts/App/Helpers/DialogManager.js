var PathsCalculator;
(function (PathsCalculator) {
    var DialogManager = (function () {
        function DialogManager(dialogSelector, actionBeforeOpen) {
            this.dialogSelector = dialogSelector;
            this.actionBeforeOpen = actionBeforeOpen;
            this.init();
        }
        DialogManager.prototype.open = function () {
            this.actionBeforeOpen();
            this.dialogDiv.dialog("open");
        };
        DialogManager.prototype.close = function () {
            this.dialogDiv.dialog("close");
        };
        DialogManager.prototype.init = function () {
            this.initDialog();
            this.initCloseButton();
        };
        DialogManager.prototype.initDialog = function () {
            this.dialogDiv = $(this.dialogSelector);
            this.dialogDiv.dialog({
                autoOpen: false,
                modal: true,
                closeOnEscape: false,
                resizable: false,
                draggable: false,
                position: {
                    my: "center",
                    at: "center",
                    of: window
                }
            });
        };
        DialogManager.prototype.initCloseButton = function () {
            var _this = this;
            this.dialogDiv.find(".js-close")
                .click(function () {
                _this.dialogDiv.dialog("close");
            });
        };
        return DialogManager;
    }());
    PathsCalculator.DialogManager = DialogManager;
})(PathsCalculator || (PathsCalculator = {}));
//# sourceMappingURL=DialogManager.js.map