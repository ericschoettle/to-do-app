// back end
function CalendarEntry(calEvent, whom, location, date, duration) {
  this.calEvent = calEvent;
  this.withWhom = whom;
  this.location = location;
  this.date = date;
  this.howLong = duration;
}

CalendarEntry.prototype.strikeThrough = function() {
  return "<del>" + this.calEvent + "</del>"
}

// front end
$(document).ready(function() {
    var eventTable = {};
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var inputtedValues = [];
    var entryValues = ["event", "whom", "location", "date", "duration"];
    for (var i = 0; i < entryValues.length; i++) {
      inputtedValues.push($("input#" + entryValues[i] + "-input").val());
    }

    var newCalEvent = new CalendarEntry(inputtedValues[0], inputtedValues[1], inputtedValues[2], inputtedValues[3], inputtedValues[4]);

    // for (var i = 0; i<calEvent.length; i++){
    //   $(entryValues[i] + "-display").text(inputtedValues[i]);
    // }
    eventTable["'" + newCalEvent.calEvent + "'"] = newCalEvent;
    console.log(eventTable)
    $("div#complete-list").append("<input type='checkbox' name='completed' value='" + newCalEvent.calEvent + "'>" + newCalEvent.calEvent + "<br>");

    $("#events").last().click(function() {
      $("#show-events").show();
      $(".event-display").text(newCalEvent.calEvent);
      $(".whom-display").text(newCalEvent.whom);
      $(".location-display").text(newCalEvent.location);
      $(".date-display").text(newCalEvent.date);
      $(".duration-display").text(newCalEvent.duration);
    });

    $("button#completed").click(function() {
      $("input:checkbox[name=completed]:checked").each(function(){
        var completedTask = $(this).val();
        console.log(completedTask)
        var completedTaskInstance = eventTable[completedTask];
        console.log(completedTaskInstance)
      });
    });
  });
});
