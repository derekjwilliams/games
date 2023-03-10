import { create, createReportList } from './modules/canvas.js';
import { draw, reportArea, reportPerimeter } from './modules/square.js';
import randomSquare from './modules/square.js';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";




function vertex(){};
function outedge(){};
function inedge(){};
/*************
Sample Data
**************/
var colors = [
 [ 39, 255, 255 ],
 [ 230, 2, 127 ],
 [ 255, 135, 61 ],
 [ 255, 247, 94 ],
 [ 50, 237, 97 ],
 [ 255, 0, 0]
];

var dataset = [ 
[{color: colors[0], intensity: 0.1}, {color: colors[3], intensity: 0.5}, {color: colors[3], intensity: 0.75}],
[{color: colors[2], intensity: 0.1}, {color: colors[5], intensity: 0.3}, {color: colors[0], intensity: 0.9}],
[{color: colors[0], intensity: 0.25}, {color: colors[1], intensity: 0.2}, {color: colors[2], intensity: 0.9}],
[{color: colors[3], intensity: 0.84}, {color: colors[0], intensity: 0.5}, {color: colors[1], intensity: 0.75}],
[{color: colors[2], intensity: 0.1}, {color: colors[5], intensity: 0.3}, {color: colors[0], intensity: 0.9}],
];

var treedata = {};

/*************
Params
**************/

var cols = dataset.length;
var rows = dataset[0].length;
var radius = 50;
var margin = 10;
var cellSize = ( radius * 2 ) + margin;

/*************
D3 Magic
**************/

const tree = d3.select("#grid")
 .append("svg")
 .attr("width", cols * cellSize )
 .attr("height", rows * cellSize );
 
tree.selectAll("g")
 .data(dataset)
 .enter().append("g")
 .attr("transform", (_, i) => "translate(" + i * cellSize + ")")
 .selectAll("circle")
 .data(d => d)
 .enter().append("circle")
 .attr("fill", d => "rgb(" + d.color[0] + "," + d.color[1] + "," + d.color[2] + ")")
 .attr("fill-opacity",  d => d.intensity)
 .attr("r", radius)
 .attr("cx", radius)
 .attr("cy", (_, i) => radius + i * cellSize);

const grid = d3.select("#grid")
 .append("svg")
 .attr("width", cols * cellSize )
 .attr("height", rows * cellSize );
 
grid.selectAll("g")
 .data(dataset)
 .enter().append("g")
 .attr("transform", (_, i) => "translate(" + i * cellSize + ")")
 .selectAll("circle")
 .data(d => d)
 .enter().append("circle")
 .attr("fill", d => "rgb(" + d.color[0] + "," + d.color[1] + "," + d.color[2] + ")")
 .attr("fill-opacity",  d => d.intensity)
 .attr("r", radius)
 .attr("cx", radius)
 .attr("cy", (_, i) => radius + i * cellSize);



 
// import * as d3 from './d3/p/dist/d3.js';

// let myCanvas = create('myCanvas', document.body, 480, 320);
// let reportList = createReportList(myCanvas.id);

// let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
// reportArea(square1.length, reportList);
// reportPerimeter(square1.length, reportList);

// // Use the default
// let square2 = randomSquare(myCanvas.ctx);
