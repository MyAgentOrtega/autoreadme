const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

/*const generateMd = ({ name, location, github, linkedin, license }) =>


  `
  ## My name is 
  ${name}

  ## I live at
  ${location}

  ## My github is
  ${github}

  ## License
  ${generateMarkdown.renderLicenseBadge(license)}
  `; */

inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your README.md file?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is your license?',
      choices: ['MIT', 'Pizza', 'Tea', 'Tacos']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    console.log(answers)
    const readMePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
