var PermissionManager = (function (_super) {

	function PermissionManager() {

	}

	// Methode zum Initialisieren des PermissionManagers
	PermissionManager.load = function (siteUrl, listTitle) {

		var dfd = $.Deferred();
		console.info("Initializing " + this.constructor.name);
		var self = this;

		// Abgerufene Berechtigungen werden nur einmal abgerufen und anschließend im Browser gecached
		var items = $(window).data("PermissionManager_items");

		if (!items) {

			SP.SOD.executeFunc('userprofile', 'SP.UserProfiles.PeopleManager', function () {

				self = this;

				// Informationen zum aktuellen Benutzer werden abgerufen
				var clientContext = new SP.ClientContext.get_current(),
					personProperties = new SP.UserProfiles.PeopleManager(clientContext).getMyProperties();

				clientContext.load(personProperties);

				clientContext.executeQueryAsync(function () {

					var userDisplayName = personProperties.get_displayName().toString();

					// Informationen zum Benutzer werden zwischengespeichert
					$(window).data("PermissionManager_personProperties", personProperties);

					// Liste mit den Berechtigungen wird abgefragt
					var siteContext = new SP.ClientContext(siteUrl),
						oList = siteContext.get_web().get_lists().getByTitle(listTitle);

					// Abruf der Elemente aus der Berechtigungsliste für die der Benutzer eine Berechtigung haben soll
					var camlQuery = new SP.CamlQuery();
					camlQuery.set_viewXml(
						'<View><Query><Where><Eq><FieldRef Name=\'Title\' /><Value Type=\'Text\'>' + userDisplayName + '</Value></Eq></Where></Query></View>'
					);
					items = oList.getItems(camlQuery);

					siteContext.load(items);

					// Speichern der Ergebnisse im Browser
					$(window).data("PermissionManager_items", items);

					siteContext.executeQueryAsync(function (sender, args) {
						dfd.resolve();
					}, function (sender, args) {
						dfd.reject(ecspand.Helper.Exception.createAndLogException({
							class: self, method: "load",
							message: "Could not load: PermissionHandler",
							notificationMessage: "PermissionManager konnte nicht geladen werden. Möglicherweise exisiert die angegebene Liste (" + listTitle + ") nicht."
						}));
					});
				});
			});
		}
		else {
			dfd.resolve();
		}

		return dfd.promise();
	};

	// Methode zur Prüfung ob der Benutzer für einen bestimmten bereich eine Berechtigung besitzt
	PermissionManager.hasPermission = function (key) {

		var items = $(window).data("PermissionManager_items");

		if (items) {
			var listItemEnumerator = items.getEnumerator();

			// Durchlauf durch alle gespeicherten Listelemente
			while (listItemEnumerator.moveNext()) {
				var oListItem = listItemEnumerator.get_current();
				
				if (oListItem.get_item('Bereich').toString().toLowerCase() == key.toLowerCase()) {
					
					return true;
				}
			}
			return false;

		}
		else {
			return true;
		}
	};

	PermissionManager.getUserDisplayName = function () {

		var properties = $(window).data("PermissionManager_personProperties");

		if (properties) {

			return properties.get_displayName().toString();
		}
		else {
			return false;
		}
	};


	return PermissionManager;
})();
