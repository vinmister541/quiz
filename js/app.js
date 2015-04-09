$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "Which fighter holds titles in 2 weight classes?",
        choices: ["Matt Hughes", "Cain Velesquez", "Urijah Faber", "BJ Penn"],
        qNum : 0,
        correct : 3,
        },
        {
        question: "Which fighter was NOT on TUF Season 1?",
        choices: ["Micheal Bisbing", "Diego Sanchez", "Kenny Florian", "Chris Leben"],
        qNum : 1,
        correct : 0,
        },
        {
        question: "How did BJ Penn lose in his second fight against Matt Hughes?",
        choices: ["TKO'd", "Submitted", "RNC'd", "Ref Stoppage"],
        qNum : 2,
        correct : 3,
        },
        {
        question: "How many rounds does a Championship fight last in the UFC?",
        choices: ["3 rounds", "4 rounds", "5 rounds", "6 rounds"],
        qNum : 3,
        correct : 2,
        },
        {
        question: "Which fighter is a former Olympian?",
        choices: ["Andrei Arlovski", "Dan Henderson", "Jose Aldo", "Erik Silva"],
        qNum : 4,
        correct : 1,
    }]

    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question_wrapper").on("click", "#submit", function () {
        updateCup();
        currentQuestion++;
        nextQuestion();
    });

       $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var firstQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" class = "option" name="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" class="option" name="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" class="option" name="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" class="option" name="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(firstQuestion);
    });

    function updateCup() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }

    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" class="option" name="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" class="option" name="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" class="option" name="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" class="option" name="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#submit").remove();
            $("#retry_button").css("display", "inline");
            var finalScore = '<span id="final" class="fin">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
             $("#answer_holder").html(finalScore);
            
            
        }
    }

});