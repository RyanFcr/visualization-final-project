var allData = [];
var filteredData;
var pie;
var path1;
var path2;
var path3;
var label1;
var label2;
var label3;
var arc1;
var arc2;
var arc3;
var color;


// Initialize svg
var width = 200;
var height = 200;

// full_prof
var full_svg = d3.select("#full_prof")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

full_svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 13)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Full Professor");

//assoc_prof
var assoc_svg = d3.select("#assoc_prof")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

assoc_svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 13)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Associate Professor");

// assistant prof

var asst_svg = d3.select("#asst_prof")
    .append("svg")
    .attr("width", width+100)
    .attr("height", height)
    .append("g");

asst_svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 13)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Assistant Professor");


var radius = Math.min(width, height) / 2-15,
    g1 = full_svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
    g2 = assoc_svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),
    g3 = asst_svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("data/Faculty_Gender.csv", function(error, data){
    if(!error){
        allData = data;

        // Convert string to date and string to float


        allData.forEach(function(d){
            d.Full_Profs_M = +d.Full_Profs_M;
            d.Full_Profs_F = +d.Full_Profs_F;
            d.Assoc_M = +d.Assoc_M;
            d.Assoc_F = +d.Assoc_F;
            d.Asst_M = +d.Asst_M;
            d.Asst_F = +d.Asst_F;
        });
        createPieChart();
    }

});


function createPieChart() {

    color = d3.scaleOrdinal([ "#58adf2","#e25488"]);

    pie = d3.pie().sort(function(a, b) {
        return a.value.localeCompare(b.value);
    });

    path1 = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    label1 = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    pie2 = d3.pie();

    path2 = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    label2 = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    pie3 = d3.pie();

    path3 = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    label3 = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    wranglingPieChart();
}

function wranglingPieChart() {

    var selectValue = d3.select("#current_concentration").property("value");

    filteredData = allData.filter(function(d){
        return d.Department == selectValue;
    });

    updatePieChart();
}

d3.select("#current_concentration").on("change", function() {
    wranglingPieChart();
});

function updatePieChart(){
    full_svg.selectAll(".arc").remove();

    color = d3.scaleOrdinal([ "#58adf2","#e25488"]);

    pie = d3.pie();

    path1 = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    label1 = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    if (filteredData[0]["Full_Profs_M"] != 0 && filteredData[0]["Full_Profs_F"] !=0){
        arc1 = g1.selectAll(".arc")
            .data(pie([filteredData[0]["Full_Profs_M"],filteredData[0]["Full_Profs_F"]]))
            .enter().append("g")
            .attr("class", "arc");

        arc1.append("path")
            .attr("d", path1)
            .attr("fill", function(d, i) { return color(i); });

        arc1.append("text")
            .attr("transform", function(d) {
                var _d = label1.centroid(d);
                _d[0]-=8;	//multiply by a constant factor
                _d[1]-=5;	//multiply by a constant factor
                return "translate(" + _d + ")";
            })
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text(function(d) {return d.value;});
    }
    else{
        arc1 = g1.selectAll(".arc")
            .data(pie([0,1]))
            .enter().append("g")
            .attr("class", "arc");

        arc1.append("path")
            .attr("d", path1)
            .attr("fill", function(d, i) { if(i!=999){return "lightgrey"; }});

        arc1.append("text")
            .attr("transform", function(d) { return "translate(-40,0)";})
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text("Data N/A");
    }


    //assoc
    assoc_svg.selectAll(".arc").remove();

    path2 = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    label2 = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    if (filteredData[0]["Assoc_M"] != 0 && filteredData[0]["Assoc_F"] !=0){
        arc2 = g2.selectAll(".arc")
            .data(pie([filteredData[0]["Assoc_M"],filteredData[0]["Assoc_F"]]))
            .enter().append("g")
            .attr("class", "arc");

        arc2.append("path")
            .attr("d", path2)
            .attr("fill", function(d, i) { return color(i); });
        arc2.append("text")
            .attr("transform", function(d) { return "translate(-20,0)";})
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text(function(d){return d.Assoc_M});

        arc2.append("text")
            .attr("transform", function(d) {
                var _d = label1.centroid(d);
                _d[0]-=8;	//multiply by a constant factor
                _d[1]-=5;	//multiply by a constant factor
                return "translate(" + _d + ")";
            })
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text(function(d) {return d.value;});
    }
    else{
        arc2 = g2.selectAll(".arc")
            .data(pie([0,1]))
            .enter().append("g")
            .attr("class", "arc");

        arc2.append("path")
            .attr("d", path1)
            .attr("fill", function(d, i) { if(i!=999){return "lightgrey"; }});

        arc2.append("text")
            .attr("transform", function(d) { return "translate(-40,0)";})
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text("Data N/A");
    }

    //asst
    asst_svg.selectAll(".arc").remove();

    path3 = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    label3 = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    if (filteredData[0]["Asst_M"] != 0 && filteredData[0]["Asst_F"] !=0){
        arc3 = g3.selectAll(".arc")
            .data(pie([filteredData[0]["Asst_M"],filteredData[0]["Asst_F"]]))
            .enter().append("g")
            .attr("class", "arc");

        arc3.append("path")
            .attr("d", path2)
            .attr("fill", function(d, i) { return color(i); });

        arc3.append("text")
            .attr("transform", function(d) {
                var _d = label1.centroid(d);
                _d[0]-=8;	//multiply by a constant factor
                _d[1]-=5;	//multiply by a constant factor
                return "translate(" + _d + ")";
            })
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text(function(d) {return d.value;});
    }
    else{
        arc3 = g3.selectAll(".arc")
            .data(pie([0,1]))
            .enter().append("g")
            .attr("class", "arc");

        arc3.append("path")
            .attr("d", path3)
            .attr("fill", function(d, i) { if(i!=999){return "lightgrey"; }});

        arc3.append("text")
            .attr("transform", function(d) { return "translate(-40,0)";})
            .attr("dy", "0.35em")
            .attr("font-size","20")
            .attr("fill","white")
            .text("Data N/A");
    }

}

// add label (Men: #8dd3c7 Women: fc8d62
var ordinal = d3.scaleOrdinal()
    .domain(["Male","Female"])
    .range(["#58adf2","#e25488"])

asst_svg.append("g")
    .attr("class","legendOrdinal")
    .attr("transform","translate(200,100)")

var legendOrdinal =d3.legendColor()
    .shape("path",d3.symbol().type(d3.symbolSquare).size(100))
    .cellFilter(function(d){return d.label !=="e"})
    .scale(ordinal);

asst_svg.select(".legendOrdinal").call(legendOrdinal);