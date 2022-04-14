// Packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// function to generate readme.The markdown is combined below as well.

const generateReadMe = ({title, description, installation, usage, licenseBadge, contributions, tests, questionsGit, questionsEmail}) =>
`# ${title} ![License](https://img.shields.io/badge/License-MIT-yellowgreen)  

## TableofContents  

*[Description](#description)  
*[Installation](#installation)  
*[Usage](#usage)  
*[License](#license)  
*[Contributions](#contributions)  
*[Tests](#tests)  
*[Questions](#questions)  

## [Description](#description)  
${description}  

## [Installation](#installation)  
${installation}  

## [Usage](#usage)  
${usage}  

## [License](#license)  
This product is licensed under: ${licenseBadge} ![License](https://img.shields.io/badge/License-MIT-yellowgreen)  

## [Contributions](#contributions)  
${contributions}  

## [Tests](#tests)  
${tests}  

## [Questions](#questions)  
If you have questions, vist my GitHub profile at ${questionsGit}  
or email me at ${questionsEmail}`;

// Prompts for developer input start here.
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Input a description for your project"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are your instructions for installation?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use your application?"
    },
    {
        type: 'input',
        name: 'licenseBadge',
        message: "What is this product licensed under?"
    },
    {
        type: 'input',
        name: 'contributions',
        message: "Please list any collaborators/contributions to your project."
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide any tests that you conducted."
    },
    {
        type: 'input',
        name: 'questionsGit',
        message: "Please input the url to your GitHub profile."
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: "Please input your email address."
    },
    ])

    // Call function and generate readme file. 
    .then((answers) => {
        const readMeContent = generateReadMe(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });




