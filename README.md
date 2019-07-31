# JewelGame

#### Link to app: https://aimesaguilera.github.io/JewelGame/

Description:

  A Random Number is displayed on screen with a value between 19-120.
  There are 4 different buttons (Jewels) that each hold a random value between 1-12.
  You wont know what the Jewel values are until you press each one.
  As you press each Jewel, they will accumulate, and the goal of the game is to try to match the Random Number displayed to start.
  You can press each button multiple times, or not press one at all. They will not change value when pressed.
  After a win/lose, a new Random Number is displayed with a new set of Jewel values.
  
Solved:
  
  I used Math.floor method to find random number between 19-120, which generates on screen with a ready function.
  I used the same methode to generate a random number value between 1-12 for each jewel button div.
  I created an on-click function for each jewel button that added that value of that jewel to a 'totalScore' variable I display on screen.
  I created another click function that recognized if there was a win/lose with conditionals.
  This click function alerts if the user wins/loses and generates new random values to all numbers, resets totalScore to zero, and adds       tally to wins/loses.
