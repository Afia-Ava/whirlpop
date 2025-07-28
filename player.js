const playerForm = document.getElementById('playerForm');
const playerNameInput = document.getElementById('playerName');
const playerList = document.getElementById('playerList');
const startGameBtn = document.getElementById('startGameBtn');

let players = [];

playerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = playerNameInput.value.trim();
  if (name) {
    players.push(name);
    renderPlayers();
    playerNameInput.value = '';
    playerNameInput.focus();
  }
});

function renderPlayers() {
  playerList.innerHTML = '';
  players.forEach((player, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="player-number">${
      idx + 1
    }.</span> <span class="player-name">${player}</span>`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✕';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
      players.splice(idx, 1);
      renderPlayers();
    };
    li.appendChild(removeBtn);
    playerList.appendChild(li);
  });
}

startGameBtn.addEventListener('click', function () {
  if (players.length === 0) {
    alert('Add at least one player to start the game!');
    return;
  }
  // Store players in localStorage and go to category page
  localStorage.setItem('whirlpopPlayers', JSON.stringify(players));
  window.location.href = 'category.html';
});
