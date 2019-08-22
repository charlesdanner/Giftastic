$(document).ready(function () {


    var topics = ["Arya", "Sansa", "Jon Snow", "Ned Stark", "Cersei",
        "Jaime Lannister", "Joffrey", "Hodor", "Daenarys", "Bran Stark"];


    function populateButtons() {
        $("#buttons").empty();

        for (var i = 0; i < topics.length; i++) {

            var newGifButton = $("<button>").text(topics[i]);
            newGifButton.addClass("gif-btn");
            newGifButton.attr("data-name", topics[i]);
            $("#buttons").append(newGifButton);
        }
    }

    

    $("#buttons").on("click", "button", function () {   //this is short hand for saying for any button that is added onto the DOM at any point inside this div, do **this**
        // Grabbing and storing the data-name property value from the button
        var character = $(this).attr("data-name");
        $(this).css({"color": "white", "background-color": "black"})
        console.log($(this))
        // Constructing a queryURL using the character name
        var apiKey = "&api_key=xpcO9JeJ5xXfr8vOQiZXgQKOetu5FX4C";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=game+of+thrones+" + character + apiKey;

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;
                console.log(response.data);

                // Looping through each result item
                for (var i = 0; i < 10; i++) {


                    // Creating and storing a div tag
                    var characterDiv = $("<div>");
                    characterDiv.addClass("characterDiv");

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating.toUpperCase());

                    // Creating and storing an image tag
                    var characterImage = $("<img class='characterImage'>");
                    characterImage.attr("data-still", results[i].images.fixed_height_still.url);
                    characterImage.attr("data-animate", results[i].images.fixed_height.url);
                    characterImage.attr("data-state", "still");

                    // Setting the src attribute of the image to a property pulled off the result item
                    characterImage.attr("src", results[i].images.fixed_height_still.url);

                    // Appending the paragraph and image tag to the characterDiv

                    characterDiv.append(characterImage);
                    characterDiv.append(p);

                    // Prependng the characterDiv to the HTML page in the "#new-gifs" div
                    $("#new-gifs").prepend(characterDiv);

                }
            });
    });

    $("#add-gif").on("click", function (event) {
        event.preventDefault()
        for (i = 0; i < topics.length; i++) {
            if ($("#gif-input").val().toLowerCase().trim() === topics[i].toLowerCase()) {
                alert("That button already exists");
                $("#gif-input").val('');
                return;
            }
        }
        if ($("#gif-input").val().trim() !== null && $("#gif-input").val().trim() !== "") {
            $("#buttons").empty();
            var inputCharacter = $("#gif-input").val();
            topics.push(inputCharacter);
            $('#gif-input').val('');
            populateButtons();


        }
    })

    $("#new-gifs").on("click", "img", function () {
        var state = $(this).attr("data-state");
        console.log($(this));

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })










    populateButtons();
   




})

