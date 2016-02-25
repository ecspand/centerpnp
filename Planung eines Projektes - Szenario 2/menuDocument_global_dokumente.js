var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_menuDocument_global_dokumente = (function (_super) {
    __extends(Template_menuDocument_global_dokumente, _super);
    function Template_menuDocument_global_dokumente(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menuDocument_global_dokumente.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                
// [EDS:Elementd660e4df-bde2-437e-af7a-792b4d4c1fdd]
var elmselftemp = (_this || this), settings = '{"showInContextMenu":false,"showInFurtherOptions":false,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Elementd660e4df-bde2-437e-af7a-792b4d4c1fdd","index":-1}',
btn = new ecspand.Templates.Elements.Element_buttonTranscriptsDefault(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Elementd660e4dfbde2437eaf7a792b4d4c1fddOptions || {});
self.deferreds.push(btn.init());
// [EDE:Elementd660e4df-bde2-437e-af7a-792b4d4c1fdd]


// [EDS:Element00cf2007-11e8-49ac-b312-9debe931b851]
var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"Element00cf2007-11e8-49ac-b312-9debe931b851","index":-1}',
btn = new ecspand.Templates.Elements.Element_buttonDocumentCart(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.Element00cf200711e849acb3129debe931b851Options || {});
self.deferreds.push(btn.init());
// [EDE:Element00cf2007-11e8-49ac-b312-9debe931b851]

// ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_menuDocument_global_dokumente.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_menuDocument_global_dokumente;
})(Template_menuDocument_global);
//# sourceURL=menuDocument_global_dokumente.js
