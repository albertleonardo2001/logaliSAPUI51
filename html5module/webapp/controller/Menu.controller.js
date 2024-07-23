sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("logaligroup.html5module.controller.Menu", {
        onInit: function () {

        },

        onAfterRendering: function () {
            // Error en el framework : Al agregar la dirección URL de "Firmar pedidos", el componente GenericTile debería navegar directamente a dicha URL,
            // pero no funciona en la version 1.78. Por tanto, una solución  encontrada es eliminando la propiedad id del componente por jquery
            var genericTileFirmarPedido = this.byId("linkFirmarPedido");
            //Id del dom
            var idGenericTileFirmarPedido = genericTileFirmarPedido.getId();
            //Se vacia el id
            //jQuery("#"+idGenericTileFirmarPedido)[0].id = "";
        },
        
        //Función al pulsar sobre el Tile "Crear empleado". Hace un routing a la vista "createEmployee"
        navToCreateEmployee: function (){
                //Se obtiene el conjuntos de routers del programa
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //Se navega hacia el router "CreateEmployee"
                oRouter.navTo("CreateEmployee",{},false);
        },
        
        //Función al pulsar sobre el Tile "Ver empleados". Hace un routing a la vista "showEmployee"
        navToShowEmployee: function(){
                //Se obtiene el conjuntos de routers del programa
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                //Se navega hacia el router "CreateEmployee"
                oRouter.navTo("ShowEmployee",{},false);
        }
    });
});
