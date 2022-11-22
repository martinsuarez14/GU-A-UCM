const contenedorDePeliculas = document.getElementById('contenedorPeliculas')

let fase1 = []

class Pelicula {
    constructor(anoDeLanzamiento, titulo, director, duracion, fase, imagen, video) {
        this.anoDeLanzamiento = anoDeLanzamiento,
            this.titulo = titulo,
            this.director = director,
            this.duracion = duracion,
            this.fase = fase,
            this.imagen = imagen,
            this.video = video
    }
}

function agregarPelicula(pelicula, fase) {
    fase.push(pelicula);
    //peliculasOrdenadasPorEstreno.push(pelicula)
}

let ironMan = new Pelicula(2008, 'Iron Man', 'Jon favreau', '126 minutos', 'Uno', '../assets/iron-man.jpg', '<iframe src="https://www.youtube.com/embed/EVFUfCUZbxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(ironMan, fase1)
let hulk = new Pelicula(2008, 'El Increible Hulk', 'Louis Leterrier', '112 minutos', 'Uno', '../assets/hulk.jpg', '<iframe  src="https://www.youtube.com/embed/P2TA4kB6EcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(hulk, fase1)
let ironMan2 = new Pelicula(2010, 'Iron Man 2', 'Jon Favreau', '125 minutos', 'Uno', '../assets/iron-man-2.jpg', '<iframe  src="https://www.youtube.com/embed/ixn7vi21w7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(ironMan2, fase1)
let thor = new Pelicula(2011, 'Thor', 'Kenneth Branagh, Alan Taylor, Taika Waititi', '114 minutos', 'Uno', '../assets/thor.jpg', '<iframe  src="https://www.youtube.com/embed/n65Lkc-5zjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(thor, fase1)
let capitanAmerica = new Pelicula(2011, 'Capitán América: El Primer Vengador', 'Joe Johnston', '124 minutos', 'Uno', '../assets/cap-america.jpg', '<iframe  src="https://www.youtube.com/embed/JnL7sjclx8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanAmerica, fase1)
let losVengadores = new Pelicula(2012, 'Los Vengadores', 'Joe Johnston', '143 minutos', 'Uno', '../assets/vengadores.jpg', '<iframe  src="https://www.youtube.com/embed/4mwtDHovB3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadores, fase1)

function cargarPelicula() {

    fase1.forEach((peli) => {
        opcionDePelicula = `<section class="listado">
        <div class="cabecera">
            <h2>${peli.anoDeLanzamiento}</h2>
            <hr>
        </div>
        <div class="contenido">
            <div class="imagen">
                <img src="${peli.imagen}" alt="Iron Man">
            </div>
            <div class="datos">
                <p><b>Título:</b> ${peli.titulo}</p>
                <p><b>Año de Lanzamiento:</b> ${peli.anoDeLanzamiento}</p>
                <p><b>Duración:</b> ${peli.duracion}</p>
                <p><b>Director:</b> ${peli.director}</p>
                <p><b>Fase:</b> ${peli.fase}</p>
            </div>
            <div class="video">
                ${peli.video}
            </div>
        </div>
    </section>`

        contenedorDePeliculas.innerHTML += opcionDePelicula
    })
}

cargarPelicula()