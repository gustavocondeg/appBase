define([ "text!./welcome.html"], function ( template) {

    return new kendo.View(template, {
        init: function () {
            aridoHelper.resizeContent();
        }
    });
});