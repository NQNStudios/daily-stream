var storyDay10 = {"inkVersion":17,"root":["^I have a tough decision to make.","\n",["ev",{"^->":"2.$r1"},{"temp=":"$r"},"str",{"->":"2.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"2.c","flg":18},{"s":["^It feels like I'm breaking up with someone.",{"->":"$r","var":true},null],"c":["ev",{"^->":"2.c.$r2"},"/ev",{"temp=":"$r"},{"->":"2.s"},[{"#n":"$r2"}],"\n",{"->":"breaking_up"},"\n",{"#f":5}]}],"done",{"breaking_up":["^On a Monday.","\n",["ev",{"^->":"breaking_up.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^an open-source game engine.","/str","/ev",{"*":".^.c","flg":22},{"s":["^The problem is I can't keep maintaining ",{"->":"$r","var":true},null],"c":["ev",{"^->":"breaking_up.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ SpaceFractive while also making games.","\n",{"->":"next_one"},"\n",{"#f":5}]}],{"#f":3}],"next_one":["^It's too much, and I'm even on summer break right now.","\n",["ev",{"^->":"next_one.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^my new friends for advice.","/str","/ev",{"*":".^.c","flg":22},{"s":["^I asked ",{"->":"$r","var":true},null],"c":["ev",{"^->":"next_one.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ a bunch of software developers for advice.","\n",{"->":"advice"},"\n",{"#f":5}]}],["ev",{"^->":"next_one.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^tried to rationalize.","/str","/ev",{"*":".^.c","flg":22},{"s":["^I ",{"->":"$r","var":true},null],"c":["ev",{"^->":"next_one.3.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ thought of all the reasons why I hurts.","\n",{"->":"hurts"},"\n",{"#f":5}]}],[{"*":".^.c","flg":24},{"c":["\n","\n","^Nothing I tried could make it a good decision. ",{"->":"nothing"},"\n",{"#f":5}]}],{"#f":3}],"advice":["^They said what I knew they would. One can't make these decisions based on sunk costs. If it's too much for me now, it'll definitely be too much for me when school starts again.","\n",{"->":"next_one"},{"#f":3}],"hurts":["^I put a lot of time and love into Fractive. And code.","\n",["ev",{"^->":"hurts.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Is code the purest expression of my love?",{"->":"$r","var":true},null],"c":["ev",{"^->":"hurts.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n","\n",{"->":"next_one"},{"#f":5}]}],{"#f":3}],"nothing":["^So I'm trying to move Stream of Pretentiousness (and eventually Ballad of the Space Bard) to a new engine someone else wrote (Ink). Everything feels weird and I'm sad about it.","\n","^But it's the only way forward.","\n","end",{"#f":3}],"#f":3}],"listDefs":{}};

function startDay10() {
    var story = new inkjs.Story(storyDay10);

    var storyContainer = document.getElementById('inkstory');

    function showAfter(delay, el) {
        setTimeout(function() { el.classList.add("show") }, delay);
    }

    function scrollToBottom() {
        var progress = 0.0;
        var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dist = document.body.scrollHeight - window.innerHeight - start;
        if( dist < 0 ) return;

        var duration = 300 + 300*dist/100;
        var startTime = null;
        function step(time) {
            if( startTime == null ) startTime = time;
            var t = (time-startTime) / duration;
            var lerp = 3*t*t - 2*t*t*t;
            window.scrollTo(0, start + lerp*dist);
            if( t < 1 ) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function continueStory() {

        var paragraphIndex = 0;
        var delay = 0.0;

        // Generate story text - loop through available content
        while(story.canContinue) {

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();

            // Create paragraph element
            var paragraphElement = document.createElement('p');
            paragraphElement.innerHTML = paragraphText;
            storyContainer.appendChild(paragraphElement);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);

            delay += 200.0;
        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function(choice) {

            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement('p');
            choiceParagraphElement.classList.add("choice");
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
            storyContainer.appendChild(choiceParagraphElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceParagraphElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
            choiceAnchorEl.addEventListener("click", function(event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                var existingChoices = storyContainer.querySelectorAll('p.choice');
                for(var i=0; i<existingChoices.length; i++) {
                    var c = existingChoices[i];
                    c.parentNode.removeChild(c);
                }

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                // Aaand loop
                continueStory();
            });
        });

        scrollToBottom();
    }

continueStory();
}
