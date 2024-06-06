import inquirer from "inquirer";

//const randomNumber: number =Math.floor(10000 + Math.random() * 90000)

//let myBalance: number = 0
let tutionfee: any = {
    "Ms.office": 2000,
    "HTML": 2500,
    "Javascript":5000,
    "python": 6000,
    "typescript": 10000,
};


let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter student name",
            validate: function(value){
                if (value.trim() !=="") {
return true;
                }
                return "please enter a non empty value.";
            }
        },
        {
        name: "cause",
        type: "list",
        message: "select the course to enrolled",  
        choices: ["Ms office", "HTML", "Javascript", "python"]
        }
    ]       
);


let tutionFee= tutionfee[answer.couses];
console.log("\nTution fees: "+tutionFee);
//console.log("Balance:"+myBalance);