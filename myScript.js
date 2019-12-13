/*** javascript to be used in conjunction with hackathon html code ***
 *** Author: Jenna Clemens ***/

var randomText = [
"Incredible people and opportunities come from everywhere", 
"Jenna, Joni, Johnny, Priyanka, Yael, Marie, Melanie, Joe",
"Hackathon 2019",
"Lorem Pymsum ",
"Data/Eng/Product",
"Pymetrics is harnessing the power of the long-tail to match people to the jobs where they are most likely to succeed.",
"The Talent-Matching platform, AI-driven and bias free.",
"Cards, Faces, Towers, Arrows, Balloons, Digits, Dots, Town Hall",
"LGTM",
"Hiring is broken",
"Core Games, NLR, Video Interviews",
"Custom AI trained on your top performers",
"One Model, One Love",
"One job opening typically receives 250 applications",
"Candidate Advisory Council",
"Knotel",
"Mean Girls",
"Tell us a fun fact",
"What do those shapes mean?",
"Does that require a JAQ?",
"Priyanka, Mike, Frida, and Lewis are the BEST!!!!",
"L.F.G."
];
var style = "s0";
const numItems = 1;
            
function getRandNum() {
    return Math.floor(Math.random()*randomText.length);
}

function getRandStyle (num) {
   var rNum = Math.floor(Math.random()*num);
   //console.log("rNum = " +rNum);
   return rNum; 
}

function changeWord() {
   //clear any old random text
   document.getElementById(style).innerHTML = "";

   //generate new random style and text combo
   style = "s" + getRandStyle(6);
   console.log("style = " +style);
   document.getElementById(style).innerHTML = randomText[getRandNum()];
} 

function removeElement() {
   document.getElementById(style).innerHTML = "";
}


function renderItem() {
   fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
      let item = document.createElement("img");
      //item.classList.add("item");
      item.innerHTML = '<img class="dog-pic" src="${response.url}" alt="random dog image"/>';
      document.body.appendChild(item);
   })
}