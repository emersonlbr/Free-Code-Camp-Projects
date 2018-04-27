
let body = document.querySelector("body");
let btn = document.querySelector(".new-quote");
let allchar = "0123456789ABCDEF";
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");


btn.addEventListener("click", function(){
  // random color on click
  let  randcol= "";
  for(let i = 0; i < 6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
  body.style.backgroundColor = "#"+randcol;
});

// for the cach
// var timestamp = +new Date();
// var url = "http://mysite.com/myfile.js?t=" + timestamp;

// JQUERY
$(document).ready(function() {
  
  $(btn).on("click", function(){
    let api = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(api, function(json) {
          $(quote).html(json.quoteText);
          $(author).html(`- ${json.quoteAuthor}`);
          let qu = json.quoteText;
          let au = json.quoteAuthor;
          let link = `http://twitter.com/share?text= ${qu} - ${au} &url=http://url &hashtags=FCC`;
          document.getElementById("tweet").setAttribute("href", link);
          console.log(`${qu}- ${au}`);
        });
  });
});

// let a = $(quote).html(json.quoteText);
// let link = "http://twitter.com/share?text=" + lol + " &url=http://url &hashtags=FCC";
// document.getElementById("tweet").setAttribute("href", link);