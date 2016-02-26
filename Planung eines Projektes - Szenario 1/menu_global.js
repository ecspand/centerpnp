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
                
				// [EDS:Element81d0e8dc-bc12-48bd-82cc-371f4b697cce]
				var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Element81d0e8dc-bc12-48bd-82cc-371f4b697cce","index":-1,"workflowID":null}',
				btn = new ecspand.Templates.Elements.Element_buttonWorkflowDefault(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Element81d0e8dcbc1248bd82cc371f4b697cceOptions || {});
				self.deferreds.push(btn.init());
				// [EDE:Element81d0e8dc-bc12-48bd-82cc-371f4b697cce]
                
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
