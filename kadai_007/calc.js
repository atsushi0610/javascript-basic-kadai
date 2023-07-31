// 変数numの宣言
let num = 15

// 変数numが15の倍数であれば「3と5の倍数です」と表示する
if (num % 15 === 0) {
  console.log('3と5の倍数です');
}
// 変数numの値が5であれば「5の倍数です」と表示する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
// 変数numの値が3であれば「3の倍数です」と表示する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
//それ以外の時は変数numを出力する
else {
  console.log(num);
}