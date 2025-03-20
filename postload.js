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

const photoCreditObj = document.getElementById("photo-credit");

//Help Button + Close Button
const helpButtonObj = document.getElementById("help-button");
const closeHelpObj = document.getElementById("closehelp-button");

// Help Display
const helpDisplayObj = document.getElementById("help-popup");

//Press help button to open up the instructions (and hide the help button)
helpButtonObj.addEventListener("click", function(){
    helpDisplayObj.classList.remove("hideMe");
    closeHelpObj.classList.remove("hideMe");
    helpButtonObj.classList.add("hideMe");
})

closeHelpObj.addEventListener("click", function(){
    helpDisplayObj.classList.add("hideMe");
    closeHelpObj.classList.add("hideMe");
    helpButtonObj.classList.remove("hideMe");
})

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
            daterangeObj.innerHTML = "April 20 - May 20";
            descriptionObj.innerHTML = "Cloak and Daggers are a clear cut representation of the duality of man. They are reserved and mysterious which often intimidates others, and tend to keep to themselves. However, once getting to know them, their kind and compassionate heart is revealed, proving wrong any misconceptions one may have had about them.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Cloak_%26_Dagger" target="_blank">https://marvelrivals.fandom.com/wiki/Cloak_%26_Dagger</a>';
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
            descriptionObj.innerHTML = "Connected to mother nature (literally), Groots are naturally kind and nurturing people. Although they are quiet individuals, they instinctually defend those they care about, using whatever means necessary. The ultimate mama bear!";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Groot" target="_blank">https://marvelrivals.fandom.com/wiki/Groot</a>';
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
            descriptionObj.innerHTML = "Hulks, although are intelligent and talented people, they are very quick to anger. In this angered state, they may do things they regret after it passes, but Hulks are known for taking accountability, especially if they hurt those that are innocent or that they love. Those that are close to Hulks know they are genuine people and genuine intentions.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Hulk" target="_blank">https://marvelrivals.fandom.com/wiki/Hulk</a>';
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
            descriptionObj.innerHTML = "People are naturally drawn to Invisible Womans due to their radiant personality, physical attractiveness, and intelligence. But regardless of all the attention they receive, they don't center themselves and strictly put their family and loved ones first.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Invisible_Woman" target="_blank">https://marvelrivals.fandom.com/wiki/Invisible_Woman</a>';
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
            descriptionObj.innerHTML = "Jeffs are silly, fun-loving people with seemingly no care in the world - except for their best friend(s). Nothing makes them happier than going on adventures with their friend(s) and trying on new outfits! Plus, Jeffs are so cute!";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Jeff_the_Land_Shark" target="_blank">https://marvelrivals.fandom.com/wiki/Jeff_the_Land_Shark</a>';
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
            descriptionObj.innerHTML = "Lunas are the friend that sings all the time and loves to be at the center of attention - but they truly are talented. Their energetic and bubbly personality brightens the room, especially if full of people, and they are always down to put on a show!";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Luna_Snow" target="_blank">https://marvelrivals.fandom.com/wiki/Luna_Snow</a>';
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
            descriptionObj.innerHTML = "Fierce and determined, Magiks are incredibly powerful people - both physically and mentally. They usually have been through a lot, but have only come out stronger in the end. They don't let their past hold them back, and continue to fight for a better future - both for themselves and their friends.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Magik" target="_blank">https://marvelrivals.fandom.com/wiki/Magik</a>';
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
            descriptionObj.innerHTML = "Magnetos are extremely ambitious and driven by their passions. Although they accomplish many things, their ambitions often consume them, leading to disastrous consequences. They are leaders by nature, but sometimes prefer to go solo.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Magneto" target="_blank">https://marvelrivals.fandom.com/wiki/Magneto</a>';
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
            descriptionObj.innerHTML = "Aloof yet with a sense of responsibility, Spider-Mans are the perfect friend that can balance a good time and hard work. They are spontaneous people that are always looking for the next, fun thing to do, but when duty calls, they put the childish act aside and get straight to business.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Spider-Man" target="_blank">https://marvelrivals.fandom.com/wiki/Spider-Man</a>';
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
            descriptionObj.innerHTML = "Storms live to lead and guide their people to greatness. They have strong conviction and unwavering determination that makes them someone you don't want to make enemies with. They make their moves with great consideration of others, striving to bring people together regardless of their differences.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Storm" target="_blank">https://marvelrivals.fandom.com/wiki/Storm</a>';
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
            descriptionObj.innerHTML = "Dr. Stranges are the most serious people you'll ever meet. They are workaholics burdened by great responsibilities that they often keep to themselves. They have a great sense of duty and obligation, making them a great friend to call when you're in a pinch.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Doctor_Strange" target="_blank">https://marvelrivals.fandom.com/wiki/Doctor_Strange</a>';
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
            descriptionObj.innerHTML = "A friend that's chill but a little weird, Venoms will always keep you on your toes. They are relatively unstable and unpredictable, but undoubtedly a caring and reliable individual. They're there when you need them the most and are very protective of their loved ones - though their methods may be questionable.";
            photoCreditObj.innerHTML = 'Photo: <a href="https://marvelrivals.fandom.com/wiki/Venom" target="_blank">https://marvelrivals.fandom.com/wiki/Venom</a>';
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