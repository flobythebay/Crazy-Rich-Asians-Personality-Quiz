// Part 2 - Step 2
function AstridLeongTeo() {
    AstridLeongTeoScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=5) {
      updateResult();
    }
}

// Part 2 - Step 2
function RachelChu() {
  RachelChuScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=5) {
      updateResult();
    }
} 

// Part 2 - Step 2
function PeikLinGoh() {
  PeikLinGohScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=5) {
      updateResult();
    }
  }

// Part 2 - Step 2
function NickYoung() {
   NickYoungScore += 1;
    questionPosition += 1;
    // Part 3
    if (questionPosition >=5) {
      updateResult();
    }
  }

// Part 3 - Displaying results
var result = document.getElementById("result");
 
function updateResult() {
  if (AstridLeongTeoScore >= 4) {
    result.innerHTML = "Astrid Leong Teo!";
  } else if(RachelChuScore >= 4) {
     result.innerHTML = "Rachel Chu!";
  } else if(PeikLinGohScore >= 4) {
    result.innerHTML = "Peik Lin Goh!";
  } else if(NickYoungScore >= 4) {
    result.innerHTML = "Nick Young!";
  } else {
   result.innerHTML = "Hmmm.. I'm not sure";
  }
}

function disableQ1() {
    q1a1.disabled = true;
    q1a2.disabled = true;
    q1a3.disabled = true;
    q1a4.disabled = true;
  }
  
  
  function disableQ2() {
    q2a1.disabled = true;
    q2a2.disabled = true;
    q2a3.disabled = true;
    q2a4.disabled = true;
  }
  
  function disableQ3() {
    q3a1.disabled = true;
    q3a2.disabled = true;
    q3a3.disabled = true;
    q3a4.disabled = true;
  }
  
  
  function disableQ4() {
    q4a1.disabled = true;
    q4a2.disabled = true;
    q4a3.disabled = true;
    q4a4.disabled = true;
  }
  
  function disableQ5() {
    q5a1.disabled = true;
    q5a2.disabled = true;
    q5a3.disabled = true;
    q5a4.disabled = true;
  }

// Extensions below

//Extension 2 - Restart the Quiz
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
                                  
function restartQuiz() {
  result.innerHTML = "Your result is..."; 
  questionPosition = 0; 
  AstridLeongTeoScore = 0;
  RachelChuScore = 0;
  PeikLinGohScore = 0;
  NickYoungScore = 0;
  enableQuestions(); //Part of Extension 5
}

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


// Extension 5 - Disable Buttons

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);


function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
}

//Part 2 - Step 1
var AstridLeongTeoScore = 0;
var RachelChuScore = 0;
var PeikLinGohScore = 0;
var NickYoungScore = 0;
var questionPosition = 0;

//Part 2 - Step 2


q1a1.addEventListener("click", AstridLeongTeo);
q1a2.addEventListener("click", RachelChu);
q1a3.addEventListener("click", PeikLinGoh);
q1a4.addEventListener("click", NickYoung);

// Part 2 - Step 3


q2a1.addEventListener("click", NickYoung);
q2a2.addEventListener("click", RachelChu);
q2a3.addEventListener("click", AstridLeongTeo);
q2a4.addEventListener("click", PeikLinGoh);


q3a1.addEventListener("click", NickYoung);
q3a2.addEventListener("click", AstridLeongTeo);
q3a3.addEventListener("click", RachelChu);
q3a4.addEventListener("click", PeikLinGoh);

q4a1.addEventListener("click", RachelChu);
q4a2.addEventListener("click", AstridLeongTeo);
q4a3.addEventListener("click", NickYoung);
q4a4.addEventListener("click", PeikLinGoh);

q5a1.addEventListener("click", RachelChu);
q5a2.addEventListener("click", PeikLinGoh);
q5a3.addEventListener("click", NickYoung);
q5a4.addEventListener("click", AstridLeongTeo);

