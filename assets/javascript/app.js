// Make sure document has loaded
$(document).ready(function() {
  // Variables

  var questions = [
    "Who's pick up line is 'How you doing?'?",
    "What did Ross say when Joey asked him if that's not how a taylor measure's pants",
    "What did Joey grab when a car backfired when the three guys were out with Phoebe's Policeman?",
    "What's the name of the trophy Monica and Ross played football for every thankgiving?",
    "What does Phoebe tell Rachel is wrong with the plane?",
    "What's the name of the gameshow Joey had to pratice for an Audition?",
    "Where was Chandler trapped during the blackout?",
    "Who's saying is 'Oh! My! God!'?"
  ];

  var answers = [
    ["Joey", "Ross", "Phoebe", "Janice"],
    [
      "In the church!",
      "Yes, In Prison!",
      "If your tayor was your mom and you're a baby",
      "Yup at the doctors"
    ],
    ["Ross", "Chandler", "Pizza", "Sandwich"],
    ["Monica and Ross Cup", "Gella Cup", "Thanksgiving Cup", "World Cup"],
    ["Wing", "Pilot", "Phalange", "Wheels"],
    ["Dynamite", "Bamboozled", "Damboozled", "Friends Feud"],
    ["His Office", "Centrel Perk", "ATM Vestibule", "The apartment"],
    ["Rachel", "Janice", "Chandler", "Joey"]
  ];

  var correctResponses = [
    "Joey",
    "Yes, In Prison!",
    "Sandwich",
    "Gella Cup",
    "Phalange",
    "Bamboozled",
    "ATM Vestibule",
    "Janice"
  ];

  var gameover = {
    wins: 0,
    losses: 0,
    unanswered: 0
  };

  var timeLeft = 120;
  var userInput = [];

  function stopTimer() {
    clearInterval(timeLeft);
    timeLeft = 120;
    $("#timeRemaining").html("Time Remaining: " + timeLeft);
  }

  $("#startButton").click(function() {
    timeLeft = setInterval(timeRemaining, 1000);
    question();
    $("#startButton").remove();
  });

  function timeRemaining() {
    $("#timeRemaining").html("Time Remaining: " + timeLeft);
    timeLeft--;

    if (timeLeft === 0) {
      $("#wins").html("Wins: " + gameover.wins);
      $("#losses").html("Losses: " + gameover.losses);
      $("#wins").html("Unanswered: " + gameover.unanswered);
      stopTimer();
    }
  }

  function question() {
    for (i = 0; i < questions.length; i++) {
      console.log(questions[i]);
      $("#question").html(questions[i]);
      $("#answers").html(
        "<form>" +
          "<input type='radio'>" +
          answers[i][0] +
          "<br>" +
          "<input type='radio'>" +
          answers[i][1] +
          "<br>" +
          "<input type='radio'>" +
          answers[i][2] +
          "<br>" +
          "<input type='radio'>" +
          answers[i][3] +
          "<br>" +
          "<button id='next'> Next </button>" +
          "</form>"
      );

      // Something to tag the user click and check it with the correctresponses array

      // if (userInput[i])
    }
  }

  $("#answers").click(function() {
    userInput = userInput.push(this.value);
    for (i = 0; i < correctResponses.length; i++) {
      if (userInput === correctResponses[i]) {
        wins++;
      } else if (userInput === false) {
        unanswered++;
      } else losses++;
    }
  });
});
