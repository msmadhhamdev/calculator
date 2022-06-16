let keys = document.getElementsByClassName('key');
let input = document.getElementById('input-box');
for (let k = 0; k < keys.length; k++) {
  const key = keys[k];
  key.onclick = () => {
    if (key.innerHTML == '=') {
      input.value = eval(input.value);
      input.focus();
    } else if (key.innerHTML == 'C') {
      input.value = '';
      input.focus()
    } else {
      input.value += key.innerHTML;
      input.focus();
    }
  }
}
const calc = document.querySelector("form");
calc.addEventListener("submit", (event) => {
  event.preventDefault();
  input.value = eval(input.value);
})