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
var Beijing = [{"id":"Value 2004","stats":[{"name":"food","value":10932929},{"name":"chem","value":47670039},{"name":"industrial","value":53236497},{"name":"transportation","value":50017241},{"name":"household","value":23395551},{"name":"military","value":453961},{"name":"misc","value":4173651}]},{"id":"Value 2005","stats":[{"name":"food","value":12045684},{"name":"chem","value":55398959},{"name":"industrial","value":60654420},{"name":"transportation","value":53606698},{"name":"household","value":25754653},{"name":"military","value":426801},{"name":"misc","value":4011470}]},{"id":"Value 2006","stats":[{"name":"food","value":13597489},{"name":"chem","value":61251666},{"name":"industrial","value":64778364},{"name":"transportation","value":56772879},{"name":"household","value":29330511},{"name":"military","value":408613},{"name":"misc","value":4516491}]},{"id":"Value 2007","stats":[{"name":"food","value":15828932},{"name":"chem","value":66940063},{"name":"industrial","value":66654562},{"name":"transportation","value":60112470},{"name":"household","value":33238849},{"name":"military","value":967493},{"name":"misc","value":5145773}]},{"id":"Value 2008","stats":[{"name":"food","value":18219404},{"name":"chem","value":78250553},{"name":"industrial","value":70007956},{"name":"transportation","value":53305854},{"name":"household","value":35125349},{"name":"military","value":973378},{"name":"misc","value":5267337}]},{"id":"Value 2009","stats":[{"name":"food","value":17824759},{"name":"chem","value":56023688},{"name":"industrial","value":56578386},{"name":"transportation","value":36755371},{"name":"household","value":32537736},{"name":"military","value":577091},{"name":"misc","value":4360923}]},{"id":"Value 2010","stats":[{"name":"food","value":19348514},{"name":"chem","value":71248282},{"name":"industrial","value":67126144},{"name":"transportation","value":49544427},{"name":"household","value":36118327},{"name":"military","value":875765},{"name":"misc","value":4995005}]},{"id":"Value 2011","stats":[{"name":"food","value":21855377},{"name":"chem","value":84782247},{"name":"industrial","value":76557266},{"name":"transportation","value":54471786},{"name":"household","value":37069568},{"name":"military","value":940553},{"name":"misc","value":5614733}]},{"id":"Value 2012","stats":[{"name":"food","value":23311658},{"name":"chem","value":85455718},{"name":"industrial","value":80737858},{"name":"transportation","value":59132702},{"name":"household","value":37528846},{"name":"military","value":536554},{"name":"misc","value":5947207}]},{"id":"Value 2013","stats":[{"name":"food","value":24219696},{"name":"chem","value":91480126},{"name":"industrial","value":79593366},{"name":"transportation","value":60460811},{"name":"household","value":38014667},{"name":"military","value":588784},{"name":"misc","value":7252143}]}];
var Guangdong = [{"id":"Value 2004","stats":[{"name":"food","value":3760381},{"name":"chem","value":12903388},{"name":"industrial","value":15244521},{"name":"transportation","value":797838},{"name":"household","value":1363227},{"name":"military","value":20065},{"name":"misc","value":338355}]},{"id":"Value 2005","stats":[{"name":"food","value":3465480},{"name":"chem","value":16237672},{"name":"industrial","value":18091920},{"name":"transportation","value":1100668},{"name":"household","value":1894929},{"name":"military","value":18617},{"name":"misc","value":382725}]},{"id":"Value 2006","stats":[{"name":"food","value":4097812},{"name":"chem","value":21280422},{"name":"industrial","value":24145976},{"name":"transportation","value":1446163},{"name":"household","value":2202213},{"name":"military","value":13539},{"name":"misc","value":486883}]},{"id":"Value 2007","stats":[{"name":"food","value":6321448},{"name":"chem","value":24644385},{"name":"industrial","value":26811284},{"name":"transportation","value":1993637},{"name":"household","value":2591920},{"name":"military","value":24762},{"name":"misc","value":549460}]},{"id":"Value 2008","stats":[{"name":"food","value":9873897},{"name":"chem","value":26820153},{"name":"industrial","value":27541382},{"name":"transportation","value":2036260},{"name":"household","value":2777693},{"name":"military","value":20857},{"name":"misc","value":662599}]},{"id":"Value 2009","stats":[{"name":"food","value":11758489},{"name":"chem","value":26005110},{"name":"industrial","value":26172536},{"name":"transportation","value":2042145},{"name":"household","value":2904089},{"name":"military","value":27744},{"name":"misc","value":586568}]},{"id":"Value 2010","stats":[{"name":"food","value":14216520},{"name":"chem","value":35295819},{"name":"industrial","value":32467931},{"name":"transportation","value":4785317},{"name":"household","value":3786297},{"name":"military","value":32312},{"name":"misc","value":1326890}]},{"id":"Value 2011","stats":[{"name":"food","value":15467816},{"name":"chem","value":42798351},{"name":"industrial","value":33508441},{"name":"transportation","value":6867370},{"name":"household","value":4551313},{"name":"military","value":20201},{"name":"misc","value":908030}]},{"id":"Value 2012","stats":[{"name":"food","value":21152691},{"name":"chem","value":41382112},{"name":"industrial","value":34920138},{"name":"transportation","value":7405684},{"name":"household","value":4783495},{"name":"military","value":14101},{"name":"misc","value":857359}]},{"id":"Value 2013","stats":[{"name":"food","value":20854017},{"name":"chem","value":41951807},{"name":"industrial","value":41257025},{"name":"transportation","value":10879367},{"name":"household","value":5777776},{"name":"military","value":42930},{"name":"misc","value":973463}]}]
var Hainan = [{"id":"Value 2004","stats":[{"name":"food","value":477514},{"name":"chem","value":985885},{"name":"industrial","value":2701410},{"name":"transportation","value":104040},{"name":"household","value":3456444},{"name":"military","value":1260976},{"name":"misc","value":182786}]},{"id":"Value 2005","stats":[{"name":"food","value":293266},{"name":"chem","value":934065},{"name":"industrial","value":2596534},{"name":"transportation","value":150447},{"name":"household","value":4269694},{"name":"military","value":1277708},{"name":"misc","value":215627}]},{"id":"Value 2006","stats":[{"name":"food","value":405398},{"name":"chem","value":1154197},{"name":"industrial","value":2826023},{"name":"transportation","value":144885},{"name":"household","value":4606661},{"name":"military","value":1573156},{"name":"misc","value":254499}]},{"id":"Value 2007","stats":[{"name":"food","value":572852},{"name":"chem","value":1548281},{"name":"industrial","value":3458950},{"name":"transportation","value":200569},{"name":"household","value":5453915},{"name":"military","value":1346181},{"name":"misc","value":306739}]},{"id":"Value 2008","stats":[{"name":"food","value":807879},{"name":"chem","value":1978991},{"name":"industrial","value":3611967},{"name":"transportation","value":272210},{"name":"household","value":6164210},{"name":"military","value":1317769},{"name":"misc","value":333834}]},{"id":"Value 2009","stats":[{"name":"food","value":438300},{"name":"chem","value":1492563},{"name":"industrial","value":2412990},{"name":"transportation","value":190086},{"name":"household","value":3795798},{"name":"military","value":1010820},{"name":"misc","value":218802}]},{"id":"Value 2010","stats":[{"name":"food","value":616042},{"name":"chem","value":1583182},{"name":"industrial","value":2695166},{"name":"transportation","value":269623},{"name":"household","value":5072333},{"name":"military","value":786457},{"name":"misc","value":272220}]},{"id":"Value 2011","stats":[{"name":"food","value":828841},{"name":"chem","value":1662102},{"name":"industrial","value":3671263},{"name":"transportation","value":367359},{"name":"household","value":6557433},{"name":"military","value":580205},{"name":"misc","value":294412}]},{"id":"Value 2012","stats":[{"name":"food","value":568189},{"name":"chem","value":1832966},{"name":"industrial","value":4672740},{"name":"transportation","value":232977},{"name":"household","value":6020774},{"name":"military","value":595926},{"name":"misc","value":347656}]},{"id":"Value 2013","stats":[{"name":"food","value":583103},{"name":"chem","value":1721337},{"name":"industrial","value":3674881},{"name":"transportation","value":250752},{"name":"household","value":6550625},{"name":"military","value":672008},{"name":"misc","value":294356}]}]
var Hunan = [{"id":"Value 2004","stats":[{"name":"food","value":205793},{"name":"chem","value":96221},{"name":"industrial","value":69614},{"name":"transportation","value":29287},{"name":"household","value":205165},{"name":"military","value":1073},{"name":"misc","value":65829}]},{"id":"Value 2005","stats":[{"name":"food","value":212928},{"name":"chem","value":131645},{"name":"industrial","value":47660},{"name":"transportation","value":27149},{"name":"household","value":232076},{"name":"military","value":833},{"name":"misc","value":57331}]},{"id":"Value 2006","stats":[{"name":"food","value":210642},{"name":"chem","value":120502},{"name":"industrial","value":122210},{"name":"transportation","value":37942},{"name":"household","value":254914},{"name":"military","value":1548},{"name":"misc","value":69611}]},{"id":"Value 2007","stats":[{"name":"food","value":224027},{"name":"chem","value":127645},{"name":"industrial","value":72929},{"name":"transportation","value":23085},{"name":"household","value":125063},{"name":"military","value":3744},{"name":"misc","value":103698}]},{"id":"Value 2008","stats":[{"name":"food","value":390412},{"name":"chem","value":121396},{"name":"industrial","value":94224},{"name":"transportation","value":34339},{"name":"household","value":90092},{"name":"military","value":1616},{"name":"misc","value":211905}]},{"id":"Value 2009","stats":[{"name":"food","value":317155},{"name":"chem","value":114649},{"name":"industrial","value":79270},{"name":"transportation","value":17239},{"name":"household","value":98794},{"name":"military","value":3859},{"name":"misc","value":159441}]},{"id":"Value 2010","stats":[{"name":"food","value":373807},{"name":"chem","value":207047},{"name":"industrial","value":141543},{"name":"transportation","value":42545},{"name":"household","value":235631},{"name":"military","value":1987},{"name":"misc","value":206014}]},{"id":"Value 2011","stats":[{"name":"food","value":312061},{"name":"chem","value":204074},{"name":"industrial","value":133548},{"name":"transportation","value":34856},{"name":"household","value":212732},{"name":"military","value":1423},{"name":"misc","value":160251}]},{"id":"Value 2012","stats":[{"name":"food","value":360709},{"name":"chem","value":182925},{"name":"industrial","value":91661},{"name":"transportation","value":27184},{"name":"household","value":265467},{"name":"military","value":795},{"name":"misc","value":121519}]},{"id":"Value 2013","stats":[{"name":"food","value":386573},{"name":"chem","value":211080},{"name":"industrial","value":119029},{"name":"transportation","value":22371},{"name":"household","value":325243},{"name":"military","value":2669},{"name":"misc","value":159727}]}]
var Shanghai = [{"id":"Value 2004","stats":[{"name":"food","value":380567},{"name":"chem","value":17143},{"name":"industrial","value":506},{"name":"transportation","value":169},{"name":"household","value":1347},{"name":"military","value":0},{"name":"misc","value":4410}]},{"id":"Value 2005","stats":[{"name":"food","value":336403},{"name":"chem","value":25560},{"name":"industrial","value":840},{"name":"transportation","value":242},{"name":"household","value":2285},{"name":"military","value":0},{"name":"misc","value":3705}]},{"id":"Value 2006","stats":[{"name":"food","value":314410},{"name":"chem","value":21204},{"name":"industrial","value":1167},{"name":"transportation","value":162},{"name":"household","value":2636},{"name":"military","value":0},{"name":"misc","value":891}]},{"id":"Value 2007","stats":[{"name":"food","value":415603},{"name":"chem","value":26336},{"name":"industrial","value":637},{"name":"transportation","value":161},{"name":"household","value":2390},{"name":"military","value":0},{"name":"misc","value":1933}]},{"id":"Value 2008","stats":[{"name":"food","value":662170},{"name":"chem","value":44296},{"name":"industrial","value":323},{"name":"transportation","value":0},{"name":"household","value":1201},{"name":"military","value":0},{"name":"misc","value":3509}]},{"id":"Value 2009","stats":[{"name":"food","value":499417},{"name":"chem","value":31079},{"name":"industrial","value":99},{"name":"transportation","value":0},{"name":"household","value":640},{"name":"military","value":0},{"name":"misc","value":1541}]},{"id":"Value 2010","stats":[{"name":"food","value":326318},{"name":"chem","value":34547},{"name":"industrial","value":224},{"name":"transportation","value":3},{"name":"household","value":710},{"name":"military","value":0},{"name":"misc","value":1311}]},{"id":"Value 2011","stats":[{"name":"food","value":325609},{"name":"chem","value":34640},{"name":"industrial","value":187},{"name":"transportation","value":847},{"name":"household","value":1586},{"name":"military","value":0},{"name":"misc","value":446}]},{"id":"Value 2012","stats":[{"name":"food","value":429033},{"name":"chem","value":30495},{"name":"industrial","value":827},{"name":"transportation","value":6},{"name":"household","value":3396},{"name":"military","value":0},{"name":"misc","value":698}]},{"id":"Value 2013","stats":[{"name":"food","value":335152},{"name":"chem","value":15066},{"name":"industrial","value":4777},{"name":"transportation","value":0},{"name":"household","value":2854},{"name":"military","value":200},{"name":"misc","value":1379}]}]

// Set ourArray to the data you'd like to use for this experiment, and title your chart to match
var ourArray = Beijing;
$('h4.bar-chart-title').text('Fuel consumption in Beijing, 2005-2012');










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
