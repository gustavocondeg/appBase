// views/index
define(["text!./asideBar.html",
    "../window/window"], function (template, windowView) {

        //aridoHelper.loadCSS("UI/app/views/asideBar/asideBar.css");

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
            },
            toggleMenu: function () {
                
                if ($("#sidebar-wrapper").hasClass("tinyMenu")) {
                    $("#main-navbar").removeClass("tinyMenu");
                    $("#sidebar-wrapper").removeClass("tinyMenu");
                    $("#content").removeClass("tinyMenu");
                    $("#toggleMenu").html("<i class='fa fa-chevron-circle-left'></i>");
                    $("#sidebar-wrapper .sidebar-nav li span").show();
                } else {
                    $("#sidebar-wrapper").addClass("tinyMenu");
                    $("#main-navbar").addClass("tinyMenu");
                    $("#content").addClass("tinyMenu");
                    $("#toggleMenu").html("<i class='fa fa-chevron-circle-right'></i>");
                    $("#sidebar-wrapper .sidebar-nav li span").hide();
                }
            }
        });


        $.subscribe('/router/change', function (eventName, eventHandler) {
            viewModel.set("location", eventHandler.url);
        });

        return new kendo.View(template, {
            model: viewModel,
            wrap: false,
            evalTemplate: true,
            init: function () {
                Pace.start();
                //aridoHelper.resizeContent();
            }
        });
    });