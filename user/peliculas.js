class Nodo {
    constructor(_datosLibro) {
        this.datosLibro = _datosLibro
        this.siguiente = null
    }
}

class listPeli {
    constructor() {
        this.cabecera = null
        this.fin=null
    }

    Vacia(){
        if (this.cabecera==null){
            return true;
        }else{
            return false;
        }
    }

    add(_objetoPersonaje) {
        var tempo = new Nodo(_objetoPersonaje)
        tempo.datosLibro=_objetoPersonaje
        tempo.siguiente=null
        if(this.Vacia()){
            this.cabecera=tempo
            this.fin=tempo
        }else{
            this.fin.siguiente=tempo
            this.fin=tempo
        }
    }

    Eliminacion(id) {
        if (!this.Vacia()) {
            if (this.cabecera == this.fin && id == this.cabecera.datosLibro.id_pelicula) {
                this.cabecera = this.fin = null;
            } else if (id == this.cabecera.datosLibro.id_pelicula) {
                this.cabecera = this.cabecera.siguiente;
            } else {
                let anterior, temporal;
                anterior = this.cabecera;
                temporal = this.cabecera.siguiente;
                while (temporal != null && temporal.datosLibro.id_pelicula != id) {
                    anterior = anterior.siguiente;
                    temporal = temporal.siguiente;
                }
                if (temporal != null) {
                    anterior.siguiente=temporal.siguiente;
                    if (temporal == this.fin) {
                        this.fin = anterior;
                    }
                }
            }
        }
        return null;
    }

    validar(id){
        var temporal = this.cabecera
        while (temporal != null) {
            if(id==temporal.datosLibro.id_pelicula){
                return true
            }
            temporal = temporal.siguiente
        }
    }
    

    agregarTitulo(res,id){
        var temporal = this.cabecera
        while (temporal != null) {
            if(id==temporal.datosLibro.id_pelicula){
                res.innerHTML += "<h5 class=\"modal-title\">"+temporal.datosLibro.nombre_pelicula+"</h5>"
            }
            temporal = temporal.siguiente
        }
    }

    agregarDescripccion(res,id){
        var temporal = this.cabecera
        while (temporal != null) {
            if(id==temporal.datosLibro.id_pelicula){
                res.innerHTML += "<p><b>Id: </b>"+temporal.datosLibro.id_pelicula+"</p>"
                +"<p><b>Descripccion: </b>"+temporal.datosLibro.descripcion+"</p>"
                +"<p><b>Puntuacion: </b>"+temporal.datosLibro.puntuacion_star+" Estrellas</p>"
                +"<p><b>Precio: </b>Q"+temporal.datosLibro.precion_Q+"</p>"
                +"<input type=\"text\" id=\"nuevaPuntuacion\" name=\"nuevaPuntuacion\" placeholder=\"Nueva Puntuacion\"/>"
                +"<button  onclick=\"modificaPuntuacion("+temporal.datosLibro.id_pelicula+")\">Modificar Puntuacion</button>"
                +"<br><br><center><h4>Comentarios</h4></center>"
                +"<p>"+temporal.datosLibro.comentarios+"</p>"
                +"<input type=\"text\" id=\"nameC\" name=\"nameC\" placeholder=\"Nombre\"/><input type=\"text\" id=\"newComent\" name=\"newComent\" placeholder=\"Ingrese su comentario\"/>"
                +"<button  onclick=\"publicaComent("+temporal.datosLibro.id_pelicula+")\">Publicar</button>"
            }
            temporal = temporal.siguiente
        }
    }

    modificaPuntuacion(id,puntua){
        var temporal = this.cabecera
        while (temporal != null) {
            if(id==temporal.datosLibro.id_pelicula && puntua<=5  && puntua>0){
                temporal.datosLibro.puntuacion_star=puntua
            }
            temporal = temporal.siguiente
        }
    }

    modificaComentarios(id,coment,nam){
        var temporal = this.cabecera
        while (temporal != null) {
            if(id==temporal.datosLibro.id_pelicula){
                temporal.datosLibro.comentarios+="<b>"+nam+": </b>"+coment+"<br>"
            }
            temporal = temporal.siguiente
        }
    }


    mostrarTablaPeliculas(res) {
        var temporal = this.cabecera
        while (temporal != null) {
            res.innerHTML += "<thead class=\"thead-primary\"><tr><td>Nombre Pelicula<td/>"
                + "<td>Descripccion<td/>"
                + "<td><td/>"
                + "<td><td/>"
                +"<td>Precio<td/><tr/></thead>"
                + "<tr>"
                + "<th scope=\"row\" class=\"scope\" >" + temporal.datosLibro.nombre_pelicula + "<th/>"
                + "<td>" + temporal.datosLibro.descripcion + "<td/>"
                + "<td>" + "<button  onclick=\"info("+temporal.datosLibro.id_pelicula+")\">Informacion</button>" + "<td/>"
                + "<td>" + "<button  onclick=\"eliminar("+temporal.datosLibro.id_pelicula+")\">Alquilar</button>" + "<td/>"
                + "<td>Q" + temporal.datosLibro.precion_Q + "<td/>"
                + "<tr/>"
            temporal = temporal.siguiente
        }
    }

    ordenBurbuja() {
        var contarNodo = this.cabecera
        let t = 1
        let c = 1
        while (contarNodo != null) {
            c++
            contarNodo = contarNodo.siguiente
        }

        do {
            var temporal = this.cabecera
            while (temporal != null) {
                if (temporal.siguiente != null) {
                    if ((temporal.datosLibro.id_pelicula) > (temporal.siguiente.datosLibro.id_pelicula)) {
                        let libroTemporal = temporal.datosLibro
                        temporal.datosLibro = temporal.siguiente.datosLibro
                        temporal.siguiente.datosLibro = libroTemporal
                        temporal = temporal.siguiente
                    } else {
                        temporal = temporal.siguiente
                    }
                } else {
                    t++
                    temporal = temporal.siguiente
                }
            }
        } while (t <= c)
    }

    ordenQuickSort() {
        var contarNodo = this.cabecera
        let t = 1
        let c = 1
        while (contarNodo != null) {
            c++
            contarNodo = contarNodo.siguiente
        }

        do {
            var temporal = this.cabecera
            while (temporal != null) {
                if (temporal.siguiente != null) {
                    if ((temporal.datosLibro.id_pelicula) < (temporal.siguiente.datosLibro.id_pelicula)) {
                        let libroTemporal = temporal.datosLibro
                        temporal.datosLibro = temporal.siguiente.datosLibro
                        temporal.siguiente.datosLibro = libroTemporal
                        temporal = temporal.siguiente
                    } else {
                        temporal = temporal.siguiente
                    }
                } else {
                    t++
                    temporal = temporal.siguiente
                }
            }
        } while (t <= c)
    }

    

  

}

