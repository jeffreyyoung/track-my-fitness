//make class sections responsive
var classSections = document.getElementsByClassName('course-section')


function toggleClass(el, cssClass){
    console.log(el)
    el.classList.toggle(cssClass)
}
console.log(classSections)
for (var i =0; i < classSections.length; i++){
    var classSection = classSections[i]
    classSection.addEventListener("click", createFunction(classSection, "active"));
    //classSection.addEventListener('click', addClassToElement(classSection, 'selected'))
}

function createFunction(el, cssClass){
    return function() {
        toggleClass(el, cssClass)   
    }
}
