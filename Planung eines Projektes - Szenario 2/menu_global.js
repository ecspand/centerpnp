var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_menu_global = (function (_super) {
    __extends(Template_menu_global, _super);
    function Template_menu_global(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menu_global.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                
// [EDS:Elementa6c9fc8d-8291-47b2-baf5-ff2184a10e74]
var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Elementa6c9fc8d-8291-47b2-baf5-ff2184a10e74","index":-1,"feedUrl":null,"message":"This could be interesting: {0}"}',
btn = new ecspand.Templates.Elements.Element_buttonSocialFeed(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Elementa6c9fc8d829147b2baf5ff2184a10e74Options || {});
self.deferreds.push(btn.init());
// [EDE:Elementa6c9fc8d-8291-47b2-baf5-ff2184a10e74]

// ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_menu_global.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_menu_global;
})(Template_menu);
//# sourceURL=menu_global.js
