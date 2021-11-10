const datosEstudiantes = [{
        nombre: "JHOANA LOPEZ JARAMILLO",
        github: "https://github.com/jhoanalopez-cmd",
        neocites: "https://neocities.org/site/jhoanapatricial",
        email: "jplopezj@correo.iue.edu.co",
        telefono: "321873950",
        foto: "images/jhoana_lopez.jpeg",
        actividades: [{
                actividad: "actividad 1",
                estadouiux: "10%",
                estadotecnico: "10%"
            },
            {
                actividad: "actividad 10",
                estadouiux: "10%",
                estadotecnico: "10%"
            },
            {
                actividad: "actividad 1",
                estadouiux: "10%",
                estadotecnico: "10%"
            }
        ],
        valoraciones: {
            valhtml: "100%",
            valcss: "100%",
            valjs: "3%",
            valui: "3%",
            valux: "3%"
        }
    },
    {
        nombre: "MICHEL SERNA",
        github: "https://github.com/michelserna31",
        neocites: "https://neocities.org/dashboard",
        email: "masab0731@gmail.com",
        telefono: "3003140494",
        foto: "images/Michel_serna.jpeg",
        actividades: [{
                actividad: "actividad 1",
                estadouiux: "10%",
                estadotecnico: "10%"
            },
            {
                actividad: "actividad 1",
                estadouiux: "10%",
                estadotecnico: "10%"
            },
            {
                actividad: "actividad 1",
                estadouiux: "10%",
                estadotecnico: "10%"
            }
        ],
        valoraciones: {
            valhtml: "100%",
            valcss: "100%",
            valjs: "3%",
            valui: "3%",
            valux: "3%"
        }
    }
];


function Plantilla(datos) {
    return `
    <div class="container">     
        <div class="Name"><h1 class="nombre">${datos.nombre}</h1></div>
        <div class="Foto1"><img src=${datos.foto} alt="" class="fotoed"></div>
        <div class="Enlaces">
            <ul class="contenla">
                <li><img src="/images/icono-git.jpg" alt=""><a href=${datos.github}>GitHub</a></li>
                <li><img src="/images/icono-neocities.jpg" alt=""><a href=${datos.neocites}">Neocites</a></li>
                <li><img src="/images/icono-email.jpg" alt=""><a href="">${datos.email}</a></li>
                <li><img src="/images/WhatsApp-logo.jpg" alt=""><a href="">${datos.telefono}</a></li>
            </ul>
        </div>
    </div>
    


    <div class="Actividades">
        <table class="tabla">
            <tr>
                <th>Actividades</th>
                <th>%UI/UX</th>
                <th>%dev</th>
            </tr>
            <tr>
                <td><a href="">Actividad1</a></td>
                <td>${datos.actividades[0].estadouiux}</td>
                <td>${datos.actividades[0].estadotecnico}</td>
            </tr>

            <tr>
                <td><a href="">Actividad2</a></td>
                <td>${datos.actividades[1].estadouiux}</td>
                <td>${datos.actividades[1].estadotecnico}</td>
            </tr>

            <tr>
                <td><a href="">Actividad3</a></td>
                <td>${datos.actividades[2].estadouiux}</td>
                <td>${datos.actividades[2].estadotecnico}</td>
            </tr>

        </table>
    </div> 
    


    <div class="Estados">
        <div class="valorhtml"><h2><a href= >Html </a></h2>
            <p>${datos.valoraciones.valhtml}</p>
        </div>
        <div class="valorcss"><h2><a href= >CSS </a></h2> 
            <p>${datos.valoraciones.valcss}</p>
        </div>
        <div class="valorjs"><h2><a href= >JS </a></h2>
            <p>${datos.valoraciones.valjs}</p>
        </div>
        <div class="valorui"><h2><a href= >UI </a></h2>
            <p>${datos.valoraciones.valui}</p>
        </div>
        <div class="valorui"><h2><a href= >UX</a></h2>
            <p>${datos.valoraciones.valux}</p>
        </div>
        <div class="imgicon"><a href=""><img src="/images/user-solid.svg" alt=""></a>
        </div>
    </div>
`
}



const p1 = document.getElementById("ficha").innerHTML = datosEstudiantes.map(Plantilla).join("");