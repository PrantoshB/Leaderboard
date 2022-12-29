const Score = document.querySelector('.score');
const Name = document.querySelector('.name');
const Submit = document.querySelector('#submit');
const Message = document.querySelector('#alert');

const sendData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VQIBei2p1cwYT56nrvbe/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: Name.value,
      score: Score.value,
    }),
  });
  const data = await response.json();
  return data;
};

Submit.addEventListener('click', () => {
  if (Name.value !== '' && Score.value !== '') {
    sendData();
    Name.value = '';
    Score.value = '';
    Message.style.display = 'none';
  } else {
    Message.style.display = 'block';
  }
});

Name.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.altKey) {
    e.preventDefault();
  } else {
    const key = e.keyCode;
    if (!((key === 8) || (key === 9) || (key === 32)
      || (key === 46) || (key >= 35 && key <= 40)
      || (key >= 65 && key <= 90))) {
      e.preventDefault();
    }
  }
});
