const quiz = [
  {
    question:"アニメ「東のエデン」のキャラクターデザインを担当した漫画家は次のうち誰？",
    answers:[
    "羽海野チカ",
    "尾田栄一郎",
    "諌山創",
    "冨樫義博"
    ],
    corrent:"羽海野チカ"
  },{
    question:"アニメ「東のエデン」のセレソンNo.4は次のうちだれ？",
    answers:[
    "滝沢朗",
    "物部大樹",
    "近藤勇誠",
    "火浦元"
    ],
    corrent:"近藤勇誠"
  },{
    question:"サークル<東のエデン>が作成した「東のエデン」とはどういったものか？",
    answers:[
    "仮想現実",
    "画像検索エンジン",
    "高性能AI",
    "文書作成自動ツール"
    ],
    corrent:"画像検索エンジン"
  },{
    question:"サークル<東のエデン>が通っている相慈院大学は現実のどの大学をモデルとしてるか？",
    answers:[
    "東京大学",
    "学習院大学",
    "早稲田大学",
    "明治大学"
    ],
    corrent:"早稲田大学"
  }
]

const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;
let quiz_num = 1;
const progressLength_Fixed = 100 / quizlength;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//progress barが増加する関数
const progress_inc = () => {
  progressLength = progressLength_Fixed * (quizIndex);
  document.getElementById("progress_length").style.width = progressLength + "%"
  document.getElementById("progress_length").textContent = Math.floor(progressLength) + "%" 
  //<div id='progress_length' style='width: 25%;'>の数値を修正する。
}

//クイズ文、選択肢生成
const setupQuiz = () => {
  document.getElementsByTagName('h4')[0].textContent = "問" + quiz_num ;
  //getElementsByTagName('h4')[0] 複数ある場合は[]で要素をしてする必要があり。
  quiz_num++;

  progress_inc();

  document.getElementById("js_question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
  //下記の繰り返し
  //$button[0].textContent = answers[0];
  //$button[1].textContent = answers[1];
  //$button[2].textContent = answers[2];
  //$button[3].textContent = answers[3];
}
setupQuiz();


//クリックしたときの動作
const clickHandler = (e) => {
    if(e.target.textContent === quiz[quizIndex].corrent){
    window.alert("正解")
    score++;

  }else{
    window.alert("不正解")
  }

  quizIndex++;

  if(quizIndex < quizlength){
    setupQuiz();
  }else{

    progress_inc();

    setTimeout(() => {
      window.alert("終了です。" + quizlength + "問中" + score + "問正解です。")
    }, 500)

  }
};


//各ボタンにクリックしたときの動作を追加
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
  clickHandler(e);
  });
  handlerIndex++;
};

//e.target
//イベントが発生した要素をさす。今回は押したボタンのこと。

//下記の繰り返し
//$button[0].addEventListener("click", () => {
//  if($button[0].textContent === corrent){
//  window.alert("正解")
//}else{
//  window.alert("不正解")
//}
//})
//$button[1].addEventListener("click", () => {
//  if($button[1].textContent === corrent){
//  window.alert("正解")
//}else{
//  window.alert("不正解")
//}
//})
//$button[2].addEventListener("click", () => {
//  if($button[2].textContent === corrent){
//  window.alert("正解")
//}else{
//  window.alert("不正解")
//}
//})
//$button[3].addEventListener("click", () => {
//  if($button[3].textContent === corrent){
//  window.alert("正解")
//}else{
//  window.alert("不正解")
//}
//})

