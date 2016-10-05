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
		var search = $("input").val();
		$(".galleryItem").hide();
		$(".galleryItem").each(function() {
			var keyword = $(this).attr("alt");
			if ( search == keyword) {
				$(this).show();
			} else if (search == "") {
				$(".galleryItem").show();
			}
		});
	});
});