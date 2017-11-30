$.fn.ecspandQuickSearch = function(quickSearchOptions, providerOptions) {

    var selector = this.selector,
        qsGlobal = null,
        $container = null;

    function init() {

        $container = $(selector);
        if ($container.length > 0) {
            // Initialisierung der Schnellsuche mit dem vorgegebenen Container und den übergebenen Optionen
            var qs = new ecspand.Controls.QuickSearch($container, quickSearchOptions);

            // Falls Optionen für den Provider übergeben wurden, werden sie hier weitergereicht
            if (providerOptions) {
                var provider = qs.get_provider();
                provider.set_options(providerOptions);
            }
            
            // Wird für das disposing benötigt - ansonsten funktioniert IntelliSense nicht
            qsGlobal = qs;
        }
    };

    function destroy() {
        if (qsGlobal) {
            qsGlobal.destroy();
        }
    };

    function _load() {

        // Alle benötigten ecspand center-Skripte werden geladen
        return ecspand.Prerequesite.load().done(function() {

            init();

            // Verlässt man die Seite, muss der Speicher ggf. explizit freigegeben werden
            $(window).unload(function() {
                destroy();
            });
        });

    }

    // Für den Fall, dass alle ecspand-Skripte bereits geladen wurden
    if (window.ecspand && window.ecspand.Prerequesite) {
        _load();
    }
    else {
        $.getScript(_spPageContextInfo.siteAbsoluteUrl + "/_layouts/15/ECSpand/Center/Scripts/Helper/Prerequesite.js").done(function() {
            return _load();
        }).fail(function(error) {
            console.error("Could not load the quicksearch")
        });
    }

};

//# sourceURL=ecspandQuickSearch.js