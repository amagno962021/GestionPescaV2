sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Log, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("tasa.registroeventospesca.controller.Lista", {

		onInit: function () {
			this.cargarPlantas();
			this.cargarMareas();
			this.currentEmba = "";
			this.currentPta = "";
			this.oRouter = this.getOwnerComponent().getRouter();
		},

		onNavToMaster: function (oEvent) {
			var plantas = oEvent.getSource().getBindingContext().getProperty("PLANTAS");
			this.currentEmba = oEvent.getSource().getBindingContext().getProperty("DESCR");
			var modeloPlantas = new sap.ui.model.json.JSONModel(plantas);
			var listaPlantas = this.byId("idListaPlantas");
			listaPlantas.setModel(modeloPlantas);
			this.getSplitAppObj().toMaster(this.createId("master2"));
		},

		onBackToMaster: function () {
			this.getSplitAppObj().backMaster();
		},

		onNavToDetail: function (oEvent) {
			var cdpta = oEvent.getSource().getBindingContext().getProperty("CDPTA");
			this.currentPta = oEvent.getSource().getBindingContext().getProperty("DESCR");
			var txtCabecera = this.currentEmba + " - " + this.currentPta;
			if (cdpta) {
				var query = "CDPTA = '" + cdpta + "'";
				var sUrl = "/dev/flota/servicios/servicio.xsjs?Accion=ConsultaMareas";
				var entry = {
					"Campos": "*",
					"Filtros": []
				};
				entry.Filtros.push(query);
				var that = this;
				// jQuery.ajax({
				// 	url: sUrl,
				// 	async: false,
				// 	dataType: 'json',
				// 	cache: false,
				// 	data: JSON.stringify(entry),
				// 	type: 'POST',
				// 	success: function (data) {
				// 		that.byId("idObjectHeader").setTitle(txtCabecera);
				// 		var oData = data.sData;
				// 		var model = new sap.ui.model.json.JSONModel([{
				// 			"NRMAR": "",
				// 			"NMEMB": "",
				// 			"DSMMA": "",
				// 			"FEARR": "",
				// 			"HOARR": "",
				// 			"ESMAR": ""
				// 		}]);
				// 		that.byId("tblMareas").setModel(model);
				// 	},
				// 	error: function (xhr, status, error) {
				// 		console.log(xhr);
				// 	}
				// });
				that.byId("idObjectHeader").setTitle(txtCabecera);
				var model = new sap.ui.model.json.JSONModel([{
					"NRMAR": "154,327",
					"CDEMB": "0000000230",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "GUIAME CAUTIVO",
					"DSMMA": ""
				}, {
					"NRMAR": "154,357",
					"CDEMB": "0000000046",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "BLANDI",
					"DSMMA": ""
				}, {
					"NRMAR": "155,308",
					"CDEMB": "0000000019",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "EVELIN LINDSEY",
					"DSMMA": ""
				}, {
					"NRMAR": "155,477",
					"CDEMB": "0000000004",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "DON MANUEL II",
					"DSMMA": ""
				}, {
					"NRMAR": "157,235",
					"CDEMB": "0000000062",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "EMERITA",
					"DSMMA": ""
				}, {
					"NRMAR": "157,411",
					"CDEMB": "0000004069",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0012",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "GRABIEL YUDITH",
					"DSMMA": ""
				}, {
					"NRMAR": "157,491",
					"CDEMB": "0000000041",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "SAAHONA",
					"DSMMA": ""
				}, {
					"NRMAR": "157,686",
					"CDEMB": "0000000025",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0012",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "SAN JUAN BAUTISTA",
					"DSMMA": ""
				}, {
					"NRMAR": "157,819",
					"CDEMB": "0000000226",
					"CDEMP": 2010097177,
					"CDMMA": 7,
					"OBMAR": "",
					"CDPTA": "0012",
					"ESMAR": "A",
					"FEARR": "",
					"HOARR": "12:00:00 AM",
					"ESREG": 1,
					"NMEMB": "DOÑA ESTHER",
					"DSMMA": ""
				}, {
					"NRMAR": "157,954",
					"CDEMB": "0000000015",
					"CDEMP": 2010097177,
					"CDMMA": 5,
					"OBMAR": "",
					"CDPTA": "0012",
					"ESMAR": "A",
					"FEARR": "8/17/2020",
					"HOARR": "10:31:00 PM",
					"ESREG": 1,
					"NMEMB": "CARITO",
					"DSMMA": ""
				}, {
					"NRMAR": "158,424",
					"CDEMB": "0000000071",
					"CDEMP": 2010097177,
					"CDMMA": 2,
					"OBMAR": "",
					"CDPTA": "0005",
					"ESMAR": "A",
					"FEARR": "7/11/2020",
					"HOARR": "1:30:00 AM",
					"ESREG": 1,
					"NMEMB": "PS/ EX - EL SOL",
					"DSMMA": ""
				}, {
					"NRMAR": "158,431",
					"CDEMB": "0000000222",
					"CDEMP": 2010097177,
					"CDMMA": 2,
					"OBMAR": "",
					"CDPTA": "0005",
					"ESMAR": "A",
					"FEARR": "7/10/2020",
					"HOARR": "10:15:00 PM",
					"ESREG": 1,
					"NMEMB": "COBRA",
					"DSMMA": ""
				}, {
					"NRMAR": "158,452",
					"CDEMB": "0000000003",
					"CDEMP": 2010097177,
					"CDMMA": 2,
					"OBMAR": "",
					"CDPTA": "0005",
					"ESMAR": "A",
					"FEARR": "7/11/2020",
					"HOARR": "7:30:00 AM",
					"ESREG": 1,
					"NMEMB": "CORAZON DE JESUS",
					"DSMMA": ""
				}, {
					"NRMAR": "158,453",
					"CDEMB": "0000000072",
					"CDEMP": 2010097177,
					"CDMMA": 2,
					"OBMAR": "",
					"CDPTA": "0119",
					"ESMAR": "A",
					"FEARR": "7/11/2020",
					"HOARR": "9:30:00 AM",
					"ESREG": 1,
					"NMEMB": "SAN ANTONIO III",
					"DSMMA": ""
				}]);
				that.byId("tblMareas").setModel(model);
			} else {
				console.log("Error: No se esta obteniendo el codigo de planta");
			}
		},

		cargarPlantas: function () {
			var sUrl = "/dev/flota/servicios/servicio.xsjs?Accion=ConsultaEmbaPlanta";
			var entry = {
				"Campos": "*",
				"Filtros": [
					"ESREG = '1'"
				]
			};
			var that = this;
			var oGlobalBusyDialog = new sap.m.BusyDialog();
			oGlobalBusyDialog.open();
			// jQuery.ajax({
			// 	url: sUrl,
			// 	async: false,
			// 	dataType: 'json',
			// 	cache: false,
			// 	data: JSON.stringify(entry),
			// 	type: 'POST',
			// 	success: function (data) {
			// 		var model = new sap.ui.model.json.JSONModel([{
			// 			"DESCR": "EMBARCACION 1"
			// 		}, {
			// 			"DESCR": "EMBARCACION 2"
			// 		}])
			// 		var lista = that.byId("idListaTipoEmb");
			// 		lista.setModel(model);
			// 		oGlobalBusyDialog.close();
			// 	},
			// 	error: function (xhr, status, error) {
			// 		console.log(xhr);
			// 		oGlobalBusyDialog.close();
			// 	}
			// });

			var model = new sap.ui.model.json.JSONModel([{
				"DESCR": "EMBARCACIONES DE CERCO",
				"PLANTAS": [{
					"DESCR": "MALABRIGO",
					"CDPTA": "0012"
				}, {
					"DESCR": "CHIMBOTE",
					"CDPTA": "0012"
				}, {
					"DESCR": "SAMANCO",
					"CDPTA": "0012"
				}, {
					"DESCR": "SUPE",
					"CDPTA": "0012"
				}, {
					"DESCR": "VEGUETA",
					"CDPTA": "0012"
				}, {
					"DESCR": "CALLAO",
					"CDPTA": "0012"
				}]
			}, {
				"DESCR": "EMBARCACION DE ARRASTRE",
				"PLANTAS": [{
					"DESCR": "MALABRIGO",
					"CDPTA": "0012"
				}, {
					"DESCR": "CHIMBOTE",
					"CDPTA": "0012"
				}, {
					"DESCR": "SAMANCO",
					"CDPTA": "0012"
				}, {
					"DESCR": "SUPE",
					"CDPTA": "0012"
				}, {
					"DESCR": "VEGUETA",
					"CDPTA": "0012"
				}, {
					"DESCR": "CALLAO",
					"CDPTA": "0012"
				}]
			}, {
				"DESCR": "EMBARCACION PALANGRERA",
				"PLANTAS": [{
					"DESCR": "MALABRIGO",
					"CDPTA": "0012"
				}, {
					"DESCR": "CHIMBOTE",
					"CDPTA": "0012"
				}, {
					"DESCR": "SAMANCO",
					"CDPTA": "0012"
				}, {
					"DESCR": "SUPE",
					"CDPTA": "0012"
				}, {
					"DESCR": "VEGUETA",
					"CDPTA": "0012"
				}, {
					"DESCR": "CALLAO",
					"CDPTA": "0012"
				}]
			}, {
				"DESCR": "EMBARCACION MULTIPROPOSITO",
				"PLANTAS": [{
					"DESCR": "MALABRIGO",
					"CDPTA": "0012"
				}, {
					"DESCR": "CHIMBOTE",
					"CDPTA": "0012"
				}, {
					"DESCR": "SAMANCO",
					"CDPTA": "0012"
				}, {
					"DESCR": "SUPE",
					"CDPTA": "0012"
				}, {
					"DESCR": "VEGUETA",
					"CDPTA": "0012"
				}, {
					"DESCR": "CALLAO",
					"CDPTA": "0012"
				}]
			}, {
				"DESCR": "EMBARCACION DE EQUIPO DE BUCEO",
				"PLANTAS": [{
					"DESCR": "MALABRIGO",
					"CDPTA": "0012"
				}, {
					"DESCR": "CHIMBOTE",
					"CDPTA": "0012"
				}, {
					"DESCR": "SAMANCO",
					"CDPTA": "0012"
				}, {
					"DESCR": "SUPE",
					"CDPTA": "0012"
				}, {
					"DESCR": "VEGUETA",
					"CDPTA": "0012"
				}, {
					"DESCR": "CALLAO",
					"CDPTA": "0012"
				}]
			}, {
				"DESCR": "OTRAS EMBARCACIONES",
				"PLANTAS": [{
					"DESCR": "MALABRIGO",
					"CDPTA": "0012"
				}, {
					"DESCR": "CHIMBOTE",
					"CDPTA": "0012"
				}, {
					"DESCR": "SAMANCO",
					"CDPTA": "0012"
				}, {
					"DESCR": "SUPE",
					"CDPTA": "0012"
				}, {
					"DESCR": "VEGUETA",
					"CDPTA": "0012"
				}, {
					"DESCR": "CALLAO",
					"CDPTA": "0012"
				}]
			}]);
			var lista = that.byId("idListaTipoEmb");
			lista.setModel(model);
			oGlobalBusyDialog.close();
		},

		onFilterEmba: function (evt) {
			var aFilters = [];
			var sQuery = evt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("DESCR", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			var oList = this.byId("idListaTipoEmb");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");
		},

		onFilterPlant: function (evt) {
			var aFilters = [];
			var sQuery = evt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("DESCR", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			var oList = this.byId("idListaPlantas");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");
		},

		onNavToDetailMaster: function (evt) {
			var nrmar = evt.getSource().getBindingContext().getProperty("NRMAR");
			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.navTo("DetalleMareas", {
				"NRMAR": nrmar
			});
		},

		cargarMareas: function () {
			var cdpta = "0005";
			var query = "CDPTA = '" + cdpta + "'";
			var sUrl = "/dev/flota/servicios/servicio.xsjs?Accion=ConsultaMareas";
			var entry = {
				"Campos": "*",
				"Filtros": []
			};
			entry.Filtros.push(query);
			var that = this;
			var oGlobalBusyDialog = new sap.m.BusyDialog();
			oGlobalBusyDialog.open();
			jQuery.ajax({
				url: sUrl,
				async: false,
				dataType: 'json',
				cache: false,
				data: JSON.stringify(entry),
				type: 'POST',
				success: function (data) {
					that.byId("idObjectHeader").setTitle("EMBARCACIONES DE CERCO - MALABRIGO");
					var oData = data.sData;
					var model = new sap.ui.model.json.JSONModel(oData);
					that.byId("tblMareas").setModel(model);
					oGlobalBusyDialog.close();
				},
				error: function (xhr, status, error) {
					console.log(xhr);
					oGlobalBusyDialog.close();
				}
			});
		},

		onNuevaMarea: function () {

		},

		onActualizaMareas: function () {

		},

		getSplitAppObj: function () {
			var result = this.byId("SpliApp");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		}

	});
});