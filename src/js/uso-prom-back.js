import {searchHero as searchCallbacks} from './js/callbacks';
import {searchHero}  from './js/promise';
import './style.css';

const heroeId = 'capi';
const heroeId2 = 'iron';

searchHero( heroeId, ( err, hero )=>{
    if( err ){
        console.error( err );
    }else{
        console.log( hero );
    }
} );


/* searchHero( heroeId )
    .then(( hero )=>{
        console.log(`Enviando a ${hero.nombre} a la misión`);
    }) */

Promise.all( [ searchHero(heroeId), searchHero(heroeId2) ] )
    .then(  ([hero1, hero2]) =>{
        console.log(  `Enviando a ${hero1.nombre} y ${hero2.nombre}`  );
    })
    .catch( err => {
        alert(err);
    })
    .finally(()=>{
        console.log('se termino!');
    });