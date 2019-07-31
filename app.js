// Array for gif search items

var topics = ["cat","dog","bird","snake","hamster","spider","turtle","guinea pig","pig","fish"]

//Adding an onclick listener to buttons
$("button").on("click", function()   {
    
    // Data animal property
    
    var animal = $(this).attr("data-animal")

    //queryURL 
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=s9PHSc6roItbCQkE3ggLzILRDRtK8U5D&limit=10"
   
    //AJAX call for the buttons clicked

        $.ajax({
            url: queryURL,
            method: "GET"
          })
          
          .then(function(response)     {
              console.log(queryURL)

              console.log(response)

              //store AJAX request data
              
              var results = response.data

              // Loop for each result

              for (var i = 0; i <results.length; i++) {

                // Creation of div tag
                var animalDiv = $("<div>")

                //P tag creation for rating

                var p = $("<p>").text("Rating " + results[i].rating)
                
                // Storing the image gif tag

                var animalImage = $("<img>")

                //Setting img src from result items

                animalImage.attr("src,", results[i].images.fixed_height.url)

                //Append paragraph and image tag to Div

                $("#gifHere").prepend(animalDiv)

            
            }

          })

        })

        // Onclick element to pause gif

        $(".gif").on("click",function(){
            
            //Set value of data-animate
            var state = $(this).attr("data-state")

            //If clicked switch between still and animate

            if (state === "still") {
                
                $(this).attr("src",$(this).attr("data-animate"))

                $(this).attr("data-state","animate")

            } else {

                $(this).attr("src", $(this).attr("data-still"))

                $(this).attr("data-state", "still")
            }    
        
        }
    )

