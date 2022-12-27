IvyLeagueMap = function(_parentElement, _data,_mapPosition) {

    this.parentElement = _parentElement;
    this.data = _data;
    this.center = _mapPosition;

    L.Icon.Default.imagePath = 'img/';

    this.margin = {
        top: 40,
        right: 10,
        bottom: 40,
        left: 60
    };

    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

    this.initVis();
}

/*
 *  Initialize station map
 */

IvyLeagueMap.prototype.initVis = function() {
    var vis = this;
    vis.map = L.map(vis.parentElement,{
        dragging:false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        tap: false,
        keyboard: false,
        zoomControl: false,
        attributionControl: false,
        prefix: false
    }).setView(vis.center,6);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
    }).addTo(vis.map);


    vis.wrangleData();
}

/*
 *  Data wrangling
 */

IvyLeagueMap.prototype.wrangleData = function() {
    var vis = this;

    // Currently no data wrangling/filtering needed
    vis.displayData = vis.data;
    // Update the visualization
    vis.updateVis();
}


/*
 *  The drawing function
 */

IvyLeagueMap.prototype.updateVis = function() {
    var vis = this;

    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'img/marker-shadow.png',
            iconSize: [30,50],
            iconAnchor: [12, 41],
            popupAnchor: [0, -28]
        }
    });

    // https://icons8.com/icon/set/school-mates/all
    var harvardMarker = new LeafIcon({ iconUrl: 'img/harvardlogo.jpg' });

    vis.markerLayer = L.layerGroup().addTo(vis.map);
    updateBarChart("Harvard University", vis);

    // //create marker
    $.each(vis.displayData,function(index,d){
        var label = "<strong>"+d.name+"</strong><br/>";
        var school = d.name;

        var Marker = new LeafIcon({ iconUrl: 'img/'+d.icon });


        // if (d.name == "Harvard University"){
        vis.marker = L.marker([d.lat, d.long],{icon: Marker})
            .bindTooltip(label).on("click",function(d){
                updateBarChart(school, vis);
            });

        // Add marker to layer group
        vis.markerLayer.addLayer(vis.marker);
    })
};

function displayBarChart(event) {
    // Get the bar chart element
    var chart = document.getElementById("bar-chart");
  
    // Make the chart visible
    chart.style.display = "block";
  
    // Create the bar chart using D3.js or Chart.js
    // (code for creating the chart goes here)
    // Set the dimensions of the chart
  var width = 500;
  var height = 500;

  // Set the data for the chart
  var data = [
    { label: "Category 1", value: 50 },
    { label: "Category 2", value: 25 },
    { label: "Category 3", value: 75 }
  ];

  // Create a scale to map the data values to the height of the bars
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([height, 0]);

  // Create an SVG element to contain the chart
  var svg = d3.select("#bar-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) { return i * (width / data.length); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", width / data.length - 10)
    .attr("height", function(d) { return height - yScale(d.value); });
}

  
  // Add event listeners to the images
  var image1 = document.getElementById("image1");
  image1.addEventListener("click", displayBarChart);
  
  var image2 = document.getElementById("image2");
  image2.addEventListener("click", displayBarChart);
  
  var image3 = document.getElementById("image3");
  image3.addEventListener("click", displayBarChart);
  