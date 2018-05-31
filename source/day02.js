window.Day2Preload = function() {
  phaser.load.image('shower', 'assets/shower.png');
}

Core.AddEventListener("OnGotoSection", function(sectionId, element, tags, reason) {
  if (sectionId === "5/23/18" && reason == EGotoSectionReason.Back) {
    day2LightsOut();
  }
  else if (tags.indexOf("Dark") != -1) {
    day2LightsOut();
  }
  else {
    day2LightsOn();
  }

});

window.day2just = function() {
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day2-1").innerHTML;

  return "isn't <i>just</i>";
}

// TODO this could be a part of Fractive Core
window.changeCSS = function(cssFile) {

    var oldlink = document.getElementsByTagName("link").item(1);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

window.day2LightsOut = function() {
  changeCSS("assets/dark-style.css");
}

window.day2LightsOn = function() {
  changeCSS("assets/default-style.css");
}
