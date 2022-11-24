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
      "<br><h3 class=\'section-heading\'>Student Details</h3><p>" 
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
      document.writeln("<br><h3 class=\'section-heading\'>Employee Details</h3><p>"
      + employee.fullDetails() + "</p>");

      function Circle(rad) 
      {
         this.radius = rad;
         this.circumfrience = function (){
            let cf = Math.PI * 2 * r;
            return cf;
         }  
         this.area = function (){
            let ar = Math.PI * Math.pow(r, 2);
            return ar;
         }  
      }
}());