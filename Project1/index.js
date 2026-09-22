
/* This function allows the user to click on the app to display the video*/
function showNestedWebsite() {
    document.querySelector(".nestedWebsite").style.display = "block";
    document.querySelector(".appicon").style.display = "none";
    document.querySelector(".notes").style.display = "none";
    document.querySelector(".folder").style.display = "none";
}
/* When clicked, calls the function to hide/show corresponding elements */
document.querySelector(".appicon").addEventListener("click", showNestedWebsite);

/* This function allows the user to click on the 'X' button of the website to close the tab*/
function exitNestedWebsite() {
    document.querySelector(".nestedWebsite").style.display = "none";
    document.querySelector(".appicon").style.display = "block"
    document.querySelector(".notes").style.display = "block";
    document.querySelector(".folder").style.display = "block";
}
/*This calls the function once the 'X' button is actually clicked*/
document.querySelector(".exitButton").addEventListener("click", exitNestedWebsite)

/*Think of the same function being repeated, but in different ways tailored to each 'app' */
function showNotepad() {
    document.querySelector(".notepad").style.display = "block";
    document.querySelector(".notes").style.display = "none";
    document.querySelector(".appicon").style.display = "none";
    document.querySelector(".folder").style.display = "none";
}

document.querySelector(".notes").addEventListener("click", showNotepad);

function closeNotepad() {
    document.querySelector(".notepad").style.display = "none";
    document.querySelector(".notes").style.display = "block";
    document.querySelector(".appicon").style.display = "block";
    document.querySelector(".folder").style.display = "block";
}
document.querySelector(".leavenotes").addEventListener("click", closeNotepad);

/*This is the opening and closing for the Folder! Troubleshooting as of 00:11am */

function openFolder() {
    document.querySelector(".folder").style.display = "none";
    document.querySelector(".folderin").style.display = "block";
}
document.querySelector(".folder").addEventListener("click", openFolder)

function closeFolder() {
    document.querySelector(".folder").style.display = "block";
    document.querySelector(".folderin").style.display = "none";
}
document.querySelector(".leavefolder").addEventListener("click", closeFolder)

/*Function that allows the opening and closing of the Contacts */
function openContacts() {
    document.querySelector(".contacts").style.display = "none";
    document.querySelector(".incontacts").style.display = "block";
    document.querySelector(".readme").style.display = "none";
}
document.querySelector(".contacts").addEventListener("click", openContacts)

function closeContacts() {
    document.querySelector(".contacts").style.display = "block";
    document.querySelector(".incontacts").style.display = "none";
    document.querySelector(".readme").style.display = "block";
}
document.querySelector(".leavecontacts").addEventListener("click", closeContacts)

/*Function that allows the opening and closing of the README */
function openReadme() {
    document.querySelector(".contacts").style.display = "none";
    document.querySelector(".incontacts").style.display = "none";
    document.querySelector(".readme").style.display = "none";
    document.querySelector(".inreadme").style.display = "block";
}
document.querySelector(".readme").addEventListener("click", openReadme)

function closeReadme() {
    document.querySelector(".contacts").style.display = "block";
    document.querySelector(".incontacts").style.display = "none";
    document.querySelector(".readme").style.display = "block";
    document.querySelector(".inreadme").style.display = "none";
}
document.querySelector(".leavereadme").addEventListener("click", closeReadme)


/*This is a funny one! This function retrieves elements related to time, before combining them as a string
to display at the bottom of the screen when you look at the CSS related to the bottom bar and clock.*/
function updateClock() {
    const clock = document.getElementById("clock");

    const now = new Date();

    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clock.textContent = `[${hours}:${minutes}:${seconds}] ${day}/${month}/${year}`;
}
/*This calls the function updateClock and ensures that the time constantly updates itself. */
setInterval(updateClock, 1000)