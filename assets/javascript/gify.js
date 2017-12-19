// array for to push user input
var failArray = ["fishing fail", "army fail", "rapping fail"];

var userInputGlobal = $('#userSearchInput').val().trim();




// function to make buttons
function btnCreation() {

	// clearing html so my buttons can be reset again
	$('.holdBtn').html('');

	// for loop function to create a button for each 
	for (i=0; i<failArray.length; i++){
		
		// creating buttons dynamiclally
		var addSearchBtn = $('<button id="' + failArray[i] + ' searchClick' +'">' + failArray[i] + '</button>');

		// adding data attr to the searchClick id
		$('#searchClick').attr('data-fail'+ failArray[i]);

		// showing buttons to the class
		$('.holdBtn').append(addSearchBtn);
	}
};
btnCreation();


// on click BTN listener to add buttons 
$('#addFail').on('click', function(){
	// var to capture userinput value
	var userInputLocal = $('#userSearchInput').val().trim();
	
	// function to push userInput into failArray
	function pushUserInput(){
		failArray.push(userInputLocal);
	};
	
	// creating the userInput value to be able to use it as a string
	$("userSearchInput").append('value=' + userInputLocal);

	// conditional to push user input into array or check if a string
	if (userInputLocal == ""){
		alert("Oops... Search a Fail!");
	} else{
		pushUserInput();
		$('#userSearchInput').val("");
		btnCreation();
		console.log(failArray);
	}

	// so the page won't reset
	return false;

});

 'Change the button to button up above
$('button').on('click', function(){
'call the ajax and link to the api correctlly
	console.log('fdjskfhdkjs');

	var failSearch = $(this).attr("data-fail");

	var apiKey = "&limit=10&rating=G&api_key=KjGZz4rr3h1EYc0PtGyiMVW9DXYclcWO";
	var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + failSearch + apiKey;

});