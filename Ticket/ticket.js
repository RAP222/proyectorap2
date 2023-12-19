//json ----> javascripts object notacion

// ticket.js

document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos del DOM
  var ticketsQuantityInput = document.getElementById("ticketsQuantity");
  var ticketsCategorySelect = document.getElementById("ticketsCategory");
  var ticketsOutput = document.getElementById("botondepago");
  var ticketsResumenButton = document.getElementById("ticketsResumen");

  // Manejar el evento de cambio en la cantidad y la categoría
  ticketsQuantityInput.addEventListener("input", calcularTotal);
  ticketsCategorySelect.addEventListener("change", calcularTotal);

  // Manejar el evento de clic en el botón Resumen
  ticketsResumenButton.addEventListener("click", mostrarResumen);

  // Función para calcular el total
  function calcularTotal() {
      var cantidad = parseInt(ticketsQuantityInput.value) || 0;
      var categoria = ticketsCategorySelect.value;
      var precioBase = 200;

      // Aplicar descuentos según la categoría
      var descuento = 0;
      switch (categoria) {
          case "Estudiante":
              descuento = 0.8;
              break;
          case "Trainee":
              descuento = 0.5;
              break;
          case "Junior":
              descuento = 0.15;
              break;
          // El caso "Sin Descuento" no aplica descuento
      }

      // Calcular el total con descuento
      var total = cantidad * precioBase * (1 - descuento);

      // Mostrar el total en el elemento de salida
      ticketsOutput.textContent = "Total a pagar: $" + total.toFixed(2);
  }

  // Función para mostrar el resumen
  function mostrarResumen() {
      var nombre = document.querySelector(".ticketsFirstName").value;
      var apellido = document.querySelector(".ticketsLastName").value;
      var email = document.querySelector(".ticketsEmail").value;
      var cantidad = parseInt(ticketsQuantityInput.value) || 0;
      var categoria = ticketsCategorySelect.value;
      var total = ticketsOutput.textContent.replace("Total a pagar: $", "");

      // Construir el mensaje de resumen
      var resumenMensaje = "Resumen de la compra:\n";
      resumenMensaje += "Nombre: " + nombre + "\n";
      resumenMensaje += "Apellido: " + apellido + "\n";
      resumenMensaje += "Email: " + email + "\n";
      resumenMensaje += "Cantidad de tickets: " + cantidad + "\n";
      resumenMensaje += "Categoría: " + categoria + "\n";
      resumenMensaje += "Total a pagar: $" + total;

      // Mostrar el mensaje de resumen en la consola (puedes ajustar esto según tus necesidades)
      console.log(resumenMensaje);
      // Puedes usar alert() o cualquier otro método para mostrar el mensaje en la interfaz gráfica si lo prefieres
  }
});
