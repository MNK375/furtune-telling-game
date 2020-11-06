
const btn = document.getElementById('btn');
const result= document.getElementById('result');

btn.addEventListener('click', () => {
  const num =Math.random();

  if (num < 0.2 ){
    result.textContent = 'ラッキー';
  } else if  (num < 0.5) {
    result.textContent = 'まぁまぁ';
  } else if  (num < 0.8 )  {
    result.textContent ='気を付けて';
  } else { 
    result.textContent='さいあく～';
  }

});