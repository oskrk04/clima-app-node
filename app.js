const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLtLng(argv.direccion).then(resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log(err);
// })

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLtLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El cima de ${ coord.direccion} es de ${ temp }`;
    } catch (error) {
        return `No se puedo determinar el cima de ${direccion}`
    }
}


getInfo(argv.direccion).then(console.log).catch(console.log)