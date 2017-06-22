# menu - Bedingtes ausblenden von Schaltflächen #

In einigen Szenarien ist es notwendig center Schaltflächen, abhängig von Feldwerten, einer SharePoint Berechtigung oder einer kundenspezifischen Logik, ein oder auszublenden. In diesem Beispiel werden alle drei Szenarien kurz behandelt.  

Der PermissionManager (permissionmanager.js) spielt hierbei eine besondere Rolle, da diese Klasse hierbei eine Art kundenspezifischen Berechtigungsmechanismus, anhand einer SharePoint Liste ermöglicht. Beim Aufruf des menu Templates wird mittels PermissionManager.js überprüft ob der Benutzer den entsprechenden Button sehen darf, falls ja wird der Button angezeigt.

Zu beachten ist jedoch, dass die 
SharePoint Berechtigungen hierdurch nicht ersetzt, sondern nur ergänzt werden können. Soll ein Benutzer z.B. Elemente nicht editieren dürfen, so muss weiterhin die entsprechende SharePoint Berechtigung gesetzt werden. Die Instanziierung des PermissionManagers erfolgt mittels SiteUrl und dem namen der Liste, in der die Berechtigungen verwaltet werden.

Für die Abbildung der Berechtigungen in diesem Beispiel, wird eine Liste mit lediglich zwei Feldern benötigt 
* Titel = Name des Benutzers (domain\Name), 
* Bereich = Schlüssel für die Zuordnung zu einer bestimmten Schaltfläche

## Anwendung ##

* Anlage einer Liste mit 2 Feldern – diese prüft der Permission Manager
* Anpassen des Menu_xxx Template


## Voraussetzungen ##

* getestet mit Version 3.2.0.1



