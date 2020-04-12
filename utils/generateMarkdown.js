// dependencies
const fs = require("fs");
const util = require("util");

// promisify the readFile method 
const readFileAsync = util.promisify(fs.readFile);

// set variables for needed USER data
let legalName;
let imageUrl;
let gitPage;
let gitFollowers;

readFileAsync("gitInfo.json", "utf8")
.then(data => {
  const gitInfo = JSON.parse(data);
  legalName = gitInfo.legalName;
  imageUrl = gitInfo.imageUrl;
  gitPage = gitInfo.gitPage;
  gitFollowers = gitInfo.gitFollowers;
});

// set variables for needed INPUT data
let projectTitle;
let isMaintained;
let descriptionText;
let installationText;
let usageText;
let license;
let isContributing;
let testText;
let questionsText;

readFileAsync("inputData.json", "utf8")
.then(data => {
  const inputs = JSON.parse(data);
  projectTitle = imputs.title;
  isMaintained = inputs.isMaintained;
  descriptionText = inputs.description;
  installationText = inputs.installation;
  usageText = inputs.usage;
  license = inputs.license;
  isContributing = inputs.isContributing;
  testText = inputs.tests;
  questionsText = inputs.questionsMessage;
});

function generateMarkdown(data) {
  return ` 
  # ${projectTitle}

  // badges

  ## Description

  ${descriptionText}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${installationText}

  ## Usage

  ${usageText}

  ## License

  ${data.license}

  ## Contributing

  // check if isContributing to determine content

  ## Tests

  ${testText}

  ## Questions

  ${questionsText}

  // pic and name with link
  ${legalName}
  // followers badge

  `;
}

module.exports = generateMarkdown;
