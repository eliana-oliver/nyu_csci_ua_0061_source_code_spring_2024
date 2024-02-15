// grab references to each of our tabs
const tabWelcome = document.getElementById('tabWelcome');
const tabTraditional = document.getElementById('tabTraditional');
const tabGlazed = document.getElementById('tabGlazed');

// grab references to each content panel
const contentWelcome = document.getElementById('contentWelcome');
const contentTraditional = document.getElementById('contentTraditional');
const contentGlazed = document.getElementById('contentGlazed');

// set up click handlers to let the user click on each tab

//  event handler to make our Welcome Tab active
tabWelcome.onclick = function() {
  // first, make this tab our 'active' tab by applying the 'active' class to it
  tabWelcome.classList.add("active");
  // remove the 'active' class from the other tabs
  tabTraditional.classList.remove("active");
  tabGlazed.classList.remove("active");
  // show the content associated with this tab
  contentWelcome.classList.remove("hidden");
  // hide the other two tabs
  contentTraditional.classList.add("hidden");
  contentGlazed.classList.add("hidden");
}

tabTraditional.onclick = function() {
  // first, make this tab our 'active' tab by applying the 'active' class to it
  tabTraditional.classList.add("active");
  // remove the 'active' class from the other tabs
  tabWelcome.classList.remove("active");
  tabGlazed.classList.remove("active");
  // show the content associated with this tab
  contentTraditional.classList.remove("hidden");
  // hide the other two tabs
  contentWelcome.classList.add("hidden");
  contentGlazed.classList.add("hidden");
}

tabGlazed.onclick = function() {
  // first, make this tab our 'active' tab by applying the 'active' class to it
  tabGlazed.classList.add("active");
  // remove the 'active' class from the other tabs
  tabTraditional.classList.remove("active");
  tabWelcome.classList.remove("active");
  // show the content associated with this tab
  contentGlazed.classList.remove("hidden");
  // hide the other two tabs
  contentTraditional.classList.add("hidden");
  contentWelcome.classList.add("hidden");
}



