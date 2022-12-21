import './style.css';
import './modules/getData.js'
import './modules/sendData.js'
import { getData } from './modules/getData.js';
const Result = document.querySelector('.results')
const Refresh = document.querySelector('#refresh')

Refresh.addEventListener('click', async () => {
    let GameScores = await getData();
    Result.innerHTML = ''
    GameScores.sort((a, b) => a.score - b.score).forEach((element) => {
        Result.innerHTML += `
        <p>${element.user}: ${element.score}</p>
        `
    });
})