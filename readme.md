![ecspand Center](http://www.d-velop.de/wp-content/uploads/ecspand_3cols.png) 

# ecspand center patterns & practices #


### Einleitung ###

Die ecspand center patterns & practices bieten Beispiele und Best Practices zu den gefragtesten Customizing-Themen. Wir versuchen an dieser Stelle regelmäßig weitere, interessante Beispiele bereitzustellen. Diese Beispiele sollen auch als Grundlage und Anregung für eigene Ideen dienen.

### Wie arbeite ich mit den Projekten? ###

#### Software ####
* [Visual Studio Code](https://code.visualstudio.com/)
* [NodeJS + npm](https://nodejs.org)

#### Vorgehen ####

Erstellen Sie zunächst einen Clone und idealerweise auch einen eigenen Branch, an dem Sie frei experimentieren und probieren können. Das Projekt bietet Ihnen Intellisense, 
mit einer Ausnahme: direkt in den Klassen haben  Sie per Intellisense keinen Zugriff auf Instanzmethoden oder Instanzvariablen - dies bietet Visual Studio Code aktuell leider nicht.

#### Arbeiten mit TypeScript
Wenn Sie mit TypeScript arbeiten möchten führen Sie folgende Schritte aus:

* Öffnen Sie in Visual Studio Code die Konsole mittels **Strg + ö** und
* geben Sie den Befehl ``` npm init ``` ein.
* Anschließend geben Sie den Befehl ``` npm install gulp-cli --save ``` ein.

Der TypeScript-Kompiler und Gulp werden dadurch automatisch heruntergeladen und eingerichtet. Soll eine TypeScript Datei kompiliert werden
* öffnen Sie die Datei **gulpfile.json** und
* tragen die Ordner der TypeScript-Dateien innerhalb der Variable **paths** ein.

Die Kompilierung kann innerhalb der Konsole mit dem Befehl ``` gulp ``` gestartet werden.

<br /><br />

Wenn Sie auf dem Laufenden bleiben möchten, empfehlen wir dieses Projekt zu abonnieren. Wir versuchen, wie bereits erwähnt, nach und nach weitere Patterns und Practices bereitstellen.

#### Merge Requests und neue Patterns und Practices ####
Haben Sie selbst interessante Ideen, die mit anderen geteilt werden sollten? Dann können Sie diese als Merge Request einstellen. Wir schauen uns Ihre Ideen an, optimieren ggf. etwas und fügen sie dem Projekt hinzu.
* Zu jedem neuen Projekt gehört eine ausführliche Beschreibung, die mittels [Markdown](http://markdowntutorial.com/) erstellen werden muss. 

## Disclaimer ##

Die d.velop AG übernimmt bei der Anwendung der in diesen Beispielen beschriebenen Customizing-Möglichkeiten keinerlei Gewährleistung. Die angeforderten Dienst- und Supportleistungen zur Rekonstruktion der Daten sind in jedem Fall kostenpflichtig und unterliegen nicht den üblichen Supportleistungen.

