/*
 * Copyright 2015 d.velop AG
 */
var Template_imageViewer_video = (function(_super) {
    __extends(Template_imageViewer_video, _super);
    function Template_imageViewer_video(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_imageViewer_video.prototype.init = function() {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;

        if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {

            // Url der anzuzeigenden Datei ermitteln
            this.ctx.getServerRelativeFileUrl().then(function(serverRelativeUrl) {

                var extensionIndex = serverRelativeUrl.lastIndexOf(".") + 1,
                    extension = serverRelativeUrl.substr(extensionIndex);
                
                // Falls es sich um eine mp4 Datei handelt, soll ein Video anstelle des DocumentViewers embeded werden
                if (extension === "mp4") {
                    _this.container.find(".dvContainer").append('<embed width="100%" height="400" src="' + ecspand.Core.getServerUrl() + serverRelativeUrl + '" type="video/mp4" loop="false" autoplay="false">');
                    dfd.resolve();
                }
                else {
                    _super.prototype.init.call(_this).done(function() {
                        if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                            // ---[ELEMENTS-BLOCK-START]---
                            // ---[ELEMENTS-BLOCK-END]---
                            dfd.resolve();
                        }
                        else {
                            dfd.resolve();
                        }
                    }).fail(dfd.reject);
                }

            });
        }
        else {
            dfd.resolve();
        }


        return dfd.promise();
    };

    Template_imageViewer_video.prototype.destroy = function() {
        _super.prototype.destroy.call(this);
    };

    return Template_imageViewer_video;
})(Template_imageViewer);
//# sourceURL=imageViewer_video.js 
