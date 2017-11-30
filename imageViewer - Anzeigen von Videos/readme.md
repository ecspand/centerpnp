# Anzeigen von Videos #

## Voraussetzungen ##

Da das ``imageViewer``-DisplayTemplate aktuell nicht offiziell für Anpassungen freigegeben wurde (kein Konfigurator vorhanden), muss 
zunächst manuell eine Ableitung des Templates mit Hilfe des ``derivation``-Templates erstellt werden. 

Des Weiteren wird das ``imageViewer``-DisplayTemplate automatisch vom ``tabsDocument-Template`` geladen, weshalb es nicht automatisch in der
FileConfigration eingebunden werden kann. Hierzu muss das neue Template einmal manuell als Definition registriert und in 
der jeweiligen FileConfiguration hinterlegt werden.