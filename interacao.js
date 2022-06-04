function validar_login() {
  var email = document.getElementById("email1").value;
  var senha = document.getElementById("senha1").value;

  if (email == "pvck@base.org" && senha == "123456") {
    alert("Seu login foi um sucesso!");
  } else {
    alert("Algo deu errado, verifique o seu e-mail e senha!");
  }
}
