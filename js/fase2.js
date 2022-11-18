const contenedorDePeliculas = document.getElementById('contenedorPeliculas')

let fase2 = []

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

let ironMan3 = new Pelicula(2013, 'Iron Man 3', 'Shane Black', '130 minutos', 'Dos', '../assets/iron-man-3.jpg', '<iframe  src="https://www.youtube.com/embed/bKWvs_yCT6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe  src="https://www.youtube.com/embed/bKWvs_yCT6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(ironMan3, fase2)
let thor2 = new Pelicula(2013, 'Thor: El Mundo Oscuro', 'Alan Taylor', '112 minutos', 'Dos', '../assets/thor2.jpg', '<iframe  src="https://www.youtube.com/embed/wyaK5HoeBJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(thor2, fase2)
let capitanAmerica2 = new Pelicula(2014 , 'Capitán América y El Soldado del Invierno', 'Anthony Russo', '136 minutos', 'Dos', '../assets/capitan2.jpg', '<iframe src="https://www.youtube.com/embed/FmXjNGVpXUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanAmerica2, fase2)
let guardianesDeLaGalaxia = new Pelicula(2014, 'Guardianes de la Galaxia', 'James Gunn', '122 minutos', 'Dos', '../assets/guardianes.jpg', '<iframe  src="https://www.youtube.com/embed/uvUMGJ66IfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(guardianesDeLaGalaxia, fase2)
let losVengadores2 = new Pelicula(2015, 'Los Vengadores: La Era de Ultrón', 'Joss Whedon', '141 minutos', 'Dos', '../assets/vengadores2.jpg', '<iframe  src="https://www.youtube.com/embed/hTCQgyrIt8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadores2, fase2)
let antMan = new Pelicula(2015, 'Ant-Man', 'Peyton Reed', '117 minutos', 'Dos', '../assets/antman.jpg', '<iframe src="https://www.youtube.com/embed/mBv4FSyg-P4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(antMan, fase2)

function cargarPelicula() {

    fase2.forEach((peli) => {
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