












function randomGreeting() {
    var greetings = ["Hi", "Howdy", "Bonjour", "Ciao", "Buenos días"];
    var randomNum = Math.floor(Math.random() * 5);
    return greetings[randomNum];
}
