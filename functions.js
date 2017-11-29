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

//Birthday Countdown

function birthdayCountDown(happybirthday) {
    var today = new Date();

    var myBirthday = new Date(happybirthday);

    var bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);

    if (today.getTime() > bday.getTime()) {

        bday.setFullYear(bday.getFullYear() + 1);
    }

    var diff = bday.getTime() - today.getTime();

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));

    var hours = Math.floor(days / (1000 * 60 * 60));

    var minutes = Math.floor(hours / (1000 * 60));

    document.write("The time until my birthday is: ", days, " days, ", hours, " hours, and ", minutes, " minutes!", "</br>", "</br>");


}










//Brandon's Super Secret Functions that is better than Matthew Gao's
function hello(min, max) {
    var num = Math.floor((max - min + 1) * Math.random());



    if (num == 0) {
        return num + 2
    }
    if (num % 2 == 0) {
        return num;
    } else {
        return num + 1;
    }

}

function goodbye(min, max) {
    var numodd = Math.floor((max - min + 1) * Math.random());


    if (numodd % 2 == 1) {
        return numodd;
    } else {
        return numodd + 1;
    }
}
