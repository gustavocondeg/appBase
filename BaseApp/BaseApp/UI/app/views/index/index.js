define(["text!./index.html"], function ( template) {


    var viewModel = kendo.observable({
        message: "Hello World!"
    });

    return new kendo.View(template, {
        model: viewModel
    });
});