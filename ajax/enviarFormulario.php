<?php
/*
 * mixed by marcexl
 * version 26032021
 * - servicio para registrar personas
 * 
 */

if( (isset($_POST['email'])) and (isset($_POST['pass'])))
{
  $email = $_POST['email'];
  $pass  = $_POST['pass'];

  echo "Has ingresado el email: <b>".$email."</b> y la contraseña <b>".$pass."</b>"; 
}
?>

