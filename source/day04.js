window.Day4Preload = function() {
  phaser.load.audio('dooropen', 'assets/day4/dooropen.wav');
  phaser.load.audio('faintmusic', 'assets/day4/faintmusic.wav');
  phaser.load.audio('monologue', 'assets/day4/monologue.wav');
  phaser.load.audio('music1', 'assets/day4/music1.wav');
  phaser.load.audio('music2', 'assets/day4/music2.wav');
  phaser.load.audio('soundsgood', 'assets/day4/soundsgood.wav');

  phaser.load.image('cards', 'assets/day4/cards.jpg');
  phaser.load.image('goodhand', 'assets/day4/goodhand.jpg');
  phaser.load.image('roof', 'assets/day4/roof.jpg');
  phaser.load.image('gay-jesus', 'assets/gay-jesus.jpg');
}

window.Day4Reveal1 = function() {
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day4MinPt1").innerHTML;
}

window.Day4Reveal2 = function() {
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day4MinPt2").innerHTML;
  return "check my mailbox (nothing)";
}

window.Day4FaintMusic = function() {
  phaser.sound.play('faintmusic');
}

window.Day4Music1 = function() {
  phaser.sound.play('music1');
}

window.Day4OpenDoor = function() {
  phaser.sound.play('dooropen');
  phaser.sound.play('music2');
}

window.Day4SoundsGood = function() {
  phaser.sound.play('soundsgood')
}

window.Day4PlayMonologue = function() {
  phaser.sound.play('monologue');
}
