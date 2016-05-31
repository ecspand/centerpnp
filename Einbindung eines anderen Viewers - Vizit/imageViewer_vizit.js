/*
 * Copyright 2015 d.velop AG
 */
var Template_imageViewer_vizit = (function (_super) {
    __extends(Template_imageViewer_vizit, _super);
    function Template_imageViewer_vizit(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_imageViewer_vizit.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        
        if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
            
            // Url der anzuzeigenden Datei ermitteln
            this.ctx.getServerRelativeFileUrl().then(function(serverRelativeUrl) {
                
                try {
                    // Optionen beinhalten u.a. die Information darüber wo drin der Viewer gerendert werden soll, hier wird der für die Viewer vorgesehene container ermittelt und das HTMLElement übergeben
                    var vizitOptions = { renderTo: _this.container.find(".dvContainer")[0], autoShow: true },
                        // Für die Ermittlung des Elementes benötigt der Vizit Viewer lediglich die absolute Url der Datei
                        itemObject = { url: ecspand.Core.getServerUrl() + serverRelativeUrl };
                        
                    // Viewer Erstellen (weitere Informationen findet man unter http://files.vizit.com/public/docs/4.0/symbols/Vizit.Essential.Manager.html)
                    Vizit.Essential.Manager.Create("centerVizit", vizitOptions);
                    // Setzen des Items
                    Vizit.Essential.Manager.Open("centerVizit", itemObject);
                    
                    // Der Visit Viewer wird standardmäßig mit einem fürs center zu geringem z-index dargestellt
                    $(".x-panel").css({ zIndex: 10});
                
                    dfd.resolve();
                }
                catch (err) {
                    // Tritt beim Laden des Viewers ein Fehler auf, so können Ausführliche Informationen im Browser-Log oder als Notification ausgegeben werden
                    dfd.reject(ecspand.Helper.Exception.createAndLogException({
                        instance: this, method: "init", 
                        notificationMessage: "Vizit Viewer konnte nicht geladen werden. Bitte stellen Sie sicher, dass alle Komponenten installiert wurden und eine gültige Lizenz vorhanden ist.<br/> Weiter Informationen finden Sie im Browser-Log.",
                        message: "Vizit Viewer konnte nicht geladen werden", error: err
                    }, false, true));
                }
            });
        }
        else {
            dfd.resolve();
        }
        
        // Wird nicht mehr benötigt, wenn der vizit Viewer alle Viewer ersetzen soll
        /*_super.prototype.init.call(this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);*/
        
        return dfd.promise();
    };
    
    Template_imageViewer_vizit.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    
    return Template_imageViewer_vizit;
})(Template_imageViewer);
//# sourceURL=imageViewer_vizit.js 
