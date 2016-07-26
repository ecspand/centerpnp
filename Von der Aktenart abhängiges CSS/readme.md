# Von der Aktenart abhängiges CSS #

Dieses Beispiel soll veranschaulichen, wie der rechten Bereich einer 
bestimmten Akte auf die komplette Breite des centers gestreckt 
und der linke Bereich dabei komplett ausblendet werden kann.

## Linken Bereich ausblenden ##

Um den linken Bereich einer Akte auszublenden, muss lediglich der Eintrag ``fileCoverDefault`` 
aus der jeweiligen ``FileConfiguration`` entfernt werden (im folgenden Beispiel bereits umgesetzt).

```javascript
{
    "FileConfigurations": [
        {
            "CMID": "kunden",
            "FileName": "contentDefault",
            "IsDefault": false,
            "TemplateConfigurations": [
                {
                    "FileName": "tabs_kunde",
                    "ContainerSelector": ".contentLeft"
                },
                {
                    "FileName": "quickSearchDefault"
                }
            ]
        }
    ],
    "FolderConfigurations": [
    ]
}
```

## Hinzufügen einer eindeutigen Klasse ##

Soll zum Beispiel nur das ``tabsDefault``-Template angezeigt werden, kann hiervon eine Ableitung erstellt werden, um eine zusätzliche CSS-Klasse zu vergeben. 
<br/>
In diesem Beispiel wird der Name der aktuellen Aktenart als CSS-Klasse vergeben, sodass es möglich ist, mit Hilfe einer einzelnen Ableitung n Aktenarten 
unterschiedlich zu konfigurieren.

```javascript
// Klasse hinzufügen - hier wird immer der Titel der aktuellen Aktenart vergeben - Falls Sonderzeichen vorkommen sollten, sollte ein fester Name vergeben werden
$(".ecsContent").addClass(this.folder.get_title());

// Klasse entfernen
$(".ecsContent").removeClass(this.folder.get_title());
```

## Anpassung der Breite ##

Um die Breite der jeweiligen Seiten anzupassen, kann folgendes CSS verwendet werden:

```css
.ecsContent.kunden .contentLeft {
	max-width: 0% !important;
	width: 0% !important;
}

.ecsContent.kunden .contentRight {
	max-width: 99% !important;
	width: 99% !important;
}

.ecsContent.projekte .contentLeft {
	max-width: 50% !important;
	width: 50% !important;
}

.ecsContent.projekte .contentRight {
	max-width: 49% !important;
	width: 49% !important;
}

...
```
