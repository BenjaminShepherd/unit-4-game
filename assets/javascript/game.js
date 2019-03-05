$(document).ready(function () {


    //variables

    var counter = 0;
    var wins = 0;
    var losses = 0;



    function randomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    var targetNumber = randomNum(19, 120);
    $("#number-to-guess").html(targetNumber);
    console.log(targetNumber)

    var crystalOne = randomNum(1, 12);
    var crystalTwo = randomNum(1, 12);
    var crystalThree = randomNum(1, 12);
    var crystalFour = randomNum(1, 12);


    function reset() {
        counter = 0;
        $("#number-to-guess").html(targetNumber);
        targetNumber = randomNum(19, 120);
        $("#total-score").text(counter);
        crystalOne = randomNum(1, 12);
        crystalTwo = randomNum(1, 12);
        crystalThree = randomNum(1, 12);
        crystalFour = randomNum(1, 12);


    }


    $("#pic1").on("click", function () {
        counter += crystalOne;
        startGame();
        $("#total-score").text(counter);

    });

    $("#pic2").on("click", function () {
        counter += crystalTwo;
        startGame();
        $("#total-score").text(counter);

    });

    $("#pic3").on("click", function () {
        counter += crystalThree;
        startGame();
        $("#total-score").text(counter);

    });

    $("#pic4").on("click", function () {
        counter += crystalFour;
        startGame();
        $("#total-score").text(counter);

    });

    function startGame() {

        if (counter === targetNumber) {
            wins += 1;
            alert("You Won!");
            $("#wins").text("Wins: " + wins);
            reset();

        } else if (counter > targetNumber) {
            losses += 1;
            alert("You lost!");
            $("#losses").text("Losses: " + losses);
            reset();
        }

    }
})