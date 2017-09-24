var wins = 0;
var losses = 0;
var crystleNum1 = 0;
var crystleNum2 = 0;
var crystleNum3 = 0;
var crystleNum4 = 0;
var totalScore = 0;
var end=" ";
var compNum;

	
//Generates a Computer Number between 19 - 120

 $(document).ready( function() {

 	
 	compNum = Math.floor(Math.random() * (120 - 19)) + 19;

	document.getElementById("compNumElement").innerHTML=compNum;
	

 		$("#but1").click(function(){
 			
			if (crystleNum1===0){
 				crystleNum1 = Math.floor(Math.random()* (12 - 1))+ 1;
 				totalScore = totalScore + crystleNum1;				
 				document.getElementById("totalScoreElement").innerHTML=totalScore;

 			}
 
 			else {

 					totalScore = crystleNum1 + totalScore;
 					
 			

 				if (totalScore === compNum) {
					wins++
					end="You Win!";
					document.getElementById("endElement").innerHTML="You Win!";
					document.getElementById("winsElement").innerHTML="Wins: "+wins;
					//document.getElementById("endElement").interHTML=end;
					//document.getElementById("winsElement").interHTML=wins;
					console.log(wins);
					console.log(end);
					totalScore=0;
					crystleNum1=0;
					compNum = Math.floor(Math.random() * (120 - 19)) + 19;
					document.getElementById("compNumElement").innerHTML=compNum;
				};

				if (totalScore > compNum){
					losses++
					end="You Loss!";
					document.getElementById("endElement").innerHTML="You Loss!";
					document.getElementById("lossesElement").innerHTML="Losses "+losses;
					//document.getElementById("endElement").interHTML=end;
					//document.getElementById("lossesElement").interHTML=losses;
					console.log(losses);
					console.log(end);
					totalScore=0;
					crystleNum1=0;
					compNum = Math.floor(Math.random() * (120 - 19)) + 19;
					document.getElementById("compNumElement").innerHTML=compNum;

				};
			}; 	

 			document.getElementById("totalScoreElement").innerHTML=totalScore;

 		});		

 		

 		$("#but2").click(function(){
 			if (crystleNum2===0){
 				crystleNum2 = Math.floor(Math.random()* (12 - 1))+ 1;
 				totalScore = totalScore + crystleNum2;
 				document.getElementById("totalScoreElement").innerHTML=totalScore;
  
 			}
 
 			else {

 					totalScore = crystleNum2 + totalScore
 					
 			}; 
 			document.getElementById("totalScoreElement").innerHTML=totalScore;
 		});		
 		
 	
 		$("#but3").click(function(){
 			if (crystleNum3===0){
 				crystleNum3 = Math.floor(Math.random()* (12 - 1))+ 1;
 				totalScore = totalScore + crystleNum3;
 				document.getElementById("totalScoreElement").innerHTML=totalScore;
  
 			}
 
 			else {

 					totalScore = crystleNum3 + totalScore
 					
 			};
 			document.getElementById("totalScoreElement").innerHTML=totalScore; 
 		});		

 		
 		$("#but4").click(function(){
 			if (crystleNum4===0){
 				crystleNum4 = Math.floor(Math.random()* (12 - 1))+ 1;
 				totalScore = totalScore + crystleNum4;
 				document.getElementById("totalScoreElement").innerHTML=totalScore;
  
 			}
 
 			else {

 					totalScore = crystleNum4 + totalScore
 					
 			};
 			document.getElementById("totalScoreElement").innerHTML=totalScore; 
 			
 		


		/*if (totalScore === compNum) {
			wins++
			end="You Win!"
			document.getElementById("endElement").interHTML=end;
			document.getElementById("winsElement").interHTML=wins;
		};

		if (totalScore > compNum){
			losses++
			end="You Loss!"
			document.getElementById("endElement").interHTML=end;
			document.getElementById("lossesElement").interHTML=losses;
		};*/

	});	

});		

 