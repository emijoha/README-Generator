const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

async function getUser() {
  try {
    const { username } = await inquirer.prompt({
      type: "input",
      message: "Enter your GitHub username:",
      name: "username"
    });

    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const gitInfo = {
      legalName: data.name,
      imageUrl: data.avatar_url,
      gitPage: data.html_url,
      gitFollowers: data.followers
    };

    const gitInfoJSON = JSON.stringify(gitInfo, null, 2);

    fs.writeFile("gitInfo.json", gitInfoJSON, function(err) {
      if (err) {
        throw err;
      }

      console.log("gitInfo.json written!")
    });

  } catch (err) {
    console.log(err);
  }
};


module.exports = getUser;