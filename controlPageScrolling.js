// Number of clicks on the menu element initially set on 0
let numOfClicks = 0;
// Get menu element 
const menuTrigger = document.getElementsByClassName("MenuTriggerClassName")[0];
// Get body element
const bodyEl = document.getElementsByTagName("body")[0];

// Set onclick function to menu element
menuTrigger.onclick = () => {
    // Increase number of clicks value by 1 every time the menu element is clicked
    numOfClicks += 1;
    // Check if number of clicks is an even value: 
    // odd value - menu is opened, even value - menu is closed
    const isNumOfClicksEven = numOfClicks % 2 === 0;
    // If menu is closed - set overflow property to "auto", 
    // If menu is opened - set overflow property to "hidden"
    isNumOfClicksEven ? bodyEl.style.overflow = "auto" : bodyEl.style.overflow = "hidden";
};
