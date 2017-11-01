$(function() {
	$(window).scroll(function()  {
		var  items=$("#main").find(".item");
		var menu=$("#menu");
		var top=$(document).scrollTop();        //滚动条滚动的长度
		var currentId="";                                   //滚动条现在所在位置的item id
		items.each(function(){          //each代表对所有items进行后面函数的操作
			var m=$(this);
			if(top>m.offset().top-300) {                        //判断到了哪个位置
		             //注意：m.offset().top代表每一个item的顶部位置
				currentId="#"+m.attr("id");                 //把#item1 即对应的的位置的ID赋给currentld
			}else{
				return false;                                   //若已经到那个位置，已经把对应的的位置的ID赋给currentld 就不用继续判断了
			}
		})

		var currentLink=menu.find(".current");                    
		if (currentId && currentLink.attr("href")!=currentId) {    //currentld代表空的还在第一楼，currentLink.attr("href") != currentId代表 在当前这楼
			currentLink.removeClass("current");                   //删除类名
			menu.find("[href=" +currentId+"]").addClass("current")     //把和currentld对应的href的元素添加类名
		};


	})
})