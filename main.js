'use strict'

// ループ処理を子要素に付けるためのキャスト
const main = document.getElementById('main');

// frameフォルダにあるhtmlを配列にする
const pv = [
    {src:"frame/covid.html", addClass:'covid'},
    {src:"frame/statistics.html", addClass:'statistics'},
    {src:"frame/prevention.html", addClass:'prevention'},
    {src:"frame/attention.html", addClass:'attention'},
    {src:"frame/words.html", addClass:'words'},
    {src:"frame/sample.html", addClass:'sam5'},
]

// 配列に対してループ処理をすることでカラム表示を作る
function frame() {
    pv.forEach((value) => {
        const div = document.createElement('div');
        div.classList.add('colum');
        const iframe = document.createElement('iframe');
        iframe.classList.add(value.addClass)
        iframe.src = value.src;
        iframe.scrolling = 'no';
        iframe.frameBorder = "0";
        div.appendChild(iframe);
        main.appendChild(div);
    });
}
frame()