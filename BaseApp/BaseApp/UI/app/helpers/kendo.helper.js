define([], function () {
    return {
        scheduler: {
            fitToContainer: function (kendoScheduler, container) {
               
                var height = container.height();
                kendoScheduler.element.height(height);
                console.log(height);
                kendoScheduler.resize(true);
            }
        }
    }
});