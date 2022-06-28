let categ = new listaCat()

function cargarCategoria() {
    let data = document.getElementById('cargaP').files[0];
    const fileReader = new FileReader();
    fileReader.onload = function () {
        let datos = JSON.parse(fileReader.result)
        for (let item of datos) {
            let cc = new categoria(item.id_categoria, item.company)
            categ.add(cc)
        }
        let res = document.querySelector('#tablaCategorias').innerHTML = ""
        res = document.querySelector('#tablaCategorias')
        categ.mostrarTablaCategoria(res)
        //
    }
    fileReader.readAsText(data);
}