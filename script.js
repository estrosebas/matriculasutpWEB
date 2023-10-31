// Función para llenar los grados basándose en el nivel seleccionado
function fillGradesBasedOnLevel() {
    let nivelSelect = document.getElementById('nivel');
    let gradoSelect = document.getElementById('grado');
    gradoSelect.innerHTML = ''; // Limpiar opciones anteriores

    if (nivelSelect.value === "Inicial") {
        for (let i = 1; i <= 2; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            gradoSelect.appendChild(option);
        }
    } else if (nivelSelect.value === 'Primaria') {
        for (let i = 1; i <= 6; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            gradoSelect.appendChild(option);
        }
    } else if (nivelSelect.value === 'Secundaria') {
        for (let i = 1; i <= 5; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            gradoSelect.appendChild(option);
        }
    }
}

document.getElementById('optionSelector').addEventListener('change', function() {
    // Ocultar ambos formularios primero
    document.getElementById('alumnoFormDiv').style.display = 'none';
    document.getElementById('representanteForm').style.display = 'none';
    
    // Mostrar el formulario correspondiente
    if (this.value === 'alumno') {
        document.getElementById('alumnoFormDiv').style.display = 'block';
    } else if (this.value === 'representante') {
        document.getElementById('representanteForm').style.display = 'block';
    }
});

document.getElementById('nivel').addEventListener('change', fillGradesBasedOnLevel);

/*
// Ejemplo de cómo cargar datos dinámicos (esto es solo una simulación)
// En un escenario real, usarías AJAX para obtener estos datos de la base de datos.
let distritos = [
    {id: 1, nombre: 'Distrito 1'},
    {id: 2, nombre: 'Distrito 2'},
    // ... Más distritos aquí
];
let distritoSelect = document.querySelector('select[name="id_distritoAlum"]');
distritos.forEach(distrito => {
    let option = document.createElement('option');
    option.value = distrito.id;
    option.textContent = distrito.nombre;
    distritoSelect.appendChild(option);
});
*/

document.getElementById('alumnoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    let formData = new FormData(document.getElementById('alumnoForm'));

    // Enviar datos al script PHP usando AJAX
    fetch('insert_data.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Esto mostrará el resultado del script PHP (por ejemplo, "Datos insertados con éxito")
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Llamar a la función fillGradesBasedOnLevel al cargar la página
fillGradesBasedOnLevel();
// Cargar representantes
fetch('get_representantes.php')
.then(response => response.json())
.then(data => {
    let representanteSelect = document.querySelector('select[name="id_Repre"]');
    data.forEach(representante => {
        let option = document.createElement('option');
        option.value = representante.id_Repre;
        option.textContent = representante.dni_Repre;
        representanteSelect.appendChild(option);
    });
})
.catch((error) => {
    console.error('Error:', error);
});

// Cargar habilidades
fetch('get_habilidades.php')
.then(response => response.json())
.then(data => {
    let habilidadSelect = document.querySelector('select[name="id_habilidad"]');
    data.forEach(habilidad => {
        let option = document.createElement('option');
        option.value = habilidad.id_habilidad;
        option.textContent = habilidad.habilidad;
        habilidadSelect.appendChild(option);
    });
})
.catch((error) => {
    console.error('Error:', error);
});
// Cargar distritos
fetch('get_distritos.php')
.then(response => response.json())
.then(data => {
    let distritoSelect = document.querySelector('select[name="id_distritoAlum"]');
    data.forEach(distrito => {
        let option = document.createElement('option');
        option.value = distrito.id_distritoAlum;
        option.textContent = distrito.distritoA;
        distritoSelect.appendChild(option);
    });
})
.catch((error) => {
    console.error('Error:', error);
});
