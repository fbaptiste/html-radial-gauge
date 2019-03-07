//KPI Chart Widget
//Fred Baptiste
//Copyright Avid Ratings 2014


/*****************************************************************/
/***                  PUBLIC INTERFACE                         ***/
/*****************************************************************/

//Constructor
function chartKPI(containerID, chartID, params) {
	this.params = params;
    this.containerID = containerID;
    this.chartID = chartID;

    this.params._private = {};
    this.params._private.containerID = containerID;
    this.params._private.chartID = chartID;
    this._private = {};
}


//Call this function to re-render Chart without changing values
chartKPI.prototype.render = function() {
	renderKPI.call(this);
};

//Call this function to update Chart (you may pass one, two or three parameters, or null values which will not alter the value)
chartKPI.prototype.updateValues = function(gaugeValue, markerValue, maxValue) {
	if (gaugeValue != null) {
		this.params.gauge.value = gaugeValue; 	
	}
	if (maxValue != null) {
		this.params.gauge.maxValue = maxValue;	
	}
	if (markerValue != null) {
			this.params.gauge.markerValue = markerValue;	
	}

	this.render();
}

// //Call this function to update gaugeValue, maxValue and markerValue at once
// chartKPI.prototype.updateValues = function(gaugeValue, maxValue) {
// 	//Update params object with new values
// 	this.params.gauge.value = gaugeValue; 
// 	this.params.gauge.maxValue = maxValue;

// 	this.render();
// };



// //Call this function to gaugeValue only (maxValue and markerValue remain the same)
// chartKPI.prototype.updateGaugeValue = function(gaugeValue) {
// 	//Update params object with new values
// 	this.params.gauge.value = gaugeValue; 

// 	this.render();
// };


// //Public: Call this function to gaugeValue only (maxValue and markerValue remain the same)
// chartKPI.prototype.updateMarkerValue = function(markerValue) {
// 	//Update params object with new values
// 	this.params.gauge.value = gaugeValue; 

// 	this.render();
// };






/*****************************************************************/
/***                  PRIVATE IMPLEMENTATION                   ***/
/*****************************************************************/
//chartKPI.prototype.paper = null;
//chartKPI.prototype.params = null;
//chartKPI.prototype.containerID = null;


function renderKPI() {
	//read params
	var gaugeThicknessPerc = this.params.gauge.indicator.thicknessPerc/100.0;
	
	var topPaddingPerc = this.params.paddingTopPerc/100.0;
	var bottomPaddingPerc = this.params.paddingBottomPerc/100.0;
	var leftRightPaddingPerc = this.params.paddingLeftRightPerc/100.0;

	var backgroundColor = this.params.background.fillColor;
	
	var svgKeepAspectRatioUponResize = this.params.svgResizeKeepAspectRatio;

	var gaugeBackgroundGradient = this.params.gauge.background.gradient;
	var gaugeBackgroundBorderColor = this.params.gauge.background.borderColor;
	var gaugeBackgroundBorderWidthPerc = this.params.gauge.background.borderThicknessPerc/100.0;
	var gaugePaddingTopPerc = this.params.gauge.paddingTopPerc/100.0;
	var gaugePaddingBottomPerc = this.params.gauge.paddingBottomPerc/100.0;
	var gaugeValueGradient = this.params.gauge.indicator.gradient;

	var maxValue = this.params.gauge.maxValue;
	var gaugeValue = this.params.gauge.value;
	var markerValue = this.params.gauge.markerValue;

	var prevMaxValue = this._private.prevMaxValue;
	var prevGaugeValue = this._private.prevValue;
	var prevMarkerValue = this._private.prevMarkerValue;

	var gaugeAnimated = this.params.gauge.indicator.animated;
	var gaugeAnimationDuration = this.params.gauge.indicator.animationDuration;
	var gaugeAnimationEasing = this.params.gauge.indicator.animationEasing;

	var indicatorTextDisplay = this.params.gauge.indicator.text.display;
	var indicatorTextPrecision = this.params.gauge.indicator.text.precision;
	var indicatorTextSizePerc = this.params.gauge.indicator.text.sizePerc/100.0;
	var indicatorTextFamily = this.params.gauge.indicator.text.family;
	var indicatorTextColor = this.params.gauge.indicator.text.color;
	var indicatorTextWeight = this.params.gauge.indicator.text.weight;
	var indicatorTextStyle = this.params.gauge.indicator.text.style;
	var indicatorTextOffsetXPerc = this.params.gauge.indicator.text.offset.xPerc / 100.0;
	var indicatorTextOffsetYPerc = this.params.gauge.indicator.text.offset.yPerc / 100.0;

	var markerTriangleDisplay = this.params.gauge.marker.triangle.display;
	var markerTriangleGradient = this.params.gauge.marker.triangle.gradient;
	var markerTriangleSizePerc = this.params.gauge.marker.triangle.sizePerc/100.0;
	var markerTriangleAspectRatio = this.params.gauge.marker.triangle.aspectRatio;
	var markerTriangleOffsetPerc = this.params.gauge.marker.triangle.offsetPerc/100.0;
	var markerTriangleNotched = this.params.gauge.marker.triangle.notched;
	var markerTriangleAnimated = this.params.gauge.marker.triangle.animated;
	var markerTriangleDuration = this.params.gauge.marker.triangle.animationDuration;
	var markerTriangleEasing = this.params.gauge.marker.triangle.animationEasing;

	var topLegendDisplay = this.params.topLegend.display;
	var topLegendHeightPerc = this.params.topLegend.heightPerc/100.0;
	var topLegendPrefix = this.params.topLegend.prefix;
	var topLegendValue = this.params.topLegend.value;
	var topLegendSuffix = this.params.topLegend.suffix;
	var topLegendFontSizePerc = this.params.topLegend.fontSizePerc/100.0;
	var topLegendFontFamily = this.params.topLegend.fontFamily;
	var topLegendFontColor = this.params.topLegend.fontColor;
	var topLegendFontWeight = this.params.topLegend.fontWeight;
	var topLegendFontStyle = this.params.topLegend.fontStyle;
	var topLegendDisplayMarkerSymbol = this.params.topLegend.displayMarkerSymbol;
	var topLegendHAlign = this.params.topLegend.hAlign;

	var bottomLegendDisplay = this.params.bottomLegend.display;
	var bottomLegendHeightPerc = this.params.bottomLegend.heightPerc/100.0;
	var bottomLegendPrefix = this.params.bottomLegend.prefix;
	var bottomLegendValue = this.params.bottomLegend.value;
	var bottomLegendSuffix = this.params.bottomLegend.suffix;
	var bottomLegendFontSizePerc = this.params.bottomLegend.fontSizePerc/100.0;
	var bottomLegendFontFamily = this.params.bottomLegend.fontFamily;
	var bottomLegendFontColor = this.params.bottomLegend.fontColor;
	var bottomLegendFontWeight = this.params.bottomLegend.fontWeight;
	var bottomLegendFontStyle = this.params.bottomLegend.fontStyle;
	var bottomLegendDisplayMarkerSymbol = this.params.bottomLegend.displayMarkerSymbol;	
	var bottomLegendHAlign = this.params.bottomLegend.hAlign;

	var hoverLegendDisplay = this.params.hoverLegend.display;
	var hoverLegendLine1Text = this.params.hoverLegend.line1Text;
	var hoverLegendLine1Value = this.params.hoverLegend.line1Value;
	var hoverLegendLine2Text = this.params.hoverLegend.line2Text;
	var hoverLegendLine2Value = this.params.hoverLegend.line2Value;
	var hoverLegendTimeOut = this.params.hoverLegend.timeOut;


	//built-in params, aka "magic numbers"
	//None??? :-)



	//calculated params
	var $container = $("#" + this.containerID);
	var paperWidth = $container.width();
	var paperHeight = $container.height();

	if (!bottomLegendDisplay) {
		bottomLegendHeightPerc = 0; 
	}

	//check gauge range max
	if (gaugeValue > maxValue) {
		maxValue = gaugeValue;
	}

	//Determine Bounding boxes for each areas: Gauge, Top/Bottom Legends with Top/Bottom padding
	var topLegend = {};
	if (topLegendDisplay) {
		topLegend.width = paperWidth - (2 * leftRightPaddingPerc * paperWidth);
		topLegend.height = topLegendHeightPerc * paperHeight;
		topLegend.topX = leftRightPaddingPerc * paperWidth;
		topLegend.topY = topPaddingPerc * paperHeight;
	} else {
		topLegend.width = paperWidth - (2 * leftRightPaddingPerc * paperWidth); 
		topLegend.height = 0;
		topLegend.topX = leftRightPaddingPerc * paperWidth;
		topLegend.topY = topPaddingPerc * paperHeight;
	};

	
	var bottomLegend = {};
	if (bottomLegendDisplay) {
		bottomLegend.width = paperWidth - (2 * leftRightPaddingPerc * paperWidth);
		bottomLegend.height = bottomLegendHeightPerc * paperHeight;
		bottomLegend.topX = leftRightPaddingPerc * paperWidth;
		bottomLegend.topY = paperHeight - (bottomPaddingPerc * paperHeight) - bottomLegend.height;
	} else {
		bottomLegend.width = paperWidth - (2 * leftRightPaddingPerc * paperWidth);
		bottomLegend.height = 0;
		bottomLegend.topX = leftRightPaddingPerc * paperWidth;
		bottomLegend.topY = paperHeight - (bottomPaddingPerc * paperWidth);
	}


	var gaugeBox = {};
	gaugeBox.width = paperWidth - (2 * leftRightPaddingPerc * paperWidth);
	gaugeBox.topX = leftRightPaddingPerc * paperWidth;
	gaugeBox.topY = topLegend.topY + topLegend.height;
	gaugeBox.height = bottomLegend.topY - (topLegend.topY + topLegend.height); //topLegend.topY - "topLegend.bottomY"

	gaugeBox.topY = gaugeBox.topY + (gaugePaddingTopPerc * paperHeight);
	gaugeBox.height = gaugeBox.height - (gaugePaddingTopPerc * paperHeight) - (gaugePaddingBottomPerc * paperHeight);


	//find maximum radius we can use for gauge itself
	var maxGaugeHeight = gaugeBox.height;
	var maxGaugeWidth = gaugeBox.width;

	var maxRadius = maxGaugeWidth/2; 
	if (maxRadius > maxGaugeHeight) {
		maxRadius = maxGaugeHeight;
	}

	var outerRadius = maxRadius; 
	var innerRadius = outerRadius - (outerRadius * gaugeThicknessPerc);


	//calculate gauge center point
	var centerX = gaugeBox.topX + gaugeBox.width/2.0;
	var centerY = gaugeBox.topY + (gaugeBox.height - maxRadius)/2.0 + maxRadius;


	

	//create paper, clearing old one out if necessary
	var paper;

	 if (this.paper != null) {
	 	var paperDom = this.paper.canvas;
     	paperDom.parentNode.removeChild(paperDom);
	 }

	 //paper = Raphael(this.containerID, paperWidth, paperHeight);
	 paper = Raphael(this.containerID);
	 paper.setViewBox(0,0,paperWidth, paperHeight, false);
	 if (svgKeepAspectRatioUponResize) {
	 	paper.canvas.setAttribute('preserveAspectRatio', 'xMidYMid meet');	
	 } else {
	 	paper.canvas.setAttribute('preserveAspectRatio', 'none');	
	 }
	 
	 this.paper = paper;

	 //paper.setStart();



	//*** Chart Background ***//
	var backgroundRect = paper.rect(0, 0, paperWidth, paperHeight)
  							  .attr({
									fill: backgroundColor
									,"stroke-width": 0
								});


	//*** Background Arc ***//
	var arcOuterStartX = centerX - outerRadius;
	var arcInnerStartX = centerX - innerRadius;
	var arcStartY = centerY; 
	var arcOuterEndX = centerX + outerRadius;
	var arcInnerEndX = centerX + innerRadius;
	var arcEndY = arcStartY;
	var gaugeBackgroundBorderWidth = gaugeBackgroundBorderWidthPerc * maxRadius;



	//**** Gauge Background ****
	var gaugeBackgroundPath = "M " + arcOuterStartX + " " + arcStartY + " "
							+ "A " + outerRadius + "," + outerRadius + " "
							+ "0 "
							+ "0,1 "
							+ arcOuterEndX + "," + arcEndY + " "
							
							+ "L " + arcInnerEndX + "," + arcEndY
							
							+ "A " + innerRadius + "," + innerRadius + " "
							+ "0 "
							+ "1,0 "
							+ arcInnerStartX + "," + arcStartY

							+ "L " + arcOuterStartX + "," + arcStartY

							+ " Z";
	

	
	var gaugeBackground = paper.path(gaugeBackgroundPath);
	gaugeBackground.attr(
	{
		gradient: gaugeBackgroundGradient,
		stroke: gaugeBackgroundBorderColor,
		'stroke-width': gaugeBackgroundBorderWidth
	});

	//Add Legend Hover functionality if required
    if (hoverLegendDisplay) {
		$(gaugeBackground.node).on("mouseenter", {"obj": this}, showLegend);
		$(gaugeBackground.node).on("mouseleave", {"obj": this}, hideLegend);
	}



	//*** Gauge Value arc ***//
	this.paper.customAttributes.arc = function(centerX, centerY, innerRadius, outerRadius, maxRadius, gaugeValue, maxValue) {
		var gaugeValueNormalized = gaugeValue / maxValue;
		var gaugeAngle = 180 * gaugeValueNormalized;
		var alpha = ((180-gaugeAngle) * Math.PI)/180;

		var arcStartY = centerY; //maxRadius;
		var arcOuterStartX = centerX - outerRadius;
		var arcInnerStartX = centerX - innerRadius;

		var arcInnerEndX = centerX + (innerRadius * Math.cos(alpha));
		var arcInnerEndY = centerY - (innerRadius * Math.sin(alpha));
		var arcOuterEndX = centerX + (outerRadius * Math.cos(alpha));
		var arcOuterEndY = centerY - (outerRadius * Math.sin(alpha));

		var path;

		path = [
            ["M", arcOuterStartX, arcStartY],
            ["A", outerRadius, outerRadius, 0, 0, 1, arcOuterEndX, arcOuterEndY],
            ["L", arcInnerEndX, arcInnerEndY],
            ["A", innerRadius, innerRadius, 0, 0, 0, arcInnerStartX, arcStartY],
            ["L", arcOuterStartX, arcStartY], 
            ["Z"]
        ];

        return {
            path: path
        };

	};

	//Previous Values
	var usePreviousValues = true;
	if (prevMaxValue == null || prevMaxValue != maxValue) {
		usePreviousValues = false;
	}
		else {
	}
	

	
	//**** Gauge Value Arc ****//
	var startGaugeValue = 0;
	if (usePreviousValues) {
		startGaugeValue = prevGaugeValue;
	}

	if (this._private.prevValue != null)
		prevValue = this._private.prevValue;

    var gaugeValueArc = this.paper.path().attr({
            gradient: gaugeValueGradient,
	 		'stroke-width': gaugeBackgroundBorderWidth,
	 		'stroke-opacity': "0.0",
            arc: [centerX, centerY, innerRadius, outerRadius, maxRadius, startGaugeValue, maxValue]
    });
    

  //hover legend not required here since background arc already has it.
  //   if (gaugeAnimated) {
  //   	//gaugeAnimationDuration = gaugeAnimationDuration * Math.abs(gaugeValue - startGaugeValue) / maxValue;
  //   }
  //   else {
		// gaugeAnimationDuration = 0;    		
  //   }
    

    gaugeValueArc.animate({
            arc: [centerX, centerY, innerRadius, outerRadius, maxRadius, gaugeValue, maxValue]
        }, gaugeAnimationDuration, gaugeAnimationEasing);


	//Add Legend Hover functionality if required
     if (hoverLegendDisplay) {
	 	$(gaugeValueArc.node).on("mouseenter", {"obj": this}, showLegend);
	 	$(gaugeValueArc.node).on("mouseleave", {"obj": this}, hideLegend);
	 }
	
	
    

    //*** Triangle Marker ***//

    //create triangle shape
	//markerTriangleDisplay, markerTriangleColor, markerTriangleSizePerc, markerTriangleAspectRatio 
	//markerTriangleOffsetPerc, markerTriangleNotched
	//markerTriangleAnimated, markerTriangleDuration, markerTriangleEasing 

	if (markerTriangleDisplay) {
		var arcStartY = centerY;
		var arcOuterStartX = centerX - outerRadius;
		var triangleWidth = markerTriangleSizePerc * (outerRadius - innerRadius);
		var triangleHeight = triangleWidth * markerTriangleAspectRatio;
		var triangleOffset = markerTriangleOffsetPerc * (outerRadius - innerRadius);

		var markerValueNormalized = markerValue / maxValue;
		var markerAngle = 180 * markerValueNormalized;

	    var bottom = {};
	    var top = {};
	    var right= {};

	    
	    bottom.X = arcOuterStartX - triangleOffset;
	    bottom.Y = arcStartY + (triangleWidth/2.0);

	    top.X = bottom.X;
	    top.Y = bottom.Y - triangleWidth;

	    right.X = top.X + triangleHeight;
	    right.Y = bottom.Y - (triangleWidth/2.0);
	    
	    if (markerTriangleAnimated) {
	    	//markerTriangleDuration = markerTriangleDuration * markerValue / maxValue;
	    }
	    else {
			markerTriangleDuration = 0;
	    }

	    var triPath = "M" + bottom.X + " " + bottom.Y + " L" + top.X + " " + top.Y + " L" + right.X + " " + right.Y + " Z";


	    var triMarker = this.paper.path(triPath) .attr({
	        "gradient": markerTriangleGradient,
	        "stroke": backgroundColor,
	        "stroke-width": (markerTriangleNotched ? triangleHeight * 0.1 : 0)
	    });
	    

	    
	    //Add Legend Hover functionality if required
	    //triMarker.node.id = this.containerID + "-markerSymbol";
	    if (hoverLegendDisplay) {
			$(triMarker.node).on("mouseenter", {"obj": this}, showLegend);
			$(triMarker.node).on("mouseleave", {"obj": this}, hideLegend);
		}




	var startAngleValue = 0;
	if (usePreviousValues) {
		startAngleValue = 180 * prevMarkerValue / maxValue;
	}

	    triMarker.transform("r " + startAngleValue + "," + centerX + "," + centerY).animate({transform: "r" + markerAngle + "," + centerX + "," + centerY}, markerTriangleDuration, markerTriangleEasing);
	}

	//**** Indicator Text ****
	//indicatorTextDisplay, indicatorTextPrecision, indicatorTextSizePerc, indicatorTextFamily, indicatorTextColor
	//indicatorTextWeight, indicatorTextStyle
	//indicatorTextOffsetXPerc, indicatorTextOffsetYPerc
	if (indicatorTextDisplay) {
		//calculate font size
		//at inner radius of 60, will support font size of 36 for 100.0 value
		var targetRadius = innerRadius * indicatorTextSizePerc;
		var targetFontSize = 36.0 / 60.0 * targetRadius;

        var indicatorText = paper.text(centerX , centerY
        								,gaugeValue.toFixed(indicatorTextPrecision)).attr({
                "font-family": indicatorTextFamily
                ,"font-size": targetFontSize
                ,"font-weight": indicatorTextWeight
                ,"font-style": indicatorTextStyle
                ,"fill": indicatorTextColor
        });

		//align text to "bottom" of gauge and offset by user specified value
        var bbText = indicatorText.getBBox();
        var baselineFudge = bbText.height * 0.1;
        var adjustY = -(bbText.height / 2 - baselineFudge); //negative to bring it up
        adjustY = adjustY + indicatorTextOffsetYPerc * innerRadius;
        var adjustX = indicatorTextOffsetXPerc * innerRadius;

        indicatorText.transform("t " + adjustX + "," + adjustY);

	    //Add Legend Hover functionality if required
	    if (hoverLegendDisplay) {
			$(indicatorText.node).on("mouseenter", {"obj": this}, showLegend);
			$(indicatorText.node).on("mouseleave", {"obj": this}, hideLegend);
		}

    }

    //*** Top Legend ***//
	//topLegend.topX/topY/height/width
	//topLegendDisplay, topLegendHeightPerc
	//topLegendPrefix, topLegendValue, topLegendSuffix
	//topLegendFontSizePerc, topLegendFontFamily, topLegendFontColor, topLegendFontWeight, topLegendFontStyle
	if (topLegendDisplay) {
		var topLegendCenterX = topLegend.topX + topLegend.width/2.0;
		var topLegendCenterY = topLegend.topY + topLegend.height/2.0;
		var topLegendFontSize = 24.0/40.0 * topLegend.height * topLegendFontSizePerc; 

		var topLegendStr = topLegendPrefix;
		if (topLegendValue == '<<value>>') {
			topLegendStr = topLegendStr + gaugeValue.toFixed(indicatorTextPrecision);
		} else if (topLegendValue == '<<markervalue>>') {
			topLegendStr = topLegendStr + markerValue.toFixed(indicatorTextPrecision);
		} else {
			topLegendStr = topLegendStr + topLegendValue;
		}
		topLegendStr = topLegendStr + topLegendSuffix;

		var topLegendText = paper.text(topLegendCenterX , topLegendCenterY, topLegendStr).attr({
                "font-family": topLegendFontFamily
                ,"font-size": topLegendFontSize
                ,"font-weight": topLegendFontWeight
                ,"font-style": topLegendFontStyle
                ,"fill": topLegendFontColor
        });


		//Set alignment (left, center, right)
		if (topLegendHAlign == "left") {
			var bbText = topLegendText.getBBox();
	        var adjustY = 0;
	        var adjustX = - (bbText.x - topLegend.topX) + 2; 

			if (topLegendDisplayMarkerSymbol) {
				var triangleWidth = markerTriangleSizePerc * (outerRadius - innerRadius) * topLegendFontSizePerc;
				adjustX = adjustX + (triangleWidth * markerTriangleAspectRatio) + 5;
			}

	        topLegendText.transform("t " + adjustX + "," + adjustY);
		} else if(topLegendHAlign =="right") {
			var bbText = topLegendText.getBBox();
	        var adjustY = 0;
	        var adjustX = topLegend.width - (bbText.x + bbText.width)-2; 

	        topLegendText.transform("t " + adjustX + "," + adjustY);
		}



		//Marker Symbol
        if (topLegendDisplayMarkerSymbol) {
        	var triangleWidth = markerTriangleSizePerc * (outerRadius - innerRadius) * topLegendFontSizePerc;
			var triangleHeight = triangleWidth * markerTriangleAspectRatio;

			var bottom = {};
	    	var top = {};
	    	var right= {};

	    
		    bottom.X = 0;
		    bottom.Y = triangleWidth;

		    top.X = 0;
		    top.Y = 0;

		    right.X = top.X + triangleHeight;
		    right.Y = bottom.Y - (triangleWidth/2.0);
		    
		    var triPath = "M" + bottom.X + " " + bottom.Y + " L" + top.X + " " + top.Y + " L" + right.X + " " + right.Y + " Z";

        	var topLegendTri = this.paper.path(triPath) .attr({
	        	"gradient": markerTriangleGradient,
	        	"stroke": backgroundColor,
	        	"stroke-width": (markerTriangleNotched ? triangleHeight * 0.1 : 0),

	    	});

	    	//Need to translate triangle to proper position.
	    	var bbText = topLegendText.getBBox();
	    	var midY = (bbText.y + bbText.y2)/2.0;
	    	var yTranslate = midY - triangleWidth/2.0;
	    	var xTranslate = (bbText.x - triangleHeight) - 5;
	    	topLegendTri.transform("t " + xTranslate + "," + yTranslate);
        }
	}


    //*** Bottom Legend ***//
    //bottomLegend.topX/topY/height/width
	//bottomLegendDisplay, bottomLegendHeightPerc
	//bottomLegendPrefix, bottomLegendValue, bottomLegendSuffix
	//bottomLegendFontSizePerc, bottomLegendFontFamily, bottomLegendFontColor, bottomLegendFontWeight,bottomLegendFontStyle
	if (bottomLegendDisplay) {
		var bottomLegendCenterX = bottomLegend.topX + bottomLegend.width/2.0;
		var bottomLegendCenterY = bottomLegend.topY + bottomLegend.height/2.0;
		var bottomLegendFontSize = 24.0/40.0 * bottomLegend.height * bottomLegendFontSizePerc; 

		var bottomLegendStr = bottomLegendPrefix;
		if (bottomLegendValue == '<<value>>') {
			bottomLegendStr = bottomLegendStr + gaugeValue.toFixed(indicatorTextPrecision);
		} else if (bottomLegendValue == '<<markervalue>>') {
			bottomLegendStr = bottomLegendStr + markerValue.toFixed(indicatorTextPrecision);
		} else {
			bottomLegendStr = bottomLegendStr + bottomLegendValue;
		}
		bottomLegendStr = bottomLegendStr + bottomLegendSuffix;

		var bottomLegendText = paper.text(bottomLegendCenterX , bottomLegendCenterY, bottomLegendStr).attr({
                "font-family": bottomLegendFontFamily
                ,"font-size": bottomLegendFontSize
                ,"font-weight": bottomLegendFontWeight
                ,"font-style": bottomLegendFontStyle
                ,"fill": bottomLegendFontColor
        });

		//Set alignment (left, center, right)
		if (bottomLegendHAlign == "left") {
			var bbText = bottomLegendText.getBBox();
	        var adjustY = 0;
	        var adjustX = - (bbText.x - bottomLegend.topX) + 2; 

			if (bottomLegendDisplayMarkerSymbol) {
				var triangleWidth = markerTriangleSizePerc * (outerRadius - innerRadius) * bottomLegendFontSizePerc;
				adjustX = adjustX + (triangleWidth * markerTriangleAspectRatio) + 5;
			}

	        bottomLegendText.transform("t " + adjustX + "," + adjustY);
		} else if(bottomLegendHAlign =="right") {
			var bbText = bottomLegendText.getBBox();
	        var adjustY = 0;
	        var adjustX = bottomLegend.width - (bbText.x + bbText.width)-2; 

	        bottomLegendText.transform("t " + adjustX + "," + adjustY);
		}

        if (bottomLegendDisplayMarkerSymbol) {
        	var triangleWidth = markerTriangleSizePerc * (outerRadius - innerRadius) * bottomLegendFontSizePerc;
			var triangleHeight = triangleWidth * markerTriangleAspectRatio;

			var bottom = {};
	    	var top = {};
	    	var right= {};

	    
		    bottom.X = 0;
		    bottom.Y = triangleWidth;

		    top.X = 0;
		    top.Y = 0;

		    right.X = top.X + triangleHeight;
		    right.Y = bottom.Y - (triangleWidth/2.0);
		    
		    var triPath = "M" + bottom.X + " " + bottom.Y + " L" + top.X + " " + top.Y + " L" + right.X + " " + right.Y + " Z";

        	var bottomLegendTri = this.paper.path(triPath) .attr({
	        	"gradient": markerTriangleGradient,
	        	"stroke": backgroundColor,
	        	"stroke-width": (markerTriangleNotched ? triangleHeight * 0.1 : 0)
	    	});

	    	//Need to translate triangle to proper position.
	    	var bbText = bottomLegendText.getBBox();
	    	var midY = (bbText.y + bbText.y2)/2.0;
	    	var yTranslate = midY - triangleWidth/2.0;
	    	var xTranslate = (bbText.x - triangleHeight) - 5 ;
	    	bottomLegendTri.transform("t " + xTranslate + "," + yTranslate);
        }
	}

    //var paperSet = paper.setFinish();
	//this.paperSet = paperSet;


	//Hover tooltip
	//hoverLegendDisplay
	//hoverLegendLine1Text, hoverLegendLine1Value
	//hoverLegendLine2Text, hoverLegendLine2Value 

	if (hoverLegendDisplay) {
		if (hoverLegendLine1Value == '<<value>>') {
			hoverLegendLine1Value = gaugeValue.toFixed(indicatorTextPrecision);
		} else if (hoverLegendLine1Value == '<<markervalue>>') {
			hoverLegendLine1Value = markerValue.toFixed(indicatorTextPrecision);
		}

		if (hoverLegendLine2Value == '<<value>>') {
			hoverLegendLine2Value = gaugeValue.toFixed(indicatorTextPrecision);
		} else if (hoverLegendLine2Value == '<<markervalue>>') {
			hoverLegendLine2Value = markerValue.toFixed(indicatorTextPrecision);
		}


		var html = 
			'<div id = "' + this.containerID + '-tooltip" class="radialkpi-tooltip-body">'
		         + '<div class="radialkpi-tooltip-line-1">'
		         + '   <span class="radialkpi-tooltip-legend">' + hoverLegendLine1Text + '</span>'
		         + '   <span class="radialkpi-tooltip-value">' + hoverLegendLine1Value + '</span>'
		         + '</div>'
		         + '<div class="radialkpi-tooltip-line-2">'
		         + '   <span class="radialkpi-tooltip-legend">' + hoverLegendLine2Text + '</span>'
		         + '  <span class="radialkpi-tooltip-value">' + hoverLegendLine2Value + '</span>'
		        + '</div>'
		    + '</div>';

		  var $legend = $("<div/>").html(html).contents();
		  $legend.css("position", "fixed");
		  $legend.css("left", "0px");
		  $legend.css("top", "0px");
		  $legend.css("zindex", "1");
		  $legend.css("display", "none");
		  $('body').append($legend);
		  this.legend = $legend;
	}



//console.log(this);

//console.log($("#"+this.containerID));



	//Set previous Values
	this._private.prevValue = this.params.gauge.value;
	this._private.prevMaxValue = this.params.gauge.maxValue;
	this._private.prevMarkerValue = this.params.gauge.markerValue;
};


function showLegend(event) {
	

	var chartKPI = event.data.obj;
	if (chartKPI != null && chartKPI.legend != null) {
		if (chartKPI.hideLegendTimer != null) {
			clearTimeOut(chartKPI.hideLegendTimer);
			chartKPI.hideLegendTimer = null;
		}

		//figure out where the mouse is
		var top = event.clientY;
		var left = event.clientX;
		$(chartKPI.legend).css("left", left);
		$(chartKPI.legend).css("top", top);
		//chartKPI.legend.delay(200).fadeIn();
		//chartKPI.legend.fadeIn(200);
		chartKPI.legend.show();

		//start timer to auto-hide after x seconds
		var timeOut = chartKPI.params.hoverLegend.timeOut;
		chartKPI.hideLegendTimer = setTimeout(function () {
			hideLegend(event);
		}, timeOut);
	}
}



function hideLegend(event) {
	var chartKPI = event.data.obj;
	if (chartKPI != null && chartKPI.legend != null) {
		//chartKPI.legend.delay(200).fadeOut();
		chartKPI.legend.hide();

		if (chartKPI.hideLegendTimer != null) {
			clearTimeout(chartKPI.hideLegendTimer);
			chartKPI.hideLegendTimer = null;
		}
	}
	
}


function alignTextTop(t) {
	var b = t.getBBox();
    var h = b.height; 

    t.attr({
        'y': b.y + h
    });
}

function alignTextBottom(t) {
	var b = t.getBBox();

    t.attr({
        'y': b.y
    });
}




