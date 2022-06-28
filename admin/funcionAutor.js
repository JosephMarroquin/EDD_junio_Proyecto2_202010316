console.log("ENTRO  FUNCION autor")

let arbolbs=new ABB()
function cargarAutores(){
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            let auto=new actorIconico(item.dni,item.nombre_actor,item.correo,item.descripcion)
            arbolbs.add(auto)
        }
        arbolbs.getCodigoGraphviz(arbolbs.root)
        //
    }
    fileReader.readAsText(data);
}

d3.select("#download").on("click", function() {
    d3.select(this)
      .attr("href", 'data:application/octet-stream;base64,' + btoa(d3.select("#lienzoAutor").html()))
      .attr("download", "viz.svg") 
  })