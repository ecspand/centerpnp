/*
 * Copyright 2015 d.velop AG
 */
/* This template shows only some quickSearch mechanisms. For a basic template description take a look at the fileCoverMenuExample template */
var Template_quickSearchExample = (function (_super) {
    __extends(Template_quickSearchExample, _super);
    function Template_quickSearchExample(ctx, folder, options) {
        var _this = _super.call(this, ctx, folder, options) || this;
        // ---[ELEMENTS-CONFIG-START]---
        _this.extendedConfigName = "quickSearchExtended";
        return _this;
        // ---[ELEMENTS-CONFIG-END]---
    }

    /* List of variables and methods you can use:
    Variables and methods, that are available only in the Template_quickSearch class and their derivations:

    - quickSearch: ecspand.Controls.QuickSearch - the QuickSearch control/widget - instantiated in the initQuickSearch method

    */

    Template_quickSearchExample.prototype.init = function () {
        var _this = this,
            dfd = $.Deferred();

        _super.prototype.init.call(this).done(function () {

            var provider = _this.quickSearch.get_provider();

            /*## Optionen ##
            
            * ecspand.Controls.QuickSearchOptions
             * redirectToFileView?: boolean - standalone sollte hier immer true übergeben werden;
             * redirectUrl?: string - falls auf eine andere Seite weitergeleitet werden soll; Beispiel: _this.quickSearch.set_options({ redirectUrl: "/_layouts/15/ECSpand/Center/pages/FileView.aspx?cmDVPriorityOrder=2,1,0" })
             * openModal?: boolean - falls die FileView in einem modalen Dialog geöffnet werden soll; 
             * 
             * + Weitere Optionen der kendo Autocomplete Textbox https://docs.telerik.com/kendo-ui/api/javascript/ui/autocomplete (!!! Nicht alle Optionen wurden von uns getestet !!!) 
             * 
            _this.quickSearch.set_options({
                // Optionen
            });*/


            /* Beispiel: HTML Templates. Möchte man HTML in der QuickSearch verwenden, so muss hierfür ein spezielles Template hinterlegt werden 
               Zwischen #: # kann auf globale Variablen sowie auf das von kendo reingereichte gefundene Item zugegriffen werden. Standardmäßig wird von der QuickSearch das Feld
               title verwendet. Alle anderen, von der Suche gefundenen Eigenschaften, werden über dataItem.Cells.Results (Array) reingereicht. Das Value wird mittels dataItem.Cells.results[2].Value (in dem Fall "Title") angezeigt
            */
            _this.quickSearch.set_options({ template: '#: dataItem.Cells.results[2].Value # <i>#: dataItem.Cells.results[1].Value #</i>' });

            /* Beispiel: Suche in Abhängigkeit zum aktuellen Element */
            _this.quickSearch.get_provider().set_options({
                manipulateSearchQuery: function(sq) {

                    // Suche nach dem querytext Parameter
                    var reg = new RegExp("querytext='([^']*)'", 'i'),
                        vm = _this.ctx.get_viewModel(), // Formatierte eigenschaften des aktuellen Elementes
                        replaceString = null;

                    
                    /* Bilden des neuen querytext parameters - es kann explizit in beliebigen Feldern gesucht werden und diese per OR oder AND verknüpft werden. 
                    Somit lassen sich bereits viele Szenarien aus dem Aktenplan abbilden. Idealerweise mit einer vorkonfigurierten Ergebnissquelle verwenden */


                    /* Falls das Feld ecsProjektnummer existiert*/
                    if (vm["ecsProjektnummer"]) {
                        replaceString = "querytext='ecsProjektnummer:{0} AND $1'".format(vm["ecsProjektnummer"].value); // Textformat: VerwaltetEigenschaft:Value AND (der eigentliche Suchwert aus der QuickSearch)
                    }

                    // Falls die Felder ecsProduktnummer und ecsProduktversion existiert
                    if (vm["ecsProduktnummer"] && vm["ecsProduktversion"]) {
                        replaceString = "querytext='ecsProduktnummer:{0} AND ecsProduktversion:{1} AND $1'".format(vm["ecsProduktnummer"].value, vm["ecsProduktversion"].value);
                    }
                    
                    
                    // Falls der replaceString gesetzt wurde, wird dieser in der ursprünglichen URL ersetzt und zurückgegeben, ansonsten wird die unveränderte URL zurückgegeben 
                    return replaceString ? sq.replace(reg, replaceString) : sq;
                }
            });


            /* ecspand.Controls.QuickSearchSPSearchApiProviderOptions
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
                  > { contentTypeIDorListID: "BA06263B-ECA0-4850-9547-BD373CC534D5", formatString: "{Title} - ({ecsContentType}) " } ]; */
            provider.set_options({
                // Optionen
            });

            dfd.resolve();

        }).fail(dfd.reject);

        return dfd.promise();
    };

    return Template_quickSearchExample;
}(Template_quickSearch));
//# sourceURL=quickSearchExample.js 
