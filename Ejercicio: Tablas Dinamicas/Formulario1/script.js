document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const tabla = document.getElementById("tablaDatos");
    const cuerpoTabla = tabla.querySelector("tbody");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        if (!document.getElementById("confirmacion").checked) {
            alert("Por favor confirma que los datos son correctos.");
            return;
        }

        const numerotarjeta = document.getElementById("numerotarjeta").value;
        const fechavencimiento = document.getElementById("fechavencimiento").value;
        const tipo = document.querySelector('input[name="tipo"]:checked')?.value || "";
        const titular = document.getElementById("titular").value;
        const cvc = document.getElementById("cvc").value;
        const contrasenia = document.getElementById("contrasenia").value;
        const talla = document.getElementById("talla").value;
        const comentarios = document.getElementById("comentarios").value;

        const nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
            <td>${numerotarjeta}</td>
            <td>${fechavencimiento}</td>
            <td>${tipo}</td>
            <td>${titular}</td>
            <td>${cvc}</td>
            <td>${contrasenia}</td>
            <td>${talla}</td>
            <td>${comentarios}</td>
        `;

        cuerpoTabla.appendChild(nuevaFila);
        tabla.style.display = "table"; // Muestra la tabla
        formulario.reset(); // Limpia el formulario
    });
});

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}