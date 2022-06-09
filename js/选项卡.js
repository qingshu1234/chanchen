$('.m-fl-title ul li a').click(function () {
	var index = $('.m-fl-title ul li a').index(this)
	$('.view').each(function(i,item){
		$('.view').hide();
	})
	$('.view').eq(index).show();
})