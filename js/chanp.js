//获取左侧菜单nav
var bodys_nav = document.getElementsByClassName('bodys_fl-nav');
// 获取右侧对应菜单的内容元素
var nav_item = document.getElementsByClassName('view');
// 获取左侧隐藏的菜单
var bodys_fl_nav_hide = document.getElementsByClassName('bodys_fl_nav_hide')[0];
// 获取左侧隐藏的菜单个数
var bodys_fl_nav_hideRen = bodys_fl_nav_hide.getElementsByTagName('a');
//
var viewBox = document.getElementsByClassName('viewBox')[0];
// 获取对应左侧隐藏的菜单的内容元素
var viewBoxRen = viewBox.getElementsByTagName('div');
//导航路径
var body_URL = document.getElementsByClassName('body_URL')[0];
// 右侧title
var m_fr_title_name = document.getElementsByClassName('m-fr-title-name')[0];
// 左侧菜单栏title
var m_title = document.getElementsByClassName('m-title')[0];
var bodys_fl_nav_hideFlag = true;
for (let i = 0; i < bodys_nav.length; i++) {
	bodys_nav[i].idx = i;
	bodys_nav[i].onclick = function() {
		if (i != 1) {
			//nav下标等于1 ，只显示子nav
			for (let i = 0; i < nav_item.length; i++) {
				nav_item[i].style.display = 'none';
			}
			bodys_fl_nav_hide.style.display = 'none';
			bodys_fl_nav_hideFlag = true;
			m_title.innerHTML = this.innerHTML;
			m_fr_title_name.innerHTML = this.innerHTML;
			body_URL.innerHTML = this.innerHTML;
			nav_item[this.idx].style.display = 'block';
		} else {
			if (bodys_fl_nav_hideFlag) {
				bodys_fl_nav_hide.style.display = 'block';
				bodys_fl_nav_hideFlag = false;
			} else {
				bodys_fl_nav_hide.style.display = 'none';
				bodys_fl_nav_hideFlag = true;
			}
			m_fr_title_name.innerHTML = this.innerHTML;
			m_title.innerHTML = this.innerHTML;
			body_URL.innerHTML = this.innerHTML;
		}
	}
}
for(var i = 0;i < bodys_fl_nav_hideRen.length;i++){
	bodys_fl_nav_hideRen[i].idx = i;
	bodys_fl_nav_hideRen[i].onclick = function(){
		for (let i = 0; i < nav_item.length; i++) {
			nav_item[i].style.display = 'none';
		}
		viewBox.style.display = 'block';
		for(var x = 0;x < viewBoxRen.length;x++){
			viewBoxRen[x].style.display = 'none';
		}
		m_title.innerHTML = this.innerHTML;
		m_fr_title_name.innerHTML = this.innerHTML;
		body_URL.innerHTML = this.innerHTML;
		viewBoxRen[this.idx].style.display = 'block';
	}
}
