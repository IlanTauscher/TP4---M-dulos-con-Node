const {URL} = require('url');

function objeto(url){

let miUrl = new URL(url);

const params = {};
miUrl.searchParams.forEach((value, key) => {
    params[key] = value;
});

obj = {
host: miUrl.host,
pathname: miUrl.pathname,
parametros: params
}

console.log(obj)
}

module.exports = objeto;