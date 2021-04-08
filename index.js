const inquirer = require("inquirer")
const generate = require("./generate")

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Title of the Project"
        },
        {
            type: "input",
            name: "description",
            message: "What is the Description of the Project?"
        },
        {
            type: "confirm",
            name: "license",
            message: "Would you like to attach an MIT license?"
        }
    ])
        .then((answers) => {
            console.log(answers)
            console.log(generate(answers))

        })
}


init()