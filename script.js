'use strict';

//selecting elements
const gallery = document.querySelector(".gallery");
const itemboxes = document.querySelectorAll(".itembox");
console.log(itemboxes);

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