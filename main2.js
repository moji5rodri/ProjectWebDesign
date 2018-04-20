function validar() {

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var numero = document.getElementById('number').value;

  if (username == "") {
    alert(" Escriba su nombre");
    return false;
  }

  if (email == "") {
    alert(" Escriba su correo");
    return false;
  }

  if (numero == "") {
    alert(" Escriba su numero tel./cel.");
    return false;
  }

}
