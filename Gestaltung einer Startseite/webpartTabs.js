$.fn.webpartTabs = function() {

    var $elements = this,
        $tabstrip = null,
        throbber = null;

	if (!$elements || !$elements.length) {
		console.warn("Es wurde kein Element zum Binden der Tabs gefunden");
		return;
	}
	
    $elements.children().hide();

    function init() {
        // Legt um alle Webparts in einem Container einen Container, in dem die Tabs gerendert werden sollen
        $elements.each(function() {
            $(this).find(".ms-rte-wpbox").hide().wrapAll("<div class='tabstrip' style='position: relative; height: 100%; width: 100%;'></div>");
        });

        $tabstrip = $(".tabstrip");

        throbber = new ecspand.Controls.Throbber($(document.body));
        $elements.children().show();
        throbber.show();

        // Legt wiederum um alle Webparts ein List-Element zur Darstellung eines Panels und initialisiert die kendoTabStrip
        $tabstrip.each(function(index, element) {
            var $ts = $(this),
                $webpartsTitle = $ts.find(".ms-rte-wpbox .ms-webpart-chrome-title");

            $ts.prepend("<ul></ul>");

            var $ul = $ts.find("ul");

            $webpartsTitle.each(function(index, element) {
                var $title = $(this);
                $ul.append("<li class='tabItem' style='display:none'>" + $title.text() + "</li>");
                $title.hide();
            });

            // Initialisierung der kendoTabStrip
            $ts.kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                }
            });

            // Abruf der kendoTabStrip-Instanz
            var kendoTabStrip = $ts.data("kendoTabStrip");
            kendoTabStrip.select("li:eq(0)");

            // TabStrip nach einiger Zeit wieder einblenden
            setTimeout(function() {
                $ts.find("li").fadeIn();
                throbber.hide(true);
            }, 1500);

            $ts.bind("destroy", function() {
                $(this).data("kendoTabStrip").destroy();
                throbber.destroy();
            });
        });

    }

    function destroy() {
        $tabstrip.trigger("destroy");
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
//# sourceURL=ecspandWebpartTabs.js