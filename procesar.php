<?php
$destino="onteroluis788@gmail.com";
$nombres=$_POST["nombres"];
$correo=$_POST["correo"];
$celular=$_POST["celular"];
$comentarios=$_POST["comentarios"];

$contenido="nombres y apellidos:".$nombres."\nCorreo:".$correo."\nCelular:".$celular."\nComentarios:".$comentarios;
mail($destino,"Mensaje",$contenido);
header("Location:gracias.html");
?>