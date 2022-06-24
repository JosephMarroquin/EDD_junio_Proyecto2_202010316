
//Agregando admin por default
let lista = new ListaUsuarios();
let user = new Usuarios2("2354168452525", "WIlfred Perez", "Wilfred", "wilfred@usac.com", "Administrador", "123", "+502 (123) 123-4567");
lista.add(user);

function regresoHome() {
  window.location.href = '../index.html'
}

function ingresarLogin() {
  let user=document.getElementById("usser").value
  let pass=document.getElementById("passw").value
  if(lista.busquedaUser(user,pass)=="Administrador"){
    window.location.href = '../admin/index.html'
  }else if(lista.busquedaUser(user,pass)=="Usuario"){
    window.location.href = '../users/index.html'
  }else{
    alert('Usuario o contraseña incorrectos')
    document.getElementById("usser").value=""
    document.getElementById("passw").value=""
  }
}

function traerDatos(){
  let data = document.getElementById('carga').files[0];
  const fileReader = new FileReader();
      fileReader.onload = function () {
          let datos=JSON.parse(fileReader.result)
          for(let item of datos){
              let user=new Usuarios2(item.dpi,item.nombre_completo,item.nombre_usuario,item.correo,item.rol,item.contrasenia,item.telefono);
              lista.add(user);
          }
          alert('Usuarios Cargados')
      }
      fileReader.readAsText(data);
}


// vertical align box   
(function (elem) {
  elem.css("margin-top", Math.floor(($(window).height() / 2) - (elem.height() / 2)));
}($(".login-wrap")));

$(window).resize(function () {
  $(".login-wrap").css("margin-top", Math.floor(($(window).height() / 2) - ($(".login-wrap").height() / 2)));

});