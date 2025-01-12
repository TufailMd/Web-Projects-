
let mvName1 = "12th Fail"; 
let mvName2 = "3 Idiots";
let mvName3 = "Drishyam";

let mvName = [mvName1, mvName2, mvName3];

let mts1 = 80; 
let mts2 = 150;
let mts3 = 120;

let mts = [mts1,mts2,mts3];

let mtp1 = 150; 
let mtp2 = 180;
let mtp3 = 250;

let mtp = [mtp1,mtp2,mtp3]

function isSuperhit(mts, mtp) {
    if (mts*mtp >= 5000) {
        return "Yes";
    }else{
        return "No";
    }
}

function salesReport(mvName,mts,mtp) {
    console.log("----------------------------------");
    console.log("Indian Movies Ticket Sales Report:");
    console.log("----------------------------------");
    let tot = 0;
    for (let i = 0; i < mvName.length; i++) {
        tot+=mts[i]*mtp[i];
        console.log(`Movie ${i+1} = ${mvName[i]}`);
        console.log(`- Ticket Sold: ${mts[i]}`);
        console.log(`- Ticket Price: ${mtp[i]}`);
        console.log(`- Revenue: ${mts[i]*mtp[i]}`);
        console.log(`Superhit: ${isSuperhit(mts[i],mtp[i])}\n`);
    }
    console.log(`Total Revenue: ${tot}`);
    
}

salesReport(mvName,mts,mtp);
