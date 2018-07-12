// views/index
define(["text!./grid.html"], function (template) {
    
    var viewModel = kendo.observable({
        isVisible: true,
        onSave: function (e) {
        },
        onDataBound: function (e) {
            console.log("DataBound");
        },
        products: new kendo.data.DataSource({
            schema: {
                //model: {
                //    id: "ProductID",
                //    fields: {
                //        ProductName: { type: "string" },
                //        UnitPrice: { type: "number" }
                //    }
                //}
            },
            batch: true,
            transport: {
                read: {
                    url: "./data.txt",
                    dataType: "json"
                },
                update: {
                    url: "//demos.telerik.com/kendo-ui/service/products/update",
                    dataType: "jsonp"
                },
                create: {
                    url: "//demos.telerik.com/kendo-ui/service/products/create",
                    dataType: "jsonp"
                },
                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            }
        })
    });


    return new kendo.View(template, {
        model: viewModel,
        wrap: false,
        init: function () {
            Pace.start();
            aridoHelper.resizeContent();
        },
        show: function () {
        },
        hide: function () {
        },
        transitionStart: function (e) {
            var type = e.type;
            if (type == "hide")
                $("#demoGrid").data("kendoGrid").dataSource.data([]);
        },
        transitionEnd: function (e) {

            var type = e.type;

            if (type == "show")
                $("#demoGrid").data("kendoGrid").dataSource.read();
        }
    });
});