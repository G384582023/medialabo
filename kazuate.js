// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="number"]');
  let yoso = Number(i.value);
  let a=document.querySelector('span#answer');
  a.textContent=yoso;

  // 課題3-1: 正解判定する
  kaisu=kaisu+1;
  let b=document.querySelector('span#kaisu');
  b.textContent=kaisu; 
  if(kaisu<4){
    if (kotae === yoso){
        console.log(kaisu+'回目の予想：'+yoso);
        console.log('正解です・おめでとう！');
        kaisu=kaisu+2;
        let b=document.querySelector('p#result');
        b.textContent=('正解です.おめでとう！');
    }
    else if(kaisu === 3){
        console.log(kaisu+'回目の予想；'+yoso);
        console.log('まちがい．残念でした答えは '+ kotae +' です．');
        let a=document.querySelector('span#kaisu');
        a.textContent=kaisu; 
        let b=document.querySelector('p#result');
        b.textContent=('まちがい．残念でした答えは '+ kotae +' です．');
    }
    else if(kotae < yoso){
        console.log(kaisu+'回目の予想；'+yoso);
        console.log('まちがい.答えはもっと小さいですよ');
        let a=document.querySelector('span#kaisu');
        a.textContent=kaisu; 
        let b=document.querySelector('p#result');
        b.textContent=('まちがい.答えはもっと小さいですよ');
    }
    else if(kotae > yoso){
        console.log(kaisu+'回目の予想；'+yoso);
        console.log('まちがい.答えはもっと大きいですよ');
        let a=document.querySelector('span#kaisu');
        a.textContent=kaisu; 
        let b=document.querySelector('p#result');
        b.textContent=('まちがい.答えはもっと大きいですよ');
    }
}
else{
    console.log(kaisu+'回目の予想：'+yoso);
    console.log('答えは'+kotae+'でした.すでにゲームは終わっていますよ');
    let a=document.querySelector('span#kaisu');
    a.textContent=kaisu; 
    let b=document.querySelector('p#result');
    b.textContent=('答えは')+kotae+('でした.すでにゲームは終わっています');
}
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}