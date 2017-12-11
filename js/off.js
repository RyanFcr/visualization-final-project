var margin_off = {top: 10, right: 50, bottom: 10, left: 10};
var height_off = 500;
var width_off = 900;

var svg_off = d3.select("#off").append("svg")
    .attr("width", width_off)
    .attr("height", height_off)
    .append("g")
    .attr("transform", "translate(" + margin_off.left + "," + margin_off.top + ")")

svg_off.append("g")
    .append("text")
    .text("Something seems a little off...")
    .attr("fill", "#e25488")
    .attr("x", 100)
    .attr("y", height_off/2)
    .attr("font-size", "50px")
    .attr("font-family", "Open Sans");
