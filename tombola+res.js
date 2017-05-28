

function nouveau_gagnant() {
	var	form = document.getElementsByTagName('form')[0];
	var gagnant = {"numero":form[0].value,"nom":form[1].value,"prenom":form[2].value,"ville":form[3].value,"lot":form[4].value};
	addLine(gagnant);
}

function addLine(personne) {
	var table = document.getElementsByTagName('table')[0];
	
	var ligne = document.createElement('tr');
	
	var numero = document.createElement('td');
	numero.innerHTML = personne.numero;
	ligne.appendChild(numero);
	var nom = document.createElement('td');
	nom.innerHTML = personne.nom;
	ligne.appendChild(nom);
	var prenom = document.createElement('td');
	prenom.innerHTML = personne.prenom;
	ligne.appendChild(prenom);
	var ville = document.createElement('td');
	ville.innerHTML = personne.ville;
	ligne.appendChild(ville);
	var lot = document.createElement('td');
	lot.innerHTML = personne.lot;
	ligne.appendChild(lot);

	table.appendChild(ligne);
}
