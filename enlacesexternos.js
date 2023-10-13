// Esta es la misma función que te mostré antes
function comprobarEnlace(enlace) {
  var dominio = window.location.hostname;
  if (enlace.hostname != dominio) {
    var mensaje = "Estás a punto de salir de " + dominio + " y visitar " + enlace.href + ". ¿Estás seguro de que quieres continuar?";
    return confirm(mensaje);
  } else {
    return true;
  }
}

// Esta es la nueva función que recorre todos los elementos <a> y les añade el atributo onclick
function aplicarFuncionATodosLosEnlaces() {
  // Obtenemos todos los elementos <a> del documento
  var enlaces = document.getElementsByTagName("a");
  // Recorremos el array de enlaces con un bucle for
  for (var i = 0; i < enlaces.length; i++) {
    // Obtenemos el enlace actual
    var enlace = enlaces[i];
    // Le añadimos el atributo onclick con la función comprobarEnlace
    enlace.onclick = function() {
      return comprobarEnlace(this);
    };
  }
}

// Llamamos a la función aplicarFuncionATodosLosEnlaces cuando el documento esté listo
window.onload = aplicarFuncionATodosLosEnlaces;
