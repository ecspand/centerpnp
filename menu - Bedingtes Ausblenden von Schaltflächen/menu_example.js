/*
 * Copyright 2015 d.velop AG
 */
var Template_menu_example = (function (_super) {
    __extends(Template_menu_example, _super);
    function Template_menu_example(ctx, folder, options) {
        var _this = _super.call(this, ctx, folder, options) || this;
        // ---[ELEMENTS-CONFIG-START]---
        _this._extendDerivedConfig({});
        return _this;
        // ---[ELEMENTS-CONFIG-END]---
    }
    Template_menu_example.prototype.init = function () {
        var _this = this;
        var dfd = $.Deferred();

        // Bevor die eigentliche Logig ausgeführt wird, muss zunächst die PermissionManager Klasse geladen werden - diese kann in einer beliebigen Bibliothek hinterlegt werden
        $.getScript("http://mysite/scripts/permissionmanager.js").then(function () {

            // Initialisierung der Basisklasse sowie der PermissionManager Klasse 
            return $.when(_super.prototype.init.call(this),
                PermissionManager.load(_spPageContextInfo.siteAbsoluteUrl, "Berechtigungen"));

        }).then(function () {
            if (_this.ctx || _this.get_templateConfiguration().get_preventAutoload()) {

                /* Jede hinzugefügte Schaltfläche verfügt über ein Options Objekt, welches automatisch aus der übergeordneten Klasse ermittelt wird. Der Name des Objektes setzt sich
                aus der id der Schaltfläche + "Options" zusammen ("meineSchaltflaeche" + "Options" -> "meineSchaltflaecheOptions").
                Jedes Options Objekt erwartet eine enabled Funktione die eine JQueryPromise<boolean> zurück gibt. Der zurückgegebene Boolean-Wert bestimmt darüber, ob die Schaltfläche ein oder ausgeblendet werden soll */
                _this.meineSchaltflaecheOptions = {
                    enabled: function () {

                        //var spItemPermission = _this.ctx.get_listItem().get_effectiveBasePermissions(); // Berechtigungen des Benutzers auf das aktuelle ListItem

                        var viewModel = _this.ctx.get_viewModel(), // Abruf der formatierten Eigenschaften des aktuellen Elementes
                            def = $.Deferred(),
                            // enabled ist nur dann true, wenn alle Voraussetzungen erfüllt sind - nur dann wird die Schaltfläche eingeblendet
                            enabled = viewModel["meineEigenschaft"] !== undefined // Prüfen ob die nötige Eigenschaft überhaupt vorhanden ist
                                && viewModel["meineEigenschaft"].value === "Ja" // Prüfen ob der wert der Eigenschaften dem gewünschten wert entspricht
                                //&& spItemPermission.has(SP.PermissionKind.editListItems) // Prüfen ob der Benutzer das Element Editieren darf https://msdn.microsoft.com/en-us/library/office/ee556747(v=office.14).aspx
                                && PermissionManager.hasPermission("Registratur"); // Zusätzliche Prüfung ob der Benutzer über die vom PermissonManager verwaltete Berechtigung verfügt

                        // Rückgabe des ermittelten wertes mittels resolve
                        return dfd.resolve(enabled).promise();
                    }
                };


                // ---[ELEMENTS-BLOCK-START]---

                // [EDS:meineSchaltflaeche]
                var elmselftemp = (_this || this), settings = { "showInContextMenu": true, "showInFurtherOptions": true, "showInFileCoverMenu": true, "customTitle": "Schaltflaeche", "customIconSource": "", "customIconStyle": "", "id": "meineSchaltflaeche", "index": -1, "selectedMode": 4 },
                    btn = new ecspand.Templates.Elements.Element_buttonDefaultDialogs(elmselftemp, settings, elmselftemp.viewModel.items, elmselftemp.meineSchaltflaecheOptions || {});
                elmselftemp.deferreds.push(btn.init());
                // [EDE:meineSchaltflaeche]

                // ---[ELEMENTS-BLOCK-END]---
                dfd.resolve();
            }
            else {
                dfd.resolve();
            }
        }).fail(dfd.reject);
        return dfd.promise();
    };
    Template_menu_example.prototype.destroy = function (saveState) {
        var _this = this;
        if (saveState === void 0) { saveState = true; }
        var dfd = $.Deferred();
        var supDestroy = _super.prototype.destroy.call(this, saveState);
        if (supDestroy && supDestroy.always) {
            supDestroy.always(function () {
                _this.container.empty();
                dfd.resolve();
            });
        }
        else {
            dfd.resolve();
        }
        return dfd.promise();
    };
    return Template_menu_example;
}(Template_menu));
//# sourceURL=menu_example.js
