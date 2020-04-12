// dependencies
const fs = require("fs");
const util = require("util");

async function generateMarkdown() {

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

  try {

    // wait for gitInfo file to be read
    await readFileAsync("./utils/gitHubInfo.json", "utf8")
    .then(data => {
  
      const gitInfo = JSON.parse(data);
      userName = gitInfo.userName;
      legalName = gitInfo.legalName;
      imageUrl = gitInfo.imageUrl;
      gitPage = gitInfo.gitPage;
      gitFollowers = gitInfo.gitFollowers;
  
    });

    // wait for inputData file to be read
    await readFileAsync("./utils/inputData.json", "utf8")
    .then(response => {
  
      const inputs = JSON.parse(response);
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
      };
  
    });

  } catch (err) {
    console.log(err);
  };

  // Build README markdown
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

  Copyright ${year} ${legalName}.

  ## Contributing

  ${contributingText}

  ## Tests

  ${testText}

  ## Questions

  ${questionsText}

  ![Image of ${legalName}](${imageUrl})
  
  [![Followers Badge](https://img.shields.io/badge/Followers-${gitFollowers}-yellow)](${gitPage})

  Email ${legalName} at ${email} 
  `;

  // write file using markdown content
  fs.writeFile("README.md", markdown, err => {
    if (err) {
      throw err;
    }
  });

};

// export
module.exports = generateMarkdown;
