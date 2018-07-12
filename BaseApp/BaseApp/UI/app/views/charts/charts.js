// views/index
define(["text!./charts.html"], function (template) {

    var viewModel = kendo.observable({
        isVisible: true,
        onSeriesHover: function (e) {

        },
        electricity: new kendo.data.DataSource({
            transport: {
                read: {
                    url: "./chartData.txt",
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
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
        transitionEnd: function (e) {
            var type = e.type;
            if (type == "show")
                $("#chart").data("kendoChart").redraw();
        }
    });
});