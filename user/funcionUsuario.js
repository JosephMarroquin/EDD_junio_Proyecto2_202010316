let listPelicula = new listPeli();
let avlPel = new AVL()
let actorAB = new listACT()

function cargarActores() {
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            let auto = new actorIconico(item.dni, item.nombre_actor, item.correo, item.descripcion)
            actorAB.add(auto)
        }
        //
    }
    fileReader.readAsText(data);
}

function eliminar(id){
    avlPel.eliminar(avlPel.root,id)
    listPelicula.Eliminacion(id)
    avlPel.graficar(avlPel.root)
    let res = document.querySelector('#tablaPeli').innerHTML = ""
    res = document.querySelector('#tablaPeli')
    listPelicula.mostrarTablaPeliculas(res)
}

function verActor() {
    let res = document.querySelector('#tablaPeli').innerHTML = ""
    res = document.querySelector('#tablaPeli')
    actorAB.mostrarTablaActor(res)
}

function cargarPeliculas() {
    let data = document.getElementById('cargaPeli').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        //console.log(fileReader.result);   
        let datos = JSON.parse(fileReader.result)
        //console.log(datos); 
        for (let item of datos) {
            if (listPelicula.validar(item.id_pelicula) != true) {
                let pell = new peliculas(item.id_pelicula, item.nombre_pelicula, item.descripcion, item.puntuacion_star, item.precion_Q, "")
                listPelicula.add(pell)
                avlPel.add(pell)
            }
        }
        let res = document.querySelector('#tablaPeli').innerHTML = ""
        res = document.querySelector('#tablaPeli')
        listPelicula.mostrarTablaPeliculas(res)

    }
    fileReader.readAsText(data);
}

function ordenBurbuja() {
    //listPelicula.mostrar()
    //console.log("ANTES_________")
    let res = document.querySelector('#tablaPeli').innerHTML = ""
    res = document.querySelector('#tablaPeli')
    listPelicula.ordenBurbuja()
    listPelicula.mostrarTablaPeliculas(res)
    //listPelicula.mostrar()
}

function ordenQuickSort() {
    //listPelicula.mostrar()
    //console.log("ANTES_________")
    let res = document.querySelector('#tablaPeli').innerHTML = ""
    res = document.querySelector('#tablaPeli')
    listPelicula.ordenQuickSort()
    listPelicula.mostrarTablaPeliculas(res)
}

function info(id_p) {
    let titulo = document.querySelector('#tituloModel').innerHTML = ""
    let descripcion = document.querySelector('#descripcionModel').innerHTML = ""
    titulo = document.querySelector('#tituloModel')
    descripcion = document.querySelector('#descripcionModel')
    listPelicula.agregarTitulo(titulo, id_p)
    listPelicula.agregarDescripccion(descripcion, id_p)
    $('#ventana-modal').modal();
}

function modificaPuntuacion(id_p) {
    let puntuar = document.getElementById("nuevaPuntuacion").value
    listPelicula.modificaPuntuacion(id_p, puntuar)
    let titulo = document.querySelector('#tituloModel').innerHTML = ""
    let descripcion = document.querySelector('#descripcionModel').innerHTML = ""
    titulo = document.querySelector('#tituloModel')
    descripcion = document.querySelector('#descripcionModel')
    listPelicula.agregarTitulo(titulo, id_p)
    listPelicula.agregarDescripccion(descripcion, id_p)
}

function publicaComent(id_p) {
    let nom = document.getElementById("nameC").value
    let coment = document.getElementById("newComent").value
    listPelicula.modificaComentarios(id_p, coment, nom)
    let titulo = document.querySelector('#tituloModel').innerHTML = ""
    let descripcion = document.querySelector('#descripcionModel').innerHTML = ""
    titulo = document.querySelector('#tituloModel')
    descripcion = document.querySelector('#descripcionModel')
    listPelicula.agregarTitulo(titulo, id_p)
    listPelicula.agregarDescripccion(descripcion, id_p)
}

/*(function(){
    $(function(){
        //$('#ventana-modal').modal();
        $('#').on('click',function(){
            $('#ventana-modal').modal();
        });
    });
}());*/

function cerrarModal() {
    $("#ventana-modal").modal('hide');
}