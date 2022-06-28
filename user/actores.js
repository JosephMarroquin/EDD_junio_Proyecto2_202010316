class Nodo222 {
    constructor(_datosLibro) {
        this.datosLibro = _datosLibro
        this.siguiente = null
    }
}

class listACT {
    constructor() {
        this.cabecera = null
    }
    add(_objetoPersonaje) {
        var tempo = new Nodo222(_objetoPersonaje)
        tempo.siguiente = this.cabecera
        this.cabecera = tempo
    }


    mostrarTablaActor(res) {
        var temporal = this.cabecera
        while (temporal != null) {
            res.innerHTML += "<thead class=\"thead-primary\"><tr><td>DNI<td/>"
                + "<td>Nombre Actor<td/>"
                + "<td>Correo<td/>"
                + "<td>Descripcion<td/><tr/></thead>"
                + "<tr>"
                + "<th scope=\"row\" class=\"scope\" >" + temporal.datosLibro.dni + "<th/>"
                + "<td>" + temporal.datosLibro.nombre_actor + "<td/>"
                + "<td>" + temporal.datosLibro.correo + "<td/>"
                + "<td>" + temporal.datosLibro.descripcion+ "<td/>"
                + "<tr/>"
            temporal = temporal.siguiente
        }
    }


    

  

}

