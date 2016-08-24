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
            
            // URL der anzuzeigenden Datei ermitteln
            this.ctx.getServerRelativeFileUrl().then(function(serverRelativeUrl) {
                
                // Falls es sich um ein Link-archiviertes Dokument handelt, durchläuft es weiterhin die Standard-Routine
                if (serverRelativeUrl.indexOf(".ecs") === -1) {

                    try {
                        // Optionen beinhalten u.a. die Information darüber, worin der Viewer gerendert werden soll. Hier wird der für die Viewer vorgesehene Container ermittelt und das HTML-Element übergeben
                        var vizitOptions = { renderTo: _this.container.find(".dvContainer")[0], autoShow: true },
                            // Für die Ermittlung des Elementes benötigt der Vizit Viewer lediglich die absolute URL der Datei
                            itemObject = { url: ecspand.Core.getServerUrl() + serverRelativeUrl };
                            // alternativ mittels ListId und ItemID (evtl nur im aktuellen Web möglich)
                            // itemObject = { list: _this.ctx.get_list().get_id().toString(), item: _this.ctx.get_listItem().get_id().toString() };

                        // Viewer erstellen (für weitere Informationen siehe http://files.vizit.com/public/docs/4.0/symbols/Vizit.Essential.Manager.html)
                        Vizit.Essential.Manager.Create("centerVizit", vizitOptions);
                        // Setzen des Items
                        Vizit.Essential.Manager.Open("centerVizit", itemObject);
                        
                        // Der Vizit Viewer wird standardmäßig mit einem für das center zu geringem z-Index dargestellt
                        $(".x-panel").css({ zIndex: 10});
                    
                        dfd.resolve();
                    }
                    catch (err) {
                        // Tritt beim Laden des Viewers ein Fehler auf, können ausführliche Informationen im Browser-Log oder als Benachrichtigung ausgegeben werden
                        dfd.reject(ecspand.Helper.Exception.createAndLogException({
                            instance: this, method: "init", 
                            notificationMessage: "Der Vizit Viewer konnte nicht geladen werden. Bitte stellen Sie sicher, dass alle Komponenten installiert wurden und eine gültige Lizenz vorhanden ist.<br/> Weitere Informationen finden Sie im Browser-Log.",
                            message: "Der Vizit Viewer konnte nicht geladen werden", error: err
                        }, false, true));
                    }
                }
                else {
                    _super.prototype.init.call(this).done(function () {
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
                
        return dfd.promise();
    };
    
    Template_imageViewer_vizit.prototype.destroy = function () {

        // Zerstört alle erstellen Vizit Instanzen
        Vizit.Essential.Manager.Clear();

        _super.prototype.destroy.call(this);
    };
    
    return Template_imageViewer_vizit;
})(Template_imageViewer);
//# sourceURL=imageViewer_vizit.js 
