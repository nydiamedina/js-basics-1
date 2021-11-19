const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\r\n __          __  _                          _ " +
"\r\n \\ \\        \/ \/ | |                        | |" +
"\r\n  \\ \\  \/\\  \/ \/__| | ___ ___  _ __ ___   ___| |" +
"\r\n   \\ \\\/  \\\/ \/ _ \\ |\/ __\/ _ \\| '_ ` _ \\ \/ _ \\ |" +
"\r\n    \\  \/\\  \/  __\/ | (_| (_) | | | | | |  __\/_|" +
"\r\n     \\\/  \\\/ \\___|_|\\___\\___\/|_| |_| |_|\\___(_)" +                                      
"\r\n");

reader.question("Please enter your password: ", function(password) {
  const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$";
  const lowerCaseRegex = "(?=.*[a-z])";
  const upperCaseRegex = "(?=.*[A-Z])";
  const digitRegex = "(?=.*\\d)";
  const specialCharacterRegex = "(?=.*[-+_!@#$%^&*.,?])";

  if (password.length >= 10 && password.match(regex)) {
    console.log("\r\n   _____                             _" +
    "\r\n  \/ ____|                           | |" +
    "\r\n | (___  _   _  ___ ___ ___  ___ ___| |" +
    "\r\n  \\___ \\| | | |\/ __\/ __\/ _ \\\/ __\/ __| |" +
    "\r\n  ____) | |_| | (_| (_|  __\/\\__ \\__ \\_|" +
    "\r\n |_____\/ \\__,_|\\___\\___\\___||___\/___(_)" +
    "\r\n");
  } else if (password.length < 10) {
    console.log("Password should be at least 10 characters long.");
  } else if (!password.match(lowerCaseRegex)) {
    console.log("Password should contain at least one lowercase letter.");
  } else if (!password.match(upperCaseRegex)) {
    console.log("Password should contain at least one uppercase letter.");
  } else if (!password.match(digitRegex)) {
    console.log("Password should contain at least one digit.");
  } else if (!password.match(specialCharacterRegex)) {
    console.log("Password should contain at least one special character.");
  }
  
  reader.close();
});                                  

