
var wins = 0;
$('#wins').text('Wins: ' + wins);
var losses = 0;
$('#losses').text('Losses: ' + losses);
var yourCount = 0;
$('#yourCount').text('Your count: ' + yourCount);

// PERAMETERS FOR THE RANDOM NUMBER
var minNum = 19;
var maxNum = 120;

// GENERATING THE RANDOM NUMBER
var randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

// GENERATES RN WHEN PAGE IS LOADED
$(document).ready(function() {
    function rnGenetator() {
        $('#randomNumber').html(randomNumber);
    };
    rnGenetator();
});

// GEN RN FOR THE 4 'JEWELS' HERE
var rnRed = Math.floor((Math.random() * 12) + 1);
$('#red').on('click', function() {
    yourCount = yourCount + rnRed;
    $('#yourCount').text('Your count: ' + yourCount);
});
var rnBlue = Math.floor((Math.random() * 12) + 1);
$('#blue').on('click', function() {
    yourCount = yourCount + rnBlue;
    $('#yourCount').text('Your count: ' + yourCount);
});
var rnGreen = Math.floor((Math.random() * 12) + 1);
$('#green').on('click', function() {
    yourCount = yourCount + rnGreen;
    $('#yourCount').text('Your count: ' + yourCount);
});
var rnYellow = Math.floor((Math.random() * 12) + 1);
$('#yellow').on('click', function() {
    yourCount = yourCount + rnYellow;
    $('#yourCount').text('Your count: ' + yourCount);
});


// CLICK FUNCTION FOR THE BUTTONS/JEWELS
$('.button').on('click', function() {
    // IF YOU HIT THE RANDOM NUMBER
    if (yourCount == randomNumber) {
        alert('You win!');
        wins++;
        $('#wins').text('Wins: ' + wins);
        // RESET NUMBER VALUES FOR NEXT GAME
        yourCount = 0;
        $('#yourCount').text('Your count: ' + yourCount);
        randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        $('#randomNumber').text(randomNumber);
        rnRed = Math.floor((Math.random() * 12) + 1);
        rnBlue = Math.floor((Math.random() * 12) + 1);
        rnGreen = Math.floor((Math.random() * 12) + 1);
        rnYellow = Math.floor((Math.random() * 12) + 1);
    };
    // IF YOU GO OVER THE RANDOM NUMBER
    if (yourCount > randomNumber) {
        alert('Sorry. You lose.');
        losses++;
        $('#losses').text('Losses: ' + losses);
        // RESET NUMBER VALUES FOR NEXT GAME
        yourCount = 0;
        $('#yourCount').text('Your count: ' + yourCount);
        randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        $('#randomNumber').text(randomNumber);
        rnRed = Math.floor((Math.random() * 12) + 1);
        rnBlue = Math.floor((Math.random() * 12) + 1);
        rnGreen = Math.floor((Math.random() * 12) + 1);
        rnYellow = Math.floor((Math.random() * 12) + 1);
    };
});
