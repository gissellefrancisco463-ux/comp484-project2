$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Michi", weight:8, happiness:12};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 2;
      // Increase pet weight
      pet_info.weight += 1;
      checkAndUpdatePetInfoInHtml();
      showPetComment("That was yummy! Can I have another?");
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness += 3;
      // Decrease pet weight
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      showPetComment("That was fun!");
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness -=1 ; 
      // Decrease pet weight
      pet_info.weight -= 2;
      checkAndUpdatePetInfoInHtml();
      showPetComment("Whew! I need a break.")
    }

    function clickedNapButton() {
      //Increases pet happiness
      pet_info.happiness += 1;
      checkAndUpdatePetInfoInHtml();
      showPetComment("Zzz... that was a good nap.");
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight < 0){
        pet_info.weight = 0;
      }

      if(pet_info.happiness < 0){
        pet_info.happiness = 0; 
      }
    }
    
    function showPetComment(message){
      //.remove deletes the previous comment paragraph from the page
      //so messages do not stack up after each button press
      $('#pet-comment').remove();
      var comment = $('<p id="pet-comment"></p>').text(message);
      //.after() inserts the new comment immediately after the entire happiness row
      $('#pet-happiness-row').after(comment);
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  