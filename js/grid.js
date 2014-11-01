// Create initial canvas to draw on. 

var drawCanvas = function(number){
	var size = 500 / number;
	for (var i = 1; i <= number * number; i++){
		var divString = "<div class='square'></div>";
		$("#main").prepend(divString);
	}
	$(".square").hover(function(){
	$(this).css("background-color", "#008cb0");
	});
	$(".square").height(size);
	$(".square").css("width", size);
};

drawCanvas(16);

// Change the background color of squares when hovered over.

$("button").on("click", function(){
	$(".square").css("background-color", "gray");
	var columns = prompt("How many pixels do you want in your canvas: Choose between 1 and 100.");
	$(".square").remove();
	drawCanvas(columns);
});

// TODO: Create a popup form with the options from choices and add to event listener