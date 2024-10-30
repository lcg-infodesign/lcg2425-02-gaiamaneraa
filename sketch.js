let cols, rows; // Variabili globali per il numero di colonne e righe della griglia
let cellsize; // Variabile per la dimensione di ogni cella

// Array di colori usati per le forme
let colorArray = [
  "#fbd160",  // Giallo chiaro
  "#7f95e4",  // Blu violaceo
  "#ff8017",  // Arancione acceso
  "#fcb8d9",  // Rosa tenue
  "#1ac1b9",  // Turchese
  "#f9447f"   // Rosa acceso
];

function setup() {
  createCanvas(windowWidth, windowHeight); // Crea una tela che copre l'intera finestra del browser

  cellsize = 60; // Imposta la dimensione della cella a 60 pixel
  cols = Math.floor(windowWidth / cellsize); // Calcola il numero di colonne
  rows = Math.floor(windowHeight / cellsize); // Calcola il numero di righe

  noLoop(); // Blocca il loop di disegno continuo di p5.js (draw verrà chiamato solo una volta)
  noFill(); // Imposta le forme senza riempimento
  stroke(0); // Imposta il colore del contorno su nero

  setInterval(updateCanvas, 2000); // Richiama la funzione updateCanvas ogni 2 secondi
}

function draw() {
  background("#fbf6f0");  // Imposta uno sfondo bianco sporco per la tela

  // Calcola una traslazione orizzontale e verticale per centrare la griglia sulla tela
  let horizontalTranslation = (windowWidth - cols * cellsize) / 2;
  let verticalTranslation = (windowHeight - rows * cellsize) / 2;
  translate(horizontalTranslation, verticalTranslation); // Centra la griglia

  // Ciclo per disegnare ogni cella della griglia
  for (let i = 0; i < cols; i++) { // Itera attraverso le colonne
    for (let j = 0; j < rows; j++) { // Itera attraverso le righe
      push(); // Salva lo stato di trasformazione corrente
      translate(i * cellsize, j * cellsize); // Sposta l'origine in alto a sinistra di ogni cella
      diverseDistorsioni(cellsize * 0.8); // Disegna forme distorte all'interno della cella
      pop(); // Ripristina lo stato di trasformazione precedente
    }
  }
}

// Funzione chiamata quando la finestra viene ridimensionata
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ridimensiona la tela per adattarla alla finestra
}

// Funzione per disegnare forme distorte all'interno di una cella
function diverseDistorsioni(size) {
  let margin = size * 0.1; // Imposta un margine per mantenere le forme entro i limiti della cella
  
  // Disegna il contorno del quadrato principale
  stroke(getRandomColorFromColorArray()); // Imposta un colore casuale per il contorno
  beginShape(); // Inizia a definire la forma del quadrato
  vertex(margin, margin); // Angolo in alto a sinistra
  vertex(size - margin, margin); // Angolo in alto a destra
  vertex(size - margin, size - margin); // Angolo in basso a destra
  vertex(margin, size - margin); // Angolo in basso a sinistra
  endShape(CLOSE); // Chiude il quadrato

  // Disegna forme distorte all'interno del quadrato
  let numShapes = int(random(3, 5)); // Numero casuale di forme distorte tra 3 e 5
  
  for (let k = 0; k < numShapes; k++) { // Ciclo per disegnare ogni forma
    stroke(getRandomColorFromColorArray()); // Scegli un colore casuale per il contorno
    beginShape(); // Inizia a definire la nuova forma
    
    let tipoForma = int(random(3)); // Tipo di forma casuale: 0 = curva, 1 = angoli acuti, 2 = circolare
    let vertici = int(random(4, 10)); // Numero casuale di vertici per la forma (tra 4 e 10)
    let raggio = random(size * 0.1, size * 0.4); // Dimensione variabile della forma

    // Ciclo per creare i vertici della forma
    for (let v = 0; v < vertici; v++) {
      let angolo = map(v, 0, vertici, 0, TWO_PI); // Calcola l'angolo per ogni vertice
      let distorsione = random(-margin * 0.4, margin * 0.4); // Distorsione casuale per ciascun vertice
      
      let x, y; // Coordinate x e y del vertice
      if (tipoForma === 0) {  // Se la forma è curva
        x = size / 2 + cos(angolo) * (raggio + distorsione); // x con distorsione
        y = size / 2 + sin(angolo) * (raggio + distorsione); // y con distorsione
      } else if (tipoForma === 1) {  // Se la forma ha angoli acuti
        x = size / 2 + cos(angolo) * (raggio + distorsione * random(1, 2)); // x con distorsione maggiore
        y = size / 2 + sin(angolo) * (raggio + distorsione * random(1, 2)); // y con distorsione maggiore
      } else {  // Se la forma è circolare
        x = size / 2 + cos(angolo) * raggio; // x senza distorsione
        y = size / 2 + sin(angolo) * raggio; // y senza distorsione
      }
      
      vertex(x, y); // Aggiunge il vertice calcolato alla forma
    }
    endShape(CLOSE); // Chiude il contorno della forma
  }
}

// Funzione per ottenere un colore casuale dall'array di colori
function getRandomColorFromColorArray() {
  let idx = Math.floor(random(colorArray.length)); // Indice casuale nell'array colorArray
  return colorArray[idx]; // Restituisce il colore corrispondente all'indice casuale
}

// Funzione per aggiornare la tela ogni X secondi
function updateCanvas() {
  clear();  // Pulisce la tela, eliminando il contenuto precedente
  redraw(); // Ridisegna la tela una sola volta
}
