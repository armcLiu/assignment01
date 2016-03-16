/*=====================
phil@affinio.com
@phil_renaud
March 2016
=====================*/


/*=======================================================
ESTABLISH OUR GLOBAL VARIABLES
=======================================================*/

// I've pulled the following as our working data sets from http://www.census.gov/foreign-trade/statistics/product/enduse/exports/
// Since these are at the top-level, they'll be within our "global" scope in the browser.
// Try typing "exportsToFrance" in your console to see what I mean!
var Beijing = [{"id":"2005","stats":[{"name":"coal","value":30689700},{"name":"coke","value":3974000},{"name":"crude","value":7996000},{"name":"gasoline","value":2352300},{"name":"kerosene","value":1893600},{"name":"diesel","value":1408600},{"name":"natural gas","value":3204}]},{"id":"2006","stats":[{"name":"coal","value":30556700},{"name":"coke","value":3486200},{"name":"crude","value":7961200},{"name":"gasoline","value":2781600},{"name":"kerosene","value":2338600},{"name":"diesel","value":1774900},{"name":"natural gas","value":4065}]},{"id":"2007","stats":[{"name":"coal","value":29846700},{"name":"coke","value":3581900},{"name":"crude","value":9509100},{"name":"gasoline","value":3247200},{"name":"kerosene","value":2771000},{"name":"diesel","value":1920200},{"name":"natural gas","value":4664}]},{"id":"2008","stats":[{"name":"coal","value":27477300},{"name":"coke","value":2328700},{"name":"crude","value":11167600},{"name":"gasoline","value":3409200},{"name":"kerosene","value":3183900},{"name":"diesel","value":2272200},{"name":"natural gas","value":6065}]},{"id":"2009","stats":[{"name":"coal","value":2664700},{"name":"coke","value":2119700},{"name":"crude","value":11629300},{"name":"gasoline","value":3636100},{"name":"kerosene","value":3419300},{"name":"diesel","value":2401800},{"name":"natural gas","value":6940}]},{"id":"2010","stats":[{"name":"coal","value":26346200},{"name":"coke","value":2204500},{"name":"crude","value":11162900},{"name":"gasoline","value":3715300},{"name":"kerosene","value":3926300},{"name":"diesel","value":2374200},{"name":"natural gas","value":7479}]},{"id":"2011","stats":[{"name":"coal","value":23660000},{"name":"coke","value":332800},{"name":"crude","value":11050800},{"name":"gasoline","value":3897900},{"name":"kerosene","value":4198800},{"name":"diesel","value":2411200},{"name":"natural gas","value":7356}]},{"id":"2012","stats":[{"name":"coal","value":22700000},{"name":"coke","value":322700},{"name":"crude","value":10757700},{"name":"gasoline","value":4159000},{"name":"kerosene","value":4433300},{"name":"diesel","value":2158200},{"name":"natural gas","value":9207}]}];
var Guangdong = [{"id":"2005","stats":[{"name":"coal","value":99423700},{"name":"coke","value":3001600},{"name":"crude","value":23883700},{"name":"gasoline","value":7062200},{"name":"kerosene","value":1537200},{"name":"diesel","value":13066600},{"name":"natural gas","value":249}]},{"id":"2006","stats":[{"name":"coal","value":111259800},{"name":"coke","value":4107800},{"name":"crude","value":28057100},{"name":"gasoline","value":7713900},{"name":"kerosene","value":1574000},{"name":"diesel","value":13676000},{"name":"natural gas","value":1446}]},{"id":"2007","stats":[{"name":"coal","value":125939700},{"name":"coke","value":4609700},{"name":"crude","value":29401000},{"name":"gasoline","value":8377300},{"name":"kerosene","value":1711400},{"name":"diesel","value":14382100},{"name":"natural gas","value":4569}]},{"id":"2008","stats":[{"name":"coal","value":132981600},{"name":"coke","value":4496000},{"name":"crude","value":30462100},{"name":"gasoline","value":8869000},{"name":"kerosene","value":1830700},{"name":"diesel","value":15189200},{"name":"natural gas","value":5358}]},{"id":"2009","stats":[{"name":"coal","value":136472600},{"name":"coke","value":4664300},{"name":"crude","value":37094400},{"name":"gasoline","value":9572000},{"name":"kerosene","value":1921200},{"name":"diesel","value":15679100},{"name":"natural gas","value":11286}]},{"id":"2010","stats":[{"name":"coal","value":159836200},{"name":"coke","value":4859700},{"name":"crude","value":44553100},{"name":"gasoline","value":10861200},{"name":"kerosene","value":2023800},{"name":"diesel","value":16685600},{"name":"natural gas","value":6156}]},{"id":"2011","stats":[{"name":"coal","value":184390000},{"name":"coke","value":5521300},{"name":"crude","value":44033700},{"name":"gasoline","value":12075900},{"name":"kerosene","value":2169300},{"name":"diesel","value":15005500},{"name":"natural gas","value":11446}]},{"id":"2012","stats":[{"name":"coal","value":176340000},{"name":"coke","value":5455000},{"name":"crude","value":45115100},{"name":"gasoline","value":12595000},{"name":"kerosene","value":2435700},{"name":"diesel","value":15425300},{"name":"natural gas","value":11648}]}];
var Shanghai = [{"id":"2005","stats":[{"name":"coal","value":53245200},{"name":"coke","value":6305100},{"name":"crude","value":19670000},{"name":"gasoline","value":2423400},{"name":"kerosene","value":2233200},{"name":"diesel","value":3296000},{"name":"natural gas","value":1872}]},{"id":"2006","stats":[{"name":"coal","value":51430900},{"name":"coke","value":6554600},{"name":"crude","value":18328400},{"name":"gasoline","value":2687300},{"name":"kerosene","value":2619700},{"name":"diesel","value":3709800},{"name":"natural gas","value":2525}]},{"id":"2007","stats":[{"name":"coal","value":52595300},{"name":"coke","value":7297000},{"name":"crude","value":17195700},{"name":"gasoline","value":2996600},{"name":"kerosene","value":2954500},{"name":"diesel","value":4171700},{"name":"natural gas","value":2778}]},{"id":"2008","stats":[{"name":"coal","value":54639100},{"name":"coke","value":7144400},{"name":"crude","value":19515500},{"name":"gasoline","value":3405000},{"name":"kerosene","value":3214700},{"name":"diesel","value":4270500},{"name":"natural gas","value":3000}]},{"id":"2009","stats":[{"name":"coal","value":53051700},{"name":"coke","value":6776800},{"name":"crude","value":19371800},{"name":"gasoline","value":3885200},{"name":"kerosene","value":3531100},{"name":"diesel","value":4831900},{"name":"natural gas","value":3352}]},{"id":"2010","stats":[{"name":"coal","value":58755200},{"name":"coke","value":7170800},{"name":"crude","value":21265000},{"name":"gasoline","value":4153700},{"name":"kerosene","value":3990700},{"name":"diesel","value":5090400},{"name":"natural gas","value":4501}]},{"id":"2011","stats":[{"name":"coal","value":61420000},{"name":"coke","value":7141500},{"name":"crude","value":21346900},{"name":"gasoline","value":4728700},{"name":"kerosene","value":4005000},{"name":"diesel","value":5329600},{"name":"natural gas","value":5543}]},{"id":"2012","stats":[{"name":"coal","value":57030000},{"name":"coke","value":6731700},{"name":"crude","value":22105500},{"name":"gasoline","value":5173500},{"name":"kerosene","value":4027400},{"name":"diesel","value":5689900},{"name":"natural gas","value":6438}]}];

// Set ourArray to the data you'd like to use for this experiment, and title your chart to match
var ourArray = Beijing;
$('h4.bar-chart-title').text('Fuel consumption (tons) in Beijing, 2005-2012');










/*=======================================================
INITIALIZATION
=======================================================*/

// jQuery has a $(document).ready() function that fires when your page is ready to go.
// let's use it to kick things off.
$(document).ready(function(){
  universalController();
}); //document.ready


// Think of universalController() as our Table of Contents
function universalController(){

  console.log('Universal Controller - ready to run your functions!');

////// STEP 1: Draw a bar for each year of our data.
    initializeBars(ourArray);

////// STEP 2: Allow for user interaction with our visualization
   initializeControls();

////// STEP 3: Advanced interaction through a click and hold interface
    handleTouch();

}; //universalController










/*=======================================================
STEP 1: STATIC BAR GRAPH
=======================================================*/

function initializeBars(comparable) {
// We create a new element using jQuery. We can style it in CSS using the .bar-chart class.
  $('.sandbox').append('<div class="bar-chart"></div>');

// We reduce our comparable to yearly totals
  yearTotals = _.map(comparable, function(obj,iter){
    var valueArray = _.pluck(obj.stats, "value");
    return _.reduce(valueArray, function(memo,num) { return memo + num });
  }); //_.map

// For each of this yearly totals, create a bar in our new bar chart.
  $.each(yearTotals, function(key,value){
    $('.bar-chart').append('<div class="bar" data-index="'+comparable[key].id+'" data-value="'+value+'"><span><em>' + comparable[key].id + ':</em> <strong>' + commafy(value) + '</strong></span></div>');
  }); //each yearTotals

//////// Step 1A: Make the length of each bar relative to its $ spent
    relativeBarWidths();

//////// Step 1B: Drop another level of metrics in: a breakdown of the yearly spend
   createLegend(comparable);
   applyCategories(comparable);

//////// Step 1C: Make the width of each category proportional to 
   setCategoryWidths();
   setCategoryRatios(comparable);

}; //initializeBars




/*=======================================================
STEP 1A: RELATIVE BAR WIDTHS
=======================================================*/

// Each bar should have its width proportional to the relative max
function relativeBarWidths(){
  var max = _.max(yearTotals);
  $('.bar').each(function(){
    $(this).css({'width': $(this).attr('data-value') / max * 100 + "%"})
  }); //each bar
}; //relativeBarWidths




/*=======================================================
STEP 1B: SPEND-BY-CATEGORY LEVEL OF DATA
=======================================================*/

function createLegend(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar-chart').after('<div class="legend"></div>');
  var categories = _.pluck(comparable[0].stats, 'name');
  $.each(categories, function(key,value){
    var span = $('<span>'+value+'</span>');
    span.css({'border-color': d3.rgb(colorRange(key)).brighter(1)});
    span.css({'background-color': d3.rgb(colorRange(key)).darker(1)});
    $('.legend').append(span);
  })
}; //createLegend

function applyCategories(comparable) {
  var colorRange = d3.scale.category10().domain(d3.range(11).reverse());
  $('.bar').each(function(){
    var bar = $(this);
    bar.append('<div class="statsblock"></div>');
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(comparable, {'id':index})['stats'];
    $.each(relevantStats, function(key,value) {
      var stat = $('<span class="stat" data-index="'+value['name']+'" data-value="'+value['value']+'"></span>');
      stat.css({'background-color': colorRange(key)});
      bar.children('.statsblock').append(stat);
    }); //each relevantStats
  }); //each bar
}; //applyCategories




/*=======================================================
STEP 1C: CATEGORY LEVEL WIDTHS AS PROPORATION OF SPEND
=======================================================*/

function setCategoryWidths(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(ourArray, {'id':index})['stats'];
    var barTotal = _.reduce(_.pluck(relevantStats, 'value'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') / barTotal * 100 + "%"});
    })
  })  
}

// ratios of each spending category, will be used later to normalize by category spending
function setCategoryRatios(comparable) {
  var categoryTotals = _.map(comparable[0]['stats'], function(obj,iter){
    return _.reduce(_.map(comparable, function(obj2,iter2){
      return _.find(obj2.stats, function(obj3,iter3){
        return obj3.name == obj.name;
      }).value;
    }), function(memo,num){
      return memo+num
    }); //reduce
  }); //categoryTotals
  var average = _.reduce(categoryTotals, function(memo, num){ return memo + num; }, 0) / categoryTotals.length;

// Setting categoryRatios as a global variable that we can access later
  categoryRatios = [];
  $.each(categoryTotals, function(i){
    categoryRatios[i] = 1/(categoryTotals[i] / average);
  })
  categoryRatios = _.object(_.pluck(exportsToCanada[0]['stats'], 'name'), categoryRatios);

// storing the categoryRatios on the comparable object and ourArray
  comparable = _.map(comparable, function(obj,iter){
    var stats = _.map(obj.stats, function(obj2,iter2){
      obj2.normalizedValue = categoryRatios[obj2.name] * obj2.value;
      return obj2;
    }); //innermap
    obj.stats = stats;
    return obj;
  }); //map
  ourArray = comparable;
}; //setCategoryRatios



















/*=======================================================
STEP 2: User Interface Controls
=======================================================*/

function initializeControls(){
// Set up a controls box that can be style with css with .controls{}
  $('#world-container').after('<div class="controls"><h5>Controls</h5></div>');
  $('.controls').append('<div><h6>Categories Full Height:</h6><a class="cat_full_height_on">On</a><a class="cat_full_height_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Annual Volume ("what is the % of annual spend?"):</h6><a class="norm_tv_on">On</a><a class="norm_tv_off">Off</a></div>')
  $('.controls').append('<div><h6>Normalize by Category Size: ("what year made the biggest impact to a given category?")</h6><a class="norm_cs_on">On</a><a class="norm_cs_off">Off</a></div>')

// Set the initial state of our on/off switches
  $('.norm_tv_off').addClass('active');
  $('.norm_cs_off').addClass('active');
  $('.cat_full_height_off').addClass('active');

// Category heights
  $(document).on('click', '.cat_full_height_on', function(){
    $('.statsblock').css({'height':'100%'});
    $('.cat_full_height_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.cat_full_height_off', function(){
    $('.statsblock').css({'height':'3px'});
    $('.cat_full_height_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Annual Volume
  $(document).on('click', '.norm_tv_on', function(){
    $('.bar').css({'width':'100%'});
    $('.norm_tv_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_tv_off', function(){
    relativeBarWidths();
    $('.norm_tv_off').addClass('active').siblings().removeClass('active');
  })

// Normalized Category Size
  $(document).on('click', '.norm_cs_on', function(){
    normalizeCategories();
    $('.norm_cs_on').addClass('active').siblings().removeClass('active');
  })
  $(document).on('click', '.norm_cs_off', function(){
    setCategoryWidths();
    $('.norm_cs_off').addClass('active').siblings().removeClass('active');
  })
}; //initializeControls


function normalizeCategories(){
  $('.bar').each(function(){
    var bar = $(this);
    var index = bar.attr('data-index');
    var relevantStats = _.findWhere(ourArray, {'id':index})['stats'];
    var normalizedBarTotal = _.reduce(_.pluck(relevantStats, 'normalizedValue'), function(memo,num){ return memo + num });
    $.each($(this).find('.stat'), function(stat_id,stat){
      $(stat).css({'width': $(stat).attr('data-value') * categoryRatios[$(stat).attr('data-index')] / normalizedBarTotal * 100 + "%"});
    }); //each stat (category) in the bar
  }); //each bar
}; //normalizeCategories










/*=======================================================
STEP 3: HANDLE ADVANCED INTERACTION
=======================================================*/

function handleTouch(){
// Observe the "mousedown" (click + hold) event on all of our category color-bars
  $(document).on('mousedown', '.stat', function(evt){
    var self = this;
    var globaloffset = $(this).position().left;
    $('.statsblock').each(function(){
      $(this).css({'height': '100%'});
      var blockoffset = $(this).children('[data-index="'+$(self).attr('data-index')+'"]').position().left;
      $(this).animate({'left': globaloffset-blockoffset}, 200);
      $(this).parents('.bar').children('span').children('strong').text(commafy($(this).children('[data-index="'+$(self).attr('data-index')+'"]').attr('data-value')));
    }); //each

// Fade out all bars not of the category you clicked
    $('.stat:not("[data-index='+$(self).attr('data-index')+']")').css({'opacity':0.2});
    $('.stat[data-index='+$(self).attr('data-index')+']').addClass('active');
    $('.bar').css({'background-color':'transparent'});

////// OPTIONAL: Sort bars based on order
    var barHeight = $('.bar').height() + 11;
    var sorted = _.sortBy($('.stat[data-index="'+$(self).attr('data-index')+'"]'), function(obj,iter){
      return $(obj).width();
    }); //sorted
    _.map(sorted, function(obj,iter){
      var startHeight = barHeight * (iter) - $(obj).parents('.bar').position().top + 20;
      $(obj).parents('.bar').css({'top':startHeight}).attr('which', iter);
    })

// Reset the position of everything wehn you release your mouse
    $(document).on('mouseup', function(){
      $('.statsblock').animate({'left':'0px', 'height': $('.cat_full_height_on').is('.active') ? '100%' : '3px'}, 200);
      $('.stat').css({'opacity':'1'}).removeClass('active');
      $('.bar').css({'top':'0px', 'background-color': 'rgba(0,0,0,0.1)'});
      $('.bar').each(function(){
        $(this).children('span').children('strong').text(commafy($(this).attr('data-value')));
      })
      $(document).off('mouseup');
    }); //documnet on mouseup
    return false;
  }) //click

}; //handleTouch

















// Make big numbers into pretty numbers
function commafy(num) {
  if (num){
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }
}; //commafy
