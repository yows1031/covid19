'use strict'

// ループ処理を子要素に付けるためのキャスト
const main = document.getElementById('main');
const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');

// frameフォルダにあるhtmlを配列にする
const pv = [
    {src:"frame/covid.html", addClass:'covid'},
    {src:"frame/statistics.html", addClass:'statistics'},
]

const pv1 = [
    {src:"frame/prevention.html", addClass:'prevention'},
    {src:"frame/attention.html", addClass:'attention'},
]

const pv2 = [
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

function frame1() {
    pv1.forEach((value) => {
        const div = document.createElement('div');
        div.classList.add('colum');
        const iframe = document.createElement('iframe');
        iframe.classList.add(value.addClass)
        iframe.src = value.src;
        iframe.scrolling = 'no';
        iframe.frameBorder = "0";
        div.appendChild(iframe);
        main1.appendChild(div);
    });
}
frame1()

function frame2() {
    pv2.forEach((value) => {
        const div = document.createElement('div');
        div.classList.add('colum');
        const iframe = document.createElement('iframe');
        iframe.classList.add(value.addClass)
        iframe.src = value.src;
        iframe.scrolling = 'no';
        iframe.frameBorder = "0";
        div.appendChild(iframe);
        main2.appendChild(div);
    });
}
frame2()