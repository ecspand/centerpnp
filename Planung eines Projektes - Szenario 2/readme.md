# Planung eines Projektes - Szenario 2 #

## Voraussetzungen & weitere Überlegungen ##

[Siehe Szenario 1](https://git.d-velop.de/ecspand/centerpnp/tree/master/Planung%20eines%20Projektes%20-%20Szenario%201)

## Aktenplan ##

* Kunde
 * Akte 
 * Sonderakte
 * Dokumente
 * Sonderdokumente
* Lieferant 
 * Akte
 
## Globale Anforderungen ##

* Social Feed-Button muss überall hinzugefügt werden
* Eigenschaften sollen überall automatisch aufgeklappt werden
* Schnellsuche muss überall im Aktenplan gleich konfiguriert werden

## Spezielle Anforderungen ##

* Firma
 * Button -> Workflow starten
* Akte
 * Button -> Workflow starten
 * Tab hinzufügen -> Bing
* Dokumente
 * Button -> Organisieren & Favoriten
* Sonderdokumente
 * Button -> Organisieren ausblenden
 * Button -> Workflow starten
  * Sichtbarkeit abhängig vom Feldwert
* Lieferant
 * Button -> Workflow starten
* Akte (Lieferant)
 * Button -> Workflow starten
 * Tab hinzufügen -> Bing
 * Button -> Edit ausblenden


## Daraus resultierende Templates und Zuweisungen ##

Daraus resultierende Templates und Zuweisungen (eine von vielen Möglichkeit) 

* menu_global
 *  + Button SocialFeed
* menuDokument_global
 * + Button SocialFeed
* quickSearch_global
 * + ResultSource konfigurieren
* masterData_global
 * + Eigenschaften werden automatisch aufgeklappt
* tabs_global
 * Keine Änderungen – jedoch kann es für zukünftige Änderungen sinnvoll sein, immer mit einer globalen Ableitung zu arbeiten (z.B. als Basisklasse für Hilfsmethoden etc.)
<br/><br/>

* tabs_global_akte
 * + Tab für Bing-Suche hinzufügen
* menu_global_akte
 * + Button Workflow Start
* menuDokument_global_dokumente
 * + Button Organisieren
 * + Button Dokumentenkorb
* menuDokument_global_dokument_sonderdokument
 * - Original Edit Button entfernen
+ Button Edit (nur sichtbar für einen bestimmten Kunden)
* Lieferant 
 * Entspricht der Konfiguration von „Kunden“, daher kann hier die „Kunden“ CMID vergeben werden
* Menu_global_akte_aktelieferant
 * - Button Edit ausblenden

