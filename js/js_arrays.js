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
   document.writeln("<br>All the students in class are:<br><br>")
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }

   // Display the names in alphabetical order
   studentNames.sort()
   document.writeln("<br>Alphabetical Order:<br><br>")
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }
   // Display the names in reverse alphabetical order
   studentNames.reverse()
   document.writeln("<br>Reverse Alphabetical Order:<br><br>");
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }

   // Remove and display the names of the first and last students in the class
   document.writeln("<br>Remove first and last student names in the above list which are <br><br>" + studentNames.shift() + " and " + studentNames.pop() + ".<br>The number of remaining students are " + studentNames.length + "<br>");

   // Display the remaining students
   document.writeln("<br>Remaining Studets:<br><br>");
   for (var name in studentNames) {
      document.writeln("Student " + (parseInt(name)+1) + ": " + studentNames[name] + "<br>");
   }

   //-------------ADSE Staff Details-------------
   // Declare and initialise a 2-d array to hold staff salary details
   let studSalary = new Array(6);
   studSalary[0] = ["James", "001", "15000", "0", "5000"];
   studSalary[1] = ["John", "002", "30000", "10000", "5000"];
   studSalary[2] = ["Fussco", "003", "80000", "10000", "5000"];
   studSalary[3] = ["Bear", "004", "56000", "10000", "5000"];
   studSalary[4] = ["Shaw", "005", "70000", "10000", "5000"];
   studSalary[5] = ["Harold", "006", "100000", "10000", "5000"];

   // Section heading
   document.write("<h3 class=\"section-heading\">ADSE Staff Salary Report</h3>");

   // Create a table to display name, emp_id, basic pay, house allowance, travel allouance, gross pay, using document.write
   document.write("<table class=\"data-table\">");
   document.write("<tr><th>Name</th><th>Emp_ID</th><th>BasicPay</th><th>HouseAllowance</th><th>TravelAllowance</th><th>GrossPay</th></tr>");

   // using a nested loop iterate through the 2d array and create rows using document.write
   for (let i = 0; i < studSalary.length; i++) {
      document.write("<tr>");
      let grossPay = 0;
      for (let j = 0; j < studSalary[i].length; j++) {
         // prints the current rows information
         document.write("<td>" + studSalary[i][j] + "</td>");

         // This will add the gross pay together
         if(j > 1) {
            grossPay += parseInt(studSalary[i][j]);
         }
      }
      document.write("<td>" + grossPay + "</td>")
      document.write("</tr>");
   }
   document.write("</table>");

 }());