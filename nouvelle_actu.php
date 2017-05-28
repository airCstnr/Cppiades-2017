<?php 
	$str=$_POST['data'];
	echo $str;
    $fich=fopen('actu.json','w');
    fputs($fich,$str);
    fclose($fich);
    //echo "OK";
?>