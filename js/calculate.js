
document.getElementById('calculate-player-cost').addEventListener('click', function(){
    const cost_per_player = parseFloat(document.getElementById('costPerPlayer').value);
    if(isNaN(cost_per_player) !== true){
        const totalCost = calculatePlayerExpenses();
        setPlayerExpenses(totalCost);
    }
    else{
        alert('Input field is NAN ! please enter a number.')
    }
});

document.getElementById('calculate-total').addEventListener('click', function(){
    const manager = parseFloat(document.getElementById('manager').value);
    const coach = parseFloat(document.getElementById('coach').value);

    if(isNaN(manager) !== true && isNaN(coach) !== true){
        const netTotal = calculateTotalCost();
        setTotalCost(netTotal);
    }
    else{
        alert('Input field is NAN ! please enter a number.')
    }
})