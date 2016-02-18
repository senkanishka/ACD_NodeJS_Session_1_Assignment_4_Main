function setPerson(city) {
  var age = parseInt("10");
  var name = "Kanishka Sen";
  var country = "India"; 
  
  function printPerson() {       
    console.log("Your age is " + age);
    console.log("Your name is " + name);
    console.log("You are in " + city + ", " + country);
  
  }

  printPerson();
}

setPerson ("Kolkata");   // output: You are in Kolkata, India