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
      `https://api.github.com/users/${username}/repos?per_page=100`
    );

    console.log(data[0].owner.login);
    console.log(data[0].owner.avatar_url);

  } catch (err) {
    console.log(err);
  }
};

module.exports = getUser;

// const api = {
//   getUser(username) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios
//     .get(queryUrl)
//     .then(function(res) {
//       console.log("DATA:");
//       console.log(res.data);
     
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
//   }
// };

// module.exports = api;
