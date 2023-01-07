// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
async function generateReadme() {
    const questions = [
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the name of your project?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please provide a short description of your project:'
        },
        {
          type: 'input',
          name: 'installationStep1',
          message: 'What is step 1 of the installation instructions for your project:'
        },
        {
            type: 'input',
            name: 'installationStep2',
            message: 'What is step 2 of the installation instructions for your project:'
          },
          {
            type: 'input',
            name: 'installationStep3',
            message: 'What is step 3 of the installation instructions for your project:'
          },
        {
          type: 'input',
          name: 'usageInstructions',
          message: 'Please provide usage instructions for your project:'
        },
        {
          type: 'input',
          name: 'contributionGuidelines',
          message: 'Please provide contribution guidelines for your project:'
        },
        {
          type: 'input',
          name: 'testInstructions',
          message: 'Please provide test instructions for your project:'
        },
      ];
//Asks the user every question
  const answers = await inquirer.prompt(questions);

// plug in the answers to the README file.
const readme = `
# ${answers.projectName}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

${answers.installationStep1}
${answers.installationStep2}
${answers.installationStep3}

## Usage

${answers.usageInstructions}

## Contributing

${answers.contributionGuidelines}

## Testing

${answers.testInstructions}`;

// Write the README file
  fs.writeFileSync('README.md', readme);
}

// start the function
generateReadme();


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
