// Your Javascript goes here

// Load assets
function __preload() {
  phaser.load.image('bunk', 'assets/bunk.jpg');
}

// New section event: if a section has the Sprite tag, add the sprite to the
// window whose key matches the tag following Sprite
Core.AddEventListener('OnGotoSection', function(id, element, tags, reason) {
  if (window['sprite'] != null) {
    window['sprite'].destroy();
  }

  var index = tags.indexOf('Sprite');
  if (index != -1) {
    var spriteKey = tags[index+1];

    window['sprite'] = phaser.add.sprite(0, 0, spriteKey);
  }

  index = tags.indexOf('Scale');
  var scale = 1;
  if (index != -1) {
    var scale = parseFloat(tags[index+1]);

    window['sprite'].scale.setTo(scale, scale);
  }
});

function Season2Links() {
  // Generate HTML links to each section 
  // TODO this could be a lot nicer if Core provided link generator functions
  var list = "";
  var episodes = Core.GetSectionsWithTag("S2");

  for (var i = 0; i < episodes.length; i++) {
    episode = episodes[i];

    list += '<p><a href="javascript:Core.GoToSection(\'' + episode + '\');">' + episode + '</a></p>';
  }

  return list;
}
