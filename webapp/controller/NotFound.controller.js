/**
 * Controller for managing NotFound view.
 * @namespace gantt.chart.app.controller.NotFound
 * @extends gantt.chart.app.controller.BaseController
 */
sap.ui.define([
	"aliaksandr/yemelyanau/products/managment/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("gantt.chart.app.controller.NotFound", {
		/**
		 * Navigates to the Products Overview page.
		 * @public
		 * @memberof gantt.chart.app.controller.NotFound
		 */
		onNavToProductsOverview: function () {
			this.getRouter().navTo("ProductsOverview");
		}
	});
});