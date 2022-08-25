function addPlayerInList(playerId){
    const listContainer = document.getElementById('list-container');
    const playerName = document.getElementById(playerId).innerText;

    const li = document.createElement('li');
    li.innerText = playerName;
    li.classList.add('player-list');

    listContainer.appendChild(li);
}

function calculatePlayerExpenses(){
    const costPerPlayer = document.getElementById('costPerPlayer');
    const costPerPlayerString = costPerPlayer.value;
    const costPerPlayerFloat = parseFloat(costPerPlayerString);

    const playerList = document.getElementsByClassName('player-list');
    const playerListLength = playerList.length;

    const totalCost = costPerPlayerFloat * playerListLength;
    return totalCost;
}

function setPlayerExpenses(cost){
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = cost;
}

function calculateTotalCost(){
    const managerCost = document.getElementById('manager');
    const managerCostString = managerCost.value;
    const managerCostFloat = parseFloat(managerCostString);

    const coachCost = document.getElementById('coach');
    const coachCostString = coachCost.value;
    const coachCostFloat = parseFloat(coachCostString);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesFloat = parseFloat(playerExpensesString);

    const netTotal = managerCostFloat + coachCostFloat + playerExpensesFloat;
    return netTotal;
}

function setTotalCost(clubTotal){
    const totalcost = document.getElementById('total-cost');
    totalcost.innerText = clubTotal;
}