//the consts
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const currentPath = process.cwd();
const s = "\n"; //space
const ss = s + s;
//licenses
const license1 = "Copyright (c) \
Permission is hereby granted, free of charge, to any person obtaining a copy \
of this software and associated documentation files (the Software), to deal \
in the Software without restriction, including without limitation the rights \
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \
copies of the Software, and to permit persons to whom the Software is \
furnished to do so, subject to the following conditions: \
 \
The above copyright notice and this permission notice shall be included in all \
copies or substantial portions of the Software. \
 \
THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE \
SOFTWARE.";

const license2 = 
"This project can not be copied and/or distributed without the express \
* permission of the owner \
The above copyright notice and this permission notice shall be included in all \
copies or substantial portions of the Software. \
 \
THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE \
SOFTWARE.";

//badge choises
const choice = ["[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)", "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)", "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)", "[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()"]

//clear the files
fs.writeFileSync(currentPath +'/result/readme(new).md', "");

//append new info to file
function append(input){
  fs.appendFileSync(currentPath +'/result/readme(new).md', ss + input);
}

// ask questions
inquirer
  .prompt([
    {
      type:"confirm",
      name:"confirm",
      message: "Create Your own readme file :D!!"
    },
    {
        type:"input",
        name: "prodName",
        message: "What is the name of your project?"//name
    },
        {
        type:"input",
        name: "des",
        message: "Describe Your project:"//description
    },
    {
        type:"input",
        name: "install",
        message: "How do you install your project?"//installation
    },
    {
        type:"input",
        name: "use",
        message: "What do you use this project for?"//usage
    },
    {
        type:"input",
        name: "test",
        message: "How do you test this project?"//test
    },
    {
        type:"input",
        name: "cred",
        message: "Do you want to credit anyone?"//credit
    },
    {
      type:"confirm",
      name:"open",
      message: "Do you want your project to be open source?"//opensource
    },
    {
      type:"confirm",
      name:"lic",
      message: "Do you want a license for that?"//license
    },
    {
      type:"checkbox",
      name:"badge",
      message: "Which license badges would you like?",//badges
      choices: ["MIT License", "GPLv3 License", "AGPL License"]
    },
    {
      type:"confirm",
      name: "last",
      message: "All done, go to the results folder to see your new readME file!! :)"//last question
    }

  
  ])
  .then(answers => {//Append stuff
    //Name
    fs.appendFileSync(currentPath +'/result/readme(new).md', "# " + answers.prodName);

    //lic badge
    if(answers.badge != null){
      if(answers.badge[0] == true){
        append(choice[answers.badge[0]])
      }
      if(answers.badge[1] == true){
        append(choice[answers.badge[1]])
      }
      if(answers.badge[2] == true){
        append(choice[answers.badge[2]])
      } 
    }

    //description
    append("## Description:" + ss + answers.des);

    //How to install
    append("## Installation:" + ss + answers.install);

    //Usage
    append("## Usage:" + ss + answers.use);

    //tests
    append("## Testing:" + ss + answers.test);

    //credit
    append("## Credit:" + ss + answers.cred);

    //license
    if(answers.lic == true){
      if(answers.open == true){
        append("## Licence" + ss + license1);
      }
      else{
        append("## Licence" + ss + license2);
      }
    }
      });
      
// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)
// [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
// [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
// [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)  
// [![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()

