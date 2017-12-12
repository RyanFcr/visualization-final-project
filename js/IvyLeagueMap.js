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
