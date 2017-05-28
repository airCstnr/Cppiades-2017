

// Fonctions à l'initialisation de actu.html
function init() {
	ajax_json(lecture);
}

// Lecture
function lecture(json) {
	var section = document.getElementById('Actualites');
	for (var i = json.length - 1; i >= 0; i--) {
		var nouvelle_div = document.createElement('div');
		nouvelle_div.className = "actu";
		var actu = JSON.parse(json[i]);
		var titre = document.createElement('h4');
		titre.innerHTML = actu.titre;
		nouvelle_div.appendChild(titre);
		var msg = document.createElement('p');
		msg.innerHTML = actu.message;
		nouvelle_div.appendChild(msg);
		section.appendChild(nouvelle_div);
	}
}



// Ajout d'une actu
function nouvelle_actu() {
	// vérification du mot de passe
	var mdp = document.getElementById('mdp').value;
	ajax_post_request(verifMDP, "verifMDP.php", false, mdp);
}

function verifMDP(retour) {
	// si le mot de passe est bon, on ajoute la nouvelle actu au fichier
	retour==1 ? ajax_json(ajout) : console.log("ERREUR : mauvais mot de passe")
}

function ajout(json) {
	var titre = encodeURI(document.getElementById('titre').value);
	var message = encodeURI(document.getElementById('message').value);
	var new_actu = {"titre":titre, "message":message};
	json.push(JSON.stringify(new_actu));
	ajax_post_request(console.log, "nouvelle_actu.php", true, JSON.stringify(json));
}




// --------------
// Fonctions AJAX
// --------------
function ajax_get_request(callback,url,async) {
	var xhr = new XMLHttpRequest ();
	xhr.onreadystatechange = function() {
		if ((xhr.readyState==4) && (xhr.status == 200)) {
			callback(xhr.responseText);
		}
	};
	xhr.open("GET", url, async);
	xhr.send();
}

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

function ajax_json(callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        callback(JSON.parse(this.responseText));
	    }
	};
	xmlhttp.open("GET", "actu.json", true);
	xmlhttp.send();
}