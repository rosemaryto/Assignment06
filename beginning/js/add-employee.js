// HANDLE THE LOAD EVENT OF THE WINDOW


    

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
function init(){
    "use strict";
    var width = 800;
    var height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));


// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
var submit = window.document.getElementById("submit");
submit.addEventListener("click", function () {
    var empid = window.document.getElementById("id").value;
    var empname = window.document.getElementById("name").value;
    var empext = window.document.getElementById("extension").value;
    var empemail = window.document.getElementById("email").value;
    var empdept = window.document.getElementById("department").value;
    var output = window.opener.document.getElementById("loginDetails");
    output.innerHTML = "ID: " + empid + "<br>" + "Name: " + empname + "<br>" + "Extension: " + empext + "<br>" + "Email: " + empemail + "<br>" + "Department: " + empdept;
    window.close();

});
}
window.addEventListener("load", init);
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP


// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

