<?php 
	$motDePasse = "MotDePasseCassé"; // changer le mot de passe ici si besoin
	$mdp = $_POST['data'];
	if ($mdp==$motDePasse) {echo 1;}
	else {echo 0;}
?>