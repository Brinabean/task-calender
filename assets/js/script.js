//dset tasks to an array
var tasks = [];
// var x = 0;



var localTasks = JSON.parse(localStorage.getItem("tasks"));
var storedTasks = document.querySelector("#myTextArea");

function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
    console.log(t);
 }


var displaytasks = function(localText) {
    var storedTasks = document.querySelector("textarea");
    storedTasks.textContent = localTasks;
    console.log(localTasks);

    //storedTasks.appendChild(localText);

};


//Display current date
var today = document.querySelector("#currentDay");
today.textContent = moment().format("dddd, MMMM Do YYYY");



//save tasks
$(".saveBtn").on("click", function() {
    var x = document.querySelector("textarea").value;
    tasks = x;
    //var input = document.getElementById("#myTextarea").textContent;
    tasks[x] = {
        text: x
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    x++;
});

var checklocal = function() {
    if (localStorage.getItem("tasks")) {
        for (i=0; i<localTasks.length; i++) {
            var localText = localTasks[i].text;
            displaytasks(localText);
        }
    }
};



//times
var time = moment().format('h');
console.log(time);

var checktime = function () {
    switch (time) {  
      case '9':
        $("#hournine").css({
            'background-color': '#ff6961',
            'color': 'white'
        });
        console.log('Oranges are $0.59 a pound.');
        break;
      case '10':
        $("#hournine").css({
            'background-color': '#d3d3d3',
            'color': 'white'
        });
        $("#hourten").css({
            'background-color': '#ff6961',
            'color': 'white'
        });
        break;
      case '11':
        $("#hournine").css({
            'background-color': '#d3d3d3',
            'color': 'white'
        });
        $("#hourten").css({
            'background-color': '#d3d3d3',
            'color': 'white'
        });
        $("#houreleven").css({
            'background-color': '#ff6961',
            'color': 'white'
        });
        break;
        case '12' :
            $("#hournine").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourten").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#houreleven").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwelve").css({
                'background-color': '#ff6961',
                'color': 'white'
            });
            break;
        case '1':
            $("#hournine").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourten").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#houreleven").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwelve").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourone").css({
                'background-color': '#ff6961',
                'color': 'white'
            });
            break;
            case '2':
            $("#hournine").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourten").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#houreleven").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwelve").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourone").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwo").css({
                'background-color': '#ff6961',
                'color': 'white'
            });
            break;
            case '3':
            $("#hournine").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourten").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#houreleven").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwelve").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourone").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwo").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourthree").css({
                'background-color': '#ff6961',
                'color': 'white'
            });
            break;
            case '4':
            $("#hournine").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourten").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#houreleven").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwelve").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourone").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwo").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourthree").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourfour").css({
                'background-color': '#ff6961',
                'color': 'white'
            });
            break;
            case '5':
            $("#hournine").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourten").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#houreleven").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwelve").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourone").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourtwo").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourthree").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourfour").css({
                'background-color': '#d3d3d3',
                'color': 'white'
            });
            $("#hourfive").css({
                'background-color': '#ff6961',
                'color': 'white'
            });
            break;
      default:
        $("textarea").css({
            'background-color': '#77dd77',
            'color': 'white',
            'border': '1px solid black'
        });
    }

    // var grey = document.querySelector(".past");
    // var red = document.querySelector(".present");
    // var green = document.querySelector(".future");
    // var calendarhour = document.querySelector(".hour");
    // calendarhour = [nine,ten,eleven,twelve,one,two,three,four,five];

    // if (time << calendarhour) {
    //     $('.hour').addClass('.future');
    // }

    // if (time >> calendarhour) {
    //     $('.hour').addClass('.past');
    // }
}

checklocal();

checktime();
