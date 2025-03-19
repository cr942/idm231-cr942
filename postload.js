// Store HTML variables for the buttons
const cloakObj = document.getElementById("cloak");
const grootObj = document.getElementById("groot");
const hulkObj = document.getElementById("hulk");
const invisibleObj = document.getElementById("invisible");
const jeffObj = document.getElementById("jeff");
const lunaObj = document.getElementById("luna");
const magikObj = document.getElementById("magik");
const magnetoObj = document.getElementById("magneto");
const spiderObj = document.getElementById("spider");
const stormObj = document.getElementById("storm");
const strangeObj = document.getElementById("strange");
const venomObj = document.getElementById("venom");

//Input Display
const inputObj = document.getElementById("input");

//Divider
const hrObj = document.getElementById("hr");

//Zodiacs Display
const zodiacsObj = document.getElementById("zodiacs");

//Close Results Area Objects
const resultsAreaObj = document.getElementById("results-area");
const closeButtonObj = document.getElementById("close-button");

// Display objects for name, image, date range, and description
const heronameObj = document.getElementById("hero-name"); 
const heroimageObj = document.getElementById("hero-image");
const daterangeObj = document.getElementById("date-range");
const descriptionObj = document.getElementById("description");

// Get all buttons to call one central function
cloakObj.addEventListener("click", function() {
    displayInfo("cloak");
});

grootObj.addEventListener("click", function() {
    displayInfo("groot");
});

hulkObj.addEventListener("click", function() {
    displayInfo("hulk");
});

invisibleObj.addEventListener("click", function() {
    displayInfo("invisible");
});

jeffObj.addEventListener("click", function() {
    displayInfo("jeff");
});

lunaObj.addEventListener("click", function() {
    displayInfo("luna");
});

magikObj.addEventListener("click", function() {
    displayInfo("magik");
});

magnetoObj.addEventListener("click", function() {
    displayInfo("magneto");
});

spiderObj.addEventListener("click", function() {
    displayInfo("spider");
});

stormObj.addEventListener("click", function() {
    displayInfo("storm");
});

strangeObj.addEventListener("click", function() {
    displayInfo("strange");
});

venomObj.addEventListener("click", function() {
    displayInfo("venom");
});

// Display info function to update hero data
function displayInfo(whichOne) {
    console.log("displayInfo called for " + whichOne);
    
    // Switch to set hero-specific details
    switch (whichOne) {
        case 'cloak':
            heronameObj.innerHTML = "Cloak and Dagger";
            heroimageObj.src = "images/Cloak.png";
            daterangeObj.innerHTML = "March 21 - April 19";
            descriptionObj.innerHTML = "A mysterious hero with the power of invisibility and combat expertise.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("cloak-voice");
            break;

        case 'groot':
            heronameObj.innerHTML = "Groot";
            heroimageObj.src = "images/Groot.png";
            daterangeObj.innerHTML = "August 23 - September 22";
            descriptionObj.innerHTML = "A sentient tree with the ability to regenerate and grow.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("groot-voice");
            break;

        case 'hulk':
            heronameObj.innerHTML = "The Hulk";
            heroimageObj.src = "images/Hulk.png";
            daterangeObj.innerHTML = "October 24 - November 21";
            descriptionObj.innerHTML = "A scientist turned giant, green powerhouse with immense strength.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("hulk-voice");
            break;

        case 'invisible':
            heronameObj.innerHTML = "Invisible Woman";
            heroimageObj.src = "images/Invisible.png";
            daterangeObj.innerHTML = "December 22 - January 19";
            descriptionObj.innerHTML = "A hero with the ability to turn invisible and create force fields.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("invisible-voice");
            break;
        case 'jeff':
            heronameObj.innerHTML = "Jeff";
            heroimageObj.src = "images/Jeff.png";
            daterangeObj.innerHTML = "September 23 - October 23";
            descriptionObj.innerHTML = "An unlikely hero with an undefined yet powerful ability.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("jeff-voice");
            break;

        case 'luna':
            heronameObj.innerHTML = "Luna";
            heroimageObj.src = "images/Luna.png";
            daterangeObj.innerHTML = "June 22 - July 22";
            descriptionObj.innerHTML = "A lunar-powered hero with the ability to control tides and phases.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("luna-voice");
            break;

        case 'magik':
            heronameObj.innerHTML = "Magik";
            heroimageObj.src = "images/Magik.png";
            daterangeObj.innerHTML = "February 19 - March 20";
            descriptionObj.innerHTML = "A powerful sorceress who can teleport and control mystical forces.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("magik-voice");
            break;

        case 'magneto':
            heronameObj.innerHTML = "Magneto";
            heroimageObj.src = "images/Magneto.png";
            daterangeObj.innerHTML = "May 21 - June 21";
            descriptionObj.innerHTML = "A master of magnetism with the power to control metal.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("magneto-voice");
            break;

        case 'spider':
            heronameObj.innerHTML = "Spider-Man";
            heroimageObj.src = "images/Spider.png";
            daterangeObj.innerHTML = "November 22 - December 21";
            descriptionObj.innerHTML = "A wall-crawling hero with enhanced strength and spider-sense.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("spider-voice");
            break;

        case 'storm':
            heronameObj.innerHTML = "Storm";
            heroimageObj.src = "images/Storm.png";
            daterangeObj.innerHTML = "July 23 - August 22";
            descriptionObj.innerHTML = "A mutant with the ability to control the weather.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("storm-voice");
            break;

        case 'strange':
            heronameObj.innerHTML = "Doctor Strange";
            heroimageObj.src = "images/Strange.png";
            daterangeObj.innerHTML = "March 21 - April 19";
            descriptionObj.innerHTML = "A sorcerer supreme who defends the world from mystical threats.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("strange-voice");
            break;

        case 'venom':
            heronameObj.innerHTML = "Venom";
            heroimageObj.src = "images/Venom.png";
            daterangeObj.innerHTML = "January 20 - February 18";
            descriptionObj.innerHTML = "A symbiote-powered anti-hero with incredible strength and agility.";
            resultsAreaObj.classList.remove("hideMe");
            inputObj.classList.add("hideMe");
            hrObj.classList.add("hideMe");
            zodiacsObj.classList.add("hideMe");
            playAudio("venom-voice");
            break;
    }
}

// Close results area when clicking close button
closeButtonObj.addEventListener("click", function(){
    resultsAreaObj.classList.add("hideMe");
    inputObj.classList.remove("hideMe");
    hrObj.classList.remove("hideMe");
    zodiacsObj.classList.remove("hideMe");
    allAudios.forEach(thisAudio => {
        thisAudio.pause();
        thisAudio.currentTime = 0;
    });
});

//Play Audio Function
const allAudios = document.querySelectorAll("audio");
function playAudio(whichSound){
    document.getElementById(whichSound).play();
}

// Birthday Input + Submit
const submitObj = document.getElementById("bday-submit");

submitObj.addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form submission and page refresh

    const bdayObj = document.getElementById("bday-input").valueAsDate;

    if (bdayObj === null) {
        alert("Please enter a valid date");
    } else {
        const timeZoneOffset = bdayObj.getTimezoneOffset() * 60 * 1000;
        const bdayEST = new Date(bdayObj.getTime() + timeZoneOffset);
        console.log("bdayEST is: " + bdayEST);

        const month = bdayEST.getMonth() + 1;
        const day = bdayEST.getDate();

        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            astrological_sign = 'venom';
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            astrological_sign = 'magik';
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            astrological_sign = 'strange';
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            astrological_sign = 'cloak';
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            astrological_sign = 'magneto';
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            astrological_sign = 'luna';
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            astrological_sign = 'storm';
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            astrological_sign = 'groot';
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
            astrological_sign = 'jeff';
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            astrological_sign = 'hulk';
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            astrological_sign = 'spider';
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            astrological_sign = 'invisible';
        }
        
        displayInfo(astrological_sign);
    }
});