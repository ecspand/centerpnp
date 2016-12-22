# grid - Wechseln der View #

## Voraussetzungen ##

* ecspand 3.1.0.10

Da das ``grid`` für Anpassungen noch nicht offiziell freigegeben wurde (kein Konfigurator vorhanden), muss 
zunächst manuell eine Ableitung des Templates mit Hilfe des ``derivation``-Templates erstellt werden. 

Des Weiteren wird das ``grid``-Template automatisch vom ``tabs-Template`` geladen, weshalb es nicht automatisch in der
FileConfigration eingebunden werden kann. Hierzu muss das neue Template einmal manuell als Definition registriert und in 
der jeweiligen FileConfiguration hinterlegt werden.

> Zu beachten ist noch, dass das ``grid``-Template immer jeweils aus der Konfiguration
des angezeigten Kind-Elementes angezogen wird und nicht aus der Konfiguration des aktuell angezeigten Elementes.

> Beispiel: 
- Kundenakte
 - Aufträge 
>
Ist hier die Kundenakte geöffnet und es soll unter dem Tab "Aufträge" etwas ausgeblendet werden, 
muss das Template in der FileConfiguration der "Aufträge" Akte eingebunden werden.
 

## Bekannte Probleme ##
* Timout ist nötig, da es sonst zu einer Exception kommt, die anschließend das Paging verhindert
* Beim wechseln der View verschwindet die Thumbnail column aktuell
* Url zur Bibliothek muss aktuell noch vorgegeben werden