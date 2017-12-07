//Zach's Greeting

function greeting() {
    var today = new Date();
    var hour = today.getHours();
    var day = today.getDay();
    var result = "";
    if (hour <= 10 && day == 1) {
        result = "Ugh, it's monday morning! </br>";

    } else if (hour <= 10 && day == 0) {
        result = "Go back to sleep, it's the weekend! </br>";

    } else if (hour <= 10 && day == 6) {
        result = "Go back to sleep, it's the weekend! </br>";

    } else if (hour <= 10 && day == 2) {
        result = "Good Morning </br>";

    } else if (hour <= 10 && day == 3) {
        result = "Good Morning </br>";

    } else if (hour <= 10 && day == 4) {
        result = "Good Morning </br>";

    } else if (hour <= 10 && day == 5) {
        result = "Good Morning </br>";

    } else if (hour >= 10 && hour <= 18 && day == 0) {
        result = "Hope you are having a great weekend! </br>";

    } else if (hour >= 10 && hour <= 18 && day == 6) {
        result = "Hope you are having a great weekend! </br>";

    } else if (hour >= 10 && hour <= 18 && day != 0) {
        result = "Good Day </br>";

    } else if (hour >= 10 && hour <= 18 && day != 6) {
        result = "Good Day </br>";

    } else if (hour >= 18 && day == 0) {
        result = "Enjoy your evening...tomorrow is Monday! </br>";

    } else if (hour >= 18 && day != 0) {
        result = "Good Evening </br>";
    }
    return result;
}


//Giorvi's Date Message

function dateMessage() {
    var end = "";
    var currentDate = new Date();
    var day = currentDate.getDate();
    var days = currentDate.getDay();
    var dayAr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = currentDate.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = currentDate.getFullYear();

    if (day == 1 && 21 && 31) {
        end = "st";

    } else if (day == 2 && 22) {
        end = "nd";
    } else if (day == 3 && 23) {
        end = "rd";
    } else {
        end = "th";
    }

    return "Today is " + dayAr[days] + ", " + months[month] + " " + day + end + ", " + year + "</br>";


}

//Brandon's Birthday Countdown

function birthdayCountDown(happybirthday) {
    var today = new Date();

    var myBirthday = new Date(happybirthday);

    myBirthday.setFullYear(today.getFullYear());

    if (today.getTime() > myBirthday.getTime()) {

        myBirthday.setFullYear(today.getFullYear() + 1);
    }

    var days_exact = ((myBirthday.getTime() - today.getTime()) / 86400000);

    var days = Math.floor(days_exact);

    var hours = Math.floor((days_exact % days) * 24);

    var minutes = Math.floor((((days_exact % days) * 24) % hours) * 60);

    return "My birthday is " + days + " days, " + hours + " hours, and " + minutes + " minutes away! </br> </br>";


}









//Brandon's Super Secret Functions (1-100 odd/even) that is better than Matthew Gao's
function even(min, max) {
    var num = Math.floor((max - min + 1) * Math.random());



    if (num == 0) {
        return num + 2;
    }
    if (num % 2 == 0) {
        return num;
    } else {
        return num + 1;
    }

}

function odd(min, max) {
    var numodd = Math.floor((max - min + 1) * Math.random());


    if (numodd % 2 == 1) {
        return numodd;
    } else {
        return numodd + 1;
    }
}
