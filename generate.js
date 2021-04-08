function generate(data){
    let markdown=`
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Tests](#test)
    - [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contributions}

    ## Tests
    ${data.tests}

    ## Questions
    ${data.questions}
    `

    return markdown
}


module.exports=generate