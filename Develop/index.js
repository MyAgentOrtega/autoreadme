const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([

    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your README.md file?',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description.',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Please enter how to use the application.',
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Please provide step by step installation process.',
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'Please include contributors.',
    },

    {
      type: 'input',
      name: 'test',
      message: 'Please provide a method to run a test.',
    },

    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email.',
    },

    {
      type: 'list',
      name: 'license',
      message: 'What is your license?',
      choices: ['MIT', 'BSD', 'GPL', 'APACHE', 'None']
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
    },

  ])
  .then((answers) => {
    console.log(answers)
    const readMePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
