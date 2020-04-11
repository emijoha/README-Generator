// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


// required js file modules
const getUser = require("./utils/getUser");
const generateMarkdown = require("./utils/generateMarkdown");

getUser();


// // making writeToFile a promise
// const writeToFile = util.promisify(fs.writeFile);

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
