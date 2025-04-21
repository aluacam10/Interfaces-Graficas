document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
    const tabla = document.getElementById("tablaDatos");
    const cuerpoTabla = tabla.querySelector("tbody");

    const roles = {
        1: "Alumno",
        2: "Profesor",
        3: "Administrativo",
        4: "Otro"
    };

    const sexos = {
        h: "Hombre",
        m: "Mujer",
        o: "Otro"
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita recarga

        const formData = new FormData(form);

        // Validamos que se hayan seleccionado valores
        const nombre = formData.get("nombre") || "";
        const apellido = formData.get("apellido") || "";
        const sexo = sexos[formData.get("sexo")];
        const fecha = formData.get("fh_nac") || "";
        const rol = roles[formData.get("id_rol")];

        if (!sexo || !rol) {
            alert("Por favor selecciona sexo y rol.");
            return;
        }

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${sexo}</td>
            <td>${fecha}</td>
            <td>${rol}</td>
        `;
        cuerpoTabla.appendChild(fila);
        tabla.style.display = "table"; // Mostrar la tabla

        form.reset(); // Limpia el formulario
    });

    form.addEventListener("reset", (e) => {
        if (!confirm("¿Deseas cancelar y limpiar el formulario?")) {
            e.preventDefault();
        }
    });
});
