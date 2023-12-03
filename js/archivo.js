document.addEventListener("DOMContentLoaded", function() {
    const btnAgregarTarea = document.getElementById("agregarTarea");
    const inputTarea = document.getElementById("inputTarea");
    const listaTareas = document.getElementById("listaTarea");
  
    btnAgregarTarea.addEventListener("click", function() {
      const textoTarea = inputTarea.value.trim();
      if (textoTarea !== "") {
        const elementoLista = document.createElement("li");
        elementoLista.className = "list-group-item d-flex justify-content-between align-items-center";
        
        const textoNodo = document.createTextNode(textoTarea);
        elementoLista.appendChild(textoNodo);
  
        const botonEliminar = document.createElement("button");
        botonEliminar.className = "btn btn-danger btn-sm";
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.addEventListener("click", function() {
          elementoLista.remove();
        });
  
        elementoLista.appendChild(botonEliminar);
        listaTareas.appendChild(elementoLista);
        inputTarea.value = "";
      } else {
        alert("Por favor, ingrese una tarea válida.");
      }
    });
  });
  