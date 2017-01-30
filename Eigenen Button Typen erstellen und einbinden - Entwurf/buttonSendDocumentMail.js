var Element_buttonSendDocumentMail = (function (_super) {
    __extends(Element_buttonSendDocumentMail, _super);
    function Element_buttonSendDocumentMail() {
        _super.apply(this, arguments);
        // ID des Templates, welches die View des Konfigurators für den Button bereitstellt
        this.templateID = "elementConfiguratorButtonSendDocumentMail-Template";
        this.hoverPanel = null;
        this.formViewModel = null;
        
        this.mailObject = {
            url: "https://api.sendgrid.com/v3/mail/send/beta",
            apiKey: "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",
            apiKeyName: "apikey"        
        };
        
        this.formViewTemplate = 
        '<div class="mailContainer" style="width: 300px; height: 200px">' +
            '<h2>Mail versenden</h2>' +
            '<table style="width: 97%; margin: 10px 0px 10px 0px;">' +
                '<tr class="formItem display">' +
                    '<td class="name">' +
                        '<span class="displayName">Adresse</span>' +
                        '<div class="description">Mailadresse des Empfängers</div>' +
                    '</td>' +
                    '<td class="value">' +
                        '<input type="text" data-bind="value: email" />' +
                    '</td>' +
                '</tr>' +
            '</table>' +
            '<a data-role="button" data-bind="enabled: btnSendEnabled, click: btnSendClick">senden</a>' +
        '</div>';
        
        var configTemplate = 
        '<script id="elementConfiguratorSocialFeed-Template" type="text/x-kendo-template">' +
            '<div class="templateConfigurator" style="width: 100%; min-width: 600px">' +

                '<div style="min-height: 300px; width: 100%">' +
                    '<h2 style="margin-top: 8px; margin-left: 20px">#= ecspand.cultures.templateConfigurator.defaultButtonSpecialSettings #</h2>' +
                    '<table style="width: 97%; margin: 10px 0px 10px 0px;">' +
                        '#= kendo.render(kendo.template($(\'\\#elementConfiguratorDefaultButtonBaseSettings-Template\').html()),[data]) #' +
                        '<tr class="formItem display">' +
                            '<td class="name">' +
                                '<span class="displayName">Titel</span>' +
                                '<div class="description">Titel einer Nachricht. Platzhalter: {dateiname}</div>' +
                            '</td>' +
                            '<td class="value">' +
                                '<input type="text" data-bind="enabled: enabled, value: messageTitle" />' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="formItem display">' +
                            '<td class="name">' +
                                '<span class="displayName">Nachricht</span>' +
                                '<div class="description">Standard-Nachricht die beim Verschicken einer Datei als Text angehängt wird. Platzhalter: {dateiname}</div>' +
                            '</td>' +
                            '<td class="value">' +
                                '<input type="text" data-bind="enabled: enabled, value: message" />' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                '</div>' +
            '</div>' +
        '</script>';
        $(document.body).append(this.formViewTemplate);
        
    }
    
    // In dieser Methode wird geprüft, ob der Button überhaupt geladen werden soll. So sollte hier z.B. geprüft werden, ob der Benutzer die Aktion die Button bereitstellt überhaupt ausführen darf. In dem Beispiel wird geprüft,
    // ob es sich bei dem Element um ein Dokument handelt
    Element_buttonSendDocumentMail.prototype.isEnabled = function () {
        var dfd = $.Deferred();
        var isDocument = false;
        if (this.template.folder) {
            isDocument = this.template.folder.get_isDocumentType();
        }
        else {
            isDocument = this.template.ctx.get_viewModel()["_isDocument"].value;
        }
        return dfd.resolve(isDocument);
    };
    
    // Click-Methode welche automatisch über das ViewModel der Basisklasse aufgerufen wird wenn die Schaltfläche geklickt wird
    Element_buttonSendDocumentMail.prototype.onClick = function (e) {
        
        this.formViewModel = kendo.observable({
           btnSendClick: this.onBtnSendClick.bind(this),
           btnSendEnabled: function() {
                var email = this.get("email");
                
                return email !== null && email !== undefined && email !== "";  
           },
           email: null
        });
        this.hoverPanel = new ecspand.Controls.HoverPanel($("#" + this.id), { closeOnClick: true });
        
        var template = $(this.formViewTemplate);
        kendo.bind(template, this.formViewModel);
        
        this.hoverPanel.setContent(template);
        this.hoverPanel.show();
    };
    
    Element_buttonSendDocumentMail.prototype.onBtnSendClick = function() {
        var _this = this;

        this.downloadFileData(
            this.template.ctx.get_site().get_url(),
            this.template.ctx.get_webRelativeUrl(),
            this.template.ctx.get_listItem().get_item("FileRef"))
            .then(function(data) {

                var fileName = _this.template.ctx.get_listItem().get_item("FileLeafRef"),
                    fileType = fileName.substr(fileName.lastIndexOf("."), fileName.length - 1),
                    mailData = {
                        personalizations: [{ "to": [{ "email": "YOU@sendgrid.com" }] }],
                        from: { "email": "dx@sendgrid.com" },
                        subject: "Hello, World!",
                        content: [{ type: "text/plain", value: "Heya!" }],
                        attachments: [
                            {
                                content: data,
                                filename: fileName,
                                type: fileType
                            }
                        ]
                    };


                $.ajax({
                    url: _this.mailObject.url,
                    headers: {
                        "Authorization": "Bearer" + _this.mailObject.apiKey,
                        "Content-Type": "application/json"
                    },
                    data: mailData
                }).done(function() {
                    SP.UI.Notify.addNotification("Datei wurde erfolgreich per Mail versandt.");
                }).fail(function(a, b, c) {
                    SP.UI.Notify.addNotification("<span style='color: red>Beim Verschicken der Mail kam es zu einem Problem.");
                });
            });
    };
    
    Element_buttonSendDocumentMail.prototype.downloadFileData = function(siteUrl, webRelativeUrl, fileServerRelativeUrl) {
        var _this = this;
        var dfd = $.Deferred();

        var webUrl = ecspand.Core.getWebUrl(siteUrl, webRelativeUrl);
        fileServerRelativeUrl = ecspand.Core.ensureStartSlash(fileServerRelativeUrl);

        var settings = {
            url: webUrl + "/_api/web/GetFileByServerRelativeUrl('" + encodeURIComponent(fileServerRelativeUrl) + "')/$value",
            type: "GET",
            dataType: "arraybuffer",
            accepts: "*/*",
            success: function(data) {
                dfd.resolve(data);
            }
        };

        $.ajax(settings).fail(function(jqXHR, textStatus, errorThrown) {
            dfd.reject(new ecspand.Data.Exception({
                class: _this, method: "downloadFileData",
                message: "Could not download file: " + errorThrown, objects: [jqXHR]
            }));
        });
        
        return dfd.promise();
    };
       
    // Diese Methode gibt alle Informationen aus dem zuvor erstellen ViewModel zurück, die für eine Speicherung relevant sind
    Element_buttonSendDocumentMail.prototype.getConfigSettings = function () {
        // Konfiguration der Basisklasse abrufen
        var copy = _super.prototype.getConfigSettings.call(this);
        
        // und anschließend bereinigen oder ergänzen - es ist grundsätzlich nur nötig die in dieser Klasse neu hinzugefügten Eigenschaften zu bereinigen
        // Eigenschaften die auf "undefined" gesetzt werden, werden gar nicht erst serialisiert
        
        copy.additionalSelectProperties = undefined;
        
        return copy;
    };
    
    // Diese Mthode gibt das Standard-ViewModel zurück, welches hauptsächlich für die Darstellung und konfigurierbare Funktionalität des eigentlichen Buttons benötigt wird
    Element_buttonSendDocumentMail.prototype.getDefaultViewModel = function () {
        
        var vm = {
            defaultTitle: function () { // Standard-Titel des Buttons - kann in der Konfiguration manuell angepasst werden
                return "Mein toller Button";
            },
            /*defaultIconSource: function () { // Soll standardmäßig eine andere ImageMap gezogen werden, so kann dies hier definiert werden
                return _spPageContextInfo.siteAbsoluteUrl + "/_layouts/15/" + _spPageContextInfo.currentLanguage + "/images/formatmap16x16.png?rev=23";
            },*/
            defaultIconStyle: function () { // Position der Standard-Image-Map (im menu für das Icon zuständig) - kann in der Konfiguration manuell angepasst werden
                return "top: -105px; left: -341px;";
            },
            showInContextMenu: false, // Soll standardmäßig nicht im ContextMenu angezeigt werden
            showInFurtherOptions: false,// Soll standardmäßig nicht unter "weitere Optionen" angezeigt werden
            showInFileCoverMenu: true, // Soll standardmäßig im normalen Menü angezeigt werden
            //showOnlyInFileCoverMenu: true, // Soll ausschließlich im normalen Menü angezeigt werden
            message: null,
            messageTitle: null
        };
        
        return kendo.observable($.extend(true, _super.prototype.getDefaultViewModel.call(this), vm));
    };
    
    Element_buttonSendDocumentMail.prototype.getEditViewModel = function () {
        
        var vm = {
            
        };
       
        return _super.prototype.getEditViewModel.call(this, vm);
    };
    return Element_buttonSendDocumentMail;
})(Element_buttonButtonBase);
//# sourceURL=buttonSendDocumentMail.js 