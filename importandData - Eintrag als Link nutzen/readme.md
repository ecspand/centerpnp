# importantData - Eintrag als Link nutzen #

``ImportantData`` lassen sich im Standard nur für die reine Anzeige von "wichtigen Informationen" nutzen. Möchte man hier jedoch 
weitere Funktionalitäten, wie z.B. eine Click-Funktion, anbieten, so ist dies mit ein paar einfachen Schritten möglich.
<br/>
Konkret wird in dem Beispiel der Fall behandelt, dass ein ``importantData`` Eintrag nur dann als Link dargestellt wird, wenn im Feld
``Kundennummer`` der Wert ``100001`` steht.

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
    location.href = "http://www.bing.com?q=" + value;
};
```

