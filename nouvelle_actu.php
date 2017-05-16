<?php 
	$str=$_POST['data'];
    $fich=fopen('actu.json','w');
    fputs($fich,$str);
    fclose($fich);
?>