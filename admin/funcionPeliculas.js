console.log("ENTRO  FUNCION PELICULAS")

let avlPel = new AVL()
function cargarPeliculas() {
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            if (avlPel.validar(avlPel.root, item.id_pelicula) != true) {
                let peli = new peliculas(item.id_pelicula, item.nombre_pelicula, item.descripcion, item.puntuacion_star, item.precio_Q)
                avlPel.add(peli)
            }
            /*console.log(item.id_pelicula);
            console.log(item.nombre_pelicula);
            console.log(item.descripcion);
            console.log(item.puntuacion_star);
            console.log(item.precion_Q);*/
        }
        //avlPel.preorder(avlPel.root)
        avlPel.graficar(avlPel.root)
        //
    }
    fileReader.readAsText(data);
}

$(document).ready(function(){
    $('#download').click(function(){
        domtoimage.toBlob(document.getElementById('lienzoPelicula')).then(function(blob){
            window.saveAs(blob,"grafo.png");
        });
    });
});

