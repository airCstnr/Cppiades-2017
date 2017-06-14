<?php 
	$str=$_POST['data'];
	echo $str;
    $fich=fopen('tombola.json','w');
    fputs($fich,$str);
    fclose($fich);
?>