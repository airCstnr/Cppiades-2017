
/*

Scripts de traitement de la tombola

*/

// ----------------------------
// Variables globales
// ----------------------------

// ensemble de touts les gagnants
var base = [];

// objet personne gagnante
function gagnant(numero, nom, prenom, ville, lot) {
    this.numero = numero;
    this.nom = nom;
    this.prenom = prenom;
    this.ville = ville;
    this.lot = lot;
}


// ----------------------------------
// Ouverture du tableau de résultats
// ---------------------------------

function ouvrir_base() {
	// ajouter les personnes existantes dans la base
	ajax_json(remplir_tableau);
}

function ajax_json(callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        callback(JSON.parse(this.responseText));
	    }
	};
	xmlhttp.open("GET", "tombola.json", true);
	xmlhttp.send();
}

function remplir_tableau(json) {
	var i = 0;
	for (pers of json) {
		addLine(pers, i);
		base.push(pers);
		i++;
	}
}


// ----------------------------------
// Ajouter des résultats
// ---------------------------------

function nouveau_gagnant() {
	var	form = document.getElementsByTagName('form')[0];
	var nouveau = new gagnant(form[0].value, form[1].value, form[2].value, form[3].value, form[4].value);
	addLine(nouveau, base.length);
	base.push(nouveau);
	modal.style.display = "none";
}

function addLine(personne, id) {
	var table = document.getElementsByTagName('table')[0];
	
	var ligne = document.createElement('tr');
	ligne.setAttribute('id', id);
	
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
