const fs = require('fs');

function copiar(archivoViejo, nuevoNombre) {
  const contenido = fs.readFileSync(archivoViejo, 'utf8');
  fs.writeFileSync(nuevoNombre, contenido);
}
 
module.exports = copiar;