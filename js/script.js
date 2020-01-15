/* ----------------- Dans la console Firebase ----------------- 
/* Allez dans propriétés du projet de votre Web Application
/* Dans la partie Firebase SDK snippet sélectionnez Configuration
/* et copier/coller votre firebaseConfig ci dessous.
/* ------------------------------------------------------------ */
var firebaseConfig = {
	apiKey: "**********",
	authDomain: "*****.firebaseapp.com",
	databaseURL: "https://*****.firebaseio.com",
	projectId: "**********",
	storageBucket: "*****.appspot.com",
	messagingSenderId: "**********",
	appId: "**********"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var utilisateurs = []; // tableau vide qui contiendra la liste des utilisateurs enregistrés
var result = -1;
var photo = 0;

// mon code jQuery	
$(function() {
	// Charge la base de données
	ReadDataBase();
	
	// Vérifie si on est identifié
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// Si oui on active et change le menu
			$("#menu_profil").removeClass("disabled");
			$("#menu_user").removeClass("disabled");
			$("#menu_photo").removeClass("disabled");
			$("#menu_log").text("Se déconnecter");
			$("#menu_register").text(user.email);
			// recherche les données de l'utilisateur dans la DataBase
			VerifDataProfil(user);
		} 
		else {
			// Si non on désactive et change le menu 
			$("#menu_profil").addClass("disabled");
			$("#menu_user").addClass("disabled");
			$("#menu_photo").addClass("disabled");
			$("#menu_log").text("S'identifier");
			$("#menu_register").text("S'inscrire");
		}
	});
	
	// menu Connection / Déconnection
	$("#menu_log").click(function(){
		if($("#menu_log").text() === "S'identifier")
			document.location.href="login.php";
		else{
			firebase.auth().signOut()
			document.location.href="index.php";
		}
	});
	
	// menu S'inscrire ou Edit Profil
	$("#menu_register").click(function(){
		if($("#menu_register").text() === "S'inscrire")
			document.location.href = "register.php";
		else
			document.location.href = "profil.php";
	});
	
	function ReadDataBase(){
		firebase.database().ref('Utilisateurs/').once('value').then(function(data){
			utilisateurs = data.val() ? data.val() : [];
			return utilisateurs;
		})
	}
	
	async function VerifDataProfil(user){
		// attends 2sec pour être sur que la database soit chargée
		await sleep(2000); 
		for(var i=0; i < utilisateurs.length; i++){
			if(user.uid == utilisateurs[i].id){
				result = i;
				break;
			}
		}
		if(result > -1)
		{
			$("#prenom_profil").val(utilisateurs[result].prenom);
			$("#nom_profil").val(utilisateurs[result].nom);
			if(utilisateurs[result].photoUrl != null)
				$("#photo").attr('src', utilisateurs[result].photoUrl);
		}	
		$("#save").prop('disabled', false);
	}
	
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	// submit on crée un nouveau compte ou on s'identifie
	$.validator.setDefaults({
		submitHandler: function(form) {		
			if(form.name == "commentForm"){
				// Inscription
				var email = $('#email').val();
				var password = $('#password').val();
				
				// Créer le nouveau compte utilisateur
				firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
					var user = firebase.auth().currentUser; // récuppère les données de l'utilisateur
					// on insère ces données dans la database
					utilisateurs.push({
						id: user.uid,
						email: user.email
					});	
					// puis on les enregistre
					firebase.database().ref('Utilisateurs/').set(this.utilisateurs);
					document.location.href = "index.php"; // redirection vers index.php
				}).catch(function(error) {
					alert(error.code + " " + error.message);
				});
			}
			else{
				// Authentification
				var email = $('#email_login').val();
				var password = $('#password_login').val();
				
				firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
					document.location.href = "index.php"; // redirection vers index.php
				}).catch(function(error) {
					alert(error.code + " " + error.message);
				});
			}
		}
	});
	
	// règles de validation des formulaires
	$("#commentForm").validate({
		rules: {
			password: {
				required: true,
				minlength: 6
			},
			confirm_password: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			}
		}
	});
	
	$("#identForm").validate();
	
	// Quand on change la photo de profil
	$('input[type="file"]').change(function(e){
		readURL(this);
	});
	
	// charge la photo et l'affiche dans l'élément <img>
	function readURL(input) {
		if (input.files && input.files[0]) {
			photo = 1;
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#photo').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	
	// Sauvegarde la photo dans le storage et les données utilisateurs dans la database
	$('#save').click(function(){
		if(photo === 1){
			const file = $('#photourl').get(0).files[0];
			const name = (+ new Date()) + '-' + file.name;
			var metadata = { contentType: 'image/jpeg' };
		
			const upload = firebase.storage().ref().child('images/' + name).put(file, metadata);		
			upload.on('state_changed', function(snapshot){
				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
			},function(error){
				alert(error.code + " " + error.message);
			},function(){
			// chargement complet et réussi
				upload.snapshot.ref.getDownloadURL().then(function(downloadURL){
					alert("le fichier à été ajouté dans le storage Firebase");
					utilisateurs[result].photoUrl = downloadURL;
					utilisateurs[result].prenom = $("#prenom_profil").val();
					utilisateurs[result].nom = $("#nom_profil").val();
					firebase.database().ref('Utilisateurs/').set(utilisateurs);
					alert("les données ont bien été ajouté à la Database " + result);
				});
			});
		}
		else{
			if(result > -1){
				utilisateurs[result].prenom = $("#prenom_profil").val();
				utilisateurs[result].nom = $("#nom_profil").val();
				firebase.database().ref('Utilisateurs/').set(utilisateurs);
				alert("les données ont bien été ajouté à la Database " + result);
			}
		}
	});

});