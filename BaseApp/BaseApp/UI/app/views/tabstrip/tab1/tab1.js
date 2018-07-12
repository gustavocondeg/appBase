// views/index
define(["text!./tab1.html"], function (template) {

    var viewModel = kendo.observable({
        DatePicker: {

            selectedDate: null,
            isEnabled: true,
            isVisible: true,
        },
        DDL: {
            selectedProduct: null,
            isPrimitive: false,
            isVisible: true,
            isEnabled: true,
            primitiveChanged: function () {
                this.set("selectedProduct", null);
            },
            displaySelectedProduct: function () {
                var selectedProduct = this.get("selectedProduct");
                alert(selectedProduct);
                return kendo.stringify(selectedProduct, null, 4);
            },
            onOpen: function () {
                console.log("event :: open");
            },
            onChange: function () {
                console.log("event :: change (" + this.DDL.displaySelectedProduct() + ")");
            },
            onClose: function () {
                console.log("event :: close");
            },
            products: new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "//demos.telerik.com/kendo-ui/service/products",
                        dataType: "jsonp"
                    }
                }
            })
        },
        ML: new kendo.observable({
            selectedProductMS: null,
            isPrimitive: false,
            isVisible: true,
            isEnabled: true,
            primitiveChanged: function () {
                this.set("selectedProductMS", null);
            },
            displaySelectedProduct: function () {
                console.log(this);
                var selectedProduct = this.parent().get("selectedProduct");
                alert( kendo.stringify(selectedProduct, null, 4));
                return kendo.stringify(selectedProduct, null, 4);
            },
            onOpen: function () {
                console.log("event :: open");
            },
            onChange: function () {
                console.log("event :: change (" + this.ML.displaySelectedProduct() + ")");
            },
            onClose: function () {
                console.log("event :: close");
            },
            products: new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "//demos.telerik.com/kendo-ui/service/products",
                        dataType: "jsonp"
                    }
                }
            })
        })
    });


    return new kendo.View(template, {
        model: viewModel,
        wrap: false
    });
});