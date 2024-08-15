function activeOrange() {
  activeLight("rød", "grønn", "orange", "orange", 2000, activeGreen);
}

function activeGreen() {
  activeLight("rød", "orange", "grønn", "grønn", 2000, activeRed);
}

function activeLight(divId1, divId2, divId3, divId4, delay, nextLightFunction) {
  document.getElementById(divId1).classList.remove("active");
  document.getElementById(divId2).classList.remove("active");
  document.getElementById(divId3).classList.remove("active");
  document.getElementById(divId4).classList.add("active");

  setTimeout(nextLightFunction, delay);
}

function activeRed() {
  activeLight("grønn", "orange", "rød", "rød", 2000, activeOrange);
}

activeRed();
