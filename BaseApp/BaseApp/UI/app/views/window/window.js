// views/index
define([ "text!./window.html"], function ( template) {

    var viewModel = kendo.observable({
        isVisible: false,
        onResize: function (e) {
            console.log("event :: resize");
        },
        onDragEnd: function (e) {
            console.log("event :: dragend");
        },
        onDragStart: function (e) {
            console.log("event :: dragstart");
        },
        onClose: function () {
          
        },
        openWindow:function() {
            $("#windowDemo").data("kendoWindow").open();
            $("#windowDemo").data("kendoWindow").center();
        }
    });

    return new kendo.View(template, {
        model: viewModel,
        show: function () {            
           
        }
    });
});