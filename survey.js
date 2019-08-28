const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answersArr = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  answersArr.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answersArr.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answersArr.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        answersArr.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answersArr.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answersArr.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answersArr.push(answer);
              console.log('My name is : ' + answersArr[0] + '.' + ' I like doing ' + answersArr[1] + '.' + ' My favorite music to listen to while i\'m doing that is ' + answersArr[2] + ' .' + ' My favorite meal is ' + answersArr[3] + ' .' + ' I like to eat ' + answersArr[4] + '.' + ' I absolutely love ' + answersArr[5] + ' .' + ' I have always dreamed of being able to ' + answersArr[6] + ' .');
              rl.close();
            });
          });
        });
      });
    });
});
});




// What is your superpower? In a few words, tell us what you are amazing at!
