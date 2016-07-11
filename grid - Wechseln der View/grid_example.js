/*
 * Copyright 2015 d.velop AG
 */
var Template_grid_example = (function (_super) {
    __extends(Template_grid_example, _super);
    function Template_grid_example(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }

    Template_grid_example.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        
        // Abfrage aller Views des aktuellen ecspand.Folder Objektes (Liste/Bibliothek)
        this.folder.getViewCollection().then(function(views) {

            var length = views.length,
                viewID = new SP.Guid("0600F7FD-5FE5-404C-B868-6DC4F0F84DFB"); // Die ID der zu aktivierenden View
                
            // Suchen und Setzen der View
            for (var i = 0; i < length; i++) {
                var view = views[i];
                if (view.get_id().equals(viewID)) {
                    _this.folder.set_currentView(view);
                    break;
                }
            }
            
            // Weiter mit dem Standard-Vorgehen
            return _super.prototype.init.call(_this).done(function () {
                if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                    // ---[ELEMENTS-BLOCK-START]---
                    // ---[ELEMENTS-BLOCK-END]---
                    dfd.resolve();
                }
                else {
                    dfd.resolve();
                }
            });
        }).fail(function(err)  { 
            dfd.reject(ecspand.Helper.Exception.createAndLogException({
                instance: this, method: "init", 
                notificationMessage: "Standard-View konnte nicht geändert werden. Bitte wenden Sie sich an den Administrator",
                message: "Standard-View konnte nicht geändert werden", error: err
            }));
        });
        
        
        return dfd.promise();
    };

    Template_grid_example.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };

    return Template_grid_example;
})(Template_grid);

//# sourceURL=grid_example.js