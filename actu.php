<?php 
	$fich=fopen('actu.json','r');
	$data = fgets($fich);
	echo($data);
	fclose($fich);
?>