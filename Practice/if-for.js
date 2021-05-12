'use strict'

// let i =  2;

// if(i === 1){console.log('真です');}

// ==の場合、左右を比較して、データ型が違っていても
// 一致するデータ型に変換後比較
// ===の場合、左右を比較して、データ型が違う時
// 等しくないと判断される（==より厳密にチェックされる）

function scoreCheck(){
    let testscore = document.getElementById('score').value
    if(testscore >= 80)
{document.write("合格です！おめでとうございます！"); 
}else if(testscore >= 70)
{document.write("惜しい！あと少し！");}
    else{document.write("不合格です！もうすこし勉強しよう！");}}



//     // []・・・「配列」このカッコの中に単語を入れカンマで区切るとデータベースのレコードのように扱える

// const nameList = ["田中","山田","林","佐藤"];

// for (let i = 0; i < nameList.length; i++)
// {console.log(`${i+1}. ${nameList[i]}`);}

// continue文
for(let i = 0; i < 10; i++)
    {if (i % 2 === 0) continue;
    console.log(i);} 

// break文
for(let i =1; i < 1000; i++)
{if(i > 10)break;
console.log(i);}