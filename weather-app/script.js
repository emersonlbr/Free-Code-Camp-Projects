console.log("what are you looking for?");
const temp      = document.querySelector(".temp");
const city      = document.querySelector(".city");
const main      = document.querySelector(".main");
const icon      = document.querySelector(".icon");
const html      = document.querySelector("html");
const spinner   = document.querySelector(".spinner");
const img       = document.querySelector("img");
const container = document.querySelector(".container");

navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;

    $.getJSON(api, function(json) {
        let x = Math.floor(json.main.temp);
//        let x = -32;
        $(temp).html(`${x}ºC <span>Degrees</span>`);
        $(city).html(json.name);
        $(main).html(json.weather[0].main);
        if (x > 30){
            console.log("hot");
            html.style.backgroundImage = "url(https://images.unsplash.com/photo-1424112908919-49d7a3e04482?auto=format&fit=crop&w=1052&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)";
            $(img).attr("src", "30.svg");

        } else if (x > 20) {
            console.log("Perfect");
            html.style.backgroundImage = "url(https://images.unsplash.com/photo-1505094966950-c1eb4fea1456?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)";
            $(img).attr("src", "20.svg")

        } else if (x > 10) {
            console.log("Cold");
            html.style.backgroundImage = "url(https://images.unsplash.com/photo-1503441669932-76d3a4625eb9?auto=format&fit=crop&w=994&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)";
            $(img).attr("src", "10.svg");

        } else if (x > 0) {
            console.log("Freezing");
            html.style.backgroundImage = "url(https://images.unsplash.com/photo-1422207134147-65fb81f59e38?auto=format&fit=crop&w=958&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)";
            $(img).attr("src", "0.svg");

        } else {
            console.log("are you in russia?");
            html.style.backgroundImage = "url(https://images.unsplash.com/photo-1507181080368-cc2195abcde1?auto=format&fit=crop&w=1189&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)";
            $(img).attr("src", "00.svg");

        }
        spinner.style.display = "none";
        container.style.display = "block";
        temp.onclick = () => {
            let f = Math.floor(((x * 9) / 5) + 32);
            $(temp).html(`${f}ºF <span>Degrees</span>`);
        };
        console.log(x);
        console.log(json.weather[0].main);
    });
});
