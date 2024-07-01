//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2=document.querySelector('h2#ex42');
let p=document.createElement('p');
p.textContent='写真表と都市の緯度経度のページです';
h2.insertAdjacentElement('afterend',p);
p.style.textEmphasis='sesame green';

// 練習4-3 写真表作成プログラム
let div=document.querySelector('div#phototable');
let p1=document.createElement('p');
let p2=document.createElement('p');
let p3=document.createElement('p');
let img=document.createElement('img');
let img2=document.createElement('img');
let img3=document.createElement('img');
img.setAttribute('src','taro.png');
img2.setAttribute('src','jiro.png');
img3.setAttribute('src','hanako.png');
p1.insertAdjacentElement('beforeend',img);
p2.insertAdjacentElement('beforeend',img2);
p3.insertAdjacentElement('beforeend',img3);
div.insertAdjacentElement('beforeend',p1);
div.insertAdjacentElement('beforeend',p2);
div.insertAdjacentElement('beforeend',p3);
// 練習4-4 箇条書き削除プログラム
let l=document.querySelectorAll('li');
l[0].remove();
l[1].remove();
l[2].remove();

// 練習4-5 箇条書き追加プログラム
let ul=document.querySelector('ul#location');
let li=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li);
li.textContent=data[0].name+'...緯度'+data[0].lat+',経度'+data[0].lng;
let li1=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li1);
li1.textContent=data[1].name+'...緯度'+data[1].lat+',経度'+data[1].lng;
let li2=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li2);
li2.textContent=data[2].name+'...緯度'+data[2].lat+',経度'+data[2].lng;
let li3=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li3);
li3.textContent=data[3].name+'...緯度'+data[3].lat+',経度'+data[3].lng;
let li4=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li4);
li4.textContent=data[4].name+'...緯度'+data[4].lat+',経度'+data[4].lng;
let li5=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li5);
li5.textContent=data[5].name+'...緯度'+data[5].lat+',経度'+data[5].lng;
let li6=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li6);
li6.textContent=data[6].name+'...緯度'+data[6].lat+',経度'+data[6].lng;
let li7=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li7);
li7.textContent=data[7].name+'...緯度'+data[7].lat+',経度'+data[7].lng;
let li8=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li8);
li8.textContent=data[8].name+'...緯度'+data[0].lat+',経度'+data[8].lng;
let li9=document.createElement('li'); 
ul.insertAdjacentElement('beforeend',li9);
li9.textContent=data[9].name+'...緯度'+data[9].lat+',経度'+data[9].lng;

