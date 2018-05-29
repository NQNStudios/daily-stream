window['sectionsVisited'] = {};

Core.AddEventListener('OnGotoSection', function(id, element, tags, reason) {
  if (id === "Day6Test") {
    Day6SeenAllCheck();
  }

  window['sectionsVisited'][id] = true;
});

function Day6Preload() {
  phaser.load.image('outline', 'assets/day6/outline.jpg');
  phaser.load.image('outlineDone', 'assets/day6/outlineDone.jpg');
  phaser.load.image('rc1', 'assets/day6/rc1.jpg');
  phaser.load.image('rc2', 'assets/day6/rc2.jpg');
  phaser.load.image('sourcecode', 'assets/day6/sourcecode.png');
  phaser.load.image('twine', 'assets/day6/twine.png');
  phaser.load.image('philadelphia', 'assets/day6/philadelphia.jpeg');
  phaser.load.image('chemex', 'assets/day6/chemex.jpg');
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

function Day6SeenAllCheck() {
  var seenAll = true;

  var SectionsNeeded = [
    'Day6SourceCode',
    'Day6Twine',
    'Day6Test',
    'Day6LastNight',
    'Day6Exhausted',
    'Day6Breakfast',
    'Day6Bagels',
    'Day6Eggs',
    'Day6Coffee',
    'Day6OJ',
    'Day6PaperPlates',
    'Day6CoffeeTakesAWhile',
    'Day6BadSugaring',
    'Day6ArrestedDevelopment',
    'Day6Quiet'
  ];

  console.log(window['sectionsVisited']);

  for (var i = 0; i < SectionsNeeded.length; ++i) {
    if (SectionsNeeded[i] in window['sectionsVisited'] && window['sectionsVisited'][SectionsNeeded[i]] === true) { }
    else
      seenAll = false;
  }

  if (seenAll) {
    Core.GoToSection("Day6Final");
  }
}
