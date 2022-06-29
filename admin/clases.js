class peliculas{
    constructor(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precion_Q){
        this.id_pelicula=id_pelicula;
        this.nombre_pelicula=nombre_pelicula;
        this.descripcion=descripcion;
        this.puntuacion_star=puntuacion_star;
        this.precion_Q=precion_Q;
    }
}

class clientesU{
    constructor(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        this.dpi=dpi
        this.nombre_completo=nombre_completo
        this.nombre_usuario=nombre_usuario
        this.correo=correo
        this.contrasenia=contrasenia
        this.telefono=telefono
    }
}

class actorIconico{
    constructor(dni,nombre_actor,correo,descripcion){
        this.dni=dni
        this.nombre_actor=nombre_actor
        this.correo=correo
        this.descripcion=descripcion
    }
}

class listaListaCategoria{
    constructor(cabeza){
        this.cabeza=cabeza
        this.contenido=new listaDeCategorias()
    }
}

class categoria{
    constructor(id_categoria,company){
        this.id_categoria=id_categoria
        this.company=company
    }
}