function Day2Preload() {
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

function day2just() {
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day2-1").innerHTML;

  return "isn't <i>just</i>";
}

// TODO this could be a part of Fractive Core
function changeCSS(cssFile) {

    var oldlink = document.getElementsByTagName("link").item(1);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function day2LightsOut() {
  changeCSS("assets/dark-style.css");
}

function day2LightsOn() {
  changeCSS("assets/default-style.css");
}
