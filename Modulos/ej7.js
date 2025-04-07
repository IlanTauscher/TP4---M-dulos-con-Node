const { countries, currencies } = require('country-data');

function obtenerMonedaPorPais(nombrePais) {
  const pais = countries.all.find(
    (p) => p.name.toLowerCase() === nombrePais.toLowerCase()
  );

  if (!pais) {
    return `No se encontró el país: ${nombrePais}`;
  }

  const codigosMoneda = pais.currencies;
  const nombresMoneda = codigosMoneda.map(
    (codigo) => currencies[codigo]?.name || codigo
  );

  return nombresMoneda;
}

console.log(obtenerMonedaPorPais("Argentina"));

module.exports = obtenerMonedaPorPais;