class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
let a=false;
class ABB {
    constructor() {
        this.root = null
    }

    add(value) {
        if (this.root != null) {
            this._add(value, this.root)
        }
        else {
            this.root = new Node(value)
        }
    }

    _add(value, tmp) {
        if (value.dni < tmp.value.dni) {
            if (tmp.left != null) this._add(value, tmp.left)
            else tmp.left = new Node(value)
        } else {
            if (tmp.right != null) this._add(value, tmp.right)
            else tmp.right = new Node(value)
        }
    }

    validar(tmp,id){
        if (tmp != null) {
            if(tmp.value.dni==id){
                a=true
                return a;
            }
            else{
                a=false
            }
            this.validar(tmp.left,id);
            this.validar(tmp.right,id);
        }
        return a
    }

   
    preorder(tmp) {
        if (tmp != null) {
            console.log(tmp.value.dni)
            this.preorder(tmp.left)
            this.preorder(tmp.right)
        }
    }

    inorder(tmp) {
        if (tmp != null) {
            this.inorder(tmp.left)
            console.log(tmp.value.dni)
            this.inorder(tmp.right)
        }

    }

    postorder(tmp) {
        if (tmp != null) {
            this.postorder(tmp.left)
            this.postorder(tmp.right)
            console.log(tmp.value.dni)
        }
    }

    tablaAutores_preorder(tmp, res) {
        if (tmp != null) {
            res.innerHTML += "<thead class=\"thead-primary\"><tr><td>DNI<td/>"
                + "<td>Nombre<td/>"
                + "<td>Correo<td/>"
                + "<td>Descripcion<td/></thead>"
                + "<tr>"
                +"<th scope=\"row\" class=\"scope\" >" + tmp.value.dni + "<th/>"
                + "<td>" + tmp.value.nombre_actor + "<td/>"
                + "<td>" + tmp.value.correo + "<td/>"
                + "<td>" + tmp.value.descripcion + "<td/>"
                + "<tr/>"
            this.tablaAutores_preorder(tmp.left, res)
            this.tablaAutores_preorder(tmp.right, res)
        }
    }

    tablaAutores_inorder(tmp, res) {
        if (tmp != null) {
            this.tablaAutores_inorder(tmp.left, res)
            res.innerHTML += "<thead class=\"thead-primary\"><tr><td>DNI<td/>"
                + "<td>Nombre<td/>"
                + "<td>Correo<td/>"
                + "<td>Descripcion<td/></thead>"
                + "<tr>"
                +"<th scope=\"row\" class=\"scope\" >" + tmp.value.dni + "<th/>"
                + "<td>" + tmp.value.nombre_actor + "<td/>"
                + "<td>" + tmp.value.correo + "<td/>"
                + "<td>" + tmp.value.descripcion + "<td/>"
                + "<tr/>"
            this.tablaAutores_inorder(tmp.right, res)
        }
    }

    tablaAutores_postorder(tmp, res) {
        if (tmp != null) {
            this.tablaAutores_postorder(tmp.left, res)
            this.tablaAutores_postorder(tmp.right, res)
            res.innerHTML += "<thead class=\"thead-primary\"><tr><td>DNI<td/>"
                + "<td>Nombre<td/>"
                + "<td>Correo<td/>"
                + "<td>Descripcion<td/></thead>"
                + "<tr>"
                +"<th scope=\"row\" class=\"scope\" >" + tmp.value.dni + "<th/>"
                + "<td>" + tmp.value.nombre_actor + "<td/>"
                + "<td>" + tmp.value.correo + "<td/>"
                + "<td>" + tmp.value.descripcion + "<td/>"
                + "<tr/>"   
        }
    }

    getCodigoGraphviz(Nodetmp) {
        let text = "digraph grafica{\n"
            + "rankdir=TB;\n"
            + "node [shape = circle, style=filled, fillcolor=seashell2];\n"
            + this.getCodigoInterno(Nodetmp)
            + "}\n";
        console.log(text);
        d3.select("#lienzoAutor").graphviz()
            .width(900)
            .height(500)
            .renderDot(text)
    }

    getCodigoInterno(Nodetmp) {
        let etiqueta;
        if (Nodetmp.left == null && Nodetmp.right == null) {
            etiqueta = "nodo" + Nodetmp.value.dni + " [ label =\"" + Nodetmp.value.dni + "\"];\n";
        } else {
            etiqueta = "nodo" + Nodetmp.value.dni + " [ label =\"" + Nodetmp.value.dni + "\"];\n";
        }
        if (Nodetmp.left != null) {
            etiqueta = etiqueta + this.getCodigoInterno(Nodetmp.left)
                + "nodo" + Nodetmp.value.dni + "->nodo" + Nodetmp.left.value.dni + "\n";
        }
        if (Nodetmp.right != null) {
            etiqueta = etiqueta + this.getCodigoInterno(Nodetmp.right)
                + "nodo" + Nodetmp.value.dni + "->nodo" + Nodetmp.right.value.dni + "\n";
        }
        return etiqueta;
    }


}
