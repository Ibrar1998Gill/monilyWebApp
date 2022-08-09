declare var require: any;
let Knob = require('knob'); // browserify require

let primary = localStorage.getItem('primary_color') || '#7366ff';
let secondary = localStorage.getItem('secondary_color') || '#f73164';

export const currentSales = {
	series: [{
		name: 'series1',
		data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0]
	}, {
		name: 'series2',
		data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0]
	}],
	chart: {
		height: 240,
		type: 'area',
		toolbar: {
			show: false
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	xaxis: {
		type: 'category',
		low: 0,
		offsetX: 0,
		offsetY: 0,
		show: false,
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
		labels: {
			low: 0,
			offsetX: 0,
			show: false,
		},
		axisBorder: {
			low: 0,
			offsetX: 0,
			show: false,
		},
	},
	markers: {
		strokeWidth: 3,
		colors: "#ffffff",
		strokeColors: [primary, secondary],
		hover: {
			size: 6,
		}
	},
	yaxis: {
		low: 0,
		offsetX: 0,
		offsetY: 0,
		show: false,
		labels: {
			low: 0,
			offsetX: 0,
			show: false,
		},
		axisBorder: {
			low: 0,
			offsetX: 0,
			show: false,
		},
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0,
			bottom: -15,
			top: -40
		}
	},
	colors: [primary, secondary],
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.5,
			stops: [0, 80, 100]
		}
	},
	legend: {
		show: false,
	},
	tooltip: {
		x: {
			format: 'MM'
		},
	},
};

export const smallBarCharts = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
		series: [
			[400, 900, 800, 1000, 700, 1200, 300],
			[1000, 500, 600, 400, 700, 200, 1100]
		]
	},
	options: {
		stackBars: true,
		axisY: {
			low: 0,
			showGrid: false,
			showLabel: false,
			offset: 0,
			scaleMinSpace: 40
		},
		axisX: {
			showGrid: false,
			showLabel: false,
			offset: 0
		}
	},
	events: {
		draw: (data) => {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 3px'
				});
			}
		}
	}

};

export const marketValue = {
	chart: {
		height: 380,
		type: 'radar',
		toolbar: {
			show: false
		},
	},
	series: [{
		name: 'Market value',
		data: [20, 100, 40, 30, 50, 80, 33],
	}],
	stroke: {
		width: 3,
		curve: 'smooth',
	},
	labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	plotOptions: {
		radar: {
			size: 140,
			polygons: {
				fill: {
					colors: ['#fcf8ff', '#f7eeff']
				},

			}
		}
	},
	colors: [primary],
	markers: {
		size: 6,
		colors: ['#fff'],
		strokeColor: primary,
		strokeWidth: 3,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val
			}
		}
	},
	yaxis: {
		tickAmount: 7,
		labels: {
			formatter: function (val, i) {
				if (i % 2 === 0) {
					return val
				} else {
					return ''
				}
			}
		}
	}
}

export const knob = Knob({
	width: 65,
	height: 65,
	max: 100,
	lineCap: 'round',
	fgColor: primary,
	bgColor: '#eef5fb',
	className: 'knob-content-center',
	activeClass: 'knob-block text-center',
	value: '60',
	readOnly: true,
})

export const knobRight = Knob({
	width: 65,
	height: 65,
	max: 100,
	lineCap: 'round',
	fgColor: primary,
	bgColor: '#eef5fb',
	className: 'knob-content-center',
	activeClass: 'knob-block text-center',
	value: '60',
	readOnly: true,
})