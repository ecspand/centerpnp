var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_gridMenu_example = (function (_super) {
    __extends(Template_gridMenu_example, _super);
    function Template_gridMenu_example(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_gridMenu_example.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---
                
                // Erst hier ist einigermaßen sicher, dass der die Schaltfläche an der Oberfläche gebunden wurde
                $("#btnGridMenuShowList").hide();
                
                // Alternativ können die Elemente auch direkt aus dem viewModel geworfen werden 
                // this.viewModel.items.splice(0, 1);
                
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_gridMenu_example.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return Template_gridMenu_example;
})(Template_gridMenu);
