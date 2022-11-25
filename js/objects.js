// This document is to illustrate how to work with functions, built-in objects, loops and custom-objects
(function () {
   "use strict";

   // The bellow var is an object
   var singleStudent = 
   {
      surname: "Muchiri",
      otherNames: "Muriuki",
      age: 19, 
      gender: "Male",
      course: "ADSE",
      fullname: function() 
      {
         return this.otherNames + " " + this.surname;
      }      
   };

   document.writeln(
      "<br><h4 class=\'section-heading\'>Student Details</h4><p>" 
      + "Student Name: " + singleStudent.fullname() + "<br>"
      + "Student Age: " + singleStudent.age + "<br>"
      + "Student Gender: " + singleStudent.gender + "<br>"
      + "Student Course: " + singleStudent.course + "<br></p>"
      );

      // Create a new employee using the new Object(): (using a constructor)
      let employee = new Object()
      employee.firstname = "Gabe";
      employee.lastname = "Jone";
      employee.gender = "Male";
      employee.phonenumber = "+2541728349854";
      employee.age = 25;
      employee.salary = 5000000;

      // Create a method to display employee details
      employee.fullDetails = function() 
      {
         var allDetails = 
            "Employee Name: " + this.firstname + " " + this.lastname +
            "<br>Employee Gender: " + this.gender +
            "<br>Employee Phone: " + this.phonenumber +
            "<br>Employee Age: " + this.age +
            "<br>Employee Salary: " + "Ksh." + this.salary;
         return allDetails;
      }
      document.writeln("<br><h4 class=\'section-heading\'>Employee Details</h4><p>"
      + employee.fullDetails() + "</p>");

      // Creating a circle Object with methods to find area and circuference of a circle.
      function Circle(rad) 
      {
         this.radius = rad;
         this.circumfrience = function (){
            let cf = Math.PI * 2 * this.radius;
            return cf;
         }  

         this.area = function (){
            let ar = Math.PI * Math.pow(this.radius, 2);
            return ar;
         }  
      }
      // declare and instantiate variables
      var smallCircle = new Circle(7);
      var largeCircle = new Circle(21);
  
      // Display circle details in the html file.
      document.writeln("<h4 class=\'section-heading\'>Details of the small circle</h4><p>"
      + "Radius: " + smallCircle.radius + "cm <br>"
      + "Area: " + Math.round(smallCircle.area()) + "cm<sup>2</sup><br>"
      + "Circumference: " + Math.round(smallCircle.circumfrience()) + "cm<br></p>" );

      document.writeln("<h4 class=\'section-heading\'>Details of the big circle</h4><p>"
      + "Radius: " + largeCircle.radius + "cm<br>"
      + "Area: " + Math.round(largeCircle.area()) + "cm<sup>2</sup><br>"
      + "Circumference: " + Math.round(largeCircle.circumfrience()) + "cm<br></p>" );

      // Create an object of right angled triangle
      function Triangle (base, height) {
         this.b = base;
         this.h = height;
         // Create methods to find the area and the perimeter
         this.area = function() 
         {
            return 0.5 * this.b * this.h;
         }

         this.perimeter = function()
         {
            return this.b + this.h + (Math.sqrt(Math.pow(this.b, 2) + Math.pow(this.h, 2)));
         }
      }

      // Create 2 instances of the triangle object
      let smallTri = new Triangle(7, 5);
      let bigTri = new Triangle(32, 50);
      
      // Display the details about the two triangles
      // Small Triangle
      document.write("<h3 class=\'section-heading\'>Details about the small triangle.</h3><br>");
      document.write("<p> Base: " + smallTri.b + "cm<br>" 
      + "Height: " + smallTri.h + "cm<br>"
      + "Area: aprox " + Math.round(smallTri.area()) + "cm<sup>2</sup><br>"
      + "Perimeter: aprox " + Math.round(smallTri.perimeter()) + "cm</p>");
      
      // Big Triangle
      document.write("<h3 class=\'section-heading\'>Details about the big triangle.</h3><br>");
      document.write("<p> Base: " + bigTri.b + "cm<br>" 
      + "Height: " + bigTri.h + "cm<br>"
      + "Area: aprox " + Math.round(bigTri.area()) + "cm<sup>2</sup><br>"
      + "Perimeter: aprox " + Math.round(bigTri.perimeter()) + "cm</p>");


      //Working with built in JavaScript Date Object
      var now = new Date(); //Get the current  time instance
      var currYear = now.getFullYear(); //Get current year
      var currMonth = now.getMonth(); //Get current month as an index number between 0 - 11
      var currDay = now.getDay(); //Returns day of the week as an index number between 0 - 6
      var currDate = now.getDate();

      switch (currDay) {
         case 0:
            currDay = "Sunday";
            break;
         case 1:
            currDay = "Monday";
            break;
         case 2:
            currDay = "Tuesday";
            break;
         case 3:
            currDay = "Wednesday";

            break;
         case 4:
            currDay = "Thursday";
            break;
         case 5:
            currDay = "Friday";
            break;
         case 6:
            currDay = "Saturday";
            break;
      }
      var currHour = now.getHours();
      var currMin = now.getMinutes();
      var currSec = now.getSeconds();

      // DISPLAY TODAYS DATE AND TIME USING DOCUMENT WRITE
      document.write("<h3 class=\'section-heading\'>Date and Time</h3><br>");
      document.write("Date: " + currDay + " " + currYear + "/" +currMonth + "/" + currDate);
      document.write("<br>Time: " + currHour + ":" + currMin + ":" + currSec + "</p>");

}());