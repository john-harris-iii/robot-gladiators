var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
};

// GAME STATES
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

var fight = function() {
    //alerts players the round has started
    window.alert("Welcome to Robot Gladiators!");
    //create variable to ask player to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //log promptFight info into console
    console.log(promptFight);
    //if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        //log a resulting message in the console to confirm it worked
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyNames + " has died!");
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }
        //subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        //log a resulting message in the console to confirm it worked
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    //if player chooses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney -2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
    //if player chooses invalid option
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

// fight();