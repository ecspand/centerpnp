var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_menu_global_akte_aktelieferant = (function (_super) {
    __extends(Template_menu_global_akte_aktelieferant, _super);
    function Template_menu_global_akte_aktelieferant(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{"btnOpenEditView":{"showInContextMenu":true,"showInFurtherOptions":false,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"btnOpenEditView","index":0,"selectedMode":6,"hidden":true}}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menu_global_akte_aktelieferant.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
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
    Template_menu_global_akte_aktelieferant.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_menu_global_akte_aktelieferant;
})(Template_menu_global_akte);
//# sourceURL=menu_global_akte_aktelieferant.js
