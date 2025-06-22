export const products = [
    
    //{
        //id:'01',
        //name:'Español',
        //price:2000,
        //description: 'El idioma hablado en Argentina, México, España',
        //stock:30,
        //img:'https://i.postimg.cc/kX8fnyf5/Espa-ol.webp',
        //category:'latino'
    //},
    {
        name:'Frances',
        price:2500,
        description:'El idioma hablando en Francia, Canadá (provincia de Quebec), Bélgica',
        stock:25,
        img:'https://i.postimg.cc/HWF6DN0K/Frances.webp',
        category:'latino'
    },
    {
        name:'Ingles',
        price:2500,
        stock:30,
        description:'El idioma hablando en Estados Unidos, Reino Unido, Australia',
        img:'https://i.postimg.cc/YCdgkGK9/Ingles.webp',
         category:'germánica'
    },
    {
        name:'Aleman',
        price:2000,
        stock:20,
        description:'El idioma hablando Alemania, Austria, Suiza',
        img:'https://i.postimg.cc/fk4t2m92/Alemania.webp',
        category:'germánica'
    },
    {
        name:'Chino',
        price:3000,
        stock:30,
        description:'El idioma hablando China, Taiwán, Singapur',
        img:'https://i.postimg.cc/G22yHcRQ/Chino.png',
        category:'asiatica'
    },
    {
        name:'Japones',
        price:3000,
        stock:20,
        description:'El idioma hablando Japón, Palau, Okinawa',
        img:'https://i.postimg.cc/J4wsW3sK/Japones.webp',
        category:'asiatica'
    }
]
let error =false

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}


export const getOneProduct = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct= products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject('Hubo un error, intente más tarde')
            }
        },3000)
    })
}

//Capitulo 3//