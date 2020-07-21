// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
    this.classList.toggle("active")
}
    
      
    
    
    // Selects an HTML element, and calls a function which will be executed when the element is clicked.
    document.getElementById("section1").onclick = toggle
    document.getElementById("section2").onclick = toggle
    document.getElementById("section3").onclick = toggle
    document.getElementById("section4").onclick = toggle

    document.getElementById("arrow1").onclick = toggle
    document.getElementById("arrow2").onclick = toggle
    document.getElementById("arrow3").onclick = toggle
    document.getElementById("arrow4").onclick = toggle

    document.getElementById("header").onclick = toggle


function selectTab(selectedTabNumber) {
    if (selectedTabNumber === 1){ document.getElementById("tab-1").style.display="flex" ; document.getElementById("button-tab-1").style.display="block" } else { document.getElementById("tab-1").style.display="none" }
    if (selectedTabNumber === 2){ document.getElementById("tab-2").style.display="flex" } else { document.getElementById("tab-2").style.display="none" }
    if (selectedTabNumber === 3){ document.getElementById("tab-3").style.display="flex" } else { document.getElementById("tab-3").style.display="none" }

    console.log("selectedtab :" +selectedTabNumber)
}

selectTab(1);

/*document.getElementById("button-tab-1").onclick = selectTab(1)
document.getElementById("button-tab-2").onclick = selectTab(2)
document.getElementById("button-tab-3").onclick = selectTab(3)*/