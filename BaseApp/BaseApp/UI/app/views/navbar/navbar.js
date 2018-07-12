// views/index
define(["text!./navbar.html",
    "../window/window"], function (template, windowView) {
    
    //aridoHelper.loadCSS("UI/app/views/navbar/navbar.css");

    var viewModel = kendo.observable({
        username: "",
        location: location.hash,
        setActiveLocation: function (path) {

            if (this.get("location") == "" && path == '/')
                return true;
            return this.get("location") == path;
        },
        openWindow: function () {
            windowView.model.openWindow();
        }
    });


    $.subscribe('/router/change', function (eventName, eventHandler) {
        viewModel.set("location", eventHandler.url);
    });

    return new kendo.View(template, {
        model: viewModel,
        wrap: false,
        init: function () {
            Pace.start();
            aridoHelper.resizeContent();
        }
    });
});