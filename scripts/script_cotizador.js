// window.onscroll = function() { controlNavbar() };
window.onload = function() {openTab(null,'cotizador')};

// Scrollear la pagina hace desaparecer la barra de navegacion
// function controlNavbar() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;

//     if (scrolled > 50) {
//         document.getElementById("navbar").style.opacity = "0";
//     } else {
//         document.getElementById("navbar").style.opacity = "1";
//     }
// };

// Variar entre cotizador y seguimiento
function openTab(evt, tabName) {
    // Oculta todo el contenido de la pestaña
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Elimina la clase "active" de todos los elementos
    var tablinks = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    const element = document.getElementById(tabName);
    if (!element) {
      console.error(`El elemento con el ID "${tabName}" no existe.`);
      return;
    }

    // Muestra el contenido de la pestaña actual y añade una clase "active" al botón que abrió la pestaña
    document.getElementById(tabName).style.display = "block";
    if (evt) evt.currentTarget.className += " active";
  };
  
// Subir imagenes 
function removeFile(inputId) {
    var fileInput = document.getElementById(`image${inputId}`);
    fileInput.value = '';
    fileInput.classList.remove('has-file');
    var label = document.getElementById(`label${inputId}`);
    label.innerHTML = 'Adjuntar imagen (opcional)';
    var removeBtn = document.getElementById(`removeButton${inputId}`);
    removeBtn.style.display = 'none';
    if (inputId !== 1) {
        label.style.display = 'none';
        checkImageInputs();
    }
}

function handleImageChange(inputId) {
  console.log('Se ha seleccionado un archivo');
  var fileInput = document.getElementById(`image${inputId}`);
  var label = document.getElementById(`label${inputId}`);
  var removeButton = document.getElementById(`removeButton${inputId}`);

  if (fileInput.files.length > 0) {
      var fileName = fileInput.files[0].name;
      console.log(fileName);
      label.innerHTML = fileName;
      label.style.display = 'inline-block';
      removeButton.style.display = 'inline-block';
      
  } else {
      label.innerHTML = 'Adjuntar imagen (opcional)';
      removeButton.style.display = 'none';
  }

  var imageInputs = document.querySelectorAll('.custom-file-input');
  if (imageInputs.length < 3){checkImageInputs();}
}


function addImageInput() {
  var imageInputs = document.querySelectorAll('.custom-file-input');
  if (imageInputs.length < 3) {
      var newInputId = imageInputs.length + 1;
      var newInputGroup = document.createElement('div');
      newInputGroup.classList.add('input-group');
      newInputGroup.id = `imageGroup${newInputId}`;
      newInputGroup.innerHTML = `
          <div class="custom-file">
          <input type="file" class="custom-file-input" id="image${newInputId}" name="image" onchange="handleImageChange(${newInputId})" accept="image/png, image/jpeg">
              <label class="custom-file-label" id="label${newInputId}" for="image${newInputId}">Adjuntar imagen (opcional)</label>
              <span id="removeButton${newInputId}" class="remove-file" style="display: none;" onclick="removeFile(${newInputId})">❌</span>
          </div>
      `;
      document.getElementById('cotizador').insertBefore(newInputGroup, document.getElementById('addImageButton'));
  } else {
      alert('¡Ya has alcanzado el límite máximo de imágenes!');
  }
}

function checkImageInputs() {
  var imageInputs = document.querySelectorAll('.custom-file-input');
  var addImageButton = document.getElementById('addImageButton');
  if (imageInputs.length < 3) {
      addImageButton.style.display = 'block';
  }
  else if (imageInputs.length === 3) {
      addImageButton.style.display = 'block';
  } else {
      addImageButton.style.display = 'none';
  }
}

function toggleAddImage() {
  var addImageButton = document.getElementById('addImageButton');
  var imageInputs = document.querySelectorAll('.custom-file-input');
  if (addImageButton.style.display !== 'none') {
      addImageButton.style.display = 'none';
      if (imageInputs.length < 3) {
          addImageInput();
      }
      else if (imageInputs.length === 3) {
        console.log("si entra")
          showhide();
      }
  }
}

function showhide() {
  // Obtener todos los elementos con la clase '.custom-file-input'
  var imageInputs = document.querySelectorAll('.custom-file-input');
  var addImageButton = document.getElementById('addImageButton');

  console.log(imageInputs)

  for (var i = 0; i < imageInputs.length; i++) {
    var label = imageInputs[i].nextElementSibling;
    if (label.style.display === 'none') {
      label.style.display = 'block';
      break;
    }
  }
  
}
// Descripcion

document.addEventListener('input', function (event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);

function autoExpand(textarea) {
  textarea.style.height = 'auto'; // Establece la altura del textarea a automática
  textarea.style.height = (textarea.scrollHeight) + 'px'; // Ajusta la altura del textarea al tamaño del contenido
}


document.addEventListener('DOMContentLoaded', function() {
  var descriptionTextarea = document.getElementById('description');
  var maxTextAreaHeight = 250; // Define la altura máxima del textarea

  descriptionTextarea.addEventListener('input', function() {
      // Verifica si la altura del textarea es mayor que la altura máxima permitida
      if (descriptionTextarea.scrollHeight > maxTextAreaHeight) {
          descriptionTextarea.value = descriptionTextarea.value.slice(0, -1); // Elimina el último caracter
      }
  });
  descriptionTextarea.addEventListener('paste', function(event) {
    // Verifica si la altura del textarea es mayor que la altura máxima permitida
    if (descriptionTextarea.scrollHeight > maxTextAreaHeight) {
        // Evita que se realice la acción predeterminada (pegar contenido)
        event.preventDefault();
    }
});
});

// Telefono

var phoneNumberInput = document.getElementById('phone');
phoneNumberInput.addEventListener('input', function() {
    if (phoneNumberInput.value.length > 9) {
        phoneNumberInput.value = phoneNumberInput.value.slice(0, 9);
    }
});

// Campos numericos

var numberInput1 = document.getElementById('length');

var numberInput2 = document.getElementById('width');

var numberInput3 = document.getElementById('height');


numberInput1.addEventListener('input', function() {
    var maxValue = parseFloat(numberInput1.getAttribute('max'));
    if (parseFloat(numberInput1.value) > maxValue) {
        numberInput1.value = maxValue;
    }
});

numberInput2.addEventListener('input', function() {
  var maxValue = parseFloat(numberInput2.getAttribute('max'));
  if (parseFloat(numberInput2.value) > maxValue) {
      numberInput2.value = maxValue;
  }
});

numberInput3.addEventListener('input', function() {
  var maxValue = parseFloat(numberInput3.getAttribute('max'));
  if (parseFloat(numberInput3.value) > maxValue) {
      numberInput3.value = maxValue;
  }
});