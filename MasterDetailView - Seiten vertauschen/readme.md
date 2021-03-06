# Master Detail-View - Seiten vertauschen #

## Voraussetzungen ##

Es muss bereits eine TemplateConfiguration für die jeweilige Aktenart vorhanden sein. Anschließend können
beide Seiten (``fileCoverDefault`` und  ``tabsDefault``) einfach über das Attribut ``ContainerSelector`` vertauscht werden. 
Hierzu werden die jeweiligen Container vertauscht: ``.contentLeft`` und ``.contentRight``

```javascript
{
    "FileName": "fileCoverDefault",
    "ContainerSelector": ".contentRight",
    "TemplateConfigurations": [
        {
            "FileName": "primaryDefault"
        },
        {
            "FileName": "menuDefault"
        },
        {
            "FileName": "importantDataDefault"
        },
        {
            "FileName": "masterDataDefault"
        }
    ]
},
{
    "FileName": "tabsDefault",
    "ContainerSelector": ".contentLeft"
}
```

## Anpassung der Breite ##

Soll zusätzlich die Breite der jeweiligen Seiten angepasst werden, kann man dies mit folgendem CSS bewerkstelligen:

```css
.ecsContent .contentLeft {
	max-width: 60% !important;
	width: 60% !important;
}

.ecsContent .contentRight {
	max-width: 39% !important;
	width: 39% !important;
}
```

## Bekannte Probleme ##

Aktuell kann es hier noch zu Problemen beim Resizing der Seite kommen. Das Problem wird demnächst noch einmal genauer analysiert.