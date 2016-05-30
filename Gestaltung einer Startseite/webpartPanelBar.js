$.fn.webpartPanelBar = function() {

	var $elements = this,
        $panelbar = null,
        throbber = null ;
        
    $elements.children().hide();

    function init() {
        // Legt um alle WebParts in einem container einen Container in dem die PanelPar gerendert werden soll
        $elements.each(function() { 
            $(this).find(".ms-rte-wpbox").hide().wrapAll("<ul class='panelbar' style='position: relative; height: 100%; width: 100%;'></ul>");
        });

        $panelbar = $(".panelbar");
        
        throbber = new ecspand.Controls.Throbber($(document.body));
        $elements.children().show();
        throbber.show();
            
        // Legt wiederum um alle Webparts ein List-Element zur Darstellung eines Panels und initialisiert die kendoPanelBar 
        $panelbar.each(function(index, element) {
            var $pb = $(this),
                $webparts = $pb.find(".ms-rte-wpbox");
                
            
            
            $webparts.wrap("<li style='display:none;'></li>");
            
            $webparts.each(function(index, element) {
                
                // Zusätzlich wird noch WebpartTitel ermittelt und in das Panel als Überschrift geschrieben
                var $webpart = $(this),
                    $webpartpbTitle = $webpart.find(".ms-webpart-chrome-title");
                
                // Zusätzlich wird noch WebpartTitel ermittelt und in das Panel als Überschrift geschrieben 
                $webpart.parent("li").prepend("<span class='k-link'>" + $webpartpbTitle.text() + "</span>");
                $webpartpbTitle.hide();
            });
            
            // Initialisierung der kendoPanelBar
            $pb.kendoPanelBar({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
            
            // Abruf der kendoPanelBar Instanz
            var kendoPanelBar = $pb.data("kendoPanelBar");
            kendoPanelBar.select("li:eq(0)").expand("li:eq(0)");
            
            // Panelbar nach einiger Zeit wieder einblenden
            setTimeout(function() {
                $pb.find("li").fadeIn();
                throbber.hide(true);
            }, 1500);
            
            $pb.bind("destroy", function() {
                $(this).data("kendoPanelBar").destroy();
                throbber.destroy();
            });
        });
        
    }
    
    function destroy() {
        $panelbar.trigger("destroy");
    };
    
    function _load() {

        // Alle benötigten ecspand center Scripte werden geladen
        ecspand.Prerequesite.load().done(function() {

            init();

            // Verlässt man die Seite, so muss der Speicher ggf. explizit freigegeben werden
            $(window).unload(function() {
                destroy();
            });
        });

    }

    // Sicherstellen, dass die benötigten Sharepoint Scripte geladen wurden
    SP.SOD.executeOrDelayUntilScriptLoaded(function() {
    // Soll nur dann geladen werden, wenn man sich nicht im edit modus befindet
        if (!SP.Ribbon.PageState.Handlers.isInEditMode()) {
            
            // Für den Fall, dass alle ecspand Scripte bereits geladen wurden
            if (window.ecspand && window.ecspand.Prerequesite) {
                _load();
            }
            else {
                $.getScript(_spPageContextInfo.siteAbsoluteUrl + "/_layouts/15/ECSpand/Center/Scripts/Helper/Prerequesite.js").done(function() {
                    _load();
                });
            }
        }
        else {
            $elements.children().show();
        }
    }, "SP.Ribbon.js");
	
};
//# sourceURL=ecspandWebpartPanelBar.js