document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", loadTabs);
  }
});

function loadTabs(evt) {
  // Declare all variables
  var i, tablinks, value;

  value = evt.target.value;

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(/active/gi, "");
  }
  evt.currentTarget.className += " active";
}