var bodys_nav = document.getElementsByClassName('bodys_fl-nav');
var nav_item = document.getElementsByClassName('view');
//导航路径
var body_URL = document.getElementsByClassName('body_URL')[0];
for(let i = 0; i< bodys_nav.length;i++){
	bodys_nav[i].idx = i;
	bodys_nav[i].onclick = function(){
		for(let i = 0; i< nav_item.length;i++){
			nav_item[i].style.display = 'none';
		}
		body_URL.innerHTML = bodys_nav[i].innerHTML;
		nav_item[i].style.display = 'block';
	}
}




