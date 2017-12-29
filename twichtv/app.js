console.log("Welcome to my webpage");

const allChannels = document.querySelector('.all-channels');
const onB = document.querySelector('.on-b');
const offB = document.querySelector('.off-b');
const allB = document.querySelector('.all-b');
const online = document.querySelector('.online');
const offline = document.querySelector('.offline');
const all = document.querySelector('.all');
const onChannels = document.querySelector('.online');
const offChannels = document.querySelector('.offline-channels');
const api = 'https://wind-bow.glitch.me/twitch-api/users/mithrain/follows/channels';
let on = [];


fetch(api)
	.then((response) => {return response.json();})
	.then((data) => {
    //get list of channels 
    for(let i = 0; i < data.follows.length; i++){
      // show all channels
      allChannels.innerHTML += `<li><a href="${data.follows[i].channel.url}" target="_blank"> ${data.follows[i].channel.name} </a></li> `;

      // getting all channels names
      on.push(`https://wind-bow.glitch.me/twitch-api/streams/${data.follows[i].channel.name}`);

      fetch(on[i])
      .then((response) => {return response.json();})
      .then((check) => {
        // show only online channels
        if(check.stream !== null) {
          onChannels.innerHTML += `<div><a href="${check.stream.channel.url}" target="_blank"> ${data.follows[i].channel.name}</a> <p>${check.stream.channel.status}</p></div>`;
        } 
        // show only offline channels
        else if (check.stream === null) {
          offChannels.innerHTML += `<li><a href="${data.follows[i].channel.url}" target="_blank"> ${data.follows[i].channel.name}</a></li>`; 
        }
       });
      }
    })
    .then(function(){
  });

online.style.display = 'none';
offline.style.display = 'none';

onB.onclick = () => {
  console.log('on');
  if (online.style.display === 'none') {
    online.style.display = 'block';
    all.style.display = 'none';
    offline.style.display = 'none';
    onB.style.background = 'green';
    allB.style.background = 'white';
    offB.style.background = 'white';
  } else {
    online.style.display = 'none';
    all.style.display = 'block';
    onB.style.background = 'white';
    allB.style.background = 'grey';
  }
};

offB.onclick = () => {
  console.log('off');
  
  if(offline.style.display === 'none') {
    offline.style.display = 'block';
    all.style.display = 'none';
    online.style.display = 'none';
    allB.style.background = 'white';
    offB.style.background = 'red';
    onB.style.background = 'white';
  } else {
    offline.style.display = 'none';
    all.style.display = 'block';
    offB.style.background = 'white';
    allB.style.background = 'grey';
  }
};

allB.onclick = () => {
  console.log('all');
  allB.style.background = 'grey';
  onB.style.background = 'white';
  offB.style.background = 'white';
  all.style.display = 'block';
  offline.style.display = 'none';
  online.style.display = 'none';
}