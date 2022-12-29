import './style.css';
import getData from './modules/getData.js';
import './modules/sendData.js';

const Result = document.querySelector('.results');
const Refresh = document.querySelector('#refresh');

Refresh.addEventListener('click', async () => {
  Result.innerHTML = `<img id="loader"
  src="https://media2.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif"
  alt="progress">`;
  const GameScores = await getData();
  Result.innerHTML = '';
  GameScores.sort((a, b) => b.score - a.score).forEach((element) => {
    Result.innerHTML += `
          <p>🏆 ${element.user}: ${element.score}</p>
          `;
  });
});

window.onload = async () => {
  const GameScores = await getData();
  Result.innerHTML = '';
  GameScores.sort((a, b) => b.score - a.score).forEach((element) => {
    Result.innerHTML += `
          <p>🏆 ${element.user}: ${element.score}</p>
          `;
  });
};