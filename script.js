const spinBtn = document.getElementById('spinBtn');

function getRandomPrompt() {
  return cozyPrompts[Math.floor(Math.random() * cozyPrompts.length)];
}

spinBtn.addEventListener('click', () => {
  promptDisplay.textContent = getRandomPrompt();
});
