// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


// required js file modules
const getUser = require("./utils/getUser");
// const generateMarkdown = require("./utils/generateMarkdown");
const getInput = require("./utils/getInput");

async function init() {
    // wait for getUser to finish
    try {
        await getUser();
    } catch (err) {
        console.log(err);
    };
    // then run getInput
    getInput();

    // then generate README.md
    // generateMarkdown();
};

// initialize CLI
init();
