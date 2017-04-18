//https://en.wikipedia.org/wiki/Special:Random
//https://www.mediawiki.org/wiki/API:Main_page
$(document).ready(function(){

$("#search").on("click", function(){
//pull in query text
var query = $('#query').val();
//call API
var api = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+query+"&callback=?";
  // test api url is working with ==> window.open(api);
  //return top 7 results
  //assign 1 to results1
  //assign 2 to results2...etc

$.getJSON(api, function(data) {
  //make title text the visible "title" of button search results
var res1 = data[1][0]
var res2 = data[1][1]
var res3 = data[1][2]
var res4 = data[1][3]
var res5 = data[1][4]
var res6 = data[1][5]
var res7 = data[1][6]
$('#results1').html(res1)
$('#results2').html(res2)
$('#results3').html(res3)
$('#results4').html(res4)
$('#results5').html(res5)
$('#results6').html(res6)
$('#results7').html(res7)

//assign URL to div link <a> element
var url1 = data[3][0]
var url2 = data[3][1]
var url3 = data[3][2]
var url4 = data[3][3]
var url5 = data[3][4]
var url6 = data[3][5]
var url7 = data[3][6]
$('#url-1').attr("href",url1)
$('#url-2').attr("href",url2)
$('#url-3').attr("href",url3)
$('#url-4').attr("href",url4)
$('#url-5').attr("href",url5)
$('#url-6').attr("href",url6)
$('#url-7').attr("href",url7)
});         //end $.getJSON(api, function(data){


});       //end $("#search").on("click", function(){

$("#random").on("click", function(){
  window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
  });       //end $("#random").on("click", function(){

});         //end $(document).ready(function(){ 
