const xhr = new XMLHttpRequest();
xhr.open("GET", "get_news.php");
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    // Procesa la respuesta JSON
  } else {
    console.error(`Error al cargar el archivo PHP: ${xhr.status}`);
  }
};
xhr.send();