//

// Mobile Nav Icon
var mobilenaviconElement = document.querySelector("#mobile-icon");
var navElement = document.querySelector("nav");
var asideElement = document.querySelector("aside");

mobilenaviconElement.addEventListener('click', function () { 
  navElement.classList.toggle('responsive'); 
});

//
// Functions
//
function toggleDisplay(elementID) {
  element = document.getElementById(elementID);

  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  if (element.style.display === "block") element.style.display = "none";
  else element.style.display = "block";
}

function toggleTab(evt, tabID) {
  var i, tabcontent, btnTabs;
  // Hides all tabbedContent by default
  tabcontent = document.querySelectorAll(".tabbedContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  btnTabs = document.getElementsByClassName("tab");
  for (i = 0; i < btnTabs.length; i++) {
    btnTabs[i].className = btnTabs[i].className.replace(" active", "");
  }

  tabElement = document.getElementById(tabID);
  tabDisplay = tabElement.style.display;

  tabElement.style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
