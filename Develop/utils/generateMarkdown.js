// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// template literals

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # Title
  ${data.title}

  ## My name is 
  ${data.name}

  ## I live at
  ${data.location}

  ## My github is
  ${data.github}

  ## License
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
