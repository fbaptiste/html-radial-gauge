
var charts = new Object;

$(document).ready(function() {
    var chartID = "chart1x";
    var chartDivID = "chart1";
	chart1 = new chartKPI(chartDivID, chartID, paramsChart1);
    charts[chartID] = chart1; //add to array so we can get chart object later - hack.

    updatePage(chartID, true, true);


	 $("#button1").on("click", {chart: chart1}, updateValues);
	 $("#button1Up").on("click", {chart: chart1, div: chartDivID}, resizeChartUp);
     $("#button1Down").on("click", {chart: chart1, div: chartDivID}, resizeChartDown);
});

function loadGaugeJSON(chartDivID, chartID) {
    $.getJSON("chart1.json", function(data) {
        alert('got it');
        console.log(data);
    });
}

function updatePage(chartID, updateGauge, updateJSONEditor) {
    var chart = charts[chartID];

    if (updateGauge) {
        chart.render();
    }

    if (updateJSONEditor) {
        bindJSONEditor(chartID);
    }
}

function bindJSONEditor(chartID) {
    var myjson = charts[chartID].params;
    var opt = { 
        change: function(data) { 
            console.log(data);
            //console.log(data.containerID);
            var chart = charts[data._private.chartID];
            chart.params = data;
            //chart.render();
            updatePage(data._private.chartID, true, false)
        },

        propertyclick: function(path) { /* called when a property is clicked with the JS path to that property */ }
    };
    opt.propertyElement = '<input readonly class="property">';  // element of the property field, <input> is default
    //opt.valueElement = '<textarea>';   // element of the value field, <input> is default
    
    $('#jsoneditor').jsonEditor(myjson, opt);
}

function updateValues(event) {
    //update gauge values randomly
    var range = 100; //(Math.random() * 150).toFixed(0);
    var gaugeValue = Math.random() * range;
    var markerValue = Math.random() * range;

    event.data.chart.updateValues(gaugeValue, markerValue, range);
    bindJSONEditor(event.data.chart.chartID);
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