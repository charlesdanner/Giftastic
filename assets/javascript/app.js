$(document).ready(function () {

var apiKey = "xpcO9JeJ5xXfr8vOQiZXgQKOetu5FX4C"
var topics = ["Arya", "Sansa", "Game of Thrones", "Jon Snow", "Ned", "Cersei", 
                "Jaime", "Joffrey", "The Hound", "The Mountain", "Hodor", "Daenarys", "Dragons"];

function populateButtons(){
    $("#buttons").empty();

    for(var i = 0; i < topics.length; i++){
        
        var newGifButton = $("<button>").text(topics[i]);
        newGifButton.addClass("gif-btn");
        newGifButton.attr("data-name")
        $("#buttons").append(newGifButton);
    }
}




populateButtons();


})