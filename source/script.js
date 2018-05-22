// Your Javascript goes here

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
