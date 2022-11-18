const contenedorDePeliculas = document.getElementById('contenedorPeliculas')

let fase4 = []

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

let wandaVision = new Pelicula(2021, 'WandaVisión', 'Matt Shakman', '9 episodios', 'Cuatro', '../assets/wandaVision.jpg', '<iframe  src="https://www.youtube.com/embed/UuhqbcMNrME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(wandaVision, fase4)
let falconYsoldadoInvierno = new Pelicula(2021, 'Falcon y el Soldado de Invierno', '6 episodios', 'Kari Skogland', 'Cuatro', '../assets/falcon.jpg', '<iframe  src="https://www.youtube.com/embed/nxyckmizMUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(falconYsoldadoInvierno, fase4)
let loki = new Pelicula(2021, 'Loki', 'Michael Waldron', '6 episodios', 'Cuatro', '../assets/loki.jpg', '<iframe  src="https://www.youtube.com/embed/hXKnQpk1DZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(loki, fase4)
let viudaNegra = new Pelicula(2021, 'Black Widow', 'Cate Shortland', '133 minutos', 'Cuatro', '../assets/widow.jpg', '<iframe  src="https://www.youtube.com/embed/gR3JFH_3LhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(viudaNegra, fase4)
let shangChi = new Pelicula(2021, 'Shang-Chi y la Leyenda de los Diez Anillos', 'Destin Daniel Cretton', '132 minutos', 'Cuatro', '../assets/chi.jpg', '<iframe  src="https://www.youtube.com/embed/Y_SS9K4N0K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(shangChi, fase4)
let eternals = new Pelicula(2021, 'Eternals', 'Chloé Zhao', '157 minutos', 'Cuatro', '../assets/eternals.jpg', '<iframe  src="https://www.youtube.com/embed/MKWXuj3ZYf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(eternals, fase4)
let ojoDeHalcon = new Pelicula(2021, 'Ojo de Halcón', 'Thomas y Bert & Bertie', '6 episodios', 'Cuatro', '../assets/ojo.jpg', '<iframe  src="https://www.youtube.com/embed/eLb5trpCt9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(ojoDeHalcon, fase4)
let spiderMan3 = new Pelicula(2021, 'Spider-Man: No Way Home', 'Jon Watts', '148 minutos', 'Cuatro', '../assets/spiderman3.jpg', '<iframe  src="https://www.youtube.com/embed/z70zo9gQUKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(spiderMan3, fase4)
let moonKnight = new Pelicula(2022, 'Moon Knight', 'Christian Slater, Justin Benson, Aaron Moorhead', '6 episodios', 'Cuatro', '../assets/moon.jpg', '<iframe  src="https://www.youtube.com/embed/0STDZqXCTxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(moonKnight, fase4)
let doctorStrange2 = new Pelicula(2022, 'Doctor Strange en el Multiverso de la Locura', 'Sam Raimi', '126 minutos', 'Cuatro', '../assets/strange2.jpg', '<iframe  src="https://www.youtube.com/embed/cFHjZfy50Kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(doctorStrange2, fase4)
let msMarvel = new Pelicula(2022, 'Ms. Marvel', 'Bilall Fallah, Adil El Arbi', '6 episodios', 'Cuatro', '../assets/msmarvel.jpg', '<iframe  src="https://www.youtube.com/embed/fH3gc-kr8Rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(msMarvel, fase4)
let Thor4 = new Pelicula(2022, 'Thor: Love and Thunder', 'Taika Waititi', '119 minutos', 'Cuatro', '../assets/thor4.jpg', '<iframe  src="https://www.youtube.com/embed/pR6pOzwP2Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(Thor4, fase4)
let sheHulk = new Pelicula(2022, 'She-Hulk', 'Kat Coiro', '9 episodios', 'Cuatro', '../assets/shehulk.jpg', '<iframe  src="https://www.youtube.com/embed/D2Ad8jm3yQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(sheHulk, fase4)
let blackPanther2 = new Pelicula(2022, 'Black Panther: Wakanda Forever', 'Ryan Coogler', '161 minutos', 'Cuatro', '../assets/pantera2.jpg', '<iframe  src="https://www.youtube.com/embed/BPjbiZQmBI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', )
agregarPelicula(blackPanther2, fase4)

function cargarPelicula() {

    fase4.forEach((peli) => {
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