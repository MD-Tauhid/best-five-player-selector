document.getElementById('player-selector1').addEventListener('click', function(event){
    const playerList = document.getElementsByClassName('player-list');
    if(playerList.length < 5){
        addPlayerInList('player-1');
        event.target.setAttribute('disabled', true);
    }
    else{
        alert('Already selected five player');
        
    }
    
});

document.getElementById('player-selector2').addEventListener('click', function(event){
    const playerList = document.getElementsByClassName('player-list');
    if(playerList.length < 5){
        addPlayerInList('player-2');
        event.target.setAttribute('disabled', true);
    }
    else{
        alert('Already selected five player');
        
    }
    
});

document.getElementById('player-selector3').addEventListener('click', function(event){
    const playerList = document.getElementsByClassName('player-list');
    if(playerList.length < 5){
        addPlayerInList('player-3');
        event.target.setAttribute('disabled', true);
    }
    else{
        alert('Already selected five player');
        
    }
    
});

document.getElementById('player-selector4').addEventListener('click', function(event){
    const playerList = document.getElementsByClassName('player-list');
    if(playerList.length < 5){
        addPlayerInList('player-4');
        event.target.setAttribute('disabled', true);
    }
    else{
        alert('Already selected five player');
        
    }
    
});

document.getElementById('player-selector5').addEventListener('click', function(event){
    const playerList = document.getElementsByClassName('player-list');
    if(playerList.length < 5){
        addPlayerInList('player-5');
        event.target.setAttribute('disabled', true);
    }
    else{
        alert('Already selected five player');
        
    }
    
});

document.getElementById('player-selector6').addEventListener('click', function(event){
    const playerList = document.getElementsByClassName('player-list');
    if(playerList.length < 5){
        addPlayerInList('player-6');
        event.target.setAttribute('disabled', true);
    }
    else{
        alert('Already selected five player');
        
    }
    
});