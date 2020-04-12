// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

// question objects array
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "README Generator"
    },
    {
        type: "input",
        name: "year",
        message: "What year did you create this project repo?",
        default: "2020"
    },
    // will determine if "maintained" badge is added
    {
        type: "confirm",
        name: "isMaintained",
        message: "Is your project maintained?",
        default: true
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description explaining your project.",
        default: "This file was generated using a CLI application that uses imput from prompts to automatically generate your starting README."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        default: "1. Clone this repo \n 2. Open the repo locally \n 3. Open terminal and run 'npm install' in the main directory \n 4. Run 'node index' \n 5. Answer prompts in the CLI"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
        default: "When developing a new project, use this CLI application to automatically generate a well-structured README. Save time and effort! \n Simply answer the prompts in the CLI and copy the generate README.md into your project repo."
    },
    {
        type: "input",
        name: "license",
        message: "Let your reader know what (if any) license has been applied to your project.",
        default: "MIT"
    },
    {
        type: "input",
        name: "contributing",
        message: "Write a message for either welcoming or postponing contributions to your project:",
        default: "Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. \n Please make sure to update tests as appropriate."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests for your application.",
        default: "You will find any developed tests in a 'tests' directory. Tests will be written using 'jest'. To run tests, make sure 'jest' is a dependency. Open terminal in the directory housing the 'test.js' files, and run 'npm run test'. This will run all test and give you the results."
    },
    // this messge will preceded author pic and contact info
    {
        type: "input",
        name: "questionsMessage",
        message: "Write a message inviting readers to ask questions about your project:",
        default: "Feel free to contact us with any questions regarding this project!"
    },
    {
        type: "input",
        name: "email",
        message: "Enter you email for contact info:",
        default: "example@gmail.com"
    }
];

// function to get user inputs
async function getInput() {
    try {
        // wait for user input
        const data = await inquirer.prompt(questions);

        // data is an object. stringify for file writing
        const dataJSON = JSON.stringify(data, null, 2);
        // and write file
        fs.writeFile("./utils/inputData.json", dataJSON, function(err) {
            if (err) {
                throw err;
            }
        });
    } catch (err) {
        console.log(err);
    }
};

// export 
module.exports = getInput;