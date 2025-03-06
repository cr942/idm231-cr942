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
            daterangeObj.innerHTML = "Jan 1 - 19";
            descriptionObj.innerHTML = "A mysterious hero with the power of invisibility and combat expertise.";
            break;
        case 'groot':
            heronameObj.innerHTML = "Groot";
            heroimageObj.src = "images/Groot.png";
            daterangeObj.innerHTML = "Jan 20 - Feb 28";
            descriptionObj.innerHTML = "A sentient tree with the ability to regenerate and grow.";
            break;
        case 'hulk':
            heronameObj.innerHTML = "The Hulk";
            heroimageObj.src = "images/Hulk.png";
            daterangeObj.innerHTML = "Mar 1 - Mar 30";
            descriptionObj.innerHTML = "A scientist turned giant, green powerhouse with immense strength.";
            break;
        case 'invisible':
            heronameObj.innerHTML = "Invisible Woman";
            heroimageObj.src = "images/Invisible.png";
            daterangeObj.innerHTML = "Apr 1 - Apr 30";
            descriptionObj.innerHTML = "A hero with the ability to turn invisible and create force fields.";
            break;
        case 'jeff':
            heronameObj.innerHTML = "Jeff";
            heroimageObj.src = "images/Jeff.png";
            daterangeObj.innerHTML = "May 1 - May 15";
            descriptionObj.innerHTML = "An unlikely hero with an undefined yet powerful ability.";
            break;
        case 'luna':
            heronameObj.innerHTML = "Luna";
            heroimageObj.src = "images/Luna.png";
            daterangeObj.innerHTML = "Jun 1 - Jun 30";
            descriptionObj.innerHTML = "A lunar-powered hero with the ability to control tides and phases.";
            break;
        case 'magik':
            heronameObj.innerHTML = "Magik";
            heroimageObj.src = "images/Magik.png";
            daterangeObj.innerHTML = "Jul 1 - Jul 31";
            descriptionObj.innerHTML = "A powerful sorceress who can teleport and control mystical forces.";
            break;
        case 'magneto':
            heronameObj.innerHTML = "Magneto";
            heroimageObj.src = "images/Magneto.png";
            daterangeObj.innerHTML = "Aug 1 - Aug 31";
            descriptionObj.innerHTML = "A master of magnetism with the power to control metal.";
            break;
        case 'spider':
            heronameObj.innerHTML = "Spider-Man";
            heroimageObj.src = "images/Spider.png";
            daterangeObj.innerHTML = "Sep 1 - Sep 30";
            descriptionObj.innerHTML = "A wall-crawling hero with enhanced strength and spider-sense.";
            break;
        case 'storm':
            heronameObj.innerHTML = "Storm";
            heroimageObj.src = "images/Storm.png";
            daterangeObj.innerHTML = "Oct 1 - Oct 31";
            descriptionObj.innerHTML = "A mutant with the ability to control the weather.";
            break;
        case 'strange':
            heronameObj.innerHTML = "Doctor Strange";
            heroimageObj.src = "images/Strange.png";
            daterangeObj.innerHTML = "Nov 1 - Nov 30";
            descriptionObj.innerHTML = "A sorcerer supreme who defends the world from mystical threats.";
            break;
        case 'venom':
            heronameObj.innerHTML = "Venom";
            heroimageObj.src = "images/Venom.png";
            daterangeObj.innerHTML = "Dec 1 - Dec 31";
            descriptionObj.innerHTML = "A symbiote-powered anti-hero with incredible strength and agility.";
            break;
    }
}