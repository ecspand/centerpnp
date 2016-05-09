/*
 * Copyright 2015 d.velop AG
 */
var Template_tabs_kunde = (function (_super) {
    __extends(Template_tabs_kunde, _super);
    function Template_tabs_kunde(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_tabs_kunde.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        
        // Dem äußersten Container eine eindeutige CSS Klasse hinzufügen - hier wird immer der Titel der aktuellen Aktenart vergeben 
        // Falls Sonderzeichen vorkommen sollten, so sollte ein fester Name vergeben werden
        $(".ecsContent").addClass(this.folder.get_title());
        
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---
                
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_tabs_kunde.prototype.destroy = function () {
        
        // Klasse wieder entfernen sobald die aktuelle Ansicht verlassen wird    
        $(".ecsContent").removeClass(this.folder.get_title());
        _super.prototype.destroy.call(this);
    };
    return Template_tabs_kunde;
})(Template_tabs);
