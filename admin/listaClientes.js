class Nodo {
    constructor(_datosLibro) {
        this.datosLibro = _datosLibro
        this.siguiente = null
    }
}

class ListaClientes {
    constructor() {
        this.cabecera = null
    }
    add(_objetoPersonaje) {
        var tempo = new Nodo(_objetoPersonaje)
        tempo.siguiente = this.cabecera
        this.cabecera = tempo
    }

    buscar(user,pass){
        var temporal = this.cabecera
        while (temporal != null) {
            if(user==temporal.datosLibro.nombre_usuario&&pass==temporal.datosLibro.contrasenia){
                return true
            }
            temporal = temporal.siguiente
        }
    }
  
   
    graficar() {
        var codigodot = "digraph G{\nlabel=\" Lista Clientes \";\nnode [shape=box];\n";
        var temporal = this.cabecera
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.datosLibro.nombre_usuario + "\" ];\n"
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "\n{rank= same;\n" + conexiones + "\n}}\n"
        console.log(codigodot)
        d3.select("#lienzoCliente").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }


}

