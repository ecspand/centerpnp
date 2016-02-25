var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_menuDocument_global_dokumente_sonderdokumente = (function (_super) {
    __extends(Template_menuDocument_global_dokumente_sonderdokumente, _super);
    function Template_menuDocument_global_dokumente_sonderdokumente(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{"btnOpenEditView":{"showInContextMenu":true,"showInFurtherOptions":false,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"btnOpenEditView","index":0,"selectedMode":6,"hidden":true}}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menuDocument_global_dokumente_sonderdokumente.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        _super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                
                // Neue Options für den btnNewEdit Button erstellen
                _this.btnNewEditOptions = {
                    // enabled Methode implementieren - erwartet wird ein promise mit boolean Rückgabewert
                    enabled: function() {
                        
                        var optionsDfd = $.Deferred();
                        
                        // Kunde aus dem view model auslesen
                        var value = _this.ctx.get_viewModel()["Kunde"].value;
                        
                        // Der Button soll nur eingeblendet werden für den Kunden "Motor Presse Stuttgart"
                        optionsDfd.resolve(value === "Motor Presse Stuttgart");
                        
                        return optionsDfd.promise();
                    }
                };
                
                // ---[ELEMENTS-BLOCK-START]---
                
// [EDS:btnNewEdit]
var elmselftemp = (_this || this), settings = '{"showInContextMenu":true,"showInFurtherOptions":true,"showInFileCoverMenu":true,"customTitle":"","customIconSource":"","customIconStyle":"","id":"btnNewEdit","index":-1,"selectedMode":6}',
btn = new ecspand.Templates.Elements.Element_buttonDefaultDialogs(elmselftemp, JSON.parse(settings), elmselftemp.viewModel.items, elmselftemp.btnNewEditOptions || {});
self.deferreds.push(btn.init());
// [EDE:btnNewEdit]

// ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_menuDocument_global_dokumente_sonderdokumente.prototype.destroy = function () {
        return _super.prototype.destroy.call(this);
    };
    return Template_menuDocument_global_dokumente_sonderdokumente;
})(Template_menuDocument_global_dokumente);
//# sourceURL=menuDocument_global_dokumente_sonderdokumente.js
