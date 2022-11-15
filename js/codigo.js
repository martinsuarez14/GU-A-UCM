
const contenedorDePeliculas = document.getElementById('contenedorPeliculas')

let peliculasOrdenadasPorEstreno = []
let fase1 = []
let fase2 = []
let fase3 = []
let fase4 = []
let fase5 = []
let opcionDePelicula


class Pelicula {
    constructor(anoDeLanzamiento, titulo, director, duracion, fase, imagen, video, ambientada) {
        this.anoDeLanzamiento = anoDeLanzamiento,
            this.titulo = titulo,
            this.director = director,
            this.duracion = duracion,
            this.fase = fase,
            this.imagen = imagen,
            this.video = video
            this.ambientada = ambientada
    }
}

function agregarPelicula(pelicula) {
    peliculasOrdenadasPorEstreno.push(pelicula)
}

let ironMan = new Pelicula(2008, 'Iron Man', 'Jon favreau', '126 minutos', 'Uno', './assets/iron-man.jpg', '<iframe src="https://www.youtube.com/embed/EVFUfCUZbxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
let hulk = new Pelicula(2008, 'El Increible Hulk', 'Louis Leterrier', '112 minutos', 'Uno', './assets/hulk.jpg', '<iframe  src="https://www.youtube.com/embed/P2TA4kB6EcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
let ironMan2 = new Pelicula(2010, 'Iron Man 2', 'Jon Favreau', '125 minutos', 'Uno', './assets/iron-man-2.jpg', '<iframe src="https://www.youtube.com/embed/AiWBoQ2DiD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
let thor = new Pelicula(2011, 'Thor', 'Kenneth Branagh, Alan Taylor, Taika Waititi', '114 minutos', 'Uno', './assets/thor.jpg', '<iframe  src="https://www.youtube.com/embed/n65Lkc-5zjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
let capitanAmerica = new Pelicula(2011, 'Capitán América: El Primer Vengador', '124 minutos', 'Uno', './assets/cap-america.jpg', )
let losVengadores = new Pelicula(2012, 'Los Vengadores', 'Joe Johnston', '143 minutos', 'Uno', './assets/vengadores.jpg', )

let ironMan3 = new Pelicula(2013, 'Iron Man 3', 'Shane Black', '130 minutos', 'Dos', './assets/iron-man-3.jpg', '<iframe  src="https://www.youtube.com/embed/bKWvs_yCT6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
let thor2 = new Pelicula(2013, 'Thor: El Mundo Oscuro', 'Alan Taylor', '112 minutos', 'Dos', './assets/thor2.jpg', )
let capitanAmerica2 = new Pelicula(2014 , 'Capitán América y El Soldado del Invierno', 'Anthony Russo', '136 minutos', 'Dos', './assets/capitan2.jpg', )
let guardianesDeLaGalaxia = new Pelicula(2014, 'Guardianes de la Galaxia', 'James Gunn', '122 minutos', 'Dos', './assets/guardianes.jpg', )
let losVengadores2 = new Pelicula(2015, 'Los Vengadores: La Era de Ultrón', 'Joss Whedon', '141 minutos', 'Dos', './assets/vengadores2.jpg', )
let antMan = new Pelicula(2015, 'Ant-Man', 'Peyton Reed', '117 minutos', 'Dos', './assets/antman.jpg', )

let capitanAmerica3 = new Pelicula(2016, 'Capitán América: Civil War', 'Anthony Russo', '147 minutos', 'Tres', './assets/capitan3.jpg', )
let doctorStrange = new Pelicula(2016, 'Doctor Strange', 'Scott Derrickson', '115 minutos', 'Tres', './assets/strange.jpg', )
let guardianesDeLaGalaxia2 = new Pelicula(2017, 'Guardianes de la Galaxia 2', 'James Gunn', '137 minutos', 'Tres', './assets/guardianes2.jpg', )
let spiderMan = new Pelicula(2017, 'Spider-Man: Homecoming', 'Jon Watts', '133 minutos', 'Tres', './assets/spider1.jpg', )
let Thor3 = new Pelicula(2017, 'Thor: Ragnarok', 'Taika Waititi', '130 minutos', 'Tres', './assets/thor3.jpg', )
let blackPanther = new Pelicula(2018, 'Black Panther', 'Ryan Coogler', '134 minutos', 'Tres', './assets/pantera.jpg', )
let losVengadoresInfinityWar = new Pelicula(2018, 'Los Vengadores: Infinity War', 'Anthony Russo, Joe Russo', '149 minutos', 'Tres', './assets/avengers3.jpg', )
let antMan2 = new Pelicula(2018, 'Ant-Man and the Wasp', 'Peyton Reed', '117 minutos', 'Tres', './assets/antman2.jpg', )
let capitanaMarvel = new Pelicula(2019, 'Capitana Marvel', 'Anna Boden, Ryan Fleck', '124 minutos', 'Tres', './assets/capitanamarvel.jpg', )
let losVengadoresEndGame = new Pelicula(2019, 'Los Vengadores: Endgame', 'Anthony Russo, Joe Russo', '181 minutos', 'Tres', './assets/avengers4.jpg', )
let spiderMan2 = new Pelicula(2019, 'Spider-Man: Lejos de casa', 'Jon Watts', '129 minutos', 'Tres', './assets/spider2.jpg', )

let wandaVision = new Pelicula(2021, 'WandaVisión', 'Matt Shakman', '9 episodios', 'Cuatro', './assets/wandaVision.jpg', )
let falconYsoldadoInvierno = new Pelicula(2021, 'Falcon y el Soldado de Invierno', '6 episodios', 'Kari Skogland', 'Cuatro', './assets/falcon.jpg', )
let loki = new Pelicula(2021, 'Loki', 'Michael Waldron', '6 episodios', 'Cuatro', './assets/loki.jpg', )
let viudaNegra = new Pelicula(2021, 'Black Widow', 'Cate Shortland', '133 minutos', 'Cuatro', './assets/widow.jpg', )
let shangChi = new Pelicula(2021, 'Shang-Chi y la Leyenda de los Diez Anillos', 'Destin Daniel Cretton', '132 minutos', 'Cuatro', './assets/chi.jpg', )
let eternals = new Pelicula(2021, 'Eternals', 'Chloé Zhao', '157 minutos', 'Cuatro', './assets/eternals.jpg', )
let ojoDeHalcon = new Pelicula(2021, 'Ojo de Halcón', 'Thomas y Bert & Bertie', '6 episodios', 'Cuatro', './assets/ojo.jpg', )
let spiderMan3 = new Pelicula(2021, 'Spider-Man: No Way Home', 'Jon Watts', '148 minutos', 'Cuatro', './assets/spiderman3.jpg', )
let moonKnight = new Pelicula(2022, 'Moon Knight', 'Christian Slater, Justin Benson, Aaron Moorhead', '6 episodios', 'Cuatro', './assets/moon.jpg', )
let doctorStrange2 = new Pelicula(2022, 'Doctor Strange en el Multiverso de la Locura', 'Sam Raimi', '126 minutos', 'Cuatro', './assets/strange2.jpg', )
let msMarvel = new Pelicula(2022, 'Ms. Marvel', 'Bilall Fallah, Adil El Arbi', '6 episodios', 'Cuatro', './assets/msmarvel.jpg', )
let Thor4 = new Pelicula(2022, 'Thor: Love and Thunder', 'Taika Waititi', '119 minutos', 'Cuatro', './assets/thor4.jpg', )
let sheHulk = new Pelicula(2022, 'She-Hulk', 'Kat Coiro', '9 episodios', 'Cuatro', './assets/shehulk.jpg', )
let blackPanther2 = new Pelicula(2022, 'Black Panther: Wakanda Forever', 'Ryan Coogler', '161 minutos', 'Cuatro', './assets/pantera2.jpg', )




agregarPelicula(ironMan)
agregarPelicula(hulk)
agregarPelicula(ironMan2)



// let ironMan2 

// agregarPelicula(ironMan2)

// let ironMan3 = new Pelicula(2013, 'Iron Man 3', 

// agregarPelicula(ironMan3)

function cargarPelicula() {

    peliculasOrdenadasPorEstreno.forEach((peli) => {
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
