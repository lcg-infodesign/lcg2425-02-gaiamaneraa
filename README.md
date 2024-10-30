Readme assignement 2

# READ ME | A Family of Glyphs, Like An Alphabet

Per realizzare questo alfabeto, ho creato una griglia con delle celle, che a loro volta contengono forme geometriche distorte, i cui colori sono selezionati casualmente da una palette predefinita. L'animazione si aggiorna automaticamente ogni 2 secondi, **aggiornando la pagina** la griglia si ridimensiona in automatico secondo la grandezza della pagina.

## Funzionalità principali
- **Griglia adattabile**: la griglia si adatta alle dimensioni della finestra, riempiendo lo schermo.
- **Forme distorte e casuali**: all'interno di ogni cella vengono generate forme distorte casuali di dimensioni, angoli e forme variabili.
- **Aggiornamento automatico**: la griglia viene ridisegnata ogni 2 secondi per mostrare nuove combinazioni di forme e colori.

## Struttura del Codice

1. **Setup e Inizializzazione**
   - La funzione `setup()` crea una tela che copre l'intera finestra del browser e imposta il numero di celle e la loro dimensione. 
   - Imposta inoltre l'intervallo di aggiornamento della tela (2 secondi).

2. **Disegno della Griglia**
   - La funzione `draw()` imposta il colore di sfondo e disegna ogni cella della griglia, centrando la griglia sulla tela. 
   - All'interno di ogni cella, chiama la funzione `diverseDistorsioni()` per creare forme casuali.

3. **Creazione delle Forme Distorte**
   - La funzione `diverseDistorsioni(size)` definisce forme irregolari all'interno di ciascuna cella, utilizzando una combinazione casuale di vertici e distorsioni per generare un aspetto unico per ogni forma.

4. **Ridimensionamento Automatico**
   - La funzione `windowResized()` adatta la griglia e la tela alla nuova dimensione della finestra.

5. **Aggiornamento della Tela**
   - La funzione `updateCanvas()` viene richiamata ogni 2 secondi per pulire e ridisegnare la griglia, creando nuove combinazioni di forme e colori.

## Istruzioni d'Uso

1. **Esecuzione**: Aprire il file in un browser con supporto a JavaScript e P5.js.
2. **Ridimensionamento Dinamico**: Ridimensionando la finestra del browser, la griglia si adatterà automaticamente.
3. **Aggiornamento Automatico**: La griglia verrà ridisegnata automaticamente ogni 2 secondi, generando un nuovo disegno.

## Dipendenze
- **P5.js**: Assicurati di includere la libreria P5.js per il funzionamento di questo codice.
