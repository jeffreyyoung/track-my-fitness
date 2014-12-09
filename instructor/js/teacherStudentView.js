$(function () {
    $('#studentChart').highcharts({
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