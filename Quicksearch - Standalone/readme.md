# QuickSearch - Standalone #

## Voraussetzungen ##

Die Datei ``qsloader.js`` verpackt die nötigen Schritte zum Laden 
aller ecspand center-Komponenten in einen bequemen jQuery-
Aufruf und muss zuvor in einer für jeden lesbaren SharePoint-
Bibliothek abgelegt werden.

Alles weitere kann in einem Skript Editor-Webpart untergebracht werden.

```html
// Laden des Skriptes
<script src="http://mysharepoint/scripts/qsLoader.js"></script>

// Definition der Container, in denen die Schnellsuche geladen werden soll
<div id="quickSearchOne"></div>
<div id="quickSearchTwo"></div>

// Alles weitere erfolgt in einem Script-Tag
<script>
    ...
</script>
```

```javascript
// Warten, bis die Seite vollständig geladen wurde
$(function() {
       // Initialisierung der Schnellsuche mit den gewünschten Optionen
       $("#quickSearchOne").ecspandQuickSearch({ redirectToFileView: true}, { 
           titleFormats: [{"contentTypeIDorListID": "0x01", formatString: "{Title} - ({ecsContentType}) | {CreatedOWSDate}"}], 
           additionalSelectProperties: ["ecsContentType", "CreatedOWSDate"],
           filterResults: function(results) { 
				if (results) {
                    // Das Beispiel zeigt, wie man ein Datum nachträglich formatieren kann

                    // Regex zum Auffinden von Datumsfeldern im Format 2015-12-16T12:23:44Z
					var re = new RegExp("(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z)", "gi");

					for (var i = 0; i < results.length; i++) {
						var result = results[i],
							title = result.title, // lediglich der title wird für die Ausgabe in der QuickSearch benötigt
							match = title.match(re);
						
                        // Falls mindestens ein Datum gefunden wurde
						if (match && match.length > 0) {
							var date = null;
							try {
                                // Nur das erste gefundene Datum wird ersetzt
								var d = new Date(match[0]),
									day = d.getDay().toString();

								date = (day.length === 1 ? ("0" + day) : day)
										+ "." + d.getMonth() + "." + d.getFullYear();
							}
							catch(exp) {}

                            // Datum ersetzen und Titel zurück in das results Array schreiben
							if (date) {
								results[i].title = title.replace(re, date);
							}
						}
					}
				}
				
				return results;
		   }
        });
       $("#quickSearchTwo").ecspandQuickSearch({},{}); 
    });
```

## Optionen ##

* Erster Parameter - ecspand.Controls.QuickSearchOptions
 * redirectToFileView?: boolean - standalone sollte hier immer true übergeben werden;
 * redirectUrl?: string - falls auf eine andere Seite weitergeleitet werden soll;
 * openModal?: boolean - falls die FileView in einem modalen Dialog geöffnet werden soll;
* Zweiter Parameter - ecspand.Controls.QuickSearchSPSearchApiProviderOptions
 * sourceID?: string - Guid einer Suchergebnisquelle, um die Suche serverseitig einzuschränken;
 * usePrefixWildcard?: boolean - true, falls immer mit angeführtem * gesucht werden soll - standard: false;
 * useSuffixWildcard?: boolean - true, falls immer mit nachfolgendem * gesucht werden soll - standard: false;
 * additionalSelectProperties?: Array<string> - weitere Parameter (Managed Metadata), die abgerufen werden sollen 
 * filterResults?: (results: Array<QuickSearchResult>) => Array<QuickSearchResult> - Die intern formatierten Suchergebnisse können hier nachträglich vor der Anzeige manipuliert werden
 * titleFormats?: Array<TitleFormat> - hiermit ist es möglich, ein format pro contenttypeguid/listguid anzugeben. 
       > Im Standard verfübare Platzhalter: {Title}, {ListItemID}, {ListID}, {SPSiteURL}, {WebID}
       > <br/>Weitere Platzhalter müssen in den additionalSelectProperties angegeben werden
 
       > Beispiel: <br/>
       > [ { contentTypeIDorListID: "0x012000439A353FFE094B47AD8DC713194C7722", formatString: "{Title} - {feld1OWSTEXT} ({feld2OWSTEXT})" }, 
       > { contentTypeIDorListID: "BA06263B-ECA0-4850-9547-BD373CC534D5", formatString: "{Title} - ({ecsContentType}) " } ];
        