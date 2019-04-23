const resetButton = document.getElementById('reset');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');

resetButton.addEventListener(
  'click',
  () => (four.style = null),
  (document.getElementById('result').innerHTML = 'Here will be your result')
);

// resetButton.addEventListener('click', function reset() {
//   document.getElementById('result').innerHTML = 'Here will be your result';
//   // four.style.backgroundColor = null;
//   four.style = null;
// });

function getBmiValue() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const name = document.getElementById('name').value;
  const result = Math.round(weight / (height * height));
  if (isNaN(result)) {
    document.getElementById(
      'result'
    ).innerHTML = `Please, enter your name, weight and height`;
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `${name}, your bmi value is : ${result}`;
  }
  if (result >= 18.5 || result >= 25) {
    document.getElementById('four').style.backgroundColor = 'green';
    document.getElementById('four').style.color = 'white';
  }
}

function check() {
  const age = document.fform.age.value;
  const bmi = document.fform.bmi.value;
  const gender = parseInt(document.getElementById('male').checked ? 1 : 0);
  let fat;

  if (age <= 15) {
    fat = Math.round((1.51 * bmi - 0.7 * age - 3.6 * gender + 1.4) * 100) / 100;
  } else {
    fat =
      Math.round((1.2 * bmi + 0.23 * age - 10.8 * gender - 5.4) * 100) / 100;
  }
  document.getElementById('fat').value = fat;
}
