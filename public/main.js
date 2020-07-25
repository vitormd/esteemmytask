const elIds = {
  form: 'form',
  description: '#taskDescription',
  scale: '#scaleField:checked',
  score: '#score'
};

const scales = {
  fibonacci5: ['0', '1', '2', '3', '5'],
  fibonacci8: ['0', '1', '2', '3', '5', '8'],
  fibonacci13: ['0', '1', '2', '3', '5', '8', '13'],
  pmg: ['P', 'M', 'G'],
  linear: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'], // less sexist order ;)
  tshirts: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
}

const form = document.querySelector(elIds.form);
const description = document.querySelector(elIds.description);
const score = document.querySelector(elIds.score);

const displayScore = (sc) => {
  score.innerText = sc;
}

const estimate = () => {
  const chosenScale = document.querySelector(elIds.scale).value
  const scaleValues = scales[chosenScale]
  const rest = description.value.length % scaleValues.length;
  const score = scaleValues[rest];

  displayScore(score);
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  estimate();
});
