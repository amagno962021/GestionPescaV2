sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./Dialog4",
	"./Dialog5",
	"sap/ui/core/routing/History"
], function (Controller, MessageBox, Dialog4, Dialog5, History) {
	"use strict";

	return Controller.extend("tasa.registroeventospesca.controller.DetalleMareas", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tasa.registroeventospesca.view.DetalleMareas
		 */
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();

			var model = new sap.ui.model.json.JSONModel([{
				"ID": "01",
				"TipoEvento": "Zarpe",
				"FechIni": "30/07/2021 15:18",
				"FechFin": "30/07/2021 15:18",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}, {
				"ID": "02",
				"TipoEvento": "Llegada a Zona de Pesca",
				"FechIni": "30/07/2021 15:20",
				"FechFin": "30/07/2021 15:20",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}, {
				"ID": "03",
				"TipoEvento": "Cala",
				"FechIni": "30/07/2021 16:35",
				"FechFin": "30/07/2021 16:35",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}, {
				"ID": "04",
				"TipoEvento": "Salida de Zona de Pesca",
				"FechIni": "30/07/2021 16:25",
				"FechFin": "30/07/2021 15:18",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}, {
				"ID": "05",
				"TipoEvento": "Llegada a Zona de Pesca",
				"FechIni": "30/07/2021 15:18",
				"FechFin": "30/07/2021 15:18",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}, {
				"ID": "06",
				"TipoEvento": "Cala",
				"FechIni": "30/07/2021 15:18",
				"FechFin": "30/07/2021 15:18",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}, {
				"ID": "07",
				"TipoEvento": "Salida de Zona de Pesca",
				"FechIni": "30/07/2021 15:18",
				"FechFin": "30/07/2021 15:18",
				"ZonaPesca": "CHIMBOTE",
				"Puerto": "CHIMBOTE",
				"Planta": "CHIMBOTE"
			}]);
			var lista = this.byId("tblEventos");
			lista.setModel(model);

		},

		_onRowPress: function (oEvent) {

			this.oRouter.navTo("DetalleEvento");

		},

		onBackListMarea: function () {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			var oQueryParams = this.getQueryParameters(window.location);

			if (sPreviousHash !== undefined || oQueryParams.navBackToLaunchpad) {
				window.history.go(-1);
			} else {
				//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.navTo("default", true);
			}

		},

		getQueryParameters: function (oLocation) {
			var oQuery = {};
			var aParams = oLocation.search.substring(1).split("&");
			for (var i = 0; i < aParams.length; i++) {
				var aPair = aParams[i].split("=");
				oQuery[aPair[0]] = decodeURIComponent(aPair[1]);
			}
			return oQuery;

		},

		_onTableDelete: function () {
			return new Promise(function (fnResolve) {
				sap.m.MessageBox.confirm("Esta seguro de eliminar este evento ?", {
					title: "Eliminar Evento",
					actions: ["Ok", "Cancelar"],
					onClose: function (sActionClicked) {
						fnResolve(sActionClicked === "Ok");
					}
				});
			}).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err);
				}
			});

		},

		_onOverflowToolbarButtonPress: function (oEvent) {

			var sDialogName = "Dialog4";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new Dialog4(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		},

		_onButtonPress: function (oEvent) {

			var sDialogName = "Dialog5";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new Dialog5(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tasa.registroeventospesca.view.DetalleMareas
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tasa.registroeventospesca.view.DetalleMareas
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tasa.registroeventospesca.view.DetalleMareas
		 */
		//	onExit: function() {
		//
		//	}

	});

});