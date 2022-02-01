let keys = document.getElementsByClassName('key');
let input = document.getElementById('input-box');
for (let k = 0; k < keys.length; k++) {
  const key = keys[k];
  key.onclick = () => {
    if (key.innerHTML == '=') {
      input.value = eval(input.value);
    } else if (key.innerHTML == 'C') {
      input.value = '';
    } else {
      input.value += key.innerHTML;
    }
  };
}
