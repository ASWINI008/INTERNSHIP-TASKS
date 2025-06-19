/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();

   //Left side move
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();

   //Right side move
   turnRight();
   move();
   putBeeper();
   turnRight();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();


   //Left side
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();


   //Right side
   turnRight();
   move();
   putBeeper();
   turnRight();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   
}