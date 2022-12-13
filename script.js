//JavaScript
function quiz() {
	var score = 0;  
	var totalQuestions = 3;  
    alert("Welcome to my trivia game!");
    alert("Make sure you answer all the questions.");
    
    var q1 = prompt("Who is the CEO of microsoft?");   
	if(q1 == "Bill Gates"    ) {
		score = score + 1;  
		alert("Correct!");  

	} else {
		alert("Incorrect!");  

	}
    
    var q2 = prompt("What is the most famous cartoon in the world");       
	if(q2 == "Mickey Mouse"    ) {
		score = score + 1;  
		alert("Correct!");   

	} else {
		alert("Incorrect!");   

	}
   
    var q3 = prompt("What is the highest mountain in the world?");        
	if(q3 == "Everest"    ) {
		score = score + 1;  
		alert("Correct!");  

	} else {
		alert("Incorrect!");   

	}

	alert("You got " + score + " questions out of " + totalQuestions + " correct.");  
}
// bsd-disable infinite-loop-detection