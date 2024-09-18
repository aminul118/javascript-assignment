// Problem 1
function calculateTax(income, expense) {
    if (income < 0 || expense < 0) {
        return "Invalid Input"
    }

    const savings = (income - expense);
    return savings * .20;
}



// Problem 2
function sendNotification(email) {
    if (!email.includes('@')) {
        return 'Invalid Email'
    }

    const userName = email.split('@')
    const message = userName[0] + ' sent you an email from ' + userName[1];
    return message;
}


//   Problem 3

function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }

    for (let i of input) {
        if (!isNaN(input[i]) && input[i] !== ' ') {
            return true;
        }
    }

    return false;
}

// Problem 4

function calculateFinalScore(obj) {
    if (typeof obj !== "object" || typeof obj.isFFamily !== "boolean" || typeof obj.name !== "string" || obj.testScore > 50 || obj.schoolGrade > 30) {
        return 'Invalid Input'
    }
    if (obj.isFFamily === true) {
        const spacialNumber = 20;
        const score = obj.testScore + obj.schoolGrade + spacialNumber;
        if (score >= 80) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        const score = obj.testScore + obj.schoolGrade
        if (score < 80) {
            return false;
        }
        else {
            return true;
        }
    }
}


// Problem 5

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || serialNumber !== 'number') {
        return "Invalid Input"
    }
    let avg = 0;
    for (const time of waitingTimes) {
        avg += time / waitingTimes.length;
    }
    const roundedAvg = Math.round(avg);
    const remainingPerson = (serialNumber - 1) - (waitingTimes.length);
    return remainingPerson * roundedAvg;
}

