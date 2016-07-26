$.fn.webpartPanelBar = function() {

	var $elements = this,
        $panelbar = null,
        throbber = null ;
        
    $elements.children().hide();

    function init() {
        // Legt um alle Webparts in einem Container einen Container, in dem die Panel Bar gerendert werden soll
        $elements.each(function() { 
            $(this).find(".ms-rte-wpbox").hide().wrapAll("<ul class='panelbar' style='position: relative; height: 100%; width: 100%;'></ul>");
        });

        $panelbar = $(".panelbar");
        
        throbber = new ecspand.Controls.Throbber($(document.body));
        $elements.children().show();
        throbber.show();
            
        // Legt wiederum um alle Webparts ein List-Element zur Darstellung eines Panels und initialisiert die Kendo Panel Bar 
        $panelbar.each(function(index, element) {
            var $pb = $(this),
                $webparts = $pb.find(".ms-rte-wpbox");
                
            
            
            $webparts.wrap("<li style='display:none;'></li>");
            
            $webparts.each(function(index, element) {
                
                // Zusätzlich wird noch der Webpart-Titel ermittelt und als Überschrift in das Panel geschrieben
                var $webpart = $(this),
                    $webpartpbTitle = $webpart.find(".ms-webpart-chrome-title");
                
                // Zusätzlich wird noch der Webpart-Titel ermittelt und als Überschrift in das Panel geschrieben 
                $webpart.parent("li").prepend("<span class='k-link'>" + $webpartpbTitle.text() + "</span>");
                $webpartpbTitle.hide();
            });
            
            // Initialisierung der Kendo Panel Bar
            $pb.kendoPanelBar({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });
            
            // Abruf der Kendo Panel Bar-Instanz
            var kendoPanelBar = $pb.data("kendoPanelBar");
            kendoPanelBar.select("li:eq(0)").expand("li:eq(0)");
            
            // Panel Bar nach einiger Zeit wieder einblenden
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

        // Alle benötigten ecspand center-Skripte werden geladen
        ecspand.Prerequesite.load().done(function() {

            init();

            // Verlässt man die Seite, muss der Speicher ggf. explizit freigegeben werden
            $(window).unload(function() {
                destroy();
            });
        });

    }

    // Sicherstellen, dass die benötigten SharePoint-Skripte geladen wurden
    SP.SOD.executeOrDelayUntilScriptLoaded(function() {
    // Soll nur dann geladen werden, wenn man sich nicht im Bearbeitungsmodus befindet
        if (!SP.Ribbon.PageState.Handlers.isInEditMode()) {
            
            // Für den Fall, dass alle ecspand-Skripte bereits geladen wurden
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