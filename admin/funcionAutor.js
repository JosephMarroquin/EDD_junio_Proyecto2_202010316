console.log("ENTRO  FUNCION autor")

let arbolbs=new ABB()
function cargarAutores(){
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            if(arbolbs.validar(arbolbs.root,item.dni)!=true){
                let auto=new actorIconico(item.dni,item.nombre_actor,item.correo,item.descripcion)
                arbolbs.add(auto)
            }
        }
        arbolbs.getCodigoGraphviz(arbolbs.root)
        //
    }
    fileReader.readAsText(data);
}

$(document).ready(function(){
    $('#download').click(function(){
        domtoimage.toBlob(document.getElementById('lienzoAutor')).then(function(blob){
            window.saveAs(blob,"grafo.png");
        });
    });
});

