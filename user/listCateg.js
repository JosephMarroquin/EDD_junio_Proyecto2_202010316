class NodoC {
    constructor(_datosLibro) {
        this.datosLibro = _datosLibro
        this.siguiente = null
    }
}

class listaCat {
    constructor() {
        this.cabecera = null
    }
    add(_objetoPersonaje) {
        var tempo = new NodoC(_objetoPersonaje)
        tempo.siguiente = this.cabecera
        this.cabecera = tempo
    }

    validar(id){
        var temporal = this.cabecera
        while (temporal != null) {
            if(id==temporal.datosLibro.id_categoria){
                return true;
            }
            temporal = temporal.siguiente
        }
    }


    mostrarTablaCategoria(res) {
        var temporal = this.cabecera
        while (temporal != null) {
            res.innerHTML += "<thead class=\"thead-primary\"><tr><td>Id categoria<td/>"
                + "<td>Company<td/><tr/></thead>"
                + "<tr>"
                + "<th scope=\"row\" class=\"scope\" >" + temporal.datosLibro.id_categoria + "<th/>"
                + "<td>" + temporal.datosLibro.company + "<td/>"
                + "<tr/>"
            temporal = temporal.siguiente
        }
    }


    

  

}
