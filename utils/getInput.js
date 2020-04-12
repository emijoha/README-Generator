// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

// question objects array
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
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
        message: "Write a short description explaining your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    // will determine what license message will be passed in readme markdown
    {
        type: "confirm",
        name: "license",
        message: "Would you like to add a MIT license to your project?",
        default: true
    },
    // will determine what contributing message will be passed in readme markdown
    {
        type: "confirm",
        name: "isContributing",
        message: "Are you open to contributions?",
        default: true
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests for your application."
    },
    // this messge will preceded author pic and contact info
    {
        type: "input",
        name: "questionsMessage",
        message: "Write a message inviting readers to ask questions about your project:",
        default: "Please contact us with any questions about this project:"
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