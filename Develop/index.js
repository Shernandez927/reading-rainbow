// Global variables for functionality

const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const {generateREADME} = require("./generateMarkdown");


// Array of questions for user input in terminal

const promptUser = () => { 
  return inquirer.prompt([
      {
        type: "input",
        message: "What's the name of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Give a detailed description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the installation steps for your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "Give a description on the usage of your project.",
        name: "usage",
      },
      {
        type: "input",
        message: "List any collaborators for your project.",
        name: "credits",
      },
      {
        type: "input",
        message: "What tests need to be run for your project?",
        name: "tests",
      },
      {
        type: "list",
        message: "Choose a license for this project.",
        name: "license",
        choices: ["apache", "gpl-3.0", "mit", "unilicense"],
      },
      {
        type: "input",
        message: "How would you like other developers to be able to contribute to your project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "What's your Github username?",
        name: "github",
      },
      {
        type: "input",
        message: "What's your email address?",
        name: "email",
      },
])  
}

// Function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile("./generated/README.md", generateREADME(answers)))
    .then(() => console.log("Your README has been generated!"))
    .catch((err) => console.log(err));
}

// Function to initialize app
init();