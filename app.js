// Array for gif search items

var topics = ["cat","dog","bird","snake","hamster","spider","turtle","guinea pig","pig","fish"]

//Adding an onclick listener to buttons
$("button").on("click",function()   {
    // Data animal property
    
    var animal = $(this).attr("data-animal")

    //queryURL 
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=s9PHSc6roItbCQkE3ggLzILRDRtK8U5D&limit=10"
   
    //AJAX call for the buttons clicked

        $.ajax({
            url: queryURL,
            method: "GET"
          }
          //Following data request
          ).then(function(response)     {
              console.log(queryURL)
          }

        }