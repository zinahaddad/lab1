//Variables
const name = 'Mitch Cuckovich';
const age = 25;
const birthday = 'January 24';
let detroitGC = true;

//If Else for Variables above
if (detroitGC === true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

//Arrays
const lifeEvents = [
    {
        id: 1,
        text: 'I was born in Troy, Michigan.',
    },
    {
        id: 2,
        text: 'I went to Hope College',
    },
    {
        id: 3,
        text: 'I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.',
    },
    {
        id: 4,
        text: "I'm a graduate of the front-end bootcamp.",
    }
];

//Loops - For Array above
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i].text);
}

//Loops - For counter
let counter = 0;

while (true) {
    let randomNumber = (Math.floor(Math.random() * 11));
    if (randomNumber !== 5) {
        counter++;
    console.log (` ${randomNumber} !== 5`);
    } else {
        counter++;
        console.log (`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
    }
}


