const inquirer = require('inquirer');
const fs = require('fs');

// User Input
inquirer
  .prompt([
 
    // Project Title
    {
      type: 'input',
      name: 'title',
      message: 'Enter title:',
    },
    // Description
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    // Installations
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    // Usage
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    // Contribution 
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    // Tests
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    // License 
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GPL'],
    },
    // Github Username and Email
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])

  // ReadMe Template
  .then((answers) => {
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
For additional questions, you can reach me through GitHub: [${answers.github}](https://github.com/${answers.github})
Or email me at: ${answers.email}
`;

    // Writes ReadMe File and prints to Log
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  });

