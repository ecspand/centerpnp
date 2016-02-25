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
                
				// [EDS:Elementaacf8f28-73fa-42d4-a54e-42f0dd046d11]
				var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Elementaacf8f28-73fa-42d4-a54e-42f0dd046d11","index":-1,"workflowID":null}',
				btn = new ecspand.Templates.Elements.Element_buttonWorkflowDefault(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Elementaacf8f2873fa42d4a54e42f0dd046d11Options || {});
				self.deferreds.push(btn.init());
				// [EDE:Elementaacf8f28-73fa-42d4-a54e-42f0dd046d11]

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
