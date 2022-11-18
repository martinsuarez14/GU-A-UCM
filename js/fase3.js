const contenedorDePeliculas = document.getElementById('contenedorPeliculas')

let fase3 = []

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

let capitanAmerica3 = new Pelicula(2016, 'Capitán América: Civil War', 'Anthony Russo', '147 minutos', 'Tres', '../assets/capitan3.jpg', '<iframe  src="https://www.youtube.com/embed/IZAfpXFY3xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanAmerica3, fase3)
let doctorStrange = new Pelicula(2016, 'Doctor Strange', 'Scott Derrickson', '115 minutos', 'Tres', '../assets/strange.jpg', '<iframe  src="https://www.youtube.com/embed/dOhfaLMbvxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(doctorStrange, fase3)
let guardianesDeLaGalaxia2 = new Pelicula(2017, 'Guardianes de la Galaxia 2', 'James Gunn', '137 minutos', 'Tres', '../assets/guardianes2.jpg', '<iframe  src="https://www.youtube.com/embed/XOoez2Pe6kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(guardianesDeLaGalaxia2, fase3)
let spiderMan = new Pelicula(2017, 'Spider-Man: Homecoming', 'Jon Watts', '133 minutos', 'Tres', '../assets/spider1.jpg', '<iframe  src="https://www.youtube.com/embed/sfPWvYKKAJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(spiderMan, fase3)
let Thor3 = new Pelicula(2017, 'Thor: Ragnarok', 'Taika Waititi', '130 minutos', 'Tres', '../assets/thor3.jpg', '<iframe  src="https://www.youtube.com/embed/6fdK9bTM7ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(Thor3, fase3)
let blackPanther = new Pelicula(2018, 'Black Panther', 'Ryan Coogler', '134 minutos', 'Tres', '../assets/pantera.jpg', '<iframe  src="https://www.youtube.com/embed/EoeyHxgr9t8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(blackPanther, fase3)
let losVengadoresInfinityWar = new Pelicula(2018, 'Los Vengadores: Infinity War', 'Anthony Russo, Joe Russo', '149 minutos', 'Tres', '../assets/avengers3.jpg', '<iframe  src="https://www.youtube.com/embed/aAoKqx9wb1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadoresInfinityWar, fase3)
let antMan2 = new Pelicula(2018, 'Ant-Man and the Wasp', 'Peyton Reed', '117 minutos', 'Tres', '../assets/antman2.jpg', '<iframe  src="https://www.youtube.com/embed/DYHAE7A2jpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(antMan2, fase3)
let capitanaMarvel = new Pelicula(2019, 'Capitana Marvel', 'Anna Boden, Ryan Fleck', '124 minutos', 'Tres', '../assets/capitanamarvel.jpg', '<iframe  src="https://www.youtube.com/embed/6XkN-MFNZpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanaMarvel, fase3)
let losVengadoresEndGame = new Pelicula(2019, 'Los Vengadores: Endgame', 'Anthony Russo, Joe Russo', '181 minutos', 'Tres', '../assets/avengers4.jpg', '<iframe  src="https://www.youtube.com/embed/znk2OICHbjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadoresEndGame, fase3)
let spiderMan2 = new Pelicula(2019, 'Spider-Man: Lejos de casa', 'Jon Watts', '129 minutos', 'Tres', '../assets/spider2.jpg', '<iframe  src="https://www.youtube.com/embed/6XkN-MFNZpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(spiderMan2, fase3)

function cargarPelicula() {

    fase3.forEach((peli) => {
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