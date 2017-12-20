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
		var addSearchBtn = $('<button>');
		var label = $('<label>');
		label.append(failArray[i]);
		addSearchBtn.attr('class', "searchClick");
		addSearchBtn.attr('data-name', failArray[i]);
		addSearchBtn.attr('data-state', "still");
		addSearchBtn.append(label);

		// adding data attr to the searchClick id
		$('.searchClick').attr('data-fail'+ failArray[i]);

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

 // 'Change the button to button up above
$("div").on("click", "button", function(event){
    
    event.preventDefault();
    console.log( $( this ).text() );

    // vars to call inside the AJAX
	var failSearch = $(this).attr("data-name");
	var apiKey = "&limit=10&rating=G&api_key=KjGZz4rr3h1EYc0PtGyiMVW9DXYclcWO";
	var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + failSearch + apiKey;

	// AJAX to get GIFY API
	$.ajax({
        url: queryUrl,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

    	console.log("------------------------------------");
    	console.log("URL: " + queryUrl);
    	console.log("------------------------------------");

		// var to store GIFY data
      	var gifData = response.data;
      	// var to get gif Rating
      	var gifRating = response.data[0].rating;

      	console.log(gifRating);
"create divs for each gif and add data still and animate attr to them
'onclick on the gif animate and still make create conditional to make them move
'replace the html div where the gifs go once the a new button is clicked
      });

});