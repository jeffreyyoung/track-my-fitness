function generateSectionHtml(section) {

    var html = '<header> <h1>' + section + " class info" /*put title here*/ + '</h1> <span class="logo"></span> </header> <div> <div class="col-left tables">' + "<table id=\"ranksTable\"> <tr> <th id=\"rank\">Rank</th> <th id=\"name\">Name</th> <th id=\"lift1\"> Bench</th> <th id=\"lift2\"> Squat</th> <th id=\"lift3\"> Curls</th> <th id=\"lift4\"> Lats</th> </tr> <tr> <td id=\"rank\">1</td> <td id=\"name\">Hulk</td> <td id=\"lift1\"> 500</td> <td id=\"lift2\"> 250 </td> <td id=\"lift3\"> 240</td> <td id=\"lift4\"> 230</td> </tr> <tr> <td id=\"rank\">2</td> <td id=\"name\">Captain America</td> <td id=\"lbs\">200</td> <td id=\"lift1\"> 240</td> <td id=\"lift2\"> 230 </td> <td id=\"lift3\"> 220</td> </tr> <tr> <td id=\"rank\">3</td> <td id=\"name\">Christian Carnley</td> <td id=\"lbs\">180</td> <td id=\"lift1\"> 230</td> <td id=\"lift2\"> 220 </td> <td id=\"lift3\"> 210</td> </tr> <tr> <td id=\"rank\">4</td> <td id=\"name\">Alec Fullmer</td> <td id=\"lbs\">170</td> <td id=\"lift1\"> 220</td> <td id=\"lift2\"> 210 </td> <td id=\"lift3\"> 200</td> </tr> </table>" /*put left col stuff here */ + '</div><div class="col-right">' + '<div id="firstChart"></div><div id="another"></div>' /*put right col stuff here */ + '</div></div>'
    return html;
}


function generateStudentHtml(name) {

    var html = '<header> <h1>' + name /*put title here*/ + '</h1> <span class="logo"></span> </header> <div> <div class="col-left">' /*put left col stuff here */+ generateHtml(tableData) + '</div><div class="col-right">' + '<div id="firstChart"></div><div id="another"></div>' /*put right col stuff here */ + '</div></div>'
    return html;

}






function buildTableData() {
    var data = []
    for (var i = 0; i < 10; i++) {
        var workout = {}
        workout.date = "DATE"
        workout.editMode = false;
        workout.exercises = []
        for (var j = 0; j < 4; j++) {
            var exercise = {}
            exercise.name = "Bench"
            if (j == 0) {
                exercise.name = "bench"
            }
            if (j == 1) {
                exercise.name = "squat"
            }
            if (j == 2) {
                exercise.name = "curls"
            }
            if (j == 3) {
                exercise.name = "lats"
            }
            exercise.sets = 4
            exercise.reps = 4
            exercise.weight = 20
            workout.exercises.push(exercise)
        }
        data.push(workout)
    }
    return data
}

var tableData = buildTableData()




function generateHtml(data) {
    var html = "<div class='tables'>"
    for (var i = 0; i < data.length; i++) {
        var workout = data[i]
        if (workout.editMode)
            html += generateEditableWorkoutHtml(workout, i)
        else
            html += generateWorkoutHtml(workout, i)
    }
    html += "</div>"
    return html
}

function generateWorkoutHtml(workout, i) {
    var html = ""
    html += "<table id = 'table-" + i + "'>"
    html += "<caption>" + workout.date + "<span class='edit-icon' data-index = '" + i + "'></span></caption>"
    html += "<tr><th>Exercise</th><th>Sets</th><th>Reps</th><th>Weight</th></tr>"
    for (var i = 0; i < workout.exercises.length; i++) {
        var exercise = workout.exercises[i]
        html += "<tr>"
        html += "<td>" + exercise.name + "</td><td>" + exercise.sets + "</td><td>" + exercise.reps + "</td><td>" + exercise.weight + "</td>"
        html += "</tr>"
    }
    html += "</table>"

    return html;
}