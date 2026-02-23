# Portfolio di Teresa Roggero — stile "Adri" (HTML + CSS + Bootstrap + Sass)

Questo sito statico replica l'estetica del template **Adri (Squarespace Fluid)** con tecnologia **HTML/CSS**:
- Palette **bianco/beige**, tipografia ampia, ampio spazio bianco
- Home con **hero**, **griglia progetti**, **approccio**, **CTA**, **FAQ**
- Pagina **CV** in **HTML puro** (richiesto)
- Pagina **Contattami** con form (`required`) e integrazione **EmailJS** opzionale
- **Bootstrap 5** via CDN + CSS personalizzato (`assets/css/adri.css`) e **Sass** di supporto
- **Favicon** inclusa e **Open Graph**

## Pubblicazione GitHub Pages
1. Crea un repo (es. `teresa-portfolio`).
2. Carica tutti i file, assicurandoti che `index.html` sia nella root.
3. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
4. Dopo pochi minuti sarà online su `https://<username>.github.io/teresa-portfolio/`.

## EmailJS (opzionale)
1. Crea Service + Template su EmailJS.
2. In `assets/js/main.js` sostituisci `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`.
3. De-commenta lo script CDN in `contact.html`.

## Personalizzazione rapida
- Sostituisci `assets/img/profile.png` con una tua foto.
- Aggiorna i link GitHub/LinkedIn in navbar e footer.
- Modifica testi progetti in `index.html` con risultati/metriche.
- Colori: regola variabili in `assets/css/adri.css`.
