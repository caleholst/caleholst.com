// what is a greeting function supposed to do ?
function greeting() {
    let greeting = "Welcome to the page from the Greeting Method";
    let greetingBlock = document.querySelector("#greetingBlock");
    greetingBlock.textContent = greeting;

}

function getFormattedDate() {
    let currentDate = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    let formattedDate = day + " " + month + " " + currentDate.getDate() + ", " + year;
    return formattedDate;
}

function getYear() {
    let currentYear = new Date();
    let year = currentYear.getFullYear();
    let formattedYear = " " + year
    return formattedYear;
}

// Is this what you meant by symbol ? 
function getCopyright() {
    let copyRightSymbol = '\u00A9';
    return copyRightSymbol;
}