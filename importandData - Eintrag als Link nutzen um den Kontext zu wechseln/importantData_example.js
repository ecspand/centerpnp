/*
 * Copyright 2015 d.velop AG
 */
var Template_importantData_example = (function (_super) {
    __extends(Template_importantData_example, _super);
    function Template_importantData_example(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{"properties":["Modified","Kundennummer"]}';
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_importantData_example.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
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
        return dfd.promise();
    };
    
    // Die format Methode wird automatisch nach der Initialisierung der Elemente aufgerufen
    Template_importantData_example.prototype.format = function () {
        // Aufruf der format Methode aus der Basis-Klasse (Template_importantData)
        _super.prototype.format.call(this);
           
        if (this.ctx) {
            
            // In diesem Beispiel soll ein Eintrag aus den importantData als Link dargestellt werden,
            // wenn im Feld Kundennummer der Wert "100001" steht
            var internalFieldName = "Kundennummer",
                caseValue = "100001",
                field = this.ctx.get_viewModel()[internalFieldName],
                value = null,
                $element = null;
            
            // Falls das Feld nicht exisiert wird die Behandlung übersprungen
            if (field) {
                value = field.value; 
                
                // wenn der Wert dem gewünschten Wert übereinstimmt
                if (value === caseValue) {
                    
                    // Den Container des Elementes mit dem displayName des Feldes finden
                    $element = this.container.find(".item span:contains(" + field.title + ")").parent();
                    
                    // und die gewünschten Styles zuweisen
                    $element.css({
                        cursor: "pointer", 
                        color: "#0072C6",
                        textDecoration: "underline" 
                    })
                    
                    // Um eventuellen Speicherlecks vorzubeugen wird die click-Methode 
                    // ausgelagert und die benötigten Parameter als zweiter Parameter der Bind-Methode übergeben
                    $element.click(this.onFieldClick.bind(this, value));
                    
                    // alternativ andere CSS Klasse hinzufügen
                    // $element.addClass("link")
                }
            }
        }
    };
    Template_importantData_example.prototype.onFieldClick = function(value) {
        
        // Einfachs Beispiel - externe Seite aufrufen
        // location.href = "http://www.bing.com?q=" + value;
        
        // Komplexes Beispiel - ElementContext abrufen und in das Element (MasterDetailView) abspringen
        
        // Im Beispiel beinhaltet das Feld "Kundennummer" eine ID (number) zu einem anderen Element in der selben Liste
        var itemID = parseInt(value);
        
        // Abruf des Contextes mittels siteUrl, webRelativeUrl, listID und itemID
        // roID ist optional, wird diese nicht übergeben wird die des aktuellen Contextes genommen
        ecspand.SPObjectContainer.getCurrent().getElementContext(
            this.ctx.get_site().get_url(), this.ctx.get_webRelativeUrl(), this.ctx.get_list().get_id(), itemID, this.ctx.get_roID())
            .done(function(newCtx) {
        
                // args vom Typ ecspand.Args.ElementSelectedArgs zum wechseln des Contextes
                var args = {
                    element: newCtx, // Das Element welches in der MasterDetail View angezeigt werden soll
                    folder: this.folder, // Der Ordner aus dem das Element selektiert wurde
                    viewType: ecspand.Args.ElementSelectedViewType.File // File == MasterDetailView, Folder == FolderView
                };
                
                // Event wird gefeuert und von der obsersten Instanz abgefangen um anschließend den Context neu zu setzen
                this._trigger("select", args);
            });
    };
    Template_importantData_example.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return Template_importantData_example;
})(Template_importantData);
//# sourceURL=importantData_example.js 
