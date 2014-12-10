function generateSectionHtml(section) {

    var html = '<header> <h1>' + section /*put title here*/ + '</h1> <span class="logo"></span> </header> <div> <div class="col-left">' + "stuff" /*put left col stuff here */ + '</div><div class="col-right">' + '<div id="firstChart"></div><div id="another"></div><script></script>' /*put right col stuff here */ + '</div></div>'
    return html;
}


function generateStudentHtml(name) {

    var html = '<header> <h1>' + name /*put title here*/ + '</h1> <span class="logo"></span> </header> <div> <div class="col-left">' + "<h3>" + name + "'s workout history</h3>" /*put left col stuff here */+ generateHtml(tableData) + '</div><div class="col-right">' + "more stuff" /*put right col stuff here */ + '</div></div>'
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