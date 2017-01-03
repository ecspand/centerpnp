/*
 * Copyright 2015 d.velop AG
 */
var Template_grid_example = (function (_super) {
    __extends(Template_grid_example, _super);
    function Template_grid_example(ctx, folder, options) {
        _super.call(this, ctx, folder, options);
        // ---[ELEMENTS-CONFIG-START]---
        this.extendedConfigSerialized = '{}';
        // ---[ELEMENTS-CONFIG-END]---
    }

    Template_grid_example.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();
        var self = this;
        
        // Weiter mit dem Standard-Vorgehen
        return _super.prototype.init.call(_this).done(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {
                // ---[ELEMENTS-BLOCK-START]---
                // ---[ELEMENTS-BLOCK-END]---
                
                // Aufruf der Logik zum Hinzufügen der neuen column
                _this.addThumbnail();
                
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        });
    };
    
    Template_grid_example.prototype.addThumbnail = function () {
        var _this = this;
        
        // Temporärer Workaround um ein Timingproblem zu lösen
        setTimeout(function() {

            var oldColumns = _this.grid.options.columns, // zuvor anhand der aktuellen View intern generierte Columns
                template = "#= Template_grid_example.formatThumbnail(data,'FileLeafRef') #", // Kendo ruft intern eine angegebene Funktion auf in der die column gerendert werden soll. Diese muss immer statisch sein
                newColumn = { field: "FileLeafRef", title: "Thumbnail", width: 150, template: template, sortable: false, filterable: false, internalName: "FileLeafRef" };
                
            // Icon wird durch das Thumbnail ersetzt
            oldColumns.splice(0, 1, newColumn);
                
            _this.grid.setOptions({ columns: oldColumns });
            _this.grid.refresh();

            _this.resize();
        }, 10);
    };
    
    // Statische Funktion zum generieren der Column
    Template_grid_example.formatThumbnail = function(data, field) {

        var template = '<img src="{0}" style="height: 150px" onload="SP.ScriptHelpers.resizeImageToSquareLength(this, 150)"/>',
            thumbnailExists = data["ThumbnailExists"],
            thumbnailExistsValue = thumbnailExists && thumbnailExists.value && (thumbnailExists.value === "Ja" || thumbnailExists.value === "Yes") ? true : false,
            fileDirRef = data["FileDirRef"],
            fileDirRefValue = fileDirRef && fileDirRef.value ? fileDirRef.value : "",
            siteUrl = data["_siteUrl"],
            item = data[field],
            value = item && item.value ? item.value : "";
        
        if (thumbnailExistsValue) {
            return template.format(siteUrl + fileDirRefValue + "/_w/" + value.replace(/\./g, "_") + ".jpg");
        }
        else {
            return template.format("/_layouts/15/images/256_icgen.png");
        }
        
    };

    Template_grid_example.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };

    return Template_grid_example;
})(Template_grid);

//# sourceURL=grid_example.js