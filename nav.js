

$(function(){
    var ul = $('ul').first();
    ul.append('<li><a class="index.html" href="index.html">Accueil</a></li>');
    ul.append('<li><a class="actu.html" href="actu.html">Actualités</a></li>');
    ul.append('<li><a class="partenaires.html" href="partenaires.html">Partenaires</a></li>');
    ul.append('<li><a class="tombola.html" href="tombola.html">Tombola</a></li>');
    ul.append('<li><a class="planning.html" href="planning.html">Planning</a></li>');
    ul.append('<li><a class="map.html" href="map.html">Carte</a></li>');
    ul.append('<li><a class="reglements.html" href="reglements.html">Règlements</a></li>');
    ul.append('<li><a class="resultats.html" href="resultats.html">Résultats</a></li>');
    ul.append('<li><a class="faq.html" href="faq.html">FAQ</a></li>');
    ul.append('<li><a class="about.html" href="about.html">A propos</a></li>');
    
    
    var url = document.URL;
	var filename = url.substring(url.lastIndexOf('/')+1);
    if (filename=='') { filename='index.html';}
	var nav = document.getElementsByTagName("nav");
    var lien = nav[0].getElementsByClassName(filename);
	lien[0].className = "active_nav";
});
