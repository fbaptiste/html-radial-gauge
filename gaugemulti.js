
var charts = new Object;

$(document).ready(function() {
    var chartID = "chart1";
    var chartDivID = "chart1";
    var fileUrl = chartID + ".json";
    loadGaugeJSON("chart1", "oChart1", "data/chart1.json"); 
    loadGaugeJSON("chart2", "oChart2", "data/chart2.json"); 
    loadGaugeJSON("chart3", "oChart3", "data/chart3.json"); 
    loadGaugeJSON("chart4", "oChart4", "data/chart4.json"); 
    loadGaugeJSON("chart5", "oChart5", "data/chart5.json"); 
    loadGaugeJSON("chart6", "oChart6", "data/chart6.json"); 
    loadGaugeJSON("chart7", "oChart7", "data/chart7.json"); 
    loadGaugeJSON("chart8", "oChart8", "data/chart8.json"); 
});

function loadGaugeJSON(chartDivID, chartID, fileUrl) {

    $.getJSON(fileUrl, function(data) {
        chart = new chartKPI(chartDivID, chartID, data);
        charts[chartID] = chart; //add to array so we can get chart object later - hack.
        chart.render();
    });
}



function updateValues(event) {
    //update gauge values randomly
    var range = 100; //(Math.random() * 150).toFixed(0);
    var gaugeValue = Math.random() * range;
    var markerValue = Math.random() * range;

    event.data.chart.updateValues(gaugeValue, markerValue, range);
}

function resizeChartRandom(event) {
    var $div = $("#"+event.data.div);

    var width = 100 + Math.random() * 300;
    var height = 100 + Math.random() * 400;

    $div.css('height', height).css('width', width);

    //***IMPORTANT*** svg scaling takes place automatically as long as the div containing the chart has this CSS rule
    //.chart svg { height: 100%; width: 100%;}
    //where .chart is whatever class name you want to use that has to be applied to the chart's parent div container
 }

 function resizeChartUp(event) {
    var $div = $("#"+event.data.div);

    var width = $div.width() * 1.1;
    var height = $div.height() * 1.1;;

    $div.css('height', height).css('width', width);

    //***IMPORTANT*** svg scaling takes place automatically as long as the div containing the chart has this CSS rule
    //.chart svg { height: 100%; width: 100%;}
    //where .chart is whatever class name you want to use that has to be applied to the chart's parent div container
 }

 function resizeChartDown(event) {
    var $div = $("#"+event.data.div);

    var width = $div.width() * 0.9;
    var height = $div.height() * 0.9;

    $div.css('height', height).css('width', width);

    //***IMPORTANT*** svg scaling takes place automatically as long as the div containing the chart has this CSS rule
    //.chart svg { height: 100%; width: 100%;}
    //where .chart is whatever class name you want to use that has to be applied to the chart's parent div container
 }