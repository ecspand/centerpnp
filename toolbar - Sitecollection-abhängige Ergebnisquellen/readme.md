# toolbar - Sitecollection-abhängige Ergebnisquellen #

## Voraussetzungen ##

Da die ``toolbar`` pro ecspand Konfigurationsdatenbank nur einmal konfiguriert werden kann, kann auch nur eine Ergebnisquelle hinterlegt werden. 
Möchte man jedoch abhängig von der aktuellen Sitecollection eine andere Ergebnisquelle wählen, so muss dies programmatisch gelöst werden.

Die ``toolbar`` wird hierzu abgeleitet, als TemplateDefinition registriert und ist anschließend überall verfügbar.

> Zu beachten ist noch, dass die Erweiterte Konfiguration der ``toolbar`` nicht mehr gültig ist und ggf. programmatisch überschrieben wird. 


 

