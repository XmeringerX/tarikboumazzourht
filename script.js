function openTab(tabName) {
  var i, tabContent, tabLabel;
  tabContent = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLabel = document.getElementsByClassName("tab-label");
  for (i = 0; i < tabLabel.length; i++) {
    tabLabel[i].className = tabLabel[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
