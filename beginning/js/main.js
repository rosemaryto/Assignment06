// HANDLE THE LOAD EVENT OF THE WINDOW
function init() {
    "use strict";
    var addEmp = window.document.getElementById("btnAddEmployee");
    addEmp.addEventListener("click", function () {
        window.open("add-employee.html", "btnAddEmployee", "width=400,height=400");    
    });
}
window.addEventListener("load", init);

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP