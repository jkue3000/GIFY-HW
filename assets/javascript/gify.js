// array for to push user input
var failArray = ["fishing fail", "army fail", "rapping fail"];

// need to make var for URL and parameters from the value of USER INPUT
var apiKey = "KjGZz4rr3h1EYc0PtGyiMVW9DXYclcWO";

var urlQuery = "https://api.giphy.com/v1/gifs/search?q=";





// on click BTN listener to add buttons 
$('#addFail').on('click', function(){
	// var to capture userinput value
	var userInput = $('#userSearchInput').val();
	
	// function to push userInput into failArray
	function pushUserInput(){
	failArray.push(userInput);
	};
	
	// creating the userInput value to be able to use it as a string
	$("userSearchInput").append('value=' + userInput);
	pushUserInput();
	console.log(failArray);

	// for loop to create a button for each 



	return false;

});

console.log(failArray);










// create buttons for each array (make a loop)

// on button click show 10 data-still GIFY

// when GIFY clicked make the GIFY data-animate
// send to the HTML