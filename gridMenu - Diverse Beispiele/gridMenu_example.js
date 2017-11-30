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

        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---

                // Beispiel: Schaltfläche ausblenden
                // Erst hier ist einigermaßen sicher, dass die Schaltfläche an der Oberfläche gebunden wurde
                _this.container.find("#btnGridMenuShowList").hide();

                // Alternativ können die Elemente auch direkt aus dem viewModel geworfen werden 
                // this.viewModel.items.splice(0, 1);


                // Beispiel: Neue Schaltfläche soll nur eingeblendet werden, wenn es sich um einen bestimmten Ordner handelt
                // FolderTokenElement, ListElement, ListTokenElement, ContentTypeElement
                if (_this.folder.get_elementType() === ecspand.ElementType.ListElement) {
                    var showBtn = {
                        controlType: "button",
                        title: ecspand.cultures.buttonElements.permissions,
                        id: "btnShow",
                        iconSource: "/_layouts/15/1031/images/formatmap16x16.png?rev=23",
                        iconStyle: "top: -145px; left: -74px;",
                        click: function (e) {
                        }
                    };
                    _this.viewModel.items.push(showBtn);
                }

                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    return Template_gridMenu_example;
})(Template_gridMenu);
