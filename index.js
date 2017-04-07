var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message1 = chalk.red("I ") + chalk.magenta("am ") + chalk.yellow("working ") + chalk.green("very ") + chalk.blue("hard ") + chalk.bgCyan("EVERYDAY!");
console.log(message1);

var message2 = chalk.cyan("I am a blue sting " + chalk.magenta.underline.bold('with a purple substring') + " that becomes blue again!");
console.log(message2);

