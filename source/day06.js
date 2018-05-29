function Day6Preload() {
  phaser.load.image('outline', 'assets/day6/outline.jpg');
  phaser.load.image('rc1', 'assets/day6/rc1.jpg');
  phaser.load.image('rc2', 'assets/day6/rc2.jpg');
  phaser.load.image('sourcecode', 'assets/day6/sourcecode.png');
  phaser.load.image('twine', 'assets/day6/twine.png');
  phaser.load.image('philadelphia', 'assets/day6/philadelphia.jpeg');
}

function Day6PutOnHeadphones() {
  var muteThis = document.getElementById("muteThis");

  var text = muteThis.innerHTML;

  for (var i = 0; i < text.length; ++i) {
    if (text[i] != " " && Math.random() < 0.33) {
      text = text.substring(0, i) + '*' + text.substring(i+1);
    }
  }

  console.log(text);

  var para = document.createElement("p");
  var node = document.createTextNode(text);
  para.appendChild(node);

  var section = document.getElementById("__currentSection");
  section.replaceChild(para, section.childNodes[1]);

  var nextPart = Core.GetSection("Day6HeadphonesOn");
  section.innerHTML += nextPart.innerHTML;
}
