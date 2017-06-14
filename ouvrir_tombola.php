<?php 
	$fich=fopen('tombola.json','r');
	$data = fgets($fich);
	echo($data);
	fclose($fich);
?>