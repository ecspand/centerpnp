/*
 * Copyright 2015 d.velop AG
 */
var Template_tabs_example = (function (_super) {
    __extends(Template_tabs_example, _super);
    function Template_tabs_example(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }

    // Überschreiben der addItems Methode - Vor dem eigentlichen hinzufügen der Tabs muss die Option dataImageUrlField gesetzt werden
    Template_tabs_example.prototype.addItems = function() {

        // Hierdurch wird bestimmt, welches Feld des "TabFolderItems" als IconSource gewählt wird
        this.tabStrip.options.dataImageUrlField = "imageUrl";

        // Aufruf der addItems Methode aus der Basis-Klasse 
        _super.prototype.addItems.call(this);
    };

    // Überschreiben der createTabFolderItem Methode - hier werden viewModels der einzelnen Tabs generiert. Dies nutzen wir um eine neue Eigenschaft "imageUrl" hinzuzufügen
    Template_tabs_example.prototype.createTabFolderItem = function (folder) {

        // Erstellung des viewModels mittels der createTabFolderItem Methode aus der Basis-Klasse
        var item = _super.prototype.createTabFolderItem.call(this, folder);
        
        // Ergänzung um "imageUrl" Eigenschaft und Rückgabe des Elementes
        return $.extend(item, { imageUrl: folder.get_viewOptions().IconURL });
    };

    return Template_tabs_example;
})(Template_tabs);
