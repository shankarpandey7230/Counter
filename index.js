const buttons = document.querySelectorAll('.btn');
const counter = document.getElementById('counter-value');
// console.log(buttons, counter);
let count = 0;

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const color = e.currentTarget.classList;
    if (color.contains('decrease')) {
      //   console.log(count);
      count--;
    } else if (color.contains('increase')) {
      //   console.log(count);
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      counter.style.color = 'green';
      document.body.style.backgroundColor = 'orangered';
    }
    if (count < 0) {
      counter.style.color = 'red';
      document.body.style.backgroundColor = 'green';
    }
    if (count === 0) {
      counter.style = '#222';
      document.body.style.backgroundColor = 'white';
    }

    counter.textContent = count;
  });
});
