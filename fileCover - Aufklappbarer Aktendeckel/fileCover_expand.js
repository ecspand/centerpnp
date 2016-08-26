
/*
 * Copyright 2015 d.velop AG
 */
var Template_fileCover_expand = (function (_super) {
    __extends(Template_fileCover_expand, _super);
    function Template_fileCover_expand(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        
        /* Für das neue seitliche Panel setzen benötigen wir neue Elemente. Hierzu erweitern wir das abgeleitete Template
           um einen neuen Rahmen plus der eigentlichen Schaltfläche zum Ein- bzw. Ausklappen */
        this.html.splice(0, 0, '<div class="fileCoverPanel"><div class="title"><span>Aktendeckel</span></div><div class="container"><div class="hiddenContainer">');
        this.html.push('</div></div></div>');
        
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_fileCover_expand.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---

                // Beim Klick auf den Titel soll der Aktendeckel entsprechend ein- oder ausgeblendet werden
                _this.container.find(".fileCoverPanel .title").click(function() {
                    
                    _this.container.find(".fileCoverPanel .hiddenContainer").toggle("slow");

                    // anschließend sollte das resize Event manuell gefeuert werden damit sich alle Controls der neuen Breite anpassen können
                    $(window).trigger("resize");    
                });
                
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_fileCover_expand.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return Template_fileCover_expand;
})(Template_fileCover);
//# sourceURL=fileCover_expand
