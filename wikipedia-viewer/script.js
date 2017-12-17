console.log("Hello Friend");

let results = document.querySelector(".results");

let api = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=brazil&srwhat=text&srprop=timestamp&continue=&format=json";

fetch(api)
	.then(function(response) {return response.json();})
	.then(function(data) {
		console.log(data);
	});