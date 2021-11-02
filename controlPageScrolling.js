// Number of clicks on the trigger element initially set on 0
let numOfClicks = 0;
// Get trigger element 
const trigger = document.getElementsByClassName("triggerClassName")[0];
// Get body element
const bodyEl = document.getElementsByTagName("body")[0];


// Set onclick function to trigger element
trigger.onclick = () => {
    numOfClicks += 1;
    // Check if number of clicks is an even value: 
    // odd value - first click, even value - second click
    const isNumOfClicksEven = numOfClicks % 2 === 0;
    // On first click set body's overflow property to "auto", 
    // On second click set body's overflow property to "hidden"
    isNumOfClicksEven ? bodyEl.style.overflow = "auto" : bodyEl.style.overflow = "hidden";
};