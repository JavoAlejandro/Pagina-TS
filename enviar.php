<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mensaje = "Nombre: $nombre\r\n";
$mensaje .= "Correo: $email\r\n";
$mensaje .= "Telefono: $phone.\r\n";
$mensaje .= "Mensaje: $message\r\n";

$fecha = date('d/m/Y', time());
$mensaje .= "Enviado el $fecha";

$para = "email@gmail.com";
$asunto = 'Mensaje de mi sitio web';

mail($para, $asunto, utf8_decode($mensaje));

header("Location:exito.html");

?>