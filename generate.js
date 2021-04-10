function generate(data) {
    if (data.license) {
        var markdown = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
    } else {
        var markdown = ""
    }
    markdown += `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Roadmap](#roadmap)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Roadmap
${data.roadmap}

## Questions
Please Email Me at: ${data.questions}
My Github profile: ${data.github}
    `

    return markdown
}


module.exports = generate