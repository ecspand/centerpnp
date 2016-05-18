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
        location.href = "http://www.bing.com?q=" + value;
    };
    Template_importantData_example.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return Template_importantData_example;
})(Template_importantData);
//# sourceURL=importantData_example.js 
