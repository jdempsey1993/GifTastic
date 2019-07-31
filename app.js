// Array for gif search items

var topics = ["cat","dog","bird","snake","hamster","spider","turtle","guinea pig","pig","fish"]

    //displayGIF function to display content within HTMl

    function displayGIF () {
        var gif =$(this).attr("data-name")
        var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=s9PHSc6roItbCQkE3ggLzILRDRtK8U5D"
    }
    console.log(displayGIF)

        //AJAX call for the buttons clicked

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response)