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

export const searchHero = ( id, callback ) => {
    const hero = heros[id];

    if( hero ){
        callback( null, hero );
    }else{
        callback( `No existe un heroe con id ${id}` );
    }
}