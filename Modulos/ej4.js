const fs = require('fs');

function copiar(rutaOrigen, rutaDestino) {
   fs.readFile(rutaOrigen, 'utf8', (err, data) => {
     if (err) {
       console.error('Error al leer el archivo:', err.message);
       return;
     }
 
     fs.writeFile(rutaDestino, data, 'utf8', (err) => {
       if (err) {
         console.error('Error al escribir el archivo:', err.message);
         return;
       }
 
       console.log(`Archivo copiado exitosamente de ${rutaOrigen} a ${rutaDestino}`);
     });
   });
 }
 
 // Ejemplo de uso
 copiar('./entrada.txt', './salida.txt');