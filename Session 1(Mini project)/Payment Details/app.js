// name
let constractor1 = "Rajesh";
let constractor2 = "Priya";
let constractor3 = "Amit";
let constractor4 = "Ananya";

let constractor = [constractor1,constractor2, constractor3,constractor4];
// Job desc
let jobDesc1 = "Web Developer"; 
let jobDesc2 = "Content Writer";
let jobDesc3 = "Graphic Designer";
let jobDesc4 = "Digital Marketer";

let jobDesc = [jobDesc1, jobDesc2, jobDesc3, jobDesc4];

// hourly Rate
let hourlyRate1 = 300;
let hourlyRate2 = 250;
let hourlyRate3 = 350;
let hourlyRate4 = 200;

let hourlyRate = [hourlyRate1, hourlyRate2, hourlyRate3, hourlyRate4];

// hourly worked
let hourlyWorked1 = 90;
let hourlyWorked2 = 60;
let hourlyWorked3 = 40;
let hourlyWorked4 = 20;

let hourlyWorked = [hourlyRate1, hourlyRate2, hourlyRate3, hourlyRate4]
// rating

let rating1 = 90;
let rating2 = 80;
let rating3 = 92;
let rating4 = 88;

let rating = [rating1, rating2, rating3, rating4];

function isEligible(hourlyWorked, rating) {
    if (hourlyWorked > 15 && rating >= 85) {
        return "Yes";
    }else{
        return "No"
    }
}

function PaymentDetails(constractor, jobDesc, hourlyRate, hourlyWorked, rating) {
    console.log("--------------------------------");
    console.log("Payment Details for Contractors:");
    console.log("--------------------------------");

    for (let i = 0; i < constractor.length; i++) {
        console.log(`Contractor Name: ${constractor[i]}`);
        console.log(`Job Description: ${jobDesc[i]}`);
        console.log(`Hourly Rate: ${hourlyRate[i]}`);
        console.log(`Hours Worked: ${hourlyWorked[i]}`);
        console.log(`Total Payment: ${hourlyRate[i]*hourlyWorked[i]}`);
        console.log(`Rating: ${rating[i]}`);
        console.log(`Eligible for Goodie Bag: ${isEligible(hourlyWorked[i], rating[i])}\n`);
    }
}

PaymentDetails(constractor, jobDesc, hourlyRate, hourlyWorked, rating);




