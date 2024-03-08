<?php

require_once '.env';

$connection = pg_connect("host=" . DB_HOST . "port=" . DB_PORT ." dbname=" . DB_NAME . " user=" . DB_USER . " password=" . DB_PASSWORD);

if (!$connection) {
    echo "Error: No se pudo conectar a la base de datos.";
    exit;
};

$query = "SELECT * FROM table_news";
$result = pg_query($connection, $query);

if (!$result) {
    echo "Error: No se pudo ejecutar la consulta.";
    exit;
}

$news = array();
while ($row = pg_fetch_assoc($result)) {
    $titulos[] = $row['titulo'];
    $noticias[] = $row['noticia'];
    $fecha[] = $row['fecha'];
}

// Devuelve los datos como JSON
header('Content-Type: application/json');
// echo json_encode($news);

// Cierra la conexión
pg_close($connection);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="style_news.css">
    <title>My Web Page</title>
</head>
<body>
<nav id="navbar">
        <ul>
            <li><a href="Servicios.html">Servicios</a></li>
            <li><a href="#seccion2">Conocenos</a></li>
            <li class="logo"><a href="index.html"><img src="images/logo.png" alt="Logo"></a></li>
            <li><a href="#seccion3">Noticias</a></li>
            <li><a href="contacto.html">Contactanos</a></li>
            <li class="login-icon">
                <a href="http://www.ebusiness.cl/FLETESORVICENTA/index.php">
                    <img src="images/login.svg" alt="Iniciar Sesión">
                </a>
            </li>
        </ul>
    </nav>

  <h1>Mis noticias</h1>
  <ul>
    <?php for ($i = 0; $i < count($titulos); $i++) { ?>
      <li>
        <h2><?php echo $titulos[$i]; ?></h2>
        <p><?php echo $noticias[$i]; ?></p>
        <p><?php echo $fecha[$i]; ?></p>
      </li>
    <?php } ?>
  </ul>

  <footer>
        <div class="contenido-pie">
          <p>&copy; 2024 - Todos los derechos reservados</p>
        </div>
    </footer>
<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>