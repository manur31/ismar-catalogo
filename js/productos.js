const productos = [
    // Pulseras
    {
        id: 'STPA',
        imagen: '/recursos/imgs/IMG_8659.JPG',
        nombre: 'Pulsera LOVE',
        precio: 400,
        categoria: {
            nombre: 'Brezaletes',
            id: 'brazaletes'
        }
    },
    // {
    //     id: 'BZT4',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Pulsera Gotas',
    //     precio: 570,
    //     categoria: {
    //         nombre: 'Brezaletes',
    //         id: 'brazaletes'
    //     }
    // },
    {
        id: 'BZT7-2',
        imagen: '/recursos/imgs/IMG_8658.JPG',
        nombre: 'Pulsera Clavo',
        precio: 450,
        categoria: {
            nombre: 'Brezaletes',
            id: 'brazaletes'
        }
    },

     //Anillos
     {
         id: 'ANR3-24',
         imagen: '/recursos/imgs/IMG_9635.JPG',
         nombre: 'Anillo Perla',
         precio: 320,
         categoria: {
             nombre: 'Anillos',
             id: 'anillos'
         }
     },
     {
         id: 'ANR3-22',
         imagen: '/recursos/imgs/IMG_9637.JPG',
         nombre: 'Anillo Concha',
         precio: 350,
         categoria: {
             nombre: 'Anillos',
             id: 'anillos'
         }
     },
         {
            id: 'ANR3-22',
            imagen: '/recursos/imgs/IMG_9632.JPG',
            nombre: 'Anillo Sofistique',
            precio: 300,
            categoria: {
                nombre: 'Anillos',
                id: 'anillos'
            }
        },
     {
         id: 'ANR2-9',
         imagen: '/recursos/imgs/IMG_8651.JPG',
         nombre: 'Anillo Nudo',
         precio: 300,
         categoria: {
             nombre: 'Anillos',
             id: 'anillos'
         }
     },
     {
         id: 'ANR2-12',
         imagen: '/recursos/imgs/IMG_9634.JPG',
         nombre: 'Anillo Aros de Oro',
         precio: 270,
         categoria: {
             nombre: 'Anillos',
             id: 'anillos'
         }
     },
     {
         id: 'ANR2-48',
         imagen: '/recursos/imgs/IMG_9631.JPG',
         nombre: 'Anillo Corazon de Plata',
         precio: 300,
         categoria: {
            nombre: 'Anillos',
            id: 'anillos'
         }
     },

    // Earcof
    {
        id: 'EAR1-04',
        imagen: '/recursos/imgs/IMG_8492.JPG',
        nombre: 'Earcof Sofistique',
        precio: 300,
        categoria: {
            nombre: 'Earcof',
            id: 'earcof'
        }
    },
    {
        id: 'EAR1-64',
        imagen: '/recursos/imgs/IMG_8577.JPG',
        nombre: 'Earcof Gusano',
        precio: 350,
        categoria: {
            nombre: 'Earcof',
            id: 'earcof'
        }
    },
    // {
    //     id: 'EAR2-5',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Earcof Gota',
    //     precio: 420,
    //     categoria: {
    //         nombre: 'Earcof',
    //         id: 'earcof'
    //     }
    // },

    // Argollas
    {
        id: 'AR3-30',
        imagen: '/recursos/imgs/IMG_8508.JPG',
        nombre: 'Argollas Tifani',
        precio: 350,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },
    {
        id: 'AR3-31',
        imagen: '/recursos/imgs/IMG_8505.JPG',
        nombre: 'Argollas Tifani Plata',
        precio: 350,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },
    {
        id: 'AR2-9',
        imagen: '/recursos/imgs/IMG_8647.JPG',
        nombre: 'Argollas Lisa Pequena Plata',
        precio: 250,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },
    {
        id: 'AR3-119',
        imagen: '/recursos/imgs/IMG_8513.JPG',
        nombre: 'Argollas Leila',
        precio: 350,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },
    {
        id: 'AR2-25',
        imagen: '/recursos/imgs/IMG_8648.JPG',
        nombre: 'Argollas Lisa Ovalada',
        precio: 250,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },
    // {
    //     id: 'AR2-13',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Argollas Lisa Mediana Plata',
    //     precio: 250,
    //     categoria: {
    //         nombre: 'Argollas',
    //         id: 'argollas'
    //     }
    // },
    // {
    //     id: 'AR3',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Argollas Blair',
    //     precio: 350,
    //     categoria: {
    //         nombre: 'Argollas',
    //         id: 'argollas'
    //     }
    // },
    {
        id: 'AR2-11',
        imagen: '/recursos/imgs/IMG_8515.JPG',
        nombre: 'Argollas Lisa Pequena',
        precio: 250,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },
    {
        id: 'AR2-12',
        imagen: '/recursos/imgs/IMG_8574.JPG',
        nombre: 'Argollas Lisa Mediana',
        precio: 250,
        categoria: {
            nombre: 'Argollas',
            id: 'argollas'
        }
    },

    // Aretes
    {
        id: 'TPR1-1',
        imagen: '/recursos/imgs/IMG_8573.JPG',
        nombre: 'Gota de Oro Pequena',
        precio: 270,
        categoria: {
            nombre: 'Aretes',
            id: 'aretes'
        }
    },
    {
        id: 'TPR1-2',
        imagen: '/recursos/imgs/IMG_9647.JPG',
        nombre: 'Gota de Oro Mediana',
        precio: 300,
        categoria: {
            nombre: 'Aretes',
            id: 'aretes'
        }
    },
    {
        id: 'TPR1-3',
        imagen: '/recursos/imgs/IMG_8512.JPG',
        nombre: 'Gota de Oro Grande',
        precio: 350,
        categoria: {
            nombre: 'Aretes',
            id: 'aretes'
        }
    },

    //Maxi Topos

    {
        id: 'TPR5-1',
        imagen: '/recursos/imgs/IMG_9646.JPG',
        nombre: 'Corazon de Febrero',
        precio: 350,
        categoria: {
            nombre: 'Maxi Topos',
            id: 'maxi-topos'
        }
    },
    {
        id: 'TPR5-2',
        imagen: '/recursos/imgs/IMG_8572.JPG',
        nombre: 'Caracola',
        precio: 350,
        categoria: {
            nombre: 'Maxi Topos',
            id: 'maxi-topos'
        }
    },
    // {
    //     id: 'TPR5-11',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Camila',
    //     precio: 350,
    //     categoria: {
    //         nombre: 'Maxi Topos',
    //         id: 'maxi-topos'
    //     }
    // },

    // Cadenas
    // {
    //     id: 'CDR25',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Cadena Lazo',
    //     precio: 550,
    //     categoria: {
    //         nombre: 'Cadenas',
    //         id: 'cadenas'
    //     }
    // },
    {
        id: 'CDR3-18',
        imagen: '/recursos/imgs/IMG_8675.JPG',
        nombre: 'Cadena Perla',
        precio: 450,
        categoria: {
            nombre: 'Cadenas',
            id: 'cadenas'
        }
    },
    {
        id: 'CDG1',
        imagen: '/recursos/imgs/IMG_9657.JPG',
        nombre: 'Cadena Corazoncito de Plata',
        precio: 450,
        categoria: {
            nombre: 'Cadenas',
            id: 'cadenas'
        }
    },
    // {
    //     id: 'CDR3-',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Cadena Bolas de Plata',
    //     precio: 300,
    //     categoria: {
    //         nombre: 'Cadenas',
    //         id: 'cadenas'
    //     }
    // },
    {
        id: 'CDR3',
        imagen: '/recursos/imgs/IMG_9659.JPG',
        nombre: 'Cadena Nudos de Amor',
        precio: 550,
        categoria: {
            nombre: 'Cadenas',
            id: 'cadenas'
        }
    },
    // {
    //     id: 'CDR1',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Cadena Chapas de Oro',
    //     precio: 300,
    //     categoria: {
    //         nombre: 'Cadenas',
    //         id: 'cadenas'
    //     }
    // },
    // {
    //     id: 'CDA5',
    //     imagen: '/recursos/imgs/',
    //     nombre: 'Cadena de Acero XNID',
    //     precio: 170,
    //     categoria: {
    //         nombre: 'Cadenas',
    //         id: 'cadenas'
    //     }
    // },
    // {
    //     id: 'CDCF',
    //     imagen: '/recursos/imgs/IMG_8663.JPG',
    //     nombre: 'Cadena Cafecito',
    //     precio: 450,
    //     categoria: {
    //         nombre: 'Cadenas',
    //         id: 'cadenas'
    //     }
    // },
]


const contenedorProductos = document.querySelector('.contenedor-productos');

function mostrarProductos() {

    productos.forEach(producto => {

        const div = document.createElement('div');

        div.classList.add('producto');

        div.innerHTML =
        `   <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="detalles-producto">
                <h3 class="nombre-producto">${producto.nombre}</h3>
                <p class="precio-producto">RD$<span>${producto.precio}</span></p>
            </div>
            <button class="btn-comprar">Comprar</button>`

        contenedorProductos.append(div);
    })
}
    

mostrarProductos();

const number = '+18092649298'

contenedorProductos.addEventListener('click', e => {

    if (e.target.classList.contains('btn-comprar')){
        const producto = e.target.parentElement;

        const infoProducto = {
            nombre: producto.querySelector('h3').textContent,
            precio: producto.querySelector('p').textContent
        };

        var url = 'https://wa.me/' + number + '?text='
        +'¡Hola! Me interesa comprar:' + '%0a'
        +'*Producto:* ' +infoProducto.nombre+ '%0a'
        +'*Precio:* ' +infoProducto.precio+ '%0a' + '%0a'
        +'Agradezco cualquier información adicional sobre la compra o el envío. ¡Quedo atento/a!' + '%0a';

        window.open(url, '_blank').focus();
    }

});