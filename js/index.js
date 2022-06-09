var banner = document.getElementsByClassName('banner')[0];
var banner_item = banner.getElementsByTagName('li');
var timer;
var timeNum = 0;
//首页banner图转化事件
for (let i = 0; i < banner_item.length; i++) {
	banner_item[i].idx = i;
	banner_item[i].onmouseover = function() {
		if (i == 0) {
			banner.style.backgroundImage = "url(images/banner.jpg)";
			timeNum = 0;
		} else if (i == 1) {
			banner.style.backgroundImage = "url(images/banner1.jpg)";
			timeNum = 5;
		} else {
			banner.style.backgroundImage = "url(images/banner2.jpg)";
			timeNum = 10
		}
		paiTa(banner_item)
		this.className = 'b_li_on';
	}
}
// 首页banner图自动切换
timer = setInterval(bannerAuto, 1000);
function bannerAuto() {
	timeNum++;
	paiTa(banner_item);
	if (timeNum < 5) {
		banner.style.backgroundImage = "url(images/banner.jpg)";
		banner_item[0].className = 'b_li_on';
	} else if (timeNum < 10) {
		banner.style.backgroundImage = "url(images/banner1.jpg)";
		banner_item[1].className = 'b_li_on';
	} else if (timeNum < 15) {
		banner.style.backgroundImage = "url(images/banner2.jpg)";
		banner_item[2].className = 'b_li_on';
		if (timeNum == 14) {
			timeNum = 0;
		}
	}
}
//轮播图导航点排他函数
function paiTa(ele){
	for (var i = 0; i < ele.length; i++) {
		ele[i].className = '';
	}
}

// <--- body轮播图 --->
var b_banner = document.getElementsByClassName('n-fl-banner')[0];
var b_banneritem = b_banner.getElementsByTagName('li');
//轮播图导航点
var n_fl_box = document.getElementsByClassName('n-fl-box')[0];
var n_fl_item = n_fl_box.getElementsByTagName('li');
var timerBanner;
// 轮播图单个的宽
var b_b_itemWidth = b_banneritem[0].offsetWidth;
// body轮播图自动切换
timerBanner = setInterval(b_bannerAuto, 3000);
function b_bannerAuto() {
	var X = b_banner.offsetLeft;
	var idx = X / b_b_itemWidth * -1 + 1;
	paiTa(n_fl_item);
	if ((X / b_b_itemWidth) <= -(b_banneritem.length - 1)) {
		b_banner.style.left = '0px';
		n_fl_item[0].className = 'n-fl-item-on';
	} else {
		if (idx == 1) {
			n_fl_item[1].className = 'n-fl-item-on';
		} else if (idx == 2) {
			n_fl_item[2].className = 'n-fl-item-on';
		}
		b_banner.style.left = b_banner.offsetLeft - b_b_itemWidth + 'px';
	}
}
// body banner图转化事件
for(var i = 0;i < n_fl_item.length;i++){
	n_fl_item[i].idx = [i];
	n_fl_item[i].onmouseover = function(){
		b_banner.style.left = -this.idx * b_b_itemWidth + 'px';
		paiTa(n_fl_item);
		this.className = 'n-fl-item-on';
	}
}
//无缝滚动
var chanp_box = document.getElementsByClassName('chanp-box')[0];
var lilength = chanp_box.getElementsByTagName('li').length;
chanp_box.innerHTML += chanp_box.innerHTML;
var x = 0;
var chanptimer;
function auto(){
	x -= 0.3;
	//330 = li的width + margin
	if(x <= -(330 * lilength)){
		x = 0;
	}
	chanp_box.style.left = x + 'px';
}
chanptimer = setInterval(auto,5);
chanp_box.onmouseover = function(){
	clearInterval(chanptimer);
}
chanp_box.onmouseout = function(){
	chanptimer = setInterval(auto,5);
}
