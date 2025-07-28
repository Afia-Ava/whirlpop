const phoneRoulettePrompts = [
  'Show the last photo in your camera roll.',
  'Read aloud the last text message you received.',
  'Show the 3rd app on your home screen.',
  'Share the last song you listened to.',
  'Show the most embarrassing photo on your phone.',
  'Call the last person you texted and say “Hello!”',
  'Share your most-used emoji.',
  'Show your oldest saved selfie.',
  'Read aloud the last note you wrote on your phone.',
  'Show your last screenshot.',
  'Share a funny autocorrect fail you’ve had.',
  'Show your phone’s wallpaper and explain it.',
  'Reveal the last app you downloaded.',
  'Show the last message in your social media DMs.',
  'Share a photo you never meant to send.',
  'Show your phone’s last notification (if you can).',
  'Read the last calendar event you added.',
  'Show your favorite photo on your phone.',
  'Share your last saved contact (no numbers!).',
  'Show the first app in your folder named “Games” (or any folder).',
  'Share your funniest phone ringtone.',
  'Show your last selfie with friends.',
  'Read the last draft message you saved.',
  'Show your most recent social media post.',
  'Share the last playlist you played.',
  'Show the last message you starred or favorited.',
  'Share your phone’s battery percentage.',
  'Show the last app you used for messaging.',
  'Read aloud your last saved password hint (if you dare).',
  'Show the most recent meme or GIF you saved.',
];
const deepTalkPrompts = [
  'What’s one thing you wish people understood about you?',
  'What moment in your life changed you the most?',
  'What’s a belief you used to have but no longer do?',
  'What does success mean to you?',
  'What’s something you’re afraid to admit?',
  'What’s the hardest lesson you’ve learned?',
  'If you could give your younger self advice, what would it be?',
  'What’s one thing you want to be remembered for?',
  'How do you handle failure?',
  'What’s a dream you’ve never shared with anyone?',
  'What does happiness look like to you?',
  'When was the last time you felt truly at peace?',
  'What’s one value you refuse to compromise?',
  'How do you show love to others?',
  'What’s something you want to improve about yourself?',
  'What’s a book or film that deeply affected you?',
  'What role does friendship play in your life?',
  'How do you cope with stress or anxiety?',
  'What’s one thing you’ve learned from a past relationship?',
  'What motivates you to keep going?',
  'What’s a personal goal you’re working on right now?',
  'What’s the meaning of life, in your opinion?',
  'If you could change one thing about the world, what would it be?',
  'How do you want to grow over the next year?',
  'What’s your biggest source of inspiration?',
  'How do you define courage?',
  'What’s a question you wish people would ask you?',
  'When do you feel most authentic?',
  'What does forgiveness mean to you?',
  'How do you practice gratitude?',
];
const cringeCorePrompts = [
  'Sing the first verse of a cheesy pop song.',
  'Share your worst dance move.',
  'Show your most embarrassing childhood photo (or describe it).',
  'Make a funny face and hold it for 10 seconds.',
  'Tell a joke so bad it makes everyone groan.',
  'Say your name backwards three times fast.',
  'Pretend you’re a llama for 30 seconds.',
  'Tell the group your most awkward moment.',
  'Make up a silly rap about the last thing you ate.',
  'Talk in a silly voice until your next turn.',
  'Share a weird habit no one knows about.',
  'Do your best baby talk impression.',
  'Share the last embarrassing thing you searched online.',
  'Imitate your favorite cartoon character.',
  'Say “meow” every time someone speaks until your next turn.',
  'Try to do a magic trick and fail spectacularly.',
  'Share a nickname you had that you hated.',
  'Act out a dramatic soap opera scene.',
  'Tell a funny story that makes you cringe now.',
  'Make up a ridiculous conspiracy theory.',
  'Say something embarrassing you did in school.',
  'Share your most awkward text message mistake.',
  'Dance like no one’s watching (but everyone is).',
  'Tell the group your worst haircut story.',
  'Share a weird food combo you secretly like.',
  'Pretend to be your favorite celebrity getting ready for an award show.',
  'Make your best duck face and take a selfie.',
  'Tell the group a secret silly fear you have.',
  'Imitate how you think aliens would talk.',
  'Share the weirdest dream you ever had.',
];
const cozyVibesPrompts = [
  'What’s your favorite comfort food?',
  'Describe your perfect cozy day.',
  'Share something you’re grateful for today.',
  'What’s your go-to song when you want to relax?',
  'Who’s someone that always makes you smile?',
  'What’s a small thing that always cheers you up?',
  'Describe your dream vacation spot.',
  'What’s your favorite way to unwind after a long day?',
  'Share a happy memory from your childhood.',
  'What’s a book or movie that feels like a warm hug?',
  'What’s your favorite way to spend a rainy day?',
  'Share a positive quote that inspires you.',
  'What’s a kind thing someone recently did for you?',
  'Describe your favorite cozy outfit.',
  'What’s your favorite scent or smell?',
  'What’s a hobby that relaxes you?',
  'Who’s someone you wish you could thank?',
  'Share one thing you love about yourself.',
  'What’s your favorite way to practice self-care?',
  'Describe your perfect morning routine.',
  'What’s a song that always makes you feel calm?',
  'Share a time you helped someone and it made you happy.',
  'What’s a place that feels like home to you?',
  'Describe a perfect quiet evening.',
  'What’s your favorite cozy drink?',
  'Who’s your favorite fictional character to curl up with?',
  'What’s something you’ve done recently that made you proud?',
  'Share a comfort tradition you have with family or friends.',
  'What’s your favorite kind of blanket or pillow?',
  'What’s a simple pleasure you enjoy every day?',
];
window.addEventListener('DOMContentLoaded', () => {
  const playerCountBox = document.getElementById('playerCountBox');
  const themeBox = document.getElementById('themeBox');
  let players = [];
  let theme = '-';
  try {
    players = JSON.parse(localStorage.getItem('whirlpopPlayers')) || [];
  } catch {}
  theme = localStorage.getItem('whirlpopCategory') || '-';
  if (playerCountBox)
    playerCountBox.textContent = `Player Count: ${players.length}`;
  if (themeBox) themeBox.textContent = `Theme: ${theme}`;
});

const wheel = document.getElementById('whirlWheel');
const svgWheel = document.getElementById('svgWheel');
const btn = document.getElementById('whirlBtn');

let spinning = false;

function getPlayers() {
  try {
    return JSON.parse(localStorage.getItem('whirlpopPlayers')) || [];
  } catch {
    return [];
  }
}

function getTheme() {
  return localStorage.getItem('whirlpopCategory') || '-';
}

const truthOrDarePrompts = [
  'What’s a secret you’ve never told anyone? (Truth)',
  'Text your crush “I’m thinking of you.” (Dare)',
  'What’s your most embarrassing moment? (Truth)',
  'Do 10 jumping jacks right now. (Dare)',
  'Have you ever lied to get out of trouble? (Truth)',
  'Sing the chorus of your favorite song. (Dare)',
  'What’s something you regret doing? (Truth)',
  'Post a silly selfie to your story. (Dare)',
  'Who do you have a crush on right now? (Truth)',
  'Speak in a funny accent for 2 minutes. (Dare)',
  'What’s your weirdest habit? (Truth)',
  'Eat a spoonful of something spicy. (Dare)',
  'What’s the last lie you told? (Truth)',
  'Do your best dance move. (Dare)',
  'What’s your biggest fear? (Truth)',
  'Call a friend and sing “Happy Birthday” to them. (Dare)',
  'Who was your childhood crush? (Truth)',
  'Draw a silly face on your hand. (Dare)',
  'What’s something you’re proud of but don’t talk about? (Truth)',
  'Wear socks on your hands for the next 5 minutes. (Dare)',
  'Have you ever broken someone’s heart? (Truth)',
  'Do your best animal impression. (Dare)',
  'What’s your guilty pleasure TV show? (Truth)',
  'Hold a funny pose until your next turn. (Dare)',
  'What’s one thing you wish you could change about yourself? (Truth)',
  'Make a funny face and hold it for 10 seconds. (Dare)',
  'What’s the worst date you’ve ever been on? (Truth)',
  'Pretend to be a superhero for 30 seconds. (Dare)',
  'What’s a nickname you hate? (Truth)',
  'Talk only in rhymes until your next turn. (Dare)',
];

const chaosModePrompts = [
  'Swap an item of clothing with the person next to you.',
  'Speak only in song lyrics for the next 3 minutes.',
  'Do your best impression of someone in the room.',
  'Make up a ridiculous story about your life right now.',
  'Spin around 5 times then try to walk straight.',
  'Say the alphabet backward as fast as you can.',
  'Take a silly selfie and show it to the group.',
  'Use your phone with your non-dominant hand for the next 5 minutes.',
  'Make a weird noise every time someone speaks until your next turn.',
  'Pretend you’re a cat for the next 2 minutes.',
  'Do your best runway walk across the room.',
  'Act like a robot until your next turn.',
  'Tell a joke so bad it’s good.',
  'Draw a mustache on your face with a pen.',
  'Try to lick your elbow.',
  'Do 20 push-ups (or as many as you can).',
  'Talk like a pirate for the next 5 minutes.',
  'Share the weirdest thing in your bag or pocket.',
  'Say “I’m the boss” every time you speak until your next turn.',
  'Pretend to be a news reporter giving a breaking story.',
  'Sing “Happy Birthday” to yourself loudly.',
  'Make a funny dance move and repeat it three times.',
  'Balance a book on your head for the next round.',
  'Do a dramatic reading of a random text message.',
  'Imitate a celebrity’s voice for one whole minute.',
  'Try to juggle 3 random objects (or fake it).',
  'Say a tongue twister five times fast.',
  'Pretend you’re invisible and sneak around the room.',
  'Hold a plank position for 30 seconds.',
  'Act out a scene from a movie of your choice.',
];

function getUsedPromptIndexes(key = 'whirlpopTruthOrDareUsed') {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function setUsedPromptIndexes(arr, key = 'whirlpopTruthOrDareUsed') {
  localStorage.setItem(key, JSON.stringify(arr));
}

function showPopup() {
  const overlay = document.getElementById('popupOverlay');
  const playerBox = document.getElementById('popupPlayer');
  const topicBox = document.getElementById('popupTopic');
  const players = getPlayers();
  const theme = getTheme();
  let player = players.length
    ? players[Math.floor(Math.random() * players.length)]
    : '-';
  let topic = 'Random Topic (replace with real topics)';
  if (theme.toLowerCase() === 'truth or dare') {
    let used = getUsedPromptIndexes('whirlpopTruthOrDareUsed');
    if (used.length >= truthOrDarePrompts.length) used = [];
    let available = [];
    for (let i = 0; i < truthOrDarePrompts.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);
    setUsedPromptIndexes(used, 'whirlpopTruthOrDareUsed');
    topic = truthOrDarePrompts[idx];
  } else if (theme.toLowerCase() === 'chaos mode') {
    let used = getUsedPromptIndexes('whirlpopChaosUsed');
    if (used.length >= chaosModePrompts.length) used = [];
    let available = [];
    for (let i = 0; i < chaosModePrompts.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);
    setUsedPromptIndexes(used, 'whirlpopChaosUsed');
    topic = chaosModePrompts[idx];
  } else if (theme.toLowerCase() === 'cozy vibes') {
    let used = getUsedPromptIndexes('whirlpopCozyUsed');
    if (used.length >= cozyVibesPrompts.length) used = [];
    let available = [];
    for (let i = 0; i < cozyVibesPrompts.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);
    setUsedPromptIndexes(used, 'whirlpopCozyUsed');
    topic = cozyVibesPrompts[idx];
  } else if (theme.toLowerCase() === 'cringe core') {
    let used = getUsedPromptIndexes('whirlpopCringeUsed');
    if (used.length >= cringeCorePrompts.length) used = [];
    let available = [];
    for (let i = 0; i < cringeCorePrompts.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);
    setUsedPromptIndexes(used, 'whirlpopCringeUsed');
    topic = cringeCorePrompts[idx];
  } else if (theme.toLowerCase() === 'deep talk') {
    let used = getUsedPromptIndexes('whirlpopDeepUsed');
    if (used.length >= deepTalkPrompts.length) used = [];
    let available = [];
    for (let i = 0; i < deepTalkPrompts.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);
    setUsedPromptIndexes(used, 'whirlpopDeepUsed');
    topic = deepTalkPrompts[idx];
  } else if (theme.toLowerCase() === 'phone roulette') {
    let used = getUsedPromptIndexes('whirlpopPhoneUsed');
    if (used.length >= phoneRoulettePrompts.length) used = [];
    let available = [];
    for (let i = 0; i < phoneRoulettePrompts.length; i++) {
      if (!used.includes(i)) available.push(i);
    }
    let idx = available[Math.floor(Math.random() * available.length)];
    used.push(idx);
    setUsedPromptIndexes(used, 'whirlpopPhoneUsed');
    topic = phoneRoulettePrompts[idx];
  }
  playerBox.textContent = `Player: ${player}`;
  topicBox.textContent = `Topic: ${topic}`;
  overlay.style.display = 'flex';
}

function hidePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  let start = null;
  let duration = 3200;
  let totalRot = (Math.random() * 3 + 4) * 360;
  let lastAngle = 0;
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  function animateWheel(ts) {
    if (!start) start = ts;
    let elapsed = ts - start;
    let progress = Math.min(elapsed / duration, 1);
    let eased = easeOutCubic(progress);
    let angle = totalRot * eased;
    svgWheel.style.transform = `rotate(${angle}deg)`;
    lastAngle = angle;
    if (progress < 1) {
      requestAnimationFrame(animateWheel);
    } else {
      spinning = false;
      svgWheel.style.transform = `rotate(${lastAngle}deg)`;
      showPopup();
    }
  }
  svgWheel.style.transition = 'none';
  requestAnimationFrame(animateWheel);
}

window.addEventListener('DOMContentLoaded', () => {
  const skipBtn = document.getElementById('skipBtn');
  const doneBtn = document.getElementById('doneBtn');
  if (skipBtn)
    skipBtn.onclick = () => {
      hidePopup();
    };
  if (doneBtn)
    doneBtn.onclick = () => {
      hidePopup();
    };
});

btn.addEventListener('click', spinWheel);
svgWheel.addEventListener('click', spinWheel);
