# Giftastic

This is a simple Gif generator that is Game of Thrones themed. It uses the Giphy API in order to generate gifs based on the user's input. The user can type the name of a character, place, event, etc into the text input box and create a new button. Clicking either that button or one of the buttons that are already on the screen as examples will generate 10 gifs from the Giphy API. They all will be still and will only begin moving after they are clicked.

## Prerequisites

There are no prerequisites to using this application. It is run on the browser.

## Under the Hood

The GIPHY API is being accessed by using an AJAX call in Java Script. The query is being populated based on the contents within the button that the user presses. The Query has game of thrones preceding the user's input being read so that the gifs are 99% game of thrones related. The buttons are being populated by clearing out the div that they are contained in and storing the user inputs as new items in the array. From contents of the array are being accessed by a for loop and creating buttons with their contents being what is inside the array. The button's ID is equal to their HTML contents. The ID is accessed on click to generate the search query that the user is expecting. The data recieved is being parsed and stored in memory in divs that contain the still image, rating, and title. From there the images can be clicked in order to make them start moving (as GIFs normally do). This is done by assigning different data-states to each picture. If the data-state is still, then Java Script will remove the still and replace it with the gif on-click, and vice versa.

### Link to Live Site:
[Live Version] (https://charlesdanner.github.io/Giftastic/)
