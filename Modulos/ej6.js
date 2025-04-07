const {URL} = require('url');

function objeto2(url){
    try{
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
    }catch(e){
        console.log(`Hubo un error: ${e.message}`)
    }
    
}
module.exports = objeto2;