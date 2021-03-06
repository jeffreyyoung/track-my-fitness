var accordions = document.querySelectorAll(".accordion section")
var lastClicked;
var h2s = document.querySelectorAll('.accordion > section > h2')
for (var i = 0; i < accordions.length; i++) {
    var accord = accordions[i]
    var h2 = accord.childNodes[1]
    h2.addEventListener('click', function () {
        unselectH2s(h2s)
        this.classList.add('selected')
        var ul = this.parentNode.childNodes[3]
        if (lastClicked && lastClicked.classList.contains("show") && lastClicked !== ul) {
            lastClicked.classList.remove("show")
        }
        var text = generateSectionHtml(this.innerHTML)
        updateMain(text)
        lastClicked = ul
        unselectAllStudents(students)
        ul.classList.toggle('show')
    })
}

function unselectH2s(h2s){
    for( var i = 0; i < h2s.length; i++){
        var h2 = h2s[i];
        h2.classList.remove('selected')
    }
}

var students = document.querySelectorAll('ul.accordion.vertical section ul li')
console.log(students)
for (var i = 0; i < students.length; i++) {
    var student = students[i]
    student.addEventListener('click', function () {
        unselectAllStudents(students)
        console.log(this)
        this.classList.add('selected')
        var text = generateStudentHtml(this.innerHTML)
        updateMain(text)
    });
}

function unselectAllStudents(students) {
    for (var i = 0; i < students.length; i++) {
        students[i].classList.remove('selected')
    }
}


function updateMain(html) {
    var $main = document.querySelector('#main')
    $main.classList.add('hidden')
    setTimeout(function(){ 
        $main.innerHTML = html
        $main.classList.remove('hidden')
        $main.classList.add('visible') 
        buildCharts()
    }, 200);
    
}
