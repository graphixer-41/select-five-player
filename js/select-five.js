document.getElementById('btn-player-select').addEventListener('click', function(){
    const playerSelect = document.getElementById('player');
    const playerString = playerSelect.innerText;
    console.log(playerString);
    const addPlayerlist = document.getElementById('player-list');
    addPlayerlist.innerText = playerString;  

})