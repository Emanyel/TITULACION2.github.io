<?php
//include_once 'conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TITULACION 2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Eventos<span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Inventario</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ordenes</a>
            </li>
          </ul>
          <span class="navbar-text">
            Perfil de usuario
          </span>
        </div>
      </nav>

      <div class="div container p-4">
		  <div class="row ">
			  <div class="card">
          <div class="card-title x-auto">
          <h4>Inicia sesion</h4>
          <div class="card-body">
            <div class="form-group">
            <form action="/php/login.php" method="POST">
            <div class="form-group">
            <input type="text" name="nombre_usuario" placeholder="Escribe tu nombre">
            </div>
            <div class="form-group">
            <input type="password" name="password" placeholder="Escribe tu contrasena">
            </div>
              <div class="form-group">
              <button class="btn btn-success">LOGIN</button>
              </div>
            </form>
            </div>
          </div>
				</div>
			  
		  </form>  
			  </div>
		  </div>
		  
	  </div>
</body>
</html>