# QuickSearch - Standalone #

## Voraussetzungen ##

Die Datei ``qsloader.js`` verpackt die nötigen Schritte zum Laden 
aller ecspand center Komponenten in einen bequemen jQuery 
Aufruf und muss zuvor in einer für jeden lesbaren SharePoint 
Bibliothek abgelegt werden.

Alles weitere kann in einem Script-Editor Webpart untergebracht werden.

```html
// Laden des Scripts
<script src="http://mysharepoint/scripts/qsLoader.js"></script>

// Definition der Container in denen die QuickSearch geladen werden soll
<div id="quickSearchOne"></div>
<div id="quickSearchTwo"></div>

// Alles weitere erfolgt in einem Script Tag
<script>
    ...
</script>
```

```javascript
// Warten bis die Seite vollständig geladen wurde
$(function() {
       // Initialisierung der QuickSearch mit den gewünschten Optionen
       $("#quickSearchOne").ecspandQuickSearch({ redirectToFileView: true}, { 
           titleFormats: [{"contentTypeIDorListID": "0x01", formatString: "{Title} - ({ecsContentType})"}], 
           additionalSelectProperties: ["ecsContentType"]
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
 * sourceID?: string - Guid einer Suchergebnisquelle um die Suche serverseitig einzuschränken;
 * usePrefixWildcard?: boolean - true falls immer mit angeführtem * gesucht werden soll - standard: false;
 * useSuffixWildcard?: boolean - true falls immer mit nachfolgendem * gesucht werden soll - standard: false;
 * additionalSelectProperties?: Array<string> - weitere Parameter (Managed Metadata) die abgerufen werden sollen 
 * titleFormats?: Array<TitleFormat> - hiermit ist es möglich ein format pro contenttypeguid/listguid anzugeben. 
       > Im Standard verfübare Platzhalter: {Title}, {ListItemID}, {ListID}, {SPSiteURL}, {WebID}
       > <br/>Weitere Platzhalter müssen in den additionalSelectProperties angegeben werden
 
       > Beispiel: <br/>
       > [ { contentTypeIDorListID: "0x012000439A353FFE094B47AD8DC713194C7722", formatString: "{Title} - {feld1OWSTEXT} ({feld2OWSTEXT})" }, 
       > { contentTypeIDorListID: "BA06263B-ECA0-4850-9547-BD373CC534D5", formatString: "{Title} - ({ecsContentType}) " } ];
        