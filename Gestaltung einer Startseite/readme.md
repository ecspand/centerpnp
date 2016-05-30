# Gestaltung einer Startseite #

## Voraussetzungen ##

Webpartseite mit eindeutigen Bereichen oder Containern in denen die Webparts zusammengefasst werden. 
<br/><br/>
Verwendet man als Textlayout z.B. ein Layout mit zwei Spalten, so kann jede Spalte als ein Container gesehen werden.
<br/>Im JavaScript Beispiel wird das "Zwei Spalten mit Kopfzeile" Layout verwendet. 
Dort werden in den jeweiligen Spalten Webparts und das zur Initialisierung der Komponenten benötigte Skript-Editor Webpart in der Kopfzeile hinterlegt.
Das Skript-Editor Webpart sollte hierbei in einem separaten Container liegen, da dies sonst ebenfalls als Tab oder Panel dargestellt werden würde.


## Anwendung ##

Die in der Linken Spalte hinterlegten Webparts werden in einer PanelBar dargestellt, die in der rechten Spalte in Tabs. 

```javascript
    $("#layoutsTable > tbody").children(":eq(1)").children(":eq(0)").webpartPanelBar();
    $("#layoutsTable > tbody").children(":eq(1)").children(":eq(1)").webpartTabs();
```

## Bekannte Probleme ##

Bei der Anwendung der Skripte sollte ber&uuml;cksichtigt werden, dass alle WebParts sowie deren Inhalte (z.B. iFrame) immer vollst&auml;ndig geladen werden. Diese
Komponenten tragen also in keinster Weise dazu bei, dass eine Seite schneller geladen wird, eher besteht die Gefahr, dass man dazu geneigt ist viel mehr
Inhalte auf einer Seite unterbringen zu wollen als es &uuml;blich wäre. Die Skripte optimieren also lediglich die &Uuml;bersichtlichkeit. 


