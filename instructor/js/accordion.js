var accordions = document.querySelectorAll(".accordion section")
var lastClicked;
for (var i = 0; i < accordions.length; i++) {
    var accord = accordions[i]
    var h2 = accord.childNodes[1]
    h2.addEventListener('click', function () {
        var ul = this.parentNode.childNodes[3]
        if (lastClicked && lastClicked.classList.contains("show") && lastClicked !== ul) {
            lastClicked.classList.remove("show")
        }
        lastClicked = ul
        ul.classList.toggle('show')
    })
}

var students = document.querySelectorAll('ul.accordion.vertical section ul li')
console.log(students)
for (var i = 0; i < students.length; i++) {
    var student = students[i]
    student.addEventListener('click', function () {
        unselectAllStudents(students)
        console.log(this)
        this.classList.add('selected')
        var text = this.innerHTML
        updateMain(text)

    });
}

function unselectAllStudents(students) {
    for (var i = 0; i < students.length; i++) {
        students[i].classList.remove('selected')

    }
}


function updateMain(html) {
    document.querySelector('#main').innerHTML = html
}