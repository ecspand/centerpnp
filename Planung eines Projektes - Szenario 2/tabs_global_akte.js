var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_tabs_global_akte = (function (_super) {
    __extends(Template_tabs_global_akte, _super);
    function Template_tabs_global_akte(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_tabs_global_akte.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                
// [EDS:Element809bd5e2-544f-4f04-9d52-dc6c60cdd28f]
var elmselftemp = (_this || this), settings = '{"customTitle":"Super Tab!","id":"Element809bd5e2-544f-4f04-9d52-dc6c60cdd28f","index":-1,"url":"http://www.bing.com?q={Title}"}',
btn = new Element_tabsIFrameDefault(elmselftemp, JSON.parse(settings), elmselftemp.tabStrip, elmselftemp.Element809bd5e2544f4f049d52dc6c60cdd28fOptions || {});
elmselftemp.deferreds.push(btn.init());
// [EDE:Element809bd5e2-544f-4f04-9d52-dc6c60cdd28f]

// ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_tabs_global_akte.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_tabs_global_akte;
})(Template_tabs_global);
//# sourceURL=tabs_global_akte.js
