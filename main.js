import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: 'name',
    type: 'number',
    message: 'please enter the amount of seconds',
    validate: (input) => {
        if (isNaN(input)) {
            return 'please enter a number';
        }
        else {
            return true;
        }
    },
});
let input = res.name;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log('timer has expired');
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min}:${sec}`);
    }, 1000);
}
startTime(input);
