var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_menu_global_akte = (function (_super) {
    __extends(Template_menu_global_akte, _super);
    function Template_menu_global_akte(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menu_global_akte.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                
				// [EDS:Element8a2de7e0-2f1e-4ddb-bc3e-fb8669089b7d]
				var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Element8a2de7e0-2f1e-4ddb-bc3e-fb8669089b7d","index":-1,"workflowID":null}',
				btn = new ecspand.Templates.Elements.Element_buttonWorkflowDefault(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Element8a2de7e02f1e4ddbbc3efb8669089b7dOptions || {});
				self.deferreds.push(btn.init());
				// [EDE:Element8a2de7e0-2f1e-4ddb-bc3e-fb8669089b7d]

				// ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_menu_global_akte.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_menu_global_akte;
})(Template_menu_global);
//# sourceURL=menu_global_akte.js
