            //Declaraation of global Varaibles.
                //Total score
                var score = 0;
                //Target score
                var target = 0;
                //wins
                var wins = 0;
                //losses
                var losses = 0;
                //number of clicks
                var clicks = 0;
                //array of button values.
                var buttonArray = [1,0,0,0];
                //RNG
                var rng = 0
                //Button Number
                var buttonNum = 0
                

            //Declaration of functions
            function reset (){
            //Reset transient values.
                //set score to 0
                score = 0
                //reset number of clicks
                clicks = 0
                //set target to random number
                target = Math.floor(Math.random() * 2500 + 1);
                //write target to HTML
                $("#target").html(" " + target + " ");
                //write 0 score to HTML
                $("#score").html(" " + score + " ");
                //regenerate button values
                for (var i = 1; i < 4; i++){
                      //run RNG function
                      random();
                      //splice RNG into the buttonArray at relevant positions
                      buttonArray.splice (i, 1, rng);
                      console.log(buttonArray[i])
                };
                
            };
            function win () {
                //Win
                    //Display winning message
                    alert ("Congratulations! You've won!")
                    //increment wins
                    wins++
                    //write wins to HTML
                    $("#wins").html(" " + wins + " ");                 
                    //write new array to html
                    $("#clicks").append( "<li>"+ "Win number" + wins + " : "  + clicks + "clicks </li>");
                    //run f(reset)
                    reset ();
                };
            function loss () {
                //loss
                    //display loss message
                    alert ("Oops, try again!")
                    //increment losses
                    losses++
                    //write losses to html
                    $("#losses").html(" " + losses + " ");
                    //run f(reset)
                    reset ();
                };

                //button press function
            function buttonPress(){  
                        //find value from button value array and assign to internal variable
                        var gem = buttonArray[buttonNum];
                        //increase score by value
                        score = score + gem;
                        console.log(score)
                        //write new score to HTML
                        $("#score").html(" " + score + " ");
                        //check if score is >target, loss, if score === target, win.
                        if (score === target){
                            win ();
                        }
                        else if (score > target){
                            loss ();
                        };
                        clicks++;
                    };

                //RNG function
            function random() {
                    var tempRng = Math.floor(Math.random() * 250) +1;
                    rng = tempRng;
                   
                };

                //button functions
            function button1 () {
                    buttonNum = 0;
                    buttonPress();
                };
            function button2 () {
                    buttonNum = 1;
                    buttonPress();
                };
            function button3 () {
                    buttonNum = 2;
                    buttonPress();
                };
            function button4 () {
                    buttonNum = 3;
                    buttonPress();
                };

                //button function assignment
            $(document).ready(function() {
                    $("#button1").on("click", button1);
                    $("#button2").on("click", button2);
                    $("#button3").on("click", button3);
                    $("#button4").on("click", button4);
                });



            //call f(reset)
            reset ();