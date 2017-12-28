console.log("Welcome to my webpage");


const allChannels = document.querySelector('.all-channels');
const onChannels = document.querySelector('.online-channels');
const offChannels = document.querySelector('.offline-channels');
const api = 'https://wind-bow.glitch.me/twitch-api/users/emersonlbr/follows/channels';
let on = [];



fetch(api)
	.then((response) => {return response.json();})
	.then((data) => {
    //get list of channels 
    for(let i = 0; i < data.follows.length; i++){
      // show all channels
      allChannels.innerHTML += `<li> ${data.follows[i].channel.name} </li> `;

      // getting all channels names
      on.push(`https://wind-bow.glitch.me/twitch-api/streams/${data.follows[i].channel.name}`);

      fetch(on[i])
      .then((response) => {return response.json();})
      .then((check) => {
        // show only online channels
        if(check.stream !== null) {
          onChannels.innerHTML += `<li> ${data.follows[i].channel.name}</li>`;
        } 
        // show only offline channels
        else if (check.stream === null) {
          offChannels.innerHTML += `<li> ${data.follows[i].channel.name}</li>`; 
        }
       });
      }
    })
    .then(function(){
  });











