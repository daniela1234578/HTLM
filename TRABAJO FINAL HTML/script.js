
// Función para mostrar el botón de "Volver arriba" cuando el usuario se desplaza hacia abajo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}

// Función para desplazarse suavemente hacia arriba cuando se hace clic en el botón de "Volver arriba"
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}