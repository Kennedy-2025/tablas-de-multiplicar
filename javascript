function generarTabla() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(numero)) {
    resultadoDiv.innerHTML = "<p>Por favor, introduce un número válido.</p>";
    return;
  }

  let tablaHTML = "<h2>Tabla del " + numero + "</h2><ul>";
  for (let i = 1; i <= 10; i++) {
    tablaHTML += "<li>" + numero + " × " + i + " = " + (numero * i) + "</li>";
  }
  tablaHTML += "</ul>";
  resultadoDiv.innerHTML = tablaHTML;
}
