const heros = {
    capi: {
        nombre: 'capitan America',
        poder: 'Cualquier poder'
    },
    iron: {
        nombre: 'Iron man',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spider Man',
        poder: 'No le afectan las arañas'
    }
}

export const searchHero = (id) => {
    const hero = heros[id];

    return new Promise( ( resolve, reject ) =>{
        if( hero ){
            resolve( hero );
        }else{
            reject( `No existe un heroe con id ${id}` );
        }
    } );
}