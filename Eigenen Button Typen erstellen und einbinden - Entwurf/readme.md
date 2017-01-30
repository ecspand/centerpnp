# Eigene Button Typen erstellen und einbinden #

Das ecspand center bietet die Möglichkeit eigene Buttons mit spezielen Funktionalitäten zu entwickeln und diese wie Standard-Schaltflächen an der center Oberfläche zu verwenden. 
<br/>
Hierfür stellt das center Basis-Klassen zur verfügung, welche eine Implementierung eigener Buttons stark vereinfacht. 

<br/><br/>

Für die Entwicklung eines Buttons gibt es zwei Ausbaustufen
* Einfacher Button ohne erweiterte Konfigurationsmöglichkeiten (z.B. Dokumentenkorb-Button)
* Komplexer Button mit erweiterten Konfigurationsmöglichkeiten (z.B. Organisieren-Button)

Ein Komplexer Button bietet neben einer Standard-Funktionalität noch die Möglichkeit weitere Einstellungen vorzunehmen.

## Voraussetzungen ##

Aktuell ist nicht möglich, ähnlich wie bei den DisplayTemplates in der ContentConfiguration, eigens entwickelte Buttons globals zu hinterlegen und zu registrieren. Die Klassen, welche einen Button repräsentieren,
müssen demnach vorerst in einer beliebigen Bibliothek hinterlegt werden und in einer Ableitung des ``menu``-DisplayTemplates registiert und geladen werden. 