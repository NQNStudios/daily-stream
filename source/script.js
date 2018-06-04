// Your Javascript goes here

// Load assets every story needs
window.__preload = function() {
  phaser.load.image('cover', 'assets/itch-cover.jpeg');
}

// New section event: if a section has the Sprite tag, add the sprite to the
// window whose key matches the tag following Sprite
Core.AddEventListener('OnGotoSection', function(id, element, tags, reason) {
  if (window['sprite'] != null) {
    window['sprite'].destroy();
  }

  if (tags.indexOf('Ink') == -1) {
    document.getElementById("inkstory").innerHTML = "";
  }

  var index = tags.indexOf('Sprite');
  var spriteKey = 'cover';
  if (index != -1) {
    spriteKey = tags[index+1];
  }

  if (spriteKey !== "none") {
    window['sprite'] = phaser.add.sprite(0, 0, spriteKey);

    index = tags.indexOf('Scale');
    var scale = 1;
    if (index != -1) {
      var scale = parseFloat(tags[index+1]);

      window['sprite'].scale.setTo(scale, scale);
    }
  }
});

window.Season2Links = function() {
  // Generate HTML links to each section 
  // TODO this could be a lot nicer if Core provided link generator functions
  var list = "";
  var episodes = Core.GetSectionsWithTag("S2");

  for (var i = 0; i < episodes.length; i++) {
    var episode = episodes[i];

    // Each episode link needs to call the preload function for its episode
    var preloadFunction = 'Day' + (i+1) +'Preload';
    var onloadFunction = 'function() { Core.GoToSection(\'' + episode  +'\'); }';

    var onclick = 'if (\'' + preloadFunction + '\' in window) {' + preloadFunction + '(); }';
    onclick += 'phaser.load.onLoadComplete.add(' + onloadFunction + ');';
    onclick += 'phaser.load.start();';
    list += '<p><a href="javascript:' + onclick + '">' + episode + '</a></p>';
  }

  return list;
}
