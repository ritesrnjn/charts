# Lilly Charts

*Simple HTML5 Charts using the canvas element* [chartjs.org](http://www.chartjs.org)

## Prerequisites

 Install NodeJS

## Installation

To install via npm:

```bash
npm install
```

## Build

```bash
gulp dev
```

This starts a dev server on port 8000.

visit url http://localhost:8000/samples/activities.html to view custom graph


## Usage

Chartjs repo has been modified to some extent to accommodate the changes as per design...
1. Add a dot on points with zero value.
2. Show today's dot in branded color with slightly bigger radius.
3. Do not plot dots for future dates.
4. Do not plot dates before setup date.
5. Show dot for today, irrespective of value.


To use chartjs refer this repo: https://github.com/chartjs/Chart.js
Instead of "Chart.bundle.js" include the provided js file named "charts.custom.min.js".
barChartData should have following keys

```js
var barChartData = {
	xLabels:['Apr 01','','','','','','','','','','','','','','','','','','','','','','','','','','','','','Apr 30'],
	datasets: [{
		label: '',
		backgroundColor: ['#d52d1e','#aeaeae', '#d52d1e','#d52d1e','#f4cac7','#f4cac7','#f4cac7', '#aeaeae', '#d52d1e'],
		data: [3, null, 1, 2, 3, 2, 1, 0, 1],
		isToday: [false, false, false, false, false, false, false, false, true]
	}]
};
```

Parameters...

    1. xLables: values to be displayed along X axis
    2. label: dataset label, not required
    3. backgroundColor: color of bar (one for each data)
    4. data: data to be plotted    
    5. isToday: pass true for today's date to plot branded colored plot (one for each data)
    
	*count of backgroundColor, data and isToday should be equal. *

Initialize chart with following options to match the Visual Design...

```js
new Chart(ctx, {
	type: 'bar',
	data: barChartData,
	options: {
		responsive: true,
		legend: {
			display: false
		},
		scales: {
			xAxes: [{
				barThickness: 6,
				dots: {
					display: true,
					todayColor: '#aeaeae'
			    },
				gridLines: {
					display: false,
					tickMarkLength: 10
				},
				ticks: {
					display: true,
					maxRotation: 0,
					padding: 10
				}
			}],
			yAxes: [{
				afterTickToLabelConversion: function(q) {
					for (var tick in q.ticks) {
						q.ticks[tick]= '';
					}
					q.ticks[0]=q.ticks.length-2;
					q.ticks[q.ticks.length-2]=0;
				},
				ticks: {
					max: 4,
					min: 0,
					stepSize: 1,
					padding: 10
				},
				gridLines: {
					display: true,
					color: 'rgba(0, 0, 0, 0.1)',
					lineWidth: 1,
					drawBorder: false,
					drawOnChartArea: true,
					drawTicks: true,
					tickMarkLength: 0,
					zeroLineWidth: 2,
					zeroLineColor: 'rgba(216, 216, 216, 1)',
					zeroLineBorderDash: [],
					zeroLineBorderDashOffset: 1,
					offsetGridLines: true,
					borderDash: [6, 4],
					borderDashOffset: 0.0
				}
			}]
		}}
});
```

## Author

Ritesh Ranjan <ritranjan@deloitte.com>
