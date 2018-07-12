define(["text!./layout.html"], function ( template) {

    var layout = new kendo.Layout(template, { tagName: "div id='layout'" });
    return layout;
});