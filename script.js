// JavaScript
console.log(document.getElementById('myColor').value);

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

function changeColor(){

    if (color.value === '#ffffff') {
        text.textContent = 'コード：' + color.value + '(white)';
     } else {
        text.textContent = 'コード：' + color.value;
      }
    // カラーコードを表示
      text.textContent = 'コード：'+ color.value;

      // 背景色を変更
  document.body.style.backgroundColor = color.value;
}

color.addEventListener('input', changeColor);

text.textContent = 'コード：' + color.value;