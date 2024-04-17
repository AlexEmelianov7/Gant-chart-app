/**
 * Controller for managing Products Overview view.
 * @namespace gantt.chart.app.controller.ProductsOverview
 * @extends gantt.chart.app.controller.BaseController
 */
sap.ui.define([
	"gantt/chart/app/controller/BaseController",
	"sap/gantt/misc/Format"
], function (
	BaseController,
	Format,
	JSONModel,
) {
	"use strict";

	return BaseController.extend("gantt.chart.app.controller.Tasks", {
		/**
		 * Initializes the ProductsOverview controller.
		 * Creates and sets the view model for the productsOverview view.
		 * Loads the data from the localData.json file and sets it as the model for the controller.
		 * Creates a view model for the ProductsOverview.
		 * Registers the controller for Products table p13n (personalization) events.
		 * @public
		 * @memberof gantt.chart.app.controller.ProductsOverview
		 */
		onInit: function() {
			// const oViewModel = new JSONModel({
			// 	productsTableTitle: this.getResourceBundle().getText("ttlNoData"),
			// 	deleteBtnEnabled: false
			// })
			// this.setModel(oViewModel, "productsOverview");
		},
		fnTimeConverter: function (sTimestamp) {
			return Format.abapTimestampToDate(sTimestamp);
		},
	});
});
