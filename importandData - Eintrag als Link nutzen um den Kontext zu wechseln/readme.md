# importantData - Eintrag als Link nutzen um den Kontext zu wechseln #

``ImportantData`` lassen sich im Standard nur für die reine Anzeige von "wichtigen Informationen" nutzen. Möchte man hier jedoch 
weitere Funktionalitäten, wie z.B. eine Click-Funktion, anbieten, so ist dies mit ein paar einfachen Schritten möglich.
<br/>
Konkret wird in dem Beispiel der Fall behandelt, dass ein ``importantData`` Eintrag nur dann als Link dargestellt wird, wenn im Feld
``Kundennummer`` der Wert ``100001`` steht.
<br/>
Des Weiteren wird hier ein Beispiel aufgezeigt, wie man den aktuellen Kontext wechseln kann. Voraussetzung hierfür ist, dass zuvor ein ecspand.ElementContext Objekt
abgerufen wurde, welches anschließend mittels ``this._trigger("select", args: ecspand.Args.ElementSelectedArgs)`` als aktueller Kontext
gesetzt werden kann. Dies ist aus jedem DisplayTemplate möglich.

## Voraussetzungen ##

Ableitung der des ``importandData``-DisplayTemplates.

## Erweiterung des Templates ##

Das DisplayTemplate muss um folgende Methoden ergänzt und der Code für den einen speziellen Fall angepasst werden.

```javascript
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
```

