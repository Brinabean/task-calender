//Display current date
var today = document.querySelector("#currentDay");
today.textContent = moment().format("dddd, MMMM Do YYYY");

//create tasks
var tasks = $(".description").on("click",function() {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

var loadTasks = function() {
    tasks =localStorage.getItem("tasks");
}

$(".saveBtn").on("click",function() {
    localStorage.setItem("textInput");
});


//times
var time = moment().format('h');

console.log(time);

var nine = document.querySelector("#hourten");
ten = "10";

var nine = document.querySelector("#houreleven");
eleven = "11";

var nine = document.querySelector("#hourtwelve");
twelve = "12";

var nine = document.querySelector("#hourone");
one = "13";

var nine = document.querySelector("#hourtwo");
two = "14";

var nine = document.querySelector("#hourthree");
three = "15";

var nine = document.querySelector("#hourfour");
four = "16";

var nine = document.querySelector("#hourfive");
five = "17";



