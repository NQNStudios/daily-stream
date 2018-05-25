function Day4Preload() {
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

function Day4Reveal1() {
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day4MinPt1").innerHTML;
}

function Day4Reveal2() {
  document.getElementById("__currentSection").innerHTML += Core.GetSection("Day4MinPt2").innerHTML;
  return "check my mailbox (nothing)";
}

function Day4FaintMusic() {
  phaser.sound.play('faintmusic');
}

function Day4Music1() {
  phaser.sound.play('music1');
}

function Day4OpenDoor() {
  phaser.sound.play('dooropen');
  phaser.sound.play('music2');
}

function Day4SoundsGood() {
  phaser.sound.play('soundsgood')
}

function Day4PlayMonologue() {
  phaser.sound.play('monologue');
}
