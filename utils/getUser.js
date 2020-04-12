// dependencies for this module
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

async function getUser() {

  try {

    // wait for username input to be given and store in variable
    const { username } = await inquirer.prompt({
      type: "input",
      message: "Enter your GitHub username:",
      name: "username"
    });

    // store axios data in variable
    const { data } = await axios.get(
      // use username variable to complete api url
      `https://api.github.com/users/${username}`
    );

    // store needed github user info from data in new object variable
    const gitInfo = {
      userName: username,
      legalName: data.name,
      imageUrl: data.avatar_url,
      gitPage: data.html_url,
      gitFollowers: data.followers
    };

    // stringify the object for use in json file
    const gitInfoJSON = JSON.stringify(gitInfo, null, 2);

    fs.writeFile("./utils/gitInfo.json", gitInfoJSON, function (err) {
      if (err) {
        throw err;
      }
    });

  } catch (err) {
    console.log(err);
    console.log("TIP: check your spelling");
  }

};

// export getUser function
module.exports = getUser;