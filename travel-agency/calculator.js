// Связка days и nights
$('#days').on('input', function() {
  let value = parseInt(event.target.value);
  if (Number.isFinite(value)) {
    nights.value = value - 1;
  }
});

$('#nights').on('input', function() {
  let value = parseInt(event.target.value);
  if (Number.isFinite(value)) {
    days.value = value + 1;
  }
});

// Калькулятор
function calc() {
  let country = document.getElementById('country');
  let count_val = country.options[country.selectedIndex].value;

  let days = document.getElementById('days').value
  let days_val = Number(days);

  let nights = document.getElementById('nights').value; 
  let nights_val = Number(nights) / 2;
  
  let people = document.getElementById('people').value;
  let people_val = Number(people);
  
  let result = count_val * (days_val + nights_val) * people_val;

  document.getElementById('result').innerHTML = result;
};