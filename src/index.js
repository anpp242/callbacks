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


searchHero( heroeId )
    .then(( hero )=>{
        console.log(`Enviando a ${hero.nombre} a la misión`);
    })