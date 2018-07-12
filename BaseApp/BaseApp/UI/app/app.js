define([
    "./views/welcome/welcome",
    "./views/layout/layout",
    "./views/navbar/navbar",
    "./views/asideBar/asideBar",
    "./views/charts/charts",
    "./views/scheduler/scheduler",
    "./views/grid/grid",
    "./views/index/index",
    "./views/window/window",
    "./views/tabstrip/tabstrip"
], function (welcome, layout, navbar, asideBar, charts, scheduler, grid, index, windowView, tabs) {


    //Router
    var router = new kendo.Router({
        init: function () {
            console.log("App build test");
            $("#app").html("");
            layout.render($("body"));
            // render bars
            if (App.config.asideBar == true && App.config.topBar == true) {
                layout.showIn("#main-navbar", navbar);
                layout.showIn("#main-asideBar", asideBar);
            } else if (App.config.asideBar == true && App.config.topBar == false) {
                $("#main-navbar").remove();
                layout.showIn("#main-asideBar", asideBar);
            } else if (App.config.asideBar == false && App.config.topBar == true) {
                layout.showIn("#main-navbar", navbar);
                $("#main-asideBar").remove();
            } else {
                $("#main-asideBar").remove()
                $("#main-navbar").remove();
            }

        },
        routeMissing: function (e) {
            console.error("No route found", e.url);
        },
        change: function (e) {
            $.publish('/router/change', [e]);
        }
    });


    //routes
    router.route("/", function () {
        layout.showIn("#content", index, App.transitionEffect);
    });

    router.route("/welcome", function () {
        layout.showIn("#content", welcome, App.transitionEffect);
    });

    router.route("/index", function () {
        layout.showIn("#content", index, App.transitionEffect);
    });
    router.route("/grid", function () {
        layout.showIn("#content", grid, App.transitionEffect);
    });

    router.route("/scheduler", function () {
        layout.showIn("#content", scheduler, App.transitionEffect);
    });

    router.route("/charts", function () {
        layout.showIn("#content", charts, App.transitionEffect);
    });

    router.route("/tabstrip", function () {
        layout.showIn("#content", tabs, App.transitionEffect);
    });

    layout.showIn("#windows", windowView, App.transitionEffect);


    return router;


});