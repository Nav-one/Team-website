// Greeting

function randomGreeting() {
    var greetings = ["Hi", "Howdy", "Bonjour", "Ciao", "Buenos días"];
    var randomNum = Math.floor(Math.random() * 5);
    return greetings[randomNum];
}

//Date Message

function dateMessage() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var days = currentDate.getDay();
    var dayAr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = currentDate.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = currentDate.getFullYear();

    return "Today is " + dayAr[days] + ", " + months[month] + " " + day + ", " + year;

}
