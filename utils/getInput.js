// dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// question objects array
const questions = [
    {
        type: "input",
        name: "title",
        message: "_TITLE__What is the title of your project?",
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
        message: "_DESCRIPTION__Write a short description explaining your project.",
        default: "A CLI application that takes the user's prompt inputs and automatically generates a well-structured initial README."
    },
    {
        type: "input",
        name: "installation",
        message: "_INSTALLATION__What are the steps required to install your project? Provide a step-by-step description.",
        default: "1. Clone this repo\n2. Open the repo locally\n3. Open terminal in main directory and run 'npm install'."
    },
    {
        type: "input",
        name: "usage",
        message: "_USAGE__Provide instructions and examples for use.",
        default: "When developing a new project, use this CLI application to automatically generate a well-structured README. Save time and effort!\n1. Open terminal in main directory\n2. Run 'node index'\n3. Answer the prompts in the command line\n4. Copy the generated README into your intended project repo"
    },
    {
        type: "input",
        name: "license",
        message: "_LICENSE__Let your reader know what (if any) license has been applied to your project.",
        default: "MIT License"
    },
    {
        type: "input",
        name: "contributing",
        message: "_CONTRIBUTING__Write a message for either welcoming or postponing contributions to your project:",
        default: "Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate."
    },
    {
        type: "input",
        name: "tests",
        message: "_TESTS__Provide examples on how to run tests for your application.",
        default: "You will find any developed tests in a 'tests' directory. Tests will require 'jest'. To run tests, make sure 'jest' is installed as a dependency. Open terminal in the directory housing the 'test.js' files, and run 'npm run test'. This will run all tests and give print results."
    },
    // this messge will preceded author pic and contact info
    {
        type: "input",
        name: "questionsMessage",
        message: "_QUESTIONS__Write a message inviting readers to ask questions about your project:",
        default: "Feel free to contact us with any questions regarding this project!"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email for contact info:",
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
        fs.writeFile("./utils/inputData.json", dataJSON, function (err) {
            if (err) {
                throw err;
            }
        });
    } catch (err) {
        console.log(err);
    };

};

// export 
module.exports = getInput;