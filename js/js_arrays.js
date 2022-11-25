(function() {
   "use strict";
   
   //Write code here.
   // Declare variables that we will use for looping
   var a,n;
   // Declare an array of student names
   var studentNames = new Array("Shamis", "Muriuki", "Ziprine", "Austin", "Leonard", "Imran", "Timothy", "Samuel");
   // Display the names in the studentNames array using a for loop
   for (n = 0; n < studentNames.length; n++) {
      document.writeln("Student " + (n+1) + ": " + studentNames[n] + "<br>")
   }
   // Display the number of students in this class
   document.write("<p>The number of students in this class is: " + studentNames.length + "</p>");
   // Addmit new students into the array
   studentNames.push("Gabe", "Jone", "Nat", "Rick");
   // Display the names of the new students
   for (; n < studentNames.length; n++) {
      
      document.writeln("Student " + (n+1) + ": " + studentNames[n] + "<br>")
   }

   // Display the names of all the students in class using a for...each loop before sorting
   document.write("<br>All the students in class are:<br><br>")
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }

   // Display the names in alphabetical order
   studentNames.sort()
   document.write("<br>Alphabetical Order:<br><br>")
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }
   // Display the names in reverse alphabetical order
   studentNames.reverse()
   document.write("<br>Reverse Alphabetical Order:<br><br>")
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }

}());