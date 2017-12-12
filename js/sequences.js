// Dimensions of sunburst.
var width = 600;
var height = 600;
var radius = Math.min((width-100), (height-100) / 2);
var totalValue = 1;
var totalFemaleValue = 1;
var total;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
    w: 300, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
    "SEAS": "#b4c7cd",
    "Science": "#7c628e",
    "Arts & Humanities": "#8e6f59",
    "Social Sciences": "#5a6f5e",
    "Materials Science & Mech Eng": "#CBDEE4",
    "Computer Science":"CBDEE4",
    "Applied Math": "CBDEE4",
    "Electrical Eng": "CBDEE4",
    "Biomedical Engineering": "CBDEE4",
    "Environmental Science & Eng": "CBDEE4",
    "Theater, Dance & Media": "#d5c3b5",//ding
    "Romance Langs & Lits": "#d5c3b5",//ding
    "Music": "#d5c3b5",//ding
    "History of Art and Architecture": "#d5c3b5",
    "East Asian Langs & Civs": "#d5c3b5",//ding
    "English": "#d5c3b5",
    "Religion": "#d5c3b5",
    "Celtic Langs & Lits": "#d5c3b5",
    "Slavic Langs & Lits": "#d5c3b5",//ding
    "Visual & Environmental Studies": "#d5c3b5",
    "Folklore & Mythology": "#d5c3b5",
    "Philosophy": "#d5c3b5",
    "Germanic Langs & Lits": "#d5c3b5",
    "Comparative Literature": "#d5c3b5",
    "South Asian Studies": "#d5c3b5",
    "The Classics": "#d5c3b5",
    "Near Eastern Langs & Civs": "#d5c3b5",
    "Linguistics": "#d5c3b5",
    "Statistics":"#b694ce",
    "Molecular & Cellular Biology":"#b694ce",
    "Organismic & Evolutionary Biology":"#b694ce",
    "Stem Cell & Regenerative Biology":"#b694ce",
    "Physics":"#b694ce",
    "Chemistry & Chemical Biology":"#b694ce",
    "Earth & Planetary Sciences":"#b694ce",
    "Astronomy":"#b694ce",
    "Math":"#b694ce",
    "Human Evolutionary Biology":"#b694ce",
    "Women, Gender, & Sexuality":"839C89",//ding
    "History of Science":"839C89",
    "African & African American Studies":"839C89",
    "History":"839C89",
    "Psychology":"839C89",
    "Sociology":"839C89",
    "Government":"839C89",
    "Anthropology":"839C89",
    "Social Studies":"839C89",
    "Economics":"839C89"
};

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + (width-100) / 2 + "," + (height-100) / 2 + ")");

var partition = d3.partition()
    .size([2 * Math.PI, radius * radius]);

var arc = d3.arc()
    .startAngle(function(d) { return d.x0; })
    .endAngle(function(d) { return d.x1; })
    .innerRadius(function(d) { return Math.sqrt(d.y0); })
    .outerRadius(function(d) { return Math.sqrt(d.y1); });



// Use d3.text and d3.csvParseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("data/facultygenderjson.csv", function(text) {
    var csv = d3.csvParseRows(text);
    var json = buildHierarchy(csv);
    createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

    // Basic setup of page elements.
    initializeBreadcrumbTrail();
    drawLegend();
    d3.select("#togglelegend").on("click", toggleLegend);

    // Bounding circle underneath the sunburst, to make it easier to detect
    // when the mouse leaves the parent g.
    vis.append("svg:circle")
        .attr("r", radius)
        .style("opacity", 0);

    // Turn the data into a d3 hierarchy and calculate the sums.
    var root2 = d3.hierarchy(json)
        .sum(function(d) { return d.femalesize; })

    var root = d3.hierarchy(json)
        .sum(function(d) { return d.size; })

    // For efficiency, filter nodes to keep only those large enough to see.
    var nodes = partition(root).descendants()
        .filter(function(d) {
            return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
        });

    var nodes2 = partition(root2).descendants()
        .filter(function(d) {
            return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
        });

    total = 0;
    for (i = 0; i < nodes.length; i++){
        for (j = 0; j < nodes2.length; j++){
            if (nodes[i].data.name == nodes2[j].data.name){
                total = total + 1;
                break;
            }
        }
    }

    for (i = 0; i < nodes2.length; i++){
        for (j = 0; j < nodes.length; j++){
            if (nodes2[i].data.name == nodes[j].data.name){
                nodes[j].value2 = nodes2[i].value;
                if (nodes[j].data.name == "root"){
                    totalFemaleValue = nodes[j].value2;
                    totalValue = nodes[j].value;
                }
                break;
            }
        }
    }

    var percentage = Math.floor(totalFemaleValue / totalValue * 100);
    var percentageString = percentage + "%";
    if (percentage < 0.1) {
        percentageString = "< 0.1%";
    }

    d3.select("#percentage")
        .text(percentageString);

    d3.select("#explanation")
        .style("visibility", "");

    var path = vis.data([json]).selectAll("path")
        .data(nodes)
        .enter().append("svg:path")
        .attr("display", function(d) { return d.depth ? null : "none"; })
        .attr("d", arc)
        .attr("fill-rule", "evenodd")
        .style("fill", function(d) { return colors[d.data.name]; })
        .style("opacity", 1)
        .on("mouseover", mouseover);

    vis.append("svg:text")
        .attr("transform", "translate(145,-65) rotate(65)")
        .attr("text-anchor", "middle")
        .attr("fill","white")
        .attr("font-family","Arial")
        .attr("font-weight", "bold")
        .attr("font-size","20")
        .text("ARTS & HUM.");

    vis.append("svg:text")
        .attr("transform", "translate(-55,-158) rotate(-18)")
        .attr("text-anchor", "middle")
        .attr("fill","white")
        .attr("font-family","Arial")
        .attr("font-weight", "bold")
        .attr("font-size","20")
        .text("SEAS");

    vis.append("svg:text")
        .attr("transform", "translate(-160,-30) rotate(-80)")
        .attr("text-anchor", "middle")
        .attr("fill","white")
        .attr("font-family","Arial")
        .attr("font-weight", "bold")
        .attr("font-size","20")
        .text("SCIENCE");

    vis.append("svg:text")
        .attr("transform", "translate(-10,178) rotate(3)")
        .attr("text-anchor", "middle")
        .attr("fill","white")
        .attr("font-family","Arial")
        .attr("font-weight", "bold")
        .attr("font-size","20")
        .text("SOCIAL SCI.");

    // Add the mouseleave handler to the bounding circle.
    d3.select("#container").on("mouseleave", mouseleave);

};
var department = "Overall";
var percentage = 31;
// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

    if (!d.value2){
        d.value2 = 0;
    }
    percentage = Math.floor(100 * d.value2 / d.value);
    var percentageString = percentage + "%";


    d3.select("#percentage")
        .text(percentageString);

    d3.select("#explanation")
        .style("visibility", "");

    fullstring = ["In "+d.data["name"]+",",d.value2 + " out of the " + d.value + " faculty are female"];

    var sequenceArray = d.ancestors().reverse();
    sequenceArray.shift(); // remove root node from the array
    updateBreadcrumbs(sequenceArray, fullstring);

    // Fade all the segments.
    d3.selectAll("path")
        .style("opacity", 0.3);

    // Then highlight only those that are an ancestor of the current segment.
    vis.selectAll("path")
        .filter(function(node) {
            return (sequenceArray.indexOf(node) >= 0);
        })
        .style("opacity", 1);

    department = d.data["name"]

    $('#current_concentration').attr('value', department);
    var myInput = d3.select("#current_concentration");
    myInput.on("change")();
}

// // Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {
    // var percentage = (totalFemaleValue / totalValue * 100).toPrecision(3);
    var percentageString = percentage + "%";
    if (percentage < 0.1) {
        percentageString = "< 0.1%";
    }
    d3.select("#percentage")
        .text(percentageString);

    d3.select("#explanation")
        .style("visibility", "");

    // Deactivate all segments during transition.
    d3.selectAll("path").on("mouseover", null);

    // Transition each segment to full opacity and then reactivate it.
    d3.selectAll("path")
        .transition()
        .duration(500)
        .style("opacity", 1)
        .on("end", function() {
            d3.select(this).on("mouseover", mouseover);
        });

    d3.select("#explanation")
        .style("visibility", "");

    $('#current_concentration').attr('value', department);
    var myInput = d3.select("#current_concentration");
    myInput.on("change")();
}

function initializeBreadcrumbTrail() {
    // Add the svg area.
    var trail = d3.select("#sequence").append("svg:svg")
        .attr("width", width)
        .attr("height", 200)
        .attr("id", "trail");
    // Add the label at the end, for the percentage.

    trail.append("svg:text")
        .attr("id", "endlabel1")
        .style("fill", "#000000");
    // Add the label at the end, for the percentage.
    trail.append("svg:text")
        .attr("id", "endlabel2")
        .style("fill", "#000000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
    var points = [];
    points.push("0,0");
    points.push(b.w + ",0");
    points.push(b.w+ b.t + "," + (b.h / 2));
    points.push(b.w + "," + b.h);
    points.push("0," + b.h);
    if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
        points.push(b.t + "," + (b.h / 2));
    }
    return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {
    // Data join; key function combines name and depth (= position in sequence).
    var trail = d3.select("#trail")
        .selectAll("g")
        .data(nodeArray, function(d) { return d.data.name + d.depth; });

    // Remove exiting nodes.
    if(trail) {
        trail.exit().remove();
    }
    // Add breadcrumb and label for entering nodes.
    var entering = trail.enter().append("svg:g");

    entering.append("svg:polygon")
        .attr("points", breadcrumbPoints)
        .style("fill", function(d) { return colors[d.data.name]; });

    entering.append("svg:text")
        .attr("x", (b.w + b.t) / 2)
        .attr("y", b.h/2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.data.name; });

    // Merge enter and update selections; set position for all nodes.
    entering.merge(trail).attr("transform", function(d, i) {
        return "translate(" + i * (b.w + b.s) + ", 0)";
    });


    // Now move and update the percentage at the end.
    d3.select("#trail").select("#endlabel1")
        .attr("x", (2+ 0.5) * (b.w + b.s)-700)
        .attr("y", b.h+50)
        .attr("font-size","25px")
        .text(percentageString[0]);

    d3.select("#trail").select("#endlabel2")
        .attr("x", (2 + 0.5) * (b.w + b.s)-700)
        .attr("y", b.h+80)
        .attr("font-size","25px")
        .text(percentageString[1]);


    // Make the breadcrumb trail visible, if it's hidden.
    d3.select("#trail")
        .style("visibility", "");

}

function drawLegend() {

    // Dimensions of legend item: width, height, spacing, radius of rounded rect.
    var li = {
        w: 75, h: 30, s: 3, r: 3
    };

    var legend = d3.select("#legend").append("svg:svg")
        .attr("width", li.w)
        .attr("height", d3.keys(colors).length * (li.h + li.s));

    var g = legend.selectAll("g")
        .data(d3.entries(colors))
        .enter().append("svg:g")
        .attr("transform", function(d, i) {
            return "translate(0," + i * (li.h + li.s) + ")";
        });

    g.append("svg:rect")
        .attr("rx", li.r)
        .attr("ry", li.r)
        .attr("width", li.w)
        .attr("height", li.h)
        .style("fill", function(d) { return d.value; });

    g.append("svg:text")
        .attr("x", li.w / 2)
        .attr("y", li.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.key; });
}

function toggleLegend() {
    var legend = d3.select("#legend");
    if (legend.style("visibility") == "hidden") {
        legend.style("visibility", "");
    } else {
        legend.style("visibility", "hidden");
    }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how
// often that sequence occurred.
function buildHierarchy(csv) {
    var root = {"name": "root", "children": []};
    for (var i = 0; i < csv.length; i++) {
        var sequence = csv[i][0];
        var femalesize = +csv[i][1];
        var size = +csv[i][2];
        if (isNaN(size)) { // e.g. if this is a header row
            continue;
        }
        var parts = sequence.split("-");
        var currentNode = root;
        for (var j = 0; j < parts.length; j++) {
            var children = currentNode["children"];
            var nodeName = parts[j];
            var childNode;
            if (j + 1 < parts.length) {
                // Not yet at the end of the sequence; move down the tree.
                var foundChild = false;
                for (var k = 0; k < children.length; k++) {
                    if (children[k]["name"] == nodeName) {
                        childNode = children[k];
                        foundChild = true;
                        break;
                    }
                }
                // If we don't already have a child node for this branch, create it.
                if (!foundChild) {
                    childNode = {"name": nodeName, "children": []};
                    children.push(childNode);
                }
                currentNode = childNode;
            } else {
                // Reached the end of the sequence; create a leaf node.
                childNode = {"name": nodeName, "size": size, "femalesize": femalesize};
                children.push(childNode);
            }
        }
    }
    return root;
};