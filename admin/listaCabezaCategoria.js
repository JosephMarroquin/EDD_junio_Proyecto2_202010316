//alert("funciona");


class Nodo4 {
    constructor(persona) {
        this.personaje = persona
        this.siguiente = null
    }
}

class listaEncabezado {
    constructor() {
        this.cabeza = null;
        this.ultimo = null;
        this.tamanio = 0;
    }
    //metodos de una lista circular
    //insertar
    add(nombrepersonaje) {
        var temporal = new Nodo4(nombrepersonaje);
        //si la lista esta vacia
        if (this.cabeza == null) {
            this.cabeza = temporal;
            this.ultimo = this.cabeza;
            this.tamanio++;
        } else {
            this.ultimo.siguiente = temporal
            //temporal.siguiente = ultimo
            this.ultimo = temporal;
            this.ultimo.siguiente = this.cabeza.siguiente
            this.tamanio++;
        }
    }
    //mostrar la lista circular
    mostrarpersonajes() {
        var temporal = this.cabeza
        var cont = 0;
        while (cont < this.tamanio) {
            console.log(temporal.personaje.dpi)
            console.log(temporal.personaje.nombre_completo)
            console.log(temporal.personaje.nombre_usuario)
            console.log(temporal.personaje.correo)
            console.log(temporal.personaje.rol)
            console.log(temporal.personaje.contrasenia)
            console.log(temporal.personaje.telefono)
            temporal = temporal.siguiente
            cont++;
        }
    }

    
    //Buscar indice y agregarle los datos de categoria(listas de listas)
    buscarCabeza(cabecera, categoria) {
        var temporal = this.cabeza
        var cont = 0;
        while (cont < this.tamanio) {
            if (temporal.personaje.cabeza == cabecera) {
                temporal.personaje.contenido.add(categoria)
            }
            temporal = temporal.siguiente
            cont++;
        }
    }

    //mostrar listas de listas
    mostrarListaLista() {
        var temporal = this.cabeza
        var cont = 0;
        while (cont < this.tamanio) {
            console.log(temporal.personaje.cabeza)
            temporal.personaje.contenido.mostrarLL()
            temporal = temporal.siguiente
            cont++;
        }
    }

    generarGraphvizListaListas() {
        var texto = "digraph G\n"
            + "{\n"
            + "  edge [color=\"#00FF00\"]\n";

        var temporal = this.cabeza
        var cont = 0;

        texto += "{rank=same;"
        while (cont < this.tamanio) {
            if(cont+1<this.tamanio){
                texto += "\"" + temporal.personaje.cabeza + "\"" + "->";
                temporal = temporal.siguiente;
            }else{
                texto += "\"" + temporal.personaje.cabeza + "\""
            }
            cont++;
        }
        texto += "}\n"

        cont = 0
        var temporal = this.cabeza
        while (cont < this.tamanio) {
            //temporal.personaje.pilaLbr.mostrarLL()
            //console.log(temporal.personaje.pilaLbr.codigoDotListaLibros())
            if (temporal.personaje.contenido.codigoDotListaLibrosNodo(cont) != "") {
                texto += "\n" + temporal.personaje.contenido.codigoDotListaLibros(cont)
                texto += "\n\"" + temporal.personaje.cabeza + "\"" + "->" + temporal.personaje.contenido.codigoDotListaLibrosNodo(cont) + "\n";
            }
            temporal = temporal.siguiente;
            cont++;
        }


        /*this.ultimo = this.cabeza;
        do {
            texto += temporal.clienteEspera.encabezado + "->";
            temporal = temporal.anterior;
        } while (temporal != ultimo);
        texto += temporal.clienteEspera.encabezado;*/

        texto += " \n"
            + "rankdir=LR;}";
        console.log(texto);
        d3.select("#listaDelistas").graphviz()
            .width(900)
            .height(500)
            .renderDot(texto)
    }

    
}
