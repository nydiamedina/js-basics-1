const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\r\n __          __  _                          " +
"\r\n \\ \\        / / | |                         " +
"\r\n  \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___ " +
"\r\n   \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\" +
"\r\n    \\  /\\  /  __/ | (_| (_) | | | | | |  __/" +
"\r\n     \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|" +
"\r\n");

reader.question("Please enter your password: ", function(password) {
  const fullRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$";
  const lowerCaseRegex = "(?=.*[a-z])";
  const upperCaseRegex = "(?=.*[A-Z])";
  const digitRegex = "(?=.*\\d)";
  const specialCharacterRegex = "(?=.*[-+_!@#$%^&*.,?])";

  const successAsciiArt = "\r\n   _____                             " +
  "\r\n  / ____|                            " +
  "\r\n | (___  _   _  ___ ___ ___  ___ ___ " +
  "\r\n  \\___ \\| | | |/ __/ __/ _ \\/ __/ __|" +
  "\r\n  ____) | |_| | (_| (_|  __/\\__ \\__ \\" +
  "\r\n |_____/ \\__,_|\\___\\___\\___||___/___/" +                            
  "\r\n";                          

  const errorAsciiArt = "\r\n  ______                     " +
  "\r\n |  ____|                    " +
  "\r\n | |__   _ __ _ __ ___  _ __ " +
  "\r\n |  __| | '__| '__/ _ \\| '__|" +
  "\r\n | |____| |  | | | (_) | |   " +
  "\r\n |______|_|  |_|  \\___/|_|   " +
  "\r\n";
 
  if (password.length >= 10 && password.length <= 20 && password.match(fullRegex)) {
    console.log(successAsciiArt);
  } else if (password.length < 10) {
    console.log(errorAsciiArt + "Password should be at least 10-characters long.");    
  } else if (password.length > 20) {
    console.log(errorAsciiArt + "Password should have a maximum of 20 characters.");  
  } else if (!password.match(lowerCaseRegex)) {
    console.log(errorAsciiArt + "Password should contain at least one lowercase letter.");
  } else if (!password.match(upperCaseRegex)) {
    console.log(errorAsciiArt + "Password should contain at least one uppercase letter.");
  } else if (!password.match(digitRegex)) {
    console.log(errorAsciiArt + "Password should contain at least one digit.");
  } else if (!password.match(specialCharacterRegex)) {
    console.log(errorAsciiArt + "Password should contain at least one special character.");
  }
  
  reader.close();
});                                  

