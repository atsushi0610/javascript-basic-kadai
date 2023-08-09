// btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
  document.getElementById('text').innerHTML = 'ボタンをクリックしました'
});