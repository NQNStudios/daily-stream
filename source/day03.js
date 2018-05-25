function Day3Preload() {
  phaser.load.image('gay-jesus', 'assets/gay-jesus.jpg');
  phaser.load.image('gay-street', 'assets/gay-street.jpg');
  phaser.load.image('christmas', 'assets/christmas.png');
}

function Day3Animation() {
  var animationTime = 4000;
	var style = { font: "24px Arial", fill: "#ffffff", align: "left" };
  var thingsHeSaid = [
    "I've been reading the bible more lately",
    "It's really helped me understand who I am",
    "I recommend you read it",
    "",
    "I mean I'm not gonna say \"I hate you\" or anything",
    "I just don't think you should be doing that stuff",
    "I'm sick of people assuming I'm gay",
    "",
    "I used to act on my gay feelings",
    "God loves me, he's just not happy when I'm not doing his will",
    "When I was younger I cross-dressed",
    "I have a friend named Erik who wants to go by Samantha",
    "I still love him but it's wrong to try to be a woman",
    "",
    "I'm turning 22 and I've never kissed anyone",
    "Can you help me meet girls?",
  ];
  words = phaser.add.group();

  var startingY = 830;
  var delay = 0;

  for (var i = 0; i < thingsHeSaid.length; ++i) {
    var text = phaser.add.text(30, startingY, thingsHeSaid[i], style);
    phaser.add.tween(text).to({y: -50}, animationTime, Phaser.Easing.Linear.None, true, delay, 0, false);

    delay += animationTime/3;
  }

  setTimeout(Day3RevealNextLink, delay+animationTime);
}

function Day3RevealNextLink() {
  day2LightsOn();
  words.destroy();
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day3NextToReveal").innerHTML;
}
