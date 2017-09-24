var wins = 0;
var losses = 0;
	
//Generates a Computer Number between 19 - 120

 $(document).ready( function() {

 	var compNum = Math.floor(Math.random() * (120 - 19)) + 19;

	document.getElementById("compNumElement").innerHTML=compNum;



 	$("#but1").click(function(){
 		var crystleNum1 = Math.floor(Math.random()* (12 - 1))+ 1;
 		console.log(crystleNum1);

 	});	

 	$("#but2").click(function(){
 		var crystleNum2 = Math.floor(Math.random()* (12 - 1))+ 1;
 		console.log(crystleNum2);
 		

 	});	
 	
 	$("#but3").click(function(){
 		var crystleNum3 = Math.floor(Math.random()* (12 - 1))+ 1;
 		console.log(crystleNum3);

 	});	

 		
 	$("#but4").click(function(){
 		var crystleNum4 = Math.floor(Math.random()* (12 - 1))+ 1;
 		console.log(crystleNum4);

 	});	
 	
 	

 });	