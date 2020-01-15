<?php
echo '
<nav class="navbar navbar-expand-md navbar-light border-bottom fixed-top">
	<div class="container">
		<a id="menu_menu" class="navbar-brand" href="index.php">
			<img src="images/icone_firebase.png" alt="firebase" style="width: 40px" />
			FireBase</a>
		<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">		
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="navbar-collapse collapse flex-md-row-reverse">
			<ul class="navbar-nav ">
				<li class="nav-item pr-4">
					<a id="menu_register" class="nav-link" href="#register">S\'inscrire</a>
				</li>
				<li class="nav-item pr-4">
					<a id="menu_log" class="nav-link" href="#log">S\'identifier</a>
				</li>
			</ul>					
			<ul class="navbar-nav flex-grow-1" >
				<li class="nav-item pl-4">
					<a id="menu_user" class="nav-link" href="#menu1">Menu 1</a>
				</li>
				<li class="nav-item pl-4 pr-4">
					<a id="menu_photo" class="nav-link" href="#menu2">Menu 2</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
';
?>