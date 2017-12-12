
var allData = [];

// Variable for the visualization instance
var ivyLeagueMap;

loadData();

function loadData() {

  // TO-DO: LOAD DATA
    d3.json("data/ivyleague.json", function(error,jsonData){
        // if (error) throw error;
        // Work with data
        allData = jsonData;
        createVis();
    });
}


function createVis() {
  // TO-DO: INSTANTIATE VISUALIZATION
    // appropriate center
    var map_center = [42.310346, -73.058880];
    ivyLeagueMap = new IvyLeagueMap("ivy-league-map",allData,map_center);
}


$("input[name='rating']").click(function(){
    $('input[type="radio"]:checked').each(function() {
        guess = this.value*10
    });
    // d3.select("#guess").style("display", "none");
    var el = document.getElementById("answer");
    if (guess < 30){
        previous = "<hr><br><p class=\"answerLine\">Your guess is " + guess + "%. Very close! The correct answer is 31.7%.</p><br><br>"}
    else if(guess == 30){
        previous = "<hr><br><p class=\"answerLine\">Correct! About 3 in 10 (31.7% to be exact) faculty are listed as female.</p><br><br>"}
       else {
        previous = "<hr><br><p class=\"answerLine\">Your guess is " + guess + "%. Well, actually the correct answer is 31.7%.</p><br><br>"
    }

    answer = "                <i class=\"fa fa-female female fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-female female fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-female female fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n" +
        "                <i class=\"fa fa-male male fa-5x\" aria-hidden=\"true\"></i>\n";

    el.innerHTML=previous+answer;

});

