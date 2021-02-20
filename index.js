var inquirer = require('inquirer');
var hi;
var a = ["lmao"];
const fs = require('fs');
const path = require('path');
var currentPath = process.cwd();
inquirer
  .prompt([
    {
        type: "input",
        name: "no",
        message: "no"
    },
  ])
  .then(answers => {
       fs.writeFileSync(currentPath+'/readme.md', answers.no);
  });