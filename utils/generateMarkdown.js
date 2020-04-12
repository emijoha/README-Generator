// dependencies
const fs = require("fs");
const util = require("util");

// promisify the readFile method 
const readFileAsync = util.promisify(fs.readFile);

// set variables for needed USER data
let userName;
let legalName;
let imageUrl;
let gitPage;
let gitFollowers;

// set variables for needed INPUT data
let projectTitle;
let year;
let isMaintained;
let descriptionText;
let installationText;
let usageText;
let licenseText;
let contributingText;
let testText;
let questionsText;
let maintainedBadgeUrl;
let email;

function generateMarkdown() {

  // read and retrieve user data values
  readFileAsync("./utils/gitInfo.json", "utf8")
  .then(data => {

    const gitInfo = JSON.parse(data);
    userName = gitInfo.userName;
    legalName = gitInfo.legalName;
    imageUrl = gitInfo.imageUrl;
    gitPage = gitInfo.gitPage;
    gitFollowers = gitInfo.gitFollowers;

  });

  // read and retieve input data values
  readFileAsync("./utils/inputData.json", "utf8")
  .then(data => {

    const inputs = JSON.parse(data);
    projectTitle = inputs.title;
    year = inputs.year;
    isMaintained = inputs.isMaintained;
    descriptionText = inputs.description;
    installationText = inputs.installation;
    usageText = inputs.usage;
    licenseText = inputs.license;
    contributingText = inputs.contributing;
    testText = inputs.tests;
    questionsText = inputs.questionsMessage;
    email = inputs.email;

    if (isMaintained === true) {
      maintainedBadgeUrl = "https://img.shields.io/badge/Maintained%3F-yes-green.svg";
    } else {
        maintainedBadgeUrl = "https://img.shields.io/badge/Maintained%3F-no-red.svg";
    }

  });

  let markdown = ` 
  # ${projectTitle}

  [![Maintained Badge](${maintainedBadgeUrl})](${gitPage})

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

  ${licenseText}
  \nCopyright 2020 ${legalName}.

  ## Contributing

  ${contributingText}

  ## Tests

  ${testText}

  ## Questions

  ${questionsText}

  \n![Image of ${legalName}](${imageUrl})
  \n**${email}**
  \nFind ${legalName} on GitHub as ${userName}. 
  [![Followers Badge](https://img.shields.io/badge/Followers-${gitFollowers}-yellow)](${gitPage})
  `;

  fs.writeFile("README.md", markdown, err => {
    if (err) {
      throw err;
    }
  });
  
};

module.exports = generateMarkdown;
