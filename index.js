const inquirer = require("inquirer")
const generate = require("./generate")

const path = require("path")

const fs = require("fs")


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
            type: "input",
            name: "installation",
            message: "What is your deployed application link?"
        },
        {
            type: "input",
            name: "usage",
            message: "provide description/instructions of your project"
        },
        {
            type: "input",
            name: "contributions",
            message: "please add any necssary contributions. If none, just enter, no contributions at this time"
        },
        {
            type: "input",
            name: "roadmap",
            message: "What are plans for future development?"
        },
        {
            type: "input",
            name: "questions",
            message: "For Any Questions enter your email address"
        }, {
            type: "input",
            name: "github",
            message: "Enter your Github user name"
        },
        {
            type: "confirm",
            name: "license",
            message: "Would you like to attach an MIT license?"
        }
    ])
        .then((answers) => {
            console.log(answers)
            markdown(answers)

        })
}

function markdown(data) {
    const datastring=generate(data)
    fs.writeFileSync(path.join(__dirname,"readme.md"),datastring)
}
init()