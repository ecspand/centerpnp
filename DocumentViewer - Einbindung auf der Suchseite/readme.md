# Document Viewer - Einbindung auf der Suchseite #

Das Beispiel zeigt auf, wie man den Document Viewer auf einer komplexen Seite, wie 
der ecspand Suchseite, einbinden kann. 

## Voraussetzungen ##

Das in dem Beispiel vorliegende Skript muss lediglich an einer beliebigen Stelle auf der Suchseite eingebunden werden.
Die Bindung an die Suchergebnisliste erfolgt automatisch.

## Bekannte Probleme ##

Aufgrund eines SharePoint Bugs funktioniert des originale Beispiel leider nicht WebApplication-übergreifend. Einen Workaround zeigen wir im erweiterten Beispiel "ecspandHoverPanel-multuwebapp"
auf. Aufgrund des Eingriffs in die internen abläufe der SharePoint Events können wir hier leider nicht abschätzen ob dieser Workaround irgendwelche Seiteneffekte mit sich bringt.