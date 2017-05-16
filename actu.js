
//variable globale qui contient le json des actualités
var actualites;



// Fonctions à l'initialisation
function init() {
	// ajax_get_request(ajouter_actu,"actu.php",true);
	ajax_json();
	console.log(myObj);
}


function ajouter_actu(actus) {
	actualites = actus;
	console.log(actus);
}


function nouvelle_actu(titre, contenu) {
	var nouvelle = {};
	ajax_post_request(callback,url,async,data)
}





// Fonctions AJAX
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

function ajax_json() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        return JSON.parse(this.responseText);
	    }
	};
	xmlhttp.open("GET", "actu.json", true);
	xmlhttp.send();
}