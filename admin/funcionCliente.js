console.log("ENTRO  FUNCION Cliente")

let listaSimple=new ListaClientes()
function cargarClientes(){
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            let clien=new clientesU(item.dpi,item.nombre_completo,item.nombre_usuario,item.correo,item.contrasenia,item.telefono)
            listaSimple.add(clien)
        }
        listaSimple.graficar()
        //
    }
    fileReader.readAsText(data);
}

d3.select("#download").on("click", function() {
    d3.select(this)
      .attr("href", 'data:application/octet-stream;base64,' + btoa(d3.select("#lienzoCliente").html()))
      .attr("download", "viz.svg") 
  })