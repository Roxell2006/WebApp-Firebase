<!DOCTYPE html>
<html>
	<head>
		<title>Test Services Firebase</title>
		<meta charset="utf-8" />
		<!-- Config & Fichier Css pour Bootstrap -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
		<link rel="stylesheet" href="css/bootstrap.css" />
		<!-- Mon Fichier Css -->
		<link rel="stylesheet" href="css/style.css" />
		<!-- Script jQuery (avec api validate pour les formulaires) & bootstrap -->
		<script src="js/jquery.js"></script>
		<script src="js/jquery.validate.js"></script>
		<script src="js/messages_fr.js"></script>
		<script src="js/bootstrap.js"></script>
		<!-- Script pour Firebase Auth, Database & Storage -->
		<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js"></script>
		<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-auth.js"></script>
		<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-database.js"></script>
		<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-storage.js"></script>	
		<script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-firestore.js"></script>
		<!-- Mon Fichier JS -->
		<script src="js/script.js"></script>
	</head>
	<body>
		<header>
			<?php include 'menu.php'; ?>
		</header>
	</body>
	<section id="profil" class="container">
	<div class="row">
		<div id="blocPhoto" class="col-lg-4">
			<img id="photo" src="images/profil_vide.jpg" alt="photo de profil" />
			<input type="file" accept="image/*" id="photourl" />
		</div>
		<div id="blocForm" class="col-lg-8">
			<form id="profilForm" name="profilForm">
				<label for="prenom_profil">Prénom: </label>
				<input type="text" id="prenom_profil" name="prenom_profil" />
				<label for="nom_profil">Nom: </label>
				<input type="text" id="nom_profil" name="nom_profil" />
				<input type="button" value="Sauvegarder" id="save" disabled="true"/>
			</form>
		</div>
	</div>
	</section>
</html>