'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');

/**
 * 
 * @param {string} userName
 * @param {string} 
 */
function showDiagnosedResult(userName) {

    resultDivision.innerText = "";
    
    // headerDivision の作成
    const headerDivision = document.createElement('div');
    headerDivision.setAttribute('class', 'card-header bg-info');
    headerDivision.setAttribute('style', 'color:white;');
    headerDivision.innerText = '診断結果';

    // bodyDivision の作成
    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    const result = assessment(userName);
    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);
         
    const tweetButton = document.createElement('a');
    tweetButton.setAttribute('href', 'https://twitter.com/intent/tweet?button_hashtag=X&ref_src=twsrc%5Etfw');
    tweetButton.setAttribute('class', 'twitter-hashtag-button');
    tweetButton.setAttribute('data-show-count', 'false');
    tweetButton.setAttribute('data-text', '#あなたのいいところ');
    tweetButton.innerHTML = 'Tweet #あなたのいいところ';
    bodyDivision.appendChild(tweetButton);
    
    const tweetScript = document.createElement('script');
    tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetScript.setAttribute('charset', 'utf-8');
    tweetScript.setAttribute('data-text', 'あなたのいいところ');
    bodyDivision.appendChild(tweetScript);

    // resultDivision に Bootstrap のスタイルを適用する
    resultDivision.setAttribute('class', 'card d-flex justify-content-center');
    
    //incorporate headerDivision, tweetDivision and bodyDivision into the resultDivision
    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);
	  
 }
assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
      alert('please type your name into the text area.');
      return;
    }
    showDiagnosedResult(userName);
  }
)

userNameInput.addEventListener(
  'keydown',
  (event) => {
    if(event.code === 'Enter'){
     const userName = userNameInput.value;
     if(userName.length === 0){
      alert('please type your name into the text area.');
      return;
     } 
     showDiagnosedResult(userName);
    }
  }
)

const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */

function assessment(userName) {
  let sumOfCharCode = 0;
  for(let i = 0; i < userName.length; i++){
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll('###userName###', userName);
  return result;
}

function test() {
  console.log('診断結果の文章のテスト');

  console.log('太郎');
  console.assert(
    assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  console.log('次郎');
  console.assert(
    assessment('次郎') === '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  console.log('花子');
  console.assert(
    assessment('花子') === '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  console.log('診断結果の文章のテスト終了');
  console.log('同じ名前から、同じ結果を出力することのテスト');
  console.log('太郎');
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )
  console.log('次郎');
  console.assert(
    assessment('次郎') === assessment('次郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )
  console.log('同じ名前から、同じ結果を出力することのテスト終了');
}
　console.log('花子');
  console.assert(
    assessment('花子') === assessment('花子'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

test();
