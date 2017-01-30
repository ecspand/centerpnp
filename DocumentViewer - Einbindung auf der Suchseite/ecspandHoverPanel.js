$.fn.ecspandHoverPanel = function() {

	var selector = this.selector;
	var hp = null;
	
	function init() {
			
		$grid = $(selector);
		if ($grid.length > 0) {
			var telerikGrid = $find($grid.attr("id")), 
                mtv = telerikGrid.get_masterTableView();
			
            // Das HoverPanel wird an die Titel-Spalte gehängt
			hpTemp = new ecspand.Controls.HoverPanel($grid.find("tr td a.TitleLink"));
            
            // Verbleibt der Mauszeiger 400ms über der Titel-Spalte, wird das Hoverpanel angezeigt
			hpTemp.showOnMouseOverDelayed(400, function(e) {
				
                // Ermittlung der Row, über der sich die Maus befindet
				var $row = $(e.toElement).parents("tr:eq(0)");
				
                // Die zur Ermittlung des eigentlichen Items benötigten Informationen werden im dataItems Object der MasterDataView mitgeführt und können pro Row abgerufen werden
				var items = mtv.get_dataItems(),
				index = $row.index() - $row.prevAll(".rgGroupHeader").length, // Für den Fall, dass die Gruppierung aktiv ist, muss die Anzahl der vorherigen Gruppen abgezogen werden
				item = items[index],
				isDocumentType = item.getDataKeyValue("IsDoc") === "1" || item.getDataKeyValue("IsDoc").toLowerCase() === "true",
				itemId = item.getDataKeyValue("ID"),
				listId = item.getDataKeyValue("ListId"),
				webId = item.getDataKeyValue("WebId"),
				siteId = item.getDataKeyValue("SiteId");
				
                // Das HoverPanel soll nur angezeigt werden, wenn es sich um ein Dokument handelt
				if (isDocumentType) {
									
                    // Mit Hilfe der zuvor ermittelten Informationen kann nun das benötigte ElementContext Object erstellt werden
					ecspand.SPObjectContainer.getCurrent().getElementContextWithWebID(_spPageContextInfo.siteAbsoluteUrl, new SP.Guid(webId), new SP.Guid(listId), 
						parseInt(itemId)).done(function(ctx) {
                            
                            // Ein neuer Container für die Darstellung des Document Viewers wird erstellt. Die Größe kann beliebig gewählt werden.
							var div = $("<div>").width("500px").height("600px");
                            // Container wird dem HoverPanel hinzugefügt
							hpTemp.setContent(div);
                            
							var dv = new ecspand.Controls.DocumentViewer(div, {});
                            // Um das eigentliche Dokument laden zu können, muss ein ElementContext Object übergeben werden
							dv.setDocument(ctx);
                            
                            // Wird das HoverPanel zerstört, müssen auch alle Document Viewer zerstört werden
                            hpTemp.bind("destroy", function() {
                               dv.destroy(); 
                            });
						});
				}
				else {
					hpTemp.hide();
				}
			
			}, true);
            
            hp = hpTemp;
		}
	};
	
	function destroy() {
		if (hp) {
			hp.destroy();
		}
	};
	
	
	function _load() {

        // Alle benötigten ecspand center-Skripte werden geladen
        ecspand.Prerequesite.load().done(function() {

            init();

            // Verlässt man die Seite, muss der Speicher ggf. explizit freigegeben werden
            $(window).unload(function() {
                destroy();
            });
            
            // Bei jedem Postback muss das Skript neu initialisiert werden
            var prm = Sys.WebForms.PageRequestManager.getInstance();
			prm.add_endRequest(function(sender, args) {
				destroy();
				setTimeout(function() {
					init();
				}, 0);
			}); 

        });

    }

    // Für den Fall, dass alle ecspand Skripte bereits geladen wurden
    if (window.ecspand && window.ecspand.Prerequesite) {
        _load();
    }
    else {
        $.getScript(_spPageContextInfo.siteAbsoluteUrl + "/_layouts/15/ECSpand/Center/Scripts/Helper/Prerequesite.js").done(function() {
            _load();
        });
    }
	
};


// Automatisches Binden an das Grid der Seite. Befinden sich noch andere Grids auf der Seite, muss der Selector entsprechend angepasst werden
$("div[id$='_Grid']").ecspandHoverPanel();

//# sourceURL=ecspandHoverPanel.js