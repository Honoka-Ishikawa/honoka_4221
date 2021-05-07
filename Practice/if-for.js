'use strict'

// let i =  2;

// if(i === 1){console.log('真です');}

// ==の場合、左右を比較して、データ型が違っていても
// 一致するデータ型に変換後比較
// ===の場合、左右を比較して、データ型が違う時
// 等しくないと判断される（==より厳密にチェックされる）

let testscore = 60;

if(testscore >= 80)
{document.write("合格です！おめでとうございます！");
}else if(testscore >= 70)
{document.write("惜しい！あと少し！");}
    else{document.write("不合格です！もうすこし勉強しよう！");}