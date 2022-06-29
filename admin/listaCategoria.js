class Nodo {
    constructor(_datosLibro) {
        this.datosLibro = _datosLibro
        this.siguiente = null
    }
}

class listaDeCategorias {
    constructor() {
        this.cabecera = null
    }
    add(_objetoPersonaje) {
        var tempo = new Nodo(_objetoPersonaje)
        tempo.siguiente = this.cabecera
        this.cabecera = tempo
    }

    mostrar() {
        var temporal = this.cabecera
        while (temporal != null) {
            console.log(temporal.datosLibro.isbn)
            console.log(temporal.datosLibro.nombre_autor)
            console.log(temporal.datosLibro.nombre_libro)
            temporal = temporal.siguiente
        }
    }

    //Para mostrar lista de categorias en la Lista de Lista de Usuarios
    mostrarLL() {
        var temporal = this.cabecera
        while (temporal != null) {
            console.log(temporal.datosLibro.id_categoria)
            console.log(temporal.datosLibro.company)
            temporal = temporal.siguiente
        }
    }

    //Codigo graphviz para la lista de libros que va en la lista de listas de usuarios
    codigoDotListaLibros(cont) {
        var codigodot = "";
        var temporal = this.cabecera
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + cont + "[label=\"Id: " + temporal.datosLibro.id_categoria + " Company: "+temporal.datosLibro.company+"\" ];\n"
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + cont + " -> N" + auxnum+ cont + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += nodos + "\n"
        codigodot += "\n" + conexiones + "\n"
        return codigodot
    }

    codigoDotListaLibrosNodo(cont) {
        var temporal = this.cabecera
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + cont
            break
        }
        return nodos
    }


}

