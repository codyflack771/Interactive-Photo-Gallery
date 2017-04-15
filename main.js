$(document).ready(function() {
	var current;
	$(".gallery img").click(function() {
		current = $(this);
		var image = $(this).attr("src");
		var caption = $(this).attr("alt");
		$("#content img").remove();
		$("#content p").remove();
		$("#content").append("<img src='" + image + "' >");
		$("#content").append("<p>" + caption + "</p>");
		$("#overlay").show();
		$("input").hide();
		$("#back").show();
		$("#next").show();
	});
	$("#next").click(function() {
		if ( $(current).hasClass("last")) {
			
		} else {
			current = $(current).parent().next("li").children("img");
			var next = $(current).attr("src");
			var nextCaption = $(current).attr("alt");
			$("#content img").remove();
			$("#content p").remove();
			$("#content").append("<img src='" + next + "' >");
			$("#content").append("<p>" + nextCaption + "</p>");
		}
	});

	$("#back").click(function() {
		if ( $(current).hasClass("first")) {
			
		} else {
			current = $(current).parent().prev("li").children("img");
			var next = $(current).attr("src");
			var nextCaption = $(current).attr("alt");
			$("#content img").remove();
			$("#content p").remove();
			$("#content").append("<img src='" + next + "' >");
			$("#content").append("<p>" + nextCaption + "</p>");
		}
	});

	$("#overlay").click(function() {
		$("#overlay").hide();
		$("input").show();
		$("#back").hide();
		$("#next").hide();
	});
	
	$("input").keyup(function() {
	    var input, filter, ul, li, a, i;
	    input = document.getElementById('input');
	    filter = input.value.toUpperCase();
	    ul = document.getElementById("gallery");
	    li = ul.getElementsByTagName('li');

	    for (i = 0; i < li.length; i++) {
	        a = li[i].getElementsByTagName("p")[0];
	        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
	            $(li[i]).show();
	        } else {
	        	$(li[i]).hide();
	        }
	    }
	});
});