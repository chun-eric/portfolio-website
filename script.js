'use strict';


/* Toggling Responsive Navbar on Mobile */
//selecting elements
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');


bar.addEventListener("click", () => {
    navbar.classList.add('activate');
})

close.addEventListener('click', () => {
    navbar.classList.remove('activate')
})






/* Dark Mode */







/* Portfolio Filtering */

//selecting elements
const gallery = document.querySelector(".gallery");
const itemboxes = document.querySelectorAll(".itembox");


// Click events
gallery.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter")) {
        //#1 removing the active class in original state
        gallery.querySelector(".active").classList.remove("active");

        //#2 adding the active class to its new clicked state
        e.target.classList.add("active")

        //#3 getting the value from data-filter attribute
        const filterValue = e.target.getAttribute("data-filter");

        //#4 Looping through all the itemboxes & checking if each item contains filterValue

        //#5 Adding a show class and removing a hide class
        itemboxes.forEach(item => {
            if(item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.add("show");
                item.classList.remove("hide")
            } else 
            {
                item.classList.add("hide")
                item.classList.remove("show")
               
            }
        })
    }

});





/* Form Submission and Error Handling */
const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")
const emailSuccess = document.getElementById("email-success")
const form = document.getElementById("form");
const submitButton = document.getElementById("submit--button")

console.log(form);

// remove error styling
function removeError() {
    emailError.innerHTML="";
    emailInput.style.borderBottomColor = "transparent"
}

// remove success styling
function removeSuccess() {
    emailSuccess.innerHTML="";
    emailInput.style.borderBottomColor = "transparent"

}

// clearing all inputs
function clearAll () {
    form.reset();
}

// validating email
function validateEmail() {
  
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email."
        emailError.style.top = "120%"
        emailInput.style.borderBottomColor = "red"
        removeSuccess()

        if (emailInput.value == "") {
            removeError();
            return true;
        }
        return false;

    } 
        emailSuccess.innerHTML ="Success!";
        emailSuccess.style.top = "120%"
        emailInput.style.borderBottomColor = "rgb(64, 179, 11)";
        removeError();
        return true;   
}


// changing button effect when clicked 
submitButton.addEventListener("click", () => {
    // adding a button effect
    submitButton.classList.add("submit--btn");
})

form.addEventListener("submit", () => {
    form.reset();
})