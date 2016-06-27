$(document).ready(function(){

	$("form").submit(function(){
		$("#contacts").append("<div class='contact'><h1>" + $("#firstname").val() + " " 
			+ $("#lastname").val() + "</h1><p>Click for Description!</p><p class='hide'>" + 
			$("#description").val() + "</p></div>");
		return false;
	});

	$(document).on("click", ".contact", function(){
		$(this).children(".hide").css("display", "block");
		$(this).children(":nth-child(1)").css("display", "none");
		$(this).children(":nth-child(2)").css("display", "none");
	});
});