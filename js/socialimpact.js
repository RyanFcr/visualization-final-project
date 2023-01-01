var myChart = echarts.init(document.getElementById('socialimpact'),'essos');
const data25 = [
    [1.8,82.5,22.12,368,104,'Anthony Davis'],
 [6.1,4796,17.64,1541,695,'Kyrie Irving'],
 [3.4,2046.5,5.96,0,105,'Karl-Anthony Towns'],
 [3.5,1778.5,6.01,182,54.5,'Andrew Wiggins'],
 [7.2,413.5,22.12,55.5,40.5,'Bradley Beal'],
 [5.2,1210.5,2.22,1170.5,335.5,'Devin Booker'],
 [3.2,1075.5,4.83,6852.5,2941,'Joel Embiid'],
 [3.5,815,5.37,267,125,'Jabari Parker'],
 [6.6,1103,2.24,178.5,67,'Zach LaVine'],
 [4.8,20,4.32,485,214,'Kristaps Porzingis'],
 [3.7,2,2.71,51.5,20,'Dennis Schroder'],
 [5.3,253.5,17,21,10,'Evan Fournier'],
 [1.9,8,1.36,0,1,'Nikola Jokic'],
 [3.8,327,17.2,2,4,'Tobias Harris'],
 [5.3,715,6.55,78,28,'Victor Oladipo'],
 [6.1,1327,5.33,0,232,'D\'Angelo Russell'],
 [4.5,187.5,1.66,6,2.5,'Gary Harris'],
 [4.3,1386.5,12.5,55.5,179.5,'Jordan Clarkson'],
 [1.4,10,2.46,53,31,'Myles Turner'],
 [0.5,713,17.15,147,195,'Enes Kanter'],
 [0,368.5,2.12,731,225.5,'Rudy Gobert'],
 [5.8,223.5,3.68,9,10,'Kentavious Caldwell-Pope'],
 [3.4,11,5.63,3,6,'Tyler Johnson'],
 [0.9,519,3.27,102,59,'Julius Randle'],
 [1.8,4,2.61,19,8,'Elfrid Payton'],
 [3.3,666,4.35,42.5,16,'Aaron Gordon'],
 [4,525,11,75.5,23,'Austin Rivers'],
 [0,6,14.38,65,40,'Jonas Valanciunas'],
 [4.7,517,2.73,112.5,29,'Frank Kaminsky'],
 [0,1132,3.14,36,99,'Steven Adams'],
 [3.2,545,3.24,69,21,'Emmanuel Mudiay'],
 [1.9,573,2.59,88.5,33.5,'Justise Winslow'],
 [3.8,193.5,18.5,11.5,9,'Allen Crabbe'],
 [4.6,811.5,3.52,512,333,'Buddy Hield'],
 [4.2,399.5,3.58,1,9,'Marcus Smart'],
 [0,376.5,5.32,90,29,'Cody Zeller'],
 [0,3,1.92,45,43.5,'Jusuf Nurkic'],
 [4.3,192,1.47,42,10,'Josh Richardson'],
 [2.5,204.5,8.99,0,14.5,'Maurice Harkless'],
 [4.2,411,3.21,0,62.5,'Jamal Murray'],
 [4.5,451,2.99,28,11,'Nik Stauskas'],
 [2.4,1203,5.28,194,100,'Brandon Ingram'],
 [2.7,252,2.94,0,22,'Marquese Chriss'],
 [0.1,575.5,13,29,11,'Michael Kidd-Gilchrist'],
 [0,663,4.38,105,64,'Nerlens Noel'],
 [0.2,2,1.44,0,55.5,'Willy Hernangomez'],
 [3.2,198.5,1.56,0,28,'Caris LeVert'],
 [0,456.5,3.55,0,17,'Willie Cauley-Stein'],
 [2.8,272.5,4.01,30,17,'Ben McLemore'],
 [0.2,270,4.82,10.5,6,'Alex Len'],
 [2.6,4,1.51,5,10,'Justin Anderson'],
 [1.5,193,1.45,37,73,'Bobby Portis'],
 [1.5,193,1.52,37,73,'Bobby Portis'],
 [1.7,441,4.74,0,100,'Jaylen Brown'],
 [2.4,331,1.72,139,13,'Sam Dekker'],
 [2.3,483,3.94,48.5,28,'Dante Exum'],
 [2.9,334.5,2.34,48,12,'Trey Lyles'],
 [2.1,72,1.58,5,9,'Troy Williams'],
 [2.1,371,1.64,25,32.5,'Jerian Grant'],
 [2.2,5,1.31,0,17,'Andrew Harrison'],
 [2,550.5,2.44,0,82,'Domantas Sabonis'],
 [0.1,172,2.2,7,3,'Georgios Papagiannis'],
 [1.1,202.5,1.58,11.5,14,'Delon Wright'],
 [2.4,208,1.91,2,6,'Terry Rozier'],
 [2.9,276,9.21,149,31,'Meyers Leonard'],
 [1.8,82,1.31,13.5,7,'Chasson Randle'],
 [2.8,324.5,2.11,38.5,21,'Cameron Payne'],
 [3.6,403,2.09,23,24,'Denzel Valentine'],
 [2.1,19,1.02,9,10.5,'Anthony Bennett'],
 [1.2,429.5,3.39,41,14,'Trey Burke'],
 [2.2,396.5,3.91,272,207,'Mario Hezonja'],
 [2,10,2.97,0,19,'Stanley Johnson'],
 [0.3,218,2.75,23.5,12,'Noah Vonleh'],
 [1.3,18,1.73,11,6,'Tyler Ennis'],
 [1.3,976,2.57,0,39.5,'Thon Maker'],
 [2.5,11,0.06,3,3,'Anthony Brown'],
 [0.6,80.5,1.47,2,4,'Jarell Martin'],
 [1.3,159,1.63,0,14,'Malik Beasley'],
 [0.9,597.5,3.87,165,47,'Kris Dunn'],
 [1.2,472,1.47,0,14,'Tyus Jones'],
 [2,128,1.81,2,7,'Rashad Vaughn'],
 [1.6,368.5,5.63,11,2,'Jared Sullinger'],
 [1.8,147,1.7,6.5,5,'Henry Ellenson'],
 [0.5,81.5,1.47,29.5,14,'Briante Weber'],
 [0.8,116.5,1.31,0,17.5,'Fred VanVleet'],
 [1.2,12,1.83,0,12,'James Young'],
 [0.7,270.5,1.59,11,8,'Bruno Caboclo'],
 [0,129.5,1.47,0,3,'Jordan Mickey']
   ];
 const data30 = [
 [7.2,4279,26.5,2130.5,559,'Russell Westbrook'],
 [9.3,3279,26.5,969,321.5,'James Harden'],
 [5,1625.5,16.96,102,91.5,'DeMarcus Cousins'],
 [7.7,1830.5,24.33,186.5,43,'Damian Lillard'],
 [5.2,2446.5,17.64,2701.5,716.5,'Kawhi Leonard'],
 [10,17570.5,12.11,12278,2893,'Stephen Curry'],
 [5,6288.5,26.5,1425.5,366,'Kevin Durant'],
 [3.3,41,17.55,89.5,30,'Jimmy Butler'],
 [6.6,1600,18.31,228.5,128,'Paul George'],
 [7.6,640.5,12,59.5,32.5,'Kemba Walker'],
 [3.5,57,16.96,0,77,'John Wall'],
 [8.3,3708,16.66,797,225,'Klay Thompson'],
 [5.1,689,16.07,319,50.5,'Gordon Hayward'],
 [1.9,2257,20.14,269,98.5,'Blake Griffin'],
 [4.7,434.5,14,9,30.5,'Eric Bledsoe'],
 [6.1,11,26.54,257.5,90,'Mike Conley'],
 [6.5,2013.5,21.17,866.5,194.5,'Kevin Love'],
 [5.1,350,15.05,29,6,'Danilo Gallinari'],
 [0.9,3273.5,21.32,1864,2504.5,'Derrick Rose'],
 [8.8,346,12.39,55,26,'Eric Gordon'],
 [4.7,512,2.9,0,7,'Dion Waiters'],
 [4.6,166,11.23,31.5,18.5,'Wilson Chandler'],
 [4.2,547.5,11.29,0,39,'Jrue Holiday'],
 [3.1,12,8.8,17.5,13.5,'Jeff Teague'],
 [5.3,374.5,20.87,114.5,66,'Nicolas Batum'],
 [3.6,255.5,15.2,16,9,'Khris Middleton'],
 [1,10,11.75,5.5,35.5,'Nikola Vucevic'],
 [4.3,3147,11.48,936.5,197.5,'Jeremy Lin'],
 [4.5,5.5,4.62,6,23,'Marcus Morris'],
 [2.6,331.5,7.4,9,18,'Markieff Morris'],
 [5.5,438.5,6.29,55,47,'Jae Crowder'],
 [3.9,190,3.53,1,3,'Will Barton'],
 [2.6,295,5.23,4,7,'Darren Collison'],
 [0,271,17.15,9,7,'Greg Monroe'],
 [2.6,763,13.55,262.5,76,'Ricky Rubio'],
 [1.7,188,9.42,2,5,'Jerryd Bayless'],
 [5,446.5,10,0,0,'Terrence Ross'],
 [1.6,269,14.15,0,1.5,'Thaddeus Young'],
 [5.4,5,5.78,119,50.5,'Nikola Mirotic'],
 [6.4,204,6,18,12,'Wayne Ellington'],
 [3,701,10.2,6,9,'Tyreke Evans'],
 [3.5,2946,15.33,627,168.5,'Draymond Green'],
 [1.1,160.5,9.25,16.5,8,'Trevor Booker'],
 [0.1,376.5,12.08,14,8,'Kenneth Faried'],
 [2.8,151,8.08,0,10,'E\'Twaun Moore'],
 [0.2,295,11.05,25,6.5,'Derrick Favors'],
 [4.4,522,3.58,112,19,'Patty Mills'],
 [0.8,939,1.4,8,5,'Michael Beasley'],
 [1.7,516.5,7.32,48.5,15,'Cory Joseph'],
 [2.4,105,9,1,8,'Gerald Henderson'],
 [3.8,173,6.54,36.5,15,'Jodie Meeks'],
 [2.6,457,3.09,56.5,16,'Kelly Olynyk'],
 [1.8,564,16.39,17,13,'Evan Turner'],
 [3.5,330.5,7.68,33,9,'Al-Farouq Aminu'],
 [3.4,564.5,1.4,80,12,'Marreese Speights'],
 [5.3,106,3.33,30,10,'Troy Daniels'],
 [0,1365.5,15.33,368,211,'Tristan Thompson'],
 [4.2,146,5.2,14.5,2,'Langston Galloway'],
 [2.2,121.5,2.43,6,3,'Shelvin Mack'],
 [2.8,910.5,9.61,175,30,'Matthew Dellavedova'],
 [4.6,6,10,0,15,'Danny Green'],
 [3.4,178,2.15,86.5,4,'Joe Ingles'],
 [3.9,8,6.05,53.5,8,'Patrick Patterson'],
 [0,152.5,5.71,0,6,'Brandan Wright'],
 [1.8,111,10.15,10,15,'Alec Burks'],
 [1,213,8.38,0,10,'Dwight Powell'],
 [1.4,645,3.18,0,5,'Michael Carter-Williams'],
 [2.7,97.5,2.98,0,3,'Dante Cunningham'],
 [0,189,8.05,37,8,'Kosta Koufos'],
 [2.3,7.5,2.18,10,8,'Andre Roberson'],
 [0.8,282,12,31.5,6,'Amir Johnson'],
 [0.2,152,3.92,0,7,'Kyle O\'Quinn'],
 [1.5,195,6.35,12,4,'Spencer Hawes'],
 [2.7,555.5,22.12,59,16,'Chandler Parsons'],
 [0,804.5,1.4,0,32,'JaVale McGee'],
 [2.4,179,1.79,4,4,'Quincy Acy'],
 [1.5,183.5,2.5,1,1,'Malcolm Delaney'],
 [0,16,1.8,4.5,8,'Kevin Seraphin'],
 [2.4,180.5,1.02,24.5,8,'Isaiah Canaan'],
 [2.4,125,2.26,20,13,'Reggie Bullock'],
 [1.7,215.5,5,7,17,'Jonas Jerebko'],
 [0.8,166,2.02,0,13,'Adreian Payne'],
 [0,336,8,15,14,'Tyler Zeller'],
 [1.2,354,4.84,9,6,'Kyle Singler'],
 [0.6,4,2.87,7,8.5,'Tomas Satoransky'],
 [0.7,3,6.09,5,5,'Andrew Nicholson'],
 [0.7,150.5,1.58,2,2,'DeAndre Liggins'],
 [0,362,12.5,11,3,'Miles Plumlee'],
 [1.5,7,3.33,2,1,'Mike Scott'],
 [0,185,1.47,13,3,'Rakeem Christmas'],
 [1.2,82,0.25,4,4,'Lamar Patterson'],
 [0,220.5,7.64,22,9,'Cole Aldrich'],
 [0.6,23,1.58,17,10,'Ryan Kelly'],
 
 ];
 const databig30 = [
   [4.6,14704,30.96,5533.5,1501.5,'LeBron James'],
 [5.7,3773.5,24.56,720.5,220,'Carmelo Anthony'],
 [3.6,825,21.17,0,75.5,'Marc Gasol'],
 [2.4,4671,23.2,349.5,149.5,'Dwyane Wade'],
 [3.5,436.5,20.07,60,32,'Paul Millsap'],
 [5,2689.5,22.87,829,178.5,'Chris Paul'],
 [0.8,958,20.58,195,63,'LaMarcus Aldridge'],
 [3.9,2960,25,1564,500.5,'Dirk Nowitzki'],
 [1.3,528.5,10.36,47,18.5,'Zach Randolph'],
 [0,2558.5,23.18,7,1,'Dwight Howard'],
 [7,27,5.44,45.5,14,'Nick Young'],
 [1.6,1983.5,15.5,882.5,148.5,'Pau Gasol'],
 [3.9,1010,13.25,49,32,'Jamal Crawford'],
 [6.9,417.5,7.81,10,15,'Trevor Ariza'],
 [4.2,5,4.1,0,17.5,'J.J. Barea'],
 [0.2,231,8.95,52,17,'Taj Gibson'],
 [0,315,12,1,1,'Marcin Gortat'],
 [3.5,337.5,11.24,2,1,'Courtney Lee'],
 [5.4,842.5,5.24,107.5,30.5,'Kyle Korver'],
 [3.6,369,4.54,0,9,'Jameer Nelson'],
 [0.8,17,5.51,10.5,11,'Tony Allen'],
 [4.5,445,7.81,8,4,'Channing Frye'],
 [0,832,12.42,29,9,'Tyson Chandler'],
 [4.1,2891.5,4.26,0,7,'Vince Carter'],
 [2.9,838,18,22,13.5,'Luol Deng'],
 [2.3,1748.5,11.13,300.5,43,'Andre Iguodala'],
 [3.3,53,14,299,66,'Manu Ginobili'],
 [0,42,1.55,56.5,35,'David Lee'],
 [1.9,280,3.85,28.5,17.5,'Thabo Sefolosha'],
 [3.2,184,10.47,31,4,'Jared Dudley'],
 [2.7,177.5,3.49,0,5,'Anthony Morrow'],
 [2.9,267.5,2.5,2,4,'Randy Foye'],
 [1.4,416,5.5,16,60,'Luis Scola'],
 [2,10,2.7,1,3,'Aaron Brooks'],
 [0,1202.5,17,0,87,'Joakim Noah'],
 [0.8,274.5,8.55,8,9,'Tiago Splitter'],
 [1.1,489.5,7,136.5,13,'Boris Diaw'],
 [1,2940.5,4,67,9,'Kris Humphries'],
 [2.4,412.5,3.5,14,1.5,'Brandon Rush'],
 [1.7,1671,3.53,346.5,142,'Paul Pierce'],
 [0.5,245.5,0.06,11.5,7,'Jarrett Jack'],
 [0,1435.5,0.24,57,4,'Andrew Bogut'],
 [0.2,401,4,28.5,18,'Udonis Haslem'],
 [0.1,283.5,3.75,10,12,'Nick Collison']
 ];
 const schema = [
   { name: '3PA', index: 0, text: '3PA' },
   { name: 'Pageviews', index: 1, text: 'Pageviews' },
   { name: 'Salary1', index: 2, text: 'Salary(Millions)' },
   { name: 'Favourite', index: 3, text: 'Twitter Favourite Count' },
   { name: 'Retweet', index: 4, text: 'Retweet Count' },
   { name: 'player_name', index: 5, text: 'Player Name' }
 ];
 const itemStyle = {
   opacity: 0.8,
   shadowBlur: 10,
   shadowOffsetX: 0,
   shadowOffsetY: 0,
   shadowColor: 'rgba(0,0,0,0.3)'
 };
var option = {
   color: ['#d95850', '#eb8146', '#ffb248'],
   legend: {
     top: 10,
     data: ['age<25', 'age in 25-30', 'age>30'],
     textStyle: {
       fontSize: 16
     }
   },
   grid: {
     left: '10%',
     right: 150,
     top: '18%',
     bottom: '10%'
   },
   tooltip: {
     backgroundColor: 'rgba(255,255,255,0.7)',
     formatter: function (param) {
       var value = param.value;
       // prettier-ignore
       return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                 + '3-Pointer Ball Attempted : ' + value[0]
                 + '</div>'
                 + schema[1].text + ':' + value[1] + '<br>'
                 + schema[2].text + ':' + value[2] + '<br>'
                 + schema[3].text + ':' + value[3] + '<br>'
                 + schema[4].text + ':' + value[4] + '<br>'
                 + schema[5].text + ':' + value[5] + '<br>';
     }
   },
   xAxis: {
     type: 'value',
     name: '3PA',
     nameGap: 16,
     nameTextStyle: {
       fontSize: 16
     },
     max: 10,
     splitLine: {
       show: true
     }
   },
   yAxis: {
     type: 'value',
     name: 'Pageviews',
     nameLocation: 'end',
     nameGap: 20,
     nameTextStyle: {
       fontSize: 16
     },
     splitLine: {
       show: true
     }
   },
   visualMap: [
     {
       left: 'right',
       top: '10%',
       dimension: 2,
       min: 0,
       max: 75,
       itemWidth: 30,
       itemHeight: 120,
       calculable: true,
       precision: 0.1,
       text: ['Size : Salary'],
       textGap: 30,
       inRange: {
         symbolSize: [10, 70]
       },
       outOfRange: {
         symbolSize: [10, 70],
         color: ['rgba(255,255,255,0.4)']
       },
       controller: {
         inRange: {
           color: ['#c23531']
         },
         outOfRange: {
           color: ['#999']
         }
       }
     },
     {
       left: 'right',
       bottom: '5%',
       dimension: 3,
       min: 0,
       max: 1000,
       itemHeight: 120,
       calculable: true,
       text: ['Favourite Count'],
       textGap: 30,
       inRange: {
         colorLightness: [0.9, 0.5]
       },
       outOfRange: {
         color: ['rgba(255,255,255,0.4)']
       },
       controller: {
         inRange: {
           color: ['#c23531']
         },
         outOfRange: {
           color: ['#999']
         }
       }
     }
   ],
   series: [
     {
       name: 'age<25',
       type: 'effectScatter',
       symbolSize: 17,
       itemStyle: itemStyle,
       data: data25
     },
     {
       name: 'age in 25-30',
       type: 'effectScatter',
       symbolSize: 16,
       itemStyle: itemStyle,
       data: data30
     },
     {
       name: 'age>30',
       type: 'effectScatter',
       symbolSize: 15,
       itemStyle: itemStyle,
       data: databig30
     }
   ]
 };

 myChart.setOption(option);