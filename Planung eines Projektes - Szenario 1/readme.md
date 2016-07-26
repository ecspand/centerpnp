# Planung eines Projektes - Szenario 1 #

## Voraussetzungen ##

* Aktenstruktur sollte mehr oder weniger final sein
* Bereitzustellende Funktionalitäten in den einzelnen Akten sollten bekannt sein
* Layout/Aufbau/Design des centers sollten abgestimmt worden sein (fortgeschritten) 

## Weitere Überlegungen ##

* Bauen einige Aktenarten aufeinander auf?
* Gibt es zu implementierende Funktionalitäten, die überall vorhanden sein müssen?
* Gibt es Sonderfälle, die nicht im Standard abgedeckt werden können? 
* Gibt es eventuell elegantere Möglichkeiten, um ein Problem zu lösen?
* Stoße ich an irgendwelche Grenzen oder kann ich ein Problem vielleicht doch selbst lösen?


## Aktenplan ##

* Kunde
 * Akte 
 * Sonderakte
 * Dokumente
 * Sonderdokumente
* Lieferant 
 * Akte
 
## Problem ##

Allen Akten muss ein Button zum Starten eines bestimmten Workflows hinzugefügt werden. Es handelt sich hierbei immer um denselben Workflow.

## Lösung ##

* Allen Akten eine spezielle CMID vergeben (z.B. Global)
* Allen Bibliotheken eine spezielle CMID vergeben (z.B. GlobalDocuments)
* Eine Ableitung vom Template menuDefault für eine beliebige Akte erstellen und den Button hinzufügen
* Dasselbe für eine beliebige Bibliothek wiederholen (mit menuDocumentDefault)
* Fertig

