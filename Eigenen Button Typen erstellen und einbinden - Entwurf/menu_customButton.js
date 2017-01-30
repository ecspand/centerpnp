/*
 * Copyright 2015 d.velop AG
 */
var Template_menu_customButton = (function (_super) {
    __extends(Template_menu_customButton, _super);
    function Template_menu_customButton(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        this.elementTypes.push("buttonSendDocumentMail");
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menu_customButton.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        $.when($.getScript("http://mpaw-vs2012-01/Scripts/buttonSendDocumentMail.js")), _super.prototype.init.call(this).done(function () {
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
    Template_menu_customButton.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return Template_menu_customButton;
})(Template_menu);
//# sourceURL=menu_customButton.js 
