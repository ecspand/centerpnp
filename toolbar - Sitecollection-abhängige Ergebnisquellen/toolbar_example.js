var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * Copyright 2015 d.velop AG
 */
var Template_toolbar_example = (function (_super) {
    __extends(Template_toolbar_example, _super);

    function Template_toolbar_example(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }

    Template_toolbar_example.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        _super.prototype.init.call(this).done(function () {
            
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---
                
                // für den Fall, dass die quickSearch aus irgend einem Grund nicht geladen wurde
                if (_this.quickSearch) {
                    var provider = _this.quickSearch.get_provider();
                    
                    // Abhängig von der aktuellen siteUrl kann so eine andere Ergebnisquelle gesetzt werden
                    if (_spPageContextInfo.siteAbsoluteUrl === "http://mysite") {
                        provider.set_options({ sourceID: "123" });
                    }
                    else if (_spPageContextInfo.siteAbsoluteUrl === "http://mysite/sub") {
                        provider.set_options({ sourceID: "456" });
                    }
                }

                dfd.resolve();
            
        }).fail(dfd.reject);
        return dfd.promise();
    };

    return Template_toolbar_example;
})(Template_toolbar);
