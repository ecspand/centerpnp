# gridMenu - Button ausblenden #

## Voraussetzungen ##

Da das ``gridMenu`` für Anpassungen noch nicht offiziell freigegeben wurde (kein Konfigurator vorhanden), muss 
zunächst manuell eine Ableitung des Templates mit Hilfe des ``derivation``-Templates erstellt werden. 

Des Weiteren wird das ``gridMenu``-Template automatisch vom ``grid-Template`` geladen, weshalb es nicht automatisch in der
FileConfigration eingebunden werden kann. Hierzu muss das neue Template einmal manuell als Definition registriert und in 
der jeweiligen FileConfiguration hinterlegt werden.

> Zu beachten ist noch, dass das ``gridMenu``-Template immer jeweils aus der Konfiguration
des angezeigten Kind-Elementes angezogen wird und nicht aus der Konfiguration des aktuell angezeigten Elementes.

> Beispiel: 
- Kundenakte
 - Aufträge 
>
Ist hier die Kundenakte geöffnet und es soll unter dem Tab "Aufträge" etwas ausgeblendet werden, 
muss das Template in der FileConfiguration der "Aufträge" Akte eingebunden werden.
 

