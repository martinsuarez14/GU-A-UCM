
const contenedorDePeliculas = document.getElementById('contenedorPeliculas')

let peliculasOrdenadasPorEstreno = []
let fase1 = []
let fase2 = []
let fase3 = []
let fase4 = []
let fase5 = []
let opcionDePelicula


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

let ironMan = new Pelicula(2008, 'Iron Man', 'Jon favreau', '126 minutos', 'Uno', './assets/iron-man.jpg', '<iframe src="https://www.youtube.com/embed/EVFUfCUZbxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(ironMan, fase1)
let hulk = new Pelicula(2008, 'El Increible Hulk', 'Louis Leterrier', '112 minutos', 'Uno', './assets/hulk.jpg', '<iframe  src="https://www.youtube.com/embed/P2TA4kB6EcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(hulk, fase1)
let ironMan2 = new Pelicula(2010, 'Iron Man 2', 'Jon Favreau', '125 minutos', 'Uno', './assets/iron-man-2.jpg', '<iframe src="https://www.youtube.com/embed/AiWBoQ2DiD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(ironMan2, fase1)
let thor = new Pelicula(2011, 'Thor', 'Kenneth Branagh, Alan Taylor, Taika Waititi', '114 minutos', 'Uno', './assets/thor.jpg', '<iframe  src="https://www.youtube.com/embed/n65Lkc-5zjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
agregarPelicula(thor, fase1)
let capitanAmerica = new Pelicula(2011, 'Capitán América: El Primer Vengador', '124 minutos', 'Uno', './assets/cap-america.jpg', '<iframe  src="https://www.youtube.com/embed/JnL7sjclx8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanAmerica, fase1)
let losVengadores = new Pelicula(2012, 'Los Vengadores', 'Joe Johnston', '143 minutos', 'Uno', './assets/vengadores.jpg', '<iframe  src="https://www.youtube.com/embed/4mwtDHovB3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadores, fase1)

let ironMan3 = new Pelicula(2013, 'Iron Man 3', 'Shane Black', '130 minutos', 'Dos', './assets/iron-man-3.jpg', '<iframe  src="https://www.youtube.com/embed/bKWvs_yCT6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe  src="https://www.youtube.com/embed/bKWvs_yCT6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(ironMan3, fase2)
let thor2 = new Pelicula(2013, 'Thor: El Mundo Oscuro', 'Alan Taylor', '112 minutos', 'Dos', './assets/thor2.jpg', '<iframe  src="https://www.youtube.com/embed/wyaK5HoeBJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(thor2, fase2)
let capitanAmerica2 = new Pelicula(2014 , 'Capitán América y El Soldado del Invierno', 'Anthony Russo', '136 minutos', 'Dos', './assets/capitan2.jpg', '<iframe src="https://www.youtube.com/embed/FmXjNGVpXUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanAmerica2, fase2)
let guardianesDeLaGalaxia = new Pelicula(2014, 'Guardianes de la Galaxia', 'James Gunn', '122 minutos', 'Dos', './assets/guardianes.jpg', '<iframe  src="https://www.youtube.com/embed/uvUMGJ66IfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(guardianesDeLaGalaxia, fase2)
let losVengadores2 = new Pelicula(2015, 'Los Vengadores: La Era de Ultrón', 'Joss Whedon', '141 minutos', 'Dos', './assets/vengadores2.jpg', '<iframe  src="https://www.youtube.com/embed/hTCQgyrIt8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadores2, fase2)
let antMan = new Pelicula(2015, 'Ant-Man', 'Peyton Reed', '117 minutos', 'Dos', './assets/antman.jpg', '<iframe src="https://www.youtube.com/embed/mBv4FSyg-P4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(antMan, fase2)

let capitanAmerica3 = new Pelicula(2016, 'Capitán América: Civil War', 'Anthony Russo', '147 minutos', 'Tres', './assets/capitan3.jpg', '<iframe  src="https://www.youtube.com/embed/IZAfpXFY3xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanAmerica3, fase3)
let doctorStrange = new Pelicula(2016, 'Doctor Strange', 'Scott Derrickson', '115 minutos', 'Tres', './assets/strange.jpg', '<iframe  src="https://www.youtube.com/embed/dOhfaLMbvxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(doctorStrange, fase3)
let guardianesDeLaGalaxia2 = new Pelicula(2017, 'Guardianes de la Galaxia 2', 'James Gunn', '137 minutos', 'Tres', './assets/guardianes2.jpg', '<iframe  src="https://www.youtube.com/embed/XOoez2Pe6kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(guardianesDeLaGalaxia2, fase3)
let spiderMan = new Pelicula(2017, 'Spider-Man: Homecoming', 'Jon Watts', '133 minutos', 'Tres', './assets/spider1.jpg', '<iframe  src="https://www.youtube.com/embed/sfPWvYKKAJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(spiderMan, fase3)
let Thor3 = new Pelicula(2017, 'Thor: Ragnarok', 'Taika Waititi', '130 minutos', 'Tres', './assets/thor3.jpg', '<iframe  src="https://www.youtube.com/embed/6fdK9bTM7ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(Thor3, fase3)
let blackPanther = new Pelicula(2018, 'Black Panther', 'Ryan Coogler', '134 minutos', 'Tres', './assets/pantera.jpg', '<iframe  src="https://www.youtube.com/embed/EoeyHxgr9t8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(blackPanther, fase3)
let losVengadoresInfinityWar = new Pelicula(2018, 'Los Vengadores: Infinity War', 'Anthony Russo, Joe Russo', '149 minutos', 'Tres', './assets/avengers3.jpg', '<iframe  src="https://www.youtube.com/embed/aAoKqx9wb1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadoresInfinityWar, fase3)
let antMan2 = new Pelicula(2018, 'Ant-Man and the Wasp', 'Peyton Reed', '117 minutos', 'Tres', './assets/antman2.jpg', '<iframe  src="https://www.youtube.com/embed/DYHAE7A2jpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(antMan2, fase3)
let capitanaMarvel = new Pelicula(2019, 'Capitana Marvel', 'Anna Boden, Ryan Fleck', '124 minutos', 'Tres', './assets/capitanamarvel.jpg', '<iframe  src="https://www.youtube.com/embed/6XkN-MFNZpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(capitanaMarvel, fase3)
let losVengadoresEndGame = new Pelicula(2019, 'Los Vengadores: Endgame', 'Anthony Russo, Joe Russo', '181 minutos', 'Tres', './assets/avengers4.jpg', '<iframe  src="https://www.youtube.com/embed/znk2OICHbjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(losVengadoresEndGame, fase3)
let spiderMan2 = new Pelicula(2019, 'Spider-Man: Lejos de casa', 'Jon Watts', '129 minutos', 'Tres', './assets/spider2.jpg', '<iframe  src="https://www.youtube.com/embed/6XkN-MFNZpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(spiderMan2, fase3)

let wandaVision = new Pelicula(2021, 'WandaVisión', 'Matt Shakman', '9 episodios', 'Cuatro', './assets/wandaVision.jpg', '<iframe  src="https://www.youtube.com/embed/UuhqbcMNrME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(wandaVision, fase4)
let falconYsoldadoInvierno = new Pelicula(2021, 'Falcon y el Soldado de Invierno', '6 episodios', 'Kari Skogland', 'Cuatro', './assets/falcon.jpg', '<iframe  src="https://www.youtube.com/embed/nxyckmizMUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(falconYsoldadoInvierno, fase4)
let loki = new Pelicula(2021, 'Loki', 'Michael Waldron', '6 episodios', 'Cuatro', './assets/loki.jpg', '<iframe  src="https://www.youtube.com/embed/hXKnQpk1DZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(loki, fase4)
let viudaNegra = new Pelicula(2021, 'Black Widow', 'Cate Shortland', '133 minutos', 'Cuatro', './assets/widow.jpg', '<iframe  src="https://www.youtube.com/embed/gR3JFH_3LhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(viudaNegra, fase4)
let shangChi = new Pelicula(2021, 'Shang-Chi y la Leyenda de los Diez Anillos', 'Destin Daniel Cretton', '132 minutos', 'Cuatro', './assets/chi.jpg', '<iframe  src="https://www.youtube.com/embed/Y_SS9K4N0K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(shangChi, fase4)
let eternals = new Pelicula(2021, 'Eternals', 'Chloé Zhao', '157 minutos', 'Cuatro', './assets/eternals.jpg', '<iframe  src="https://www.youtube.com/embed/MKWXuj3ZYf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(eternals, fase4)
let ojoDeHalcon = new Pelicula(2021, 'Ojo de Halcón', 'Thomas y Bert & Bertie', '6 episodios', 'Cuatro', './assets/ojo.jpg', '<iframe  src="https://www.youtube.com/embed/eLb5trpCt9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(ojoDeHalcon, fase4)
let spiderMan3 = new Pelicula(2021, 'Spider-Man: No Way Home', 'Jon Watts', '148 minutos', 'Cuatro', './assets/spiderman3.jpg', '<iframe  src="https://www.youtube.com/embed/z70zo9gQUKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(spiderMan3, fase4)
let moonKnight = new Pelicula(2022, 'Moon Knight', 'Christian Slater, Justin Benson, Aaron Moorhead', '6 episodios', 'Cuatro', './assets/moon.jpg', '<iframe  src="https://www.youtube.com/embed/0STDZqXCTxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(moonKnight, fase4)
let doctorStrange2 = new Pelicula(2022, 'Doctor Strange en el Multiverso de la Locura', 'Sam Raimi', '126 minutos', 'Cuatro', './assets/strange2.jpg', '<iframe  src="https://www.youtube.com/embed/cFHjZfy50Kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(doctorStrange2, fase4)
let msMarvel = new Pelicula(2022, 'Ms. Marvel', 'Bilall Fallah, Adil El Arbi', '6 episodios', 'Cuatro', './assets/msmarvel.jpg', '<iframe  src="https://www.youtube.com/embed/fH3gc-kr8Rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(msMarvel, fase4)
let Thor4 = new Pelicula(2022, 'Thor: Love and Thunder', 'Taika Waititi', '119 minutos', 'Cuatro', './assets/thor4.jpg', '<iframe  src="https://www.youtube.com/embed/pR6pOzwP2Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(Thor4, fase4)
let sheHulk = new Pelicula(2022, 'She-Hulk', 'Kat Coiro', '9 episodios', 'Cuatro', './assets/shehulk.jpg', '<iframe  src="https://www.youtube.com/embed/D2Ad8jm3yQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(sheHulk, fase4)
let blackPanther2 = new Pelicula(2022, 'Black Panther: Wakanda Forever', 'Ryan Coogler', '161 minutos', 'Cuatro', './assets/pantera2.jpg', '<iframe  src="https://www.youtube.com/embed/BPjbiZQmBI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(blackPanther2, fase4)

let antMan3 = new Pelicula(2023, 'Ant-Man and The Wasp: Quantumania', 'Peyton Reed', '00 minutos', 'Cinco', './assets/antman3.jpg', '<iframe  src="https://www.youtube.com/embed/oH43Rx_WnWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(antMan3, fase5)






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
