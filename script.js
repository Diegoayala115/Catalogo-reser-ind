// Asegúrate que existan estas funciones:
function mostrarCategoria(id) {
  document.querySelectorAll('.categoria').forEach(cat => {
    cat.classList.add('oculto');
  });
  const elemento = document.getElementById(id);
  if (elemento) elemento.classList.remove('oculto');
}

function mostrarSubcategoria(id) {
  document.querySelectorAll('.subcategoria').forEach(sub => {
    sub.classList.add('oculto');
  });
  const elemento = document.getElementById(id);
  if (elemento) elemento.classList.remove('oculto');
}

