// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util')

const generateMarkdown = require ("./util/generateMarkdown.js");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is should we title your README?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license type?',
            choices: ['GNU AGPLv3', 'Apache License 2.0', 'MIT', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List your collaborators, if any (with links to their GitHub profiles):',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples on how to run any tests here:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

    ])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
    .then((data) => {
        const content = generateMarkdown(data);
        fs.writeFile('gen-ReadMe.md', content, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
