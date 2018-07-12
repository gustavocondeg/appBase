// views/index
define([ "text!./tabstrip.html", "./tab1/tab1"], function ( template, tab1) {


    var viewModel = kendo.observable();


    return new kendo.View(template, {
        model: viewModel,
        wrap: false,
        init: function () {
            Pace.start();
            aridoHelper.resizeContent();
        },
        show: function () {
            tab1.render("#tab1");

        },
        hide: function () {
            $("#tab1").html("des");
        }
    });
});