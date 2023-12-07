// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: inquirer } = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title for the repo?'
},

{
    type: 'input',
name: 'description',
message: 'What is the description for the repo?'
},


{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions'

},

{

    type: 'input',
    name: 'usage',
    message: 'What is the usage information?'
},

{type: 'input',
name: 'contributing',
message: 'What are the contribution guidelines?'

},

{
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?'

},

{
    type: 'input',
    name: 'license',
    message: 'What are the licenses?',
    choices: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Eclipse Public License 1.0', 'The MIT License']
},

{

    type: 'input',
    name: 'github_username',
    message: 'What is your GitHub username?'
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email?'

},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log ('README file could not be created successfully.');
            throw err;
        } else {
            console.log ('README file was successfully created');
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((answers) => {
        var fileContents = generateMarkdown (answers);
        writeToFile('./README.md', fileContents);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log ('Prompt couldn\'t be rendered in the current environment')
        } else {
            console.log (err);
            throw err;
        }
    });
}

// Function call to initialize app
init();
