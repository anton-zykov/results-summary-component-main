import data from './data.json' assert {type: 'json'};

const reaction = document.querySelector('#reaction');
reaction.textContent = data[0].score;
const memory = document.querySelector('#memory');
memory.textContent = data[1].score;
const verbal = document.querySelector('#verbal');
verbal.textContent = data[2].score;
const visual = document.querySelector('#visual');
visual.textContent = data[3].score;
const average = document.querySelector('.leftPercentage');
average.textContent = Math.round(
  data.reduce((sum, curr) => sum + curr.score, 0) / 4
);