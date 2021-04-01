
//node modules
const inquirer = require('inquirer');
const fs = require('fs');


//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: "Title",
            validate: (value) => {
                if (value) { return true } else { return 'i need a value to continue' }
            },

        },
        {
            type: 'input',
            message: "How do you install your app?",
            name: 'installation',
            validate: (value) => {
                if (value) { return true } else { return 'i need a value to continue' }
            },

        },

        {
            type: 'input',
            name: 'Usage',
            message: 'Please provide the usage instructions?',
            validate: (value) => {
                if (value) { return true } else { return 'i need a value to continue' }
            },
        },

        {
            type: 'input',
            name: 'Github',
            message: 'Please provide your GitHub username.',
            validate: (value) => {
                if (value) { return true } else { return 'i need a value to continue' }
            },
        },

        {
            type: 'input',
            name: 'Email',
            message: 'Please provide your email for inquiries regarding your application.',
            validate: (value) => {
                if (value) { return true } else { return 'i need a value to continue' }
            },
        }

    ]
)
.then((response) => {
    console.log("response", response);

    const code = `
# Project Title

* **Title:** ${response.Title}

## Installation

* **Installation Instruction:** ${response.installation}

## Usage

* **Usage Instruction:** ${response.Usage}

## Contributing

* **Github User Link:** ${response.Github}

## Contact Information

* **Email:** ${response.Email}

    `

    fs.writeFile("README.md", code, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
});

