console.log("Hello Friend");

const link = "http://en.wikipedia.org/?curid=";
const results = document.querySelector(".results");
const title = document.querySelector(".title");
const desc = document.querySelector(".description");
const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");
// allow cors using heroku
const cors = "https://cors-anywhere.herokuapp.com/";
btn.onclick = () => {
	const search = document.querySelector(".search").value;
	console.log(search);
	const api = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search}&utf8=&format=json`;
	fetch(cors + api)
	.then((response) => {return response.json();})
	.then((data) => {
		wrap.innerHTML = "";
		for (let i = 0; i < data.query.search.length; i++) {
			wrap.innerHTML += `<div class="results"><h2><a href="${link + data.query.search[i].pageid}"target="_blank"class="title">${data.query.search[i].title}</a></h2>
		<p class="description">${data.query.search[i].snippet}</p></div>`;
		}
	});
};