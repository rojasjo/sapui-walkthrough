sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.BaseController", {
        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });

            this.pDialog.then((oDialog) => oDialog.open());
        }
    });
});