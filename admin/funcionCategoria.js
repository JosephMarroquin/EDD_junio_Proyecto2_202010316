let encabezado=new listaEncabezado()
let categ = new listaDeCategorias()

for(let i=0;i<20;i++){
    let cab=new listaListaCategoria(i)
    encabezado.add(cab)
}


function cargarCategorias() {
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            let indice=item.id_categoria%20
            if(indice<20){
                let cc = new categoria(item.id_categoria, item.company)
                encabezado.buscarCabeza(indice,cc)
            }
        }
        
        //
        encabezado.mostrarListaLista()
        encabezado.generarGraphvizListaListas()
    }
    fileReader.readAsText(data);
}