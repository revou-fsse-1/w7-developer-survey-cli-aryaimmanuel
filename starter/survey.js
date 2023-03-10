import inquirer from "inquirer";

const questions = [
  // Type your question here

  {
    type: "input",
    name: "firstName",
    message: "What's your first name? ",
    validate: function (validateName) {
      if (validateName === "") {
        return "invalid name";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "yourEmail",
    message: "What's your email?",
    validate: function (validateEmail) {
      if (validateEmail.endsWith(".com")) {
        return true;
      }
      return "invalid email";
    },
  },

  {
    type: "list",
    name: "experience",
    message: "Do you have any experience?",
    choices: ["Yes", "No"],
    validate: function (validateExp) {
      if (validateExp.length < 1) {
        return "invalid answer";
      }
      return true;
    },
  },

  {
    type: "list",
    name: "yearExp",
    message: "Years of experience in Javascript.",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when: function (checkYes) {
      return checkYes.experience === "Yes";
    },
  },

  {
    type: "checkbox",
    name: "jsLib",
    message: "Currently learned js library",
    choices: ["React.js", "Vue", "Angular", "Node.js", "JQuery", "D3.js"],
    when: function (checkYes) {
      return checkYes.experience === "Yes";
    },
  },

  {
    type: "number",
    name: "salary",
    message: "How much do you want to make?",
    validate: function (validateSalary) {
      if (!validateSalary || validateSalary < 1) {
        return "invalid amount";
      }
      return true;
    },
    when: function (checkYes) {
      return checkYes.experience === "Yes";
    },
  },
];

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
