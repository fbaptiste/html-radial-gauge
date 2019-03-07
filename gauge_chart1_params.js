var paramsChart1 = {

	//Chart Gauge
	gauge: {
		value: 89.5								//main indicator value
		,maxValue: 100 							//max value range, always assume start is 0
		,markerValue: 62 						//marker value
		
		,paddingTopPerc: 5 						//padding at top of gauge as % of total chart height
		,paddingBottomPerc: 5 					//padding at bottom of gauge as % of total chart height

		//Indicator Background
		,background: {
			gradient: "20-#c1c1c1:40-#e1e1e1" 	//gradient to use for gauge background
			,borderColor: "blue"				//border color to use for gauge background
			,borderThicknessPerc: 0				//border thickness for gauge background as % of of gauge radius - set to 0 to hide
		}

		//Main Indicator 
		,indicator: {
			thicknessPerc: 35					//gauge thickness as % of gauge radius
			,gradient: "20-orange:40-yellow"	//gradient fill for main indicator gauge
			,animated: true						//whether to animate the indicator gauge
			,animationDuration: 800				//animation duration in milliseconds (for max range value, will shorten for smaller values)
			,animationEasing: "<>"				//easing for animation (linear, <, >, <>, elastic, bounce, etc - see Raphael.js docs)

			//main indicator text
			,text: {
				display: true 					//turns indicator text on/off
				,precision: 1 					//number of decimals to retain
				,sizePerc: 90					//font size as % of gauge inner radius
				,family: "Arial, sans-serif" 	//font family
				,color: "blue"					//font color
				,weight: "bold"					//font weight (bold, normal, 700, etc)
				,style: "normal"				//normal, italic, oblique
				,offset: {						//offset: x = left(-), right(+), y = up(-), down(+) [as % of inner radius]
 					xPerc: 0 					//x=0 --> centered inside gauge
					,yPerc: -8 					//y=0 --> aligned to bottom of gauge
				}
			}
		}

		//Marker
		,marker: {
			triangle: {
				display: true					//turns triangle marker on/off
				,animated: true 				//whether to animate the indicator gauge
				,animationDuration: 1000 		//animation duration in milliseconds (for max range value, will shorten for smaller values)
				,animationEasing: "<>"			//easing for animation (linear, <, >, <>, elastic, bounce, etc - see Raphael.js docs)
				,gradient: "45-red:10-yellow"	//main triangle color
				,sizePerc: 60 	 				//size as % of gauge thickness
				,aspectRatio: 1.1 				//aspect ratio of triangle height to base
				,offsetPerc: 20					//offset from outer radius (+ to raise above, - to drop into) [as % of gauge thickness]
				,notched: true 					//notch effect when marker overlays the main gauge indicator		
			}
		}
	}

	//Chart Background
	,background: {
		fillColor: "#f1f1f1"					//background color of entire chart
	}


	//Chart Legends
	,topLegend: {
		display: true
		,heightPerc: 25  						//percentage of height to be taken up by bottom legend - not used if display is off
		,prefix: "Title"						//legend = prefix + value + postfix
		,value: ""								//use <<value>>|<<markervalue>> to display gaugeValue/markerValue or arbitrary text.
		,suffix: ""								//legend = prefix + value + postfix
		,fontSizePerc: 80						//font size as % of gauge bottom legend height
		,fontFamily: "Arial, sans-serif" 		//font family
		,fontColor: "black"						//font color
		,fontWeight: "bold"						//font weight (bold, normal, 700, etc)
		,fontStyle: "normal"					//normal, italic, oblique
		,hAlign: "center" 						//horizontal alignment: left | center | right
		,displayMarkerSymbol: false				//display triangle marker along with caption
	}

	,bottomLegend: {
		display: true
		,heightPerc: 10  						//percentage of height to be taken up by bottom legend - not used if display is off
		,prefix: "Label: "		            	//legend = prefix + value + postfix
		,value: "<<markervalue>>"				//use <<value>>|<<markervalue>> to display gaugeValue/markerValue or arbitrary text.
		,suffix: ""								//legend = prefix + value + postfix
		,fontSizePerc: 80						//font size as % of top legend height
		,fontFamily: "Arial, sans-serif" 		//font family
		,fontColor: "red"						//font color
		,fontWeight: "normal"					//font weight (bold, normal, 700, etc)
		,fontStyle: "normal"					//normal, italic, oblique
		,hAlign: "right" 						//horizontal alignment: left | center | right
		,displayMarkerSymbol: true 				//display triangle marker along with caption
	}

	,hoverLegend: {
		display: true,								//display hover legend or not
		line1Text: "Line 1 Label: ",				//legend text line 1
		line1Value: "<<value>>",					//legend value line 1
		line2Text: "Line 2 Label: ",				//legend text line 2
		line2Value: "<<markervalue>>",				//legend value line 2
		timeOut: 2000								//milliseconds that tooltip stays visible once shown
	}


	,paddingTopPerc: 0 							//top padding as % of total Chart height
	,paddingBottomPerc: 1						//bottom padding as % of total Chart Height
	,paddingLeftRightPerc: 0					//left/right padding as % of total Chart width

	,svgResizeKeepAspectRatio: true
};


