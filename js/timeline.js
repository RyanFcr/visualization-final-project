// resource: https://codepen.io/mhartley/pen/yoEEJZ?editors=0010

var twidth = 1250,
    theight = 125;

var svgTime = d3.select('#timeline').append('svg')
    .attr('width', twidth)
    .attr('height', theight)
    .append('g');

var mindate = new Date('1902'),
    maxdate = new Date('2015');

var categories = ['Harvard', 'Yale', 'Princeton', 'Brown', 'Columbia', 'UPenn', 'Dartmouth', 'Cornell', 'general'];

var timeScale = d3.scaleTime()
    .domain([mindate, maxdate])
    .range([0, twidth]);

var yScale = d3.scaleOrdinal()
    .domain(categories)
    .range([theight / 2]);

var textColor = d3.scaleOrdinal()
    .domain(categories)
    .range(["darkred", "darkblue", "orange", "brown", "skyblue", "blue", "darkgreen", "red", "black"]);

var timeaxis = d3.axisBottom(timeScale)
    .ticks(d3.timeYear.every(10))
    .tickFormat(d3.timeFormat('%Y'));

svgTime.append('g')
    .attr('class', 'timescale')
    .call(timeaxis)
    .attr('transform', 'translate(0,' + theight / 2 + ')')
    .attr('font-size', '14px')
    .attr('fill', 'lightgray');

var mapx = function(d) { return timeScale(d.year); };
var yval = function(d) { return d.type; } ;
var mapy = function(d) { return yScale(yval(d)); };


var tool_tip;

var showMoreInfo = function(d) {
    d3.select("#timeline-description").style("display", "block");
    document.getElementById("timeline-description").innerHTML = "<strong id='description' style='color:" + textColor(yval(d)) + "';>" + d3.timeFormat("%Y")(d.year) + ":  " + d.event + "</strong>" + "<br>" + "<br>" + "<p id='moreDetail'>" + d.description + "</p>";
};

var data;
var general;
var selectedValue;

var filtered;

d3.csv('data/history.csv', function(error,csv){
    if (error) return error;

    data = csv;

    data.forEach(function(d) {
        d.year = d3.timeParse('%Y')(d.year);
        d.event = d.event.toString();
    });

    general = data.filter(function(d) {
        return d.type == "general";
    });

    tool_tip = d3.tip()
        .attr("class", "d3-tip tooltip")
        .offset([-10, 0])
        .html(function(d) { return "<strong>" + d3.timeFormat("%Y")(d.year) + ":  " + d.event + "</strong>"});

    svgTime.call(tool_tip);

    var generaleventdot = svgTime.selectAll('.generalevent')
        .data(general)
        .enter().append('g')
        .attr('transform', function(d) { return 'translate(' + mapx(d) + ',' + mapy(d) + ')' })
        .attr('class', 'generalevent');

    generaleventdot.append('circle')
        .attr('r', '3px')
        .attr('cy', '3px')
        .attr('fill', function(d) {return textColor(yval(d)) })
        .on("mouseover", tool_tip.show)
        .on("mouseout", tool_tip.hide)
        .on("click", showMoreInfo);

    updateVisualization();

    $( "input[class='school-history']" ).on("change",updateVisualization);

});

$("input[id='select-all']").click(function(event) {
    if(this.checked) {
        // Iterate each checkbox
        $("input[class='school-history']").each(function(d) {
            this.checked = true;
        });
        updateVisualization();
    }
    else{
        $("input[class='school-history']").each(function(d) {
            if(this.value == "Harvard"){
                this.checked = true;
            }
            else{
                this.checked = false;
            }
        });
        updateVisualization();
    }
});

svgTime.selectAll('g.event');

selectedValue = "Harvard";

// Render visualization
function updateVisualization() {

    svgTime.call(tool_tip);

    svgTime.selectAll(".event").remove();

    // Update selectedValue
    var checked = [];

    $( "input[class='school-history']" ).each(function (d) {
        if (this.checked == true){
            checked.push(this.value);
        }
    })

    if (checked.length > 0) {
        selectedValue = categories.filter(function(d) {return checked.includes(d);});
    }

    filtered = data.filter(function(d) {
        return selectedValue.indexOf(d.type) > -1;
    });

    var eventdotGroup = svgTime.selectAll('.event')
        .data(filtered);

    var eventdot = eventdotGroup.enter().append('g')
        .attr('class', 'event')
        .attr('transform', function(d) { return 'translate(' + mapx(d) + ',' + mapy(d) + ')' });

    eventdot.append('circle');

    eventdotGroup.merge(eventdot).append('circle')
        .attr('r', '6px')
        .attr('cy', '3px')
        .attr('fill', function(d) {return textColor(yval(d)) })
        .on("mouseover", tool_tip.show)
        .on("mouseout", tool_tip.hide)
        .on("click", showMoreInfo);

}