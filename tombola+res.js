


// ensemble de toutes les lignes
var base = [];

// objet gagnant
function gagnant(numero, nom, prenom, ville, lot) {
    this.numero = numero;
    this.nom = nom;
    this.prenom = prenom;
    this.ville = ville;
    this.lot = lot;
}



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
	console.log(remplir_tableau);
	console.log(json);
	var i = 0;
	for (pers of json) {
		addLine(pers, i);
		base.push(pers);
		i++;
	}
}

function enregistrer_base() {
	// enregistrer la base
	// vérifier mot de passe
	var mdp = prompt("Mot de passe");

	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ((xhr.readyState==4) && (xhr.status == 200)) {

			// réponse du script vérifMDP.php
			var retour = xhr.responseText;
			if (retour==1)
			{
				console.log("MDP OK");
				ajax_post_request(console.log, "enregistrer_tombola.php", true, JSON.stringify(base));
			}
			else if (retour==0)
			{
				alert("Mauvais mot de passe");
			}
			else
			{
				alert("Erreur");
			}

		}
	};
	xhr.open("POST","verifMDP.php",true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("data="+mdp);
}



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

	var fermer = document.createElement('button');
	fermer.setAttribute('class', 'bouton');
	fermer.setAttribute('onclick', 'removeLine('+id+')');
	fermer.innerHTML = 'Supprimer',
	ligne.appendChild(fermer);

	table.appendChild(ligne);
}

function removeLine(numero) {
	// supprime la ligne du bouton sélectionné
	var ligne = document.getElementById(numero);
	ligne.parentNode.removeChild(ligne);
}


// ----------- AJAX ---------------
function ajax_post_request (callback,url,async,data) {
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if ((xhr.readyState==4) && (xhr.status == 200)) {
			callback(xhr.responseText);
		}
	};
	xhr.open("POST",url,async);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("data="+data);
}

