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
		<Section id="formulaire">
			<form id="identForm" name="identForm">
				<label for="email_login">Adresse Mail: </label>
				<input type="email" id="email_login" name="email_login" />
				<label for="password_login">Mot de passe: </label>
				<input type="password" id="password_login" name="password_login" />
				<input type="submit" value="login" id="loginout" />
			</form>
		</section>
	</body>
</html>
