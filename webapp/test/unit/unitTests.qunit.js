QUnit.config.autostart = false;

sap.ui.getCore().attachInit(() => {
	"use strict";

	sap.ui.require([
		"ui5/walkthrough/test/unit/model/formatter"
	], () => {
		console.log("TEST STARTS");
		QUnit.start();
	});
});