
//put all high charts code inside the buildCharts() function below

function buildCharts(){
    //INSERT CHART STUFF HERE
    $(function () {
    $('#firstChart').highcharts({
        title: {
            text: 'Bench',
            x: 0 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr']
        },
        credits: {
          enabled: false
        },
        yAxis: {
            title:{
                text: 'Predicted 1 Reb Max (lbs)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#BAD5F6'
            }]
        },
        tooltip: {
            enabled: false
        },
        exporting: {
         enabled: false
        },
        series: [{
            name: 'Bench',
            showInLegend: false,
            data: [100, 120, 120, 150]
        }]
    });
});

$(function () {
    $('#another').highcharts({
        title: {
            text: 'Squat',
            x: 0 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr']
        },
        credits: {
          enabled: false
        },
        yAxis: {
            title:{
                text: 'Predicted 1 Reb Max (lbs)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#BAD5F6'
            }]
        },
        tooltip: {
            enabled: false
        },
        exporting: {
         enabled: false
        },
        series: [{
            name: 'Squat',
            showInLegend: false,
            data: [300, 250, 275, 279]
        }]
    });
});
}