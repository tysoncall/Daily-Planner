console.log(moment());

$(document).ready(function() {
    //current date and time
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    console.log(m);
    console.log(currentTime);
    $("#currentDay").text("Today's Date: " + currentDate);
    //timeblocks -----
    //create render functions
    //render new event
    //create click functions
    //add event function
    var timeStamps = ["9:00am", "10:00am", "11:00am", "12:00am", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]

    for(var i = 0; i < timeStamps.length; i++){
        var makeEventDiv = $("<div class='col-2'></div>");
        var makeEventButton = $("<button>")
        var timeDiv = $("<div class='col-2'><p>" + timeStamps[i] + "</p></div>");
        var eventDiv = $("<div class='col-8'><input type='text' id='eventInput' data-value='" + timeStamps[i] + "'></div>");
        makeEventButton.addClass("event-button");
        makeEventButton.text("Save");
        
    
        
        $(".row").append(timeDiv);
        $(".row").append(eventDiv);
        $(".row").append(makeEventButton);
        console.log("making buttons");

        $(".event-button").on("click", function() {
            var buttonTime = $(".event-button").attr("value");
            event.preventDefault();
            var eventStorage = $("#eventInput").val().trim();
            localStorage.setItem(i = [0], eventStorage);
        });

        $(".event-button").on("click", function() {
            var buttonTime = $(".event-button").attr("value");
            event.preventDefault();
            var eventStorage = $("#eventInput").val().trim();
            localStorage.setItem(i = [1], eventStorage);
        });

    
    }

    
 });