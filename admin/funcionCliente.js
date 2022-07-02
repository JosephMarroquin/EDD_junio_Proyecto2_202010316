console.log("ENTRO  FUNCION Cliente")

let listaSimple=new ListaClientes()
function cargarClientes(){
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            if(listaSimple.validar(item.dpi)!=true){
                let clien=new clientesU(item.dpi,item.nombre_completo,item.nombre_usuario,item.correo,item.contrasenia,item.telefono)
                listaSimple.add(clien)
            }
        }
        listaSimple.graficar()
        //
    }
    fileReader.readAsText(data);
}


$(document).ready(function(){
    $('#download').click(function(){
        domtoimage.toBlob(document.getElementById('lienzoCliente')).then(function(blob){
            window.saveAs(blob,"grafo.png");
        });
    });
});

