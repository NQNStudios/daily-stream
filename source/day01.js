window.Day1Preload = function() {
  phaser.load.image('bunk', 'assets/bunk.jpg');
  phaser.load.image('no-fap-nat', 'assets/no-fap-nat.png');
  phaser.load.image('no-fap', 'assets/no-fap.png');
  phaser.load.image('what-to-do', 'assets/what-to-do.png');
  phaser.load.image('what-i-did', 'assets/what-i-did.png');
}

window.Day1ShowJoke = function() {
  document.getElementById("__currentSection").innerHTML += "<p>" + Core.GetSection("Day1-Joke").innerHTML + "</p>"; 
}
