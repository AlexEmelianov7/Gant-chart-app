/**
 * Formatter that contains custom formatter methods used throughout the app
 * @namespace gantt.chart.app.model.formatter
 */
sap.ui.define([
    "sap/ui/core/format/DateFormat",
    "aliaksandr/yemelyanau/products/managment/model/constants",
    "sap/ui/core/library"
] , function (
    DateFormat,
    constants,
    coreLibrary
    ) {
    "use strict";

	return  {

        /**
         * Formats a date value to a string representation using the pattern "yyyy-MM-dd".
         *
         * @memberof gantt.chart.app.model.formatter
         * @param {Date} vDate - The date value to format.
         * @returns {string} The formatted date string.
         */
        formatDate: function(vDate) {
			const oDateFormat = DateFormat.getDateInstance({
				pattern: "yyyy-MM-dd"
			});

			return oDateFormat.format(vDate);
		},

        /**
		 * Formats the state of the product status based on the provided status value.
		 * @public
		 * @memberof gantt.chart.app.model.formatter
		 * @param {string} sStatus - The status value to be formatted.
		 * @returns {sap.ui.core.IndicationColor} The formatted state of the product status.
		 */
		 formatProductStatusState: function(sStatus) {
            switch (sStatus) {
				case constants.AVAILABLE_STATUS:
					return coreLibrary.IndicationColor.Indication04;
				
				case constants.IN_STOCK_STATUS:
					return coreLibrary.IndicationColor.Indication03;
					
				case constants.OUT_OF_STOCK_STATUS:
					return coreLibrary.IndicationColor.Indication01;
					
				default:
					return coreLibrary.IndicationColor.Indication04;
			}
        },
	}
});