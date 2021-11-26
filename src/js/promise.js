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

const promesaLenta = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promesa Lenta')
    }, 2000)
});

const promesaMedia = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promesa Media')
    }, 1500)
});

const promesaRapida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promesa Rápida')
    }, 1000)
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}