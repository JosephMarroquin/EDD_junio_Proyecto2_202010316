
//Agregando admin por default
let listaSimple = new ListaClientes()
let user = new clientesU("2354168452525", "WIlfred Perez", "EDD", "wilfred@usac.com", "123", "+502 (123) 123-4567");
listaSimple.add(user);


function ingresarLogin() {
  let user = document.getElementById("usser").value
  let pass = document.getElementById("passw").value
  if (listaSimple.buscar(user, pass) == true) {
    if ($('#cbox2').prop('checked')) {
      window.location.href = './admin/index.html'
    }else{
      window.location.href = './user/index.html'
    }

  } else {
    alert('Usuario o contraseña incorrectos')
    document.getElementById("usser").value = ""
    document.getElementById("passw").value = ""
  }
}


function cargarClientes() {
  let data = document.getElementById('carga').files[0];
  const fileReader = new FileReader();
  fileReader.onload = function () {
    let datos = JSON.parse(fileReader.result)
    for (let item of datos) {
      let clien = new clientesU(item.dpi, item.nombre_completo, item.nombre_usuario, item.correo, item.contrasenia, item.telefono)
      listaSimple.add(clien)
    }
    //
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