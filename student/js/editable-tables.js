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

function repaint() {
    var html = generateHtml(tableData)
    document.getElementById('workouts').innerHTML = html
    var $editBtns = document.getElementsByClassName('edit-icon')
    console.log($editBtns)
    for (var i = 0; i < $editBtns.length; i++){
        var editBtn = $editBtns[i]
        editBtn.addEventListener('click', function(){
            tableData[this.dataset.index].editMode = true
            repaint()
        })
    }
    
    var $saveBtns = document.getElementsByClassName('editable-save')
    for (var i = 0; i < $saveBtns.length; i++){
        var saveBtn = $saveBtns[i]
        saveBtn.addEventListener('click', function(){
            console.log(this)
//           console.log(this.dataset.i) 
            workout = tableData[this.dataset.i]
            workout.editMode = false
            var $table = document.getElementById('table-' + this.dataset.i)
            console.log($table)
            var tableId = '#table-' + this.dataset.i
            for(var j = 0; j < workout.exercises.length; j++){
                var exercise = workout.exercises[j]
                var h = j + 1;
                var sets = document.querySelector(tableId + ' #s-' + h).value
                var reps = document.querySelector(tableId + ' #r-' + h).value
                var weight = document.querySelector(tableId + ' #w-' + h).value
                exercise.sets = sets
                exercise.reps = reps
                exercise.weight = weight
            }
//           console.log(tableData[this.dataset.i])
            repaint()
        });
                                 
                                 
    }
}

repaint()

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

function generateEditableWorkoutHtml(workout, h) {
    var html = ""
    html += "<table id = 'table-" + h + "'>"
    html += "<caption>" + workout.date + "</caption>"
    html += "<tr><th>Exercise</th><th>Sets</th><th>Reps</th><th>Weight</th></tr>"
    for (var i = 0; i < workout.exercises.length; i++) {
        var exercise = workout.exercises[i]
        var j = i + 1
        html += "<tr>"
        html += "<td>" + exercise.name + "</td>"
        html += "<td><input id='s-" + j + "' value='" + exercise.sets + "'></input></td>"
        html += "<td><input id='r-" + j + "' value='" + exercise.reps + "'></input></td>"
        html += "<td><input id='w-" + j + "' value='" + exercise.weight + "'></input></td>"
        html += "</tr>"
    }
    html += "</table><div data-i='" + h + "' class='workouts-btn editable-save'>Save</div>"
    return html
}

var addBtn = document.getElementById('add-workout-btn')


$workouts = document.getElementById('workouts')

addBtn.addEventListener('click', function(){
    console.log('hi')
    this.style.display = "none";
    var tableForm =   '<table id="save-table"> <caption>Date</caption> <tr> <th>Exercise</th> <th>Sets</th> <th>Reps</th> <th>Weight</th> </tr><tr> <td>bench</td><td> <input id="s-1" type="number"></input> </td><td> <input id="r-1" type="number"></input> </td><td> <input id="w-1" type="number"></input> </td></tr><tr> <td>squat</td><td> <input id="s-2" type="number"></input> </td><td> <input id="r-2" type="number"></input> </td><td> <input id="w-2" type="number"></input> </td></tr><tr> <td>lunges</td><td> <input id="s-3" type="number"></input> </td><td> <input id="r-3" type="number"></input> </td><td> <input id="w-3" type="number"></input> </td></tr><tr> <td>lats</td><td> <input id="s-4" type="number"></input> </td><td> <input id="r-4" type="number"></input> </td><td> <input id="w-4" type="number"></input> </td></tr></table>'
    var div = document.createElement("div")
    div.innerHTML = tableForm
    
    var saveBtn = document.createElement("div")
    saveBtn.className = "workouts-btn "
    saveBtn.innerHTML = "Save"
    $workouts.insertBefore(saveBtn, $workouts.firstChild)
    $workouts.insertBefore(div, $workouts.firstChild);
    saveBtn.addEventListener('click', function(){
        var workout = {}
        workout.date = new Date();
        workout.exercises = []
        for (var i = 0; i < 4; i++) {
            var j = i + 1;
            var sets = document.querySelector('#save-table #s-' + j).value
            var reps = document.querySelector('#save-table #r-' + j).value
            var weight = document.querySelector('#save-table #w-' + j).value
            console.log(sets,reps,weight)
            var exercise = {}
            if (i === 0)
            	exercise.name = "bench"
            else if (i===1)
            	exercise.name = "squat"
            else if (i === 2)
            	exercise.name = "curls"
            else if (i === 3)
				exercise.name = "lats"


            exercise.sets = sets;
            exercise.reps = reps
            exercise.weight = weight
            workout.exercises.push(exercise)
        }
        tableData.unshift(workout)
        repaint()
    })

    
    
});