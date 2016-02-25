var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_menuDocument_global = (function (_super) {
    __extends(Template_menuDocument_global, _super);
    function Template_menuDocument_global(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menuDocument_global.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                
// [EDS:Element3e88eb13-93e4-4bbe-a746-73251fa38e6d]
var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Element3e88eb13-93e4-4bbe-a746-73251fa38e6d","index":-1,"feedUrl":null,"message":"This could be interesting: {0}"}',
btn = new ecspand.Templates.Elements.Element_buttonSocialFeed(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Element3e88eb1393e44bbea74673251fa38e6dOptions || {});
self.deferreds.push(btn.init());
// [EDE:Element3e88eb13-93e4-4bbe-a746-73251fa38e6d]

// ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_menuDocument_global.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_menuDocument_global;
})(Template_menuDocument);
//# sourceURL=menuDocument_global.js
