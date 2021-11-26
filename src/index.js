import {  promesaLenta, promesaMedia, promesaRapida  } from './js/promise';

/* promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log ); */

Promise.race( [  promesaLenta, promesaMedia, promesaRapida  ] )
    .then(mensaje => console.log(mensaje))