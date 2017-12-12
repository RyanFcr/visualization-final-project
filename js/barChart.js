var schoolData;

function updateBarChart(school, vis) {

    var margin = {top: 10, right: 10, bottom: 10, left: 10};
    var height = 500;
    var width = 500;

    d3.csv("data/mapdata.csv", function(data) {
        schoolData = data.filter(function(d) {
            return d.name == school;
        });

        schoolData.forEach(function(d){
            // Convert numeric values to 'numbers'
            d.full_male = +d.full_male;
            d.full_female = +d.full_female;
            d.full_percent = +d.full_percent;
            d.full_diff = +d.full_diff;
            d.assistant_men = +d.assistant_men;
            d.assistant_women = +d.assistant_women;
            d.assistant_percent = +d.assistant_percent;
            d.assistant_diff = +d.assistant_diff;
            d.associate_men = +d.associate_men;
            d.associate_women = +d.associate_women;
            d.associate_percent = +d.associate_percent;
            d.associate_diff = +d.associate_diff;
        });

        // console.log(schoolData);
        d3.select("#ivy-league-bar-chart").selectAll("svg").remove();

        var svg = d3.select("#ivy-league-bar-chart").append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid #e25488")
            .style("border-radius", "50px")
            .style("padding-left","-10px")
            // .attr("transform","translate(150,40)")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .append("text")
            .attr("x", width / 2)
            .attr("y", 50)
            .text(schoolData[0]["name"]).style("text-anchor", "middle")
            .attr("font-weight", "900")
            .attr("font-size", "20")
            .attr("font-family", "Open Sans");

        svg.append("g")
            .append("text")
            .attr("x", "34%")
            .attr("y", 210)
            .text(Math.round(schoolData[0]["female"] * 100) + "% ")
            .style("text-anchor", "middle")
            .attr("font-size", "20")
            .attr("font-weight", "bold")
            .attr("fill", "#e25488");

        svg.append("g")
            .append("text")
            .attr("x", "39%")
            .attr("y", 210)
            .text("of faculty are female.")
            .attr("font-size", "18")
            .attr("font-family", "Open Sans");

        var image_width = 125;
        svg.append("g")
            .append("svg:image")
            .attr("x", (width / 2) - (image_width / 2))
            .attr("y", 0)
            .attr("xlink:href", "data/images/" + schoolData[0]["name"] + ".png")
            .attr("width", image_width)
            .attr("height", 250)
            .attr("align","center");

        svg.append("rect")
            .style("fill", "#ffffff")
            .attr("x", "6.5%")
            .attr("y", 310)
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("height", 100)
            .attr("width", 140);

        svg.append("rect")
            .style("fill", "#ffffff")
            .attr("x", "36.5%")
            .attr("y", 310)
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("height", 100)
            .attr("width", 140);

        svg.append("rect")
            .style("fill", "#ffffff")
            .attr("x", "66.5%")
            .attr("y", 310)
            .attr("rx", 10)
            .attr("ry", 10)
            .attr("height", 100)
            .attr("width", 140);

        svg.append("g")
            .append("text")
            .text("Full Professors")
            .style("text-anchor", "middle")
            .attr("font-size", "14")
            .attr("font-weight", "bold")
            .attr("x", "20%")
            .attr("y", 330)
            .attr("font-family", "Open Sans");

        svg.append("g")
            .append("text")
            .text("Associate Professors")
            .style("text-anchor", "middle")
            .attr("font-size", "13.5")
            .attr("font-weight", "bold")
            .attr("x", "50%")
            .attr("y", 330)
            .attr("font-family", "Open Sans");

        svg.append("g")
            .append("text")
            .text("Assistant Professors")
            .style("text-anchor", "middle")
            .attr("font-size", "13.5")
            .attr("font-weight", "bold")
            .attr("x", "80%")
            .attr("y", 330)
            .attr("font-family", "Open Sans");

        svg.append("g")
            .append("text")
            .text(Math.round(schoolData[0]["full_percent"] * 100) + "%")
            .style("text-anchor", "middle")
            .attr("font-size", "40")
            .attr("font-weight", "bold")
            .attr("fill", "#e25488")
            .attr("x", "20%")
            .attr("y", 380);

        svg.append("g")
            .append("text")
            .text(Math.round(schoolData[0]["associate_percent"] * 100) + "%")
            .style("text-anchor", "middle")
            .attr("font-size", "40")
            .attr("font-size", "40")
            .attr("font-weight", "bold")
            .attr("fill", "#e25488")
            .attr("x", "50%")
            .attr("y", 380);

        svg.append("g")
            .append("text")
            .text(Math.round(schoolData[0]["assistant_percent"] * 100) + "%")
            .style("text-anchor", "middle")
            .attr("font-size", "40")
            .attr("font-weight", "bold")
            .attr("fill", "#e25488")
            .attr("x", "80%")
            .attr("y", 380);

        svg.append("g")
            .append("text")
            .text("Female faculty earn as")
            .style("text-anchor", "middle")
            .attr("font-size", "18")
            .attr("x", width/2)
            .attr("y", 290)
            .attr("font-family", "Open Sans");

        svg.append("g")
            .append("text")
            .text("of their male counterparts.")
            .style("text-anchor", "middle")
            .attr("font-size", "18")
            .attr("x", width/2)
            .attr("y", 440)
            .attr("font-family", "Open Sans");

        svg.append('rect')
            .attr('class', 'bg-rect')
            .attr("x", 120)
            .attr("y", 230)
            .attr('rx', 10)
            .attr('ry', 10)
            .attr('fill', '#58adf2')
            .attr('height', 15)
            .attr('width', function(){
                return width/2;
            });

        var progress = svg.append('rect')
            .attr('class', 'progress-rect')
            // .attr('fill', function(){
            // 	return colorScale(currentState);
            // })
            .attr('fill', "#e25488")
            .attr('height', 15)
            //.attr('width', 100)
            .attr('rx', 10)
            .attr('ry', 10)
            .attr('x', 120)
            .attr("y", 230);

        progress.transition()
            .duration(1000)
            .attr('width', function(){
                return schoolData[0]["female"] * (width/2);
            });

        function moveProgressBar(state){
            progress.transition()
                .duration(1000)
                .attr('fill', "#e25488")
                // function(){
                //return colorScale(state);
                // return schoolData[0]["color"];
                // })
                .attr('width', function(){
                    return schoolData[0]["female"] * width;
                });
        }

    });
}