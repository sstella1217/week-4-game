var wins = 0;
var losses = 0;


				


	
 //document.getElementById("compNumElement").innerHTML += compNum;

 $(document).ready( function() {

 	var compNum = Math.floor(Math.random() * (120 - 19)) + 19;

	document.getElementById("compNumElement").innerHTML=compNum;


 	$("crystle").click(function(){
 		var crystleNum = Math.floor(Math.random()* (12 - 1) + 1);

 		console.log(crystleNum);

 	
 	})

 });	