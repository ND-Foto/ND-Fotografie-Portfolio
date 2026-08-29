# ND Fotografie Portfolio

Eine einfache, responsive Portfolio-Website für GitHub Pages.

## Eigene Fotos einfügen

1. Erstelle im Projekt den Ordner `images`.
2. Speichere deine Bilder dort, zum Beispiel als `messe-1.jpg`.
3. Ersetze in `index.html` einen Platzhalter wie:

```html
<div class="photo-placeholder"><span>01</span></div>
```

durch:

```html
<img class="portfolio-photo" src="images/messe-1.jpg" alt="Beschreibung des Fotos">
```

4. Die CSS-Klasse `portfolio-photo` ist bereits in `styles.css` eingerichtet.

Die aktuellen Messefotos liegen im Ordner `images/messe`. Die Eventfotos liegen im Ordner `images/events`. Die Produkt- und Food-Fotos liegen im Ordner `images/produkt-food`. Die Immobilien- und Architekturfotos liegen im Ordner `images/immobilien`.

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub erstellen.
2. Alle Dateien aus diesem Ordner hochladen.
3. Unter **Settings → Pages** bei **Source** den Branch `main` und den Ordner `/root` auswählen.
4. Speichern. GitHub zeigt anschließend die öffentliche Webadresse an.

## Vor der Veröffentlichung

- Eigene Portfoliofotos einsetzen.
- Impressum prüfen und gegebenenfalls Umsatzsteuer-ID oder weitere Pflichtangaben ergänzen.
- Kontaktangaben kontrollieren.
