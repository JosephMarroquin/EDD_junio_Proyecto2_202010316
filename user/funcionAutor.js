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
        //
    }
    fileReader.readAsText(data);
}

function inorder(){
    let res = document.querySelector('#tablaAutores').innerHTML=""
    res = document.querySelector('#tablaAutores')
    arbolbs.tablaAutores_inorder(arbolbs.root, res);
}

function preorder(){
    let res = document.querySelector('#tablaAutores').innerHTML=""
    res = document.querySelector('#tablaAutores')
    arbolbs.tablaAutores_preorder(arbolbs.root, res);
}

function postorder(){
    let res = document.querySelector('#tablaAutores').innerHTML=""
    res = document.querySelector('#tablaAutores')
    arbolbs.tablaAutores_postorder(arbolbs.root, res);
}