$(".nav_item").hover(function(){
  $(this).find(".submenu").show();
},function(){
  $(this).find(".submenu").hide();
}
)
$(".drop_down").click(function(){
  $(this).find(".drop_submenu").toggle();
})
// $(".nav_item").click(function(){
  
//   $(this).find(".submenu").toggle();
// })
//   $(".drop_down").mouseover(function(){
//     $(this).find(".drop_submenu").css("display","block")
//   })
//  $(".drop_down").mouseleave(function(){
//   $(this).find(".drop_submenu").css("display","none")
//  })
// $(".drop_down").hover(function(){
//   $(this).find(".drop_submenu").css("display","block")
// },function(){
//   $(this).find(".drop_submenu").css("display","none")
// });
//slider

// $('.slider').each(function(){ //for every slider
//   var $this = $(this);        // get the current slider
//   var $group = $this.find('.slide-group'); // get the slide group (container)
//   var $slides = $this.find('.slide');
//   var buttonArray = []; //create array to hold nav button
//   var currentIndex = 0; //index number of current slide
//   var timeout;
  
//   // move () - the function to move the slides
//   function move(newIndex){
//     var animateLeft, slideLeft;
    
//     advance();
    
//     if($group.is(':animated') || currentIndex === newIndex){
//       return;
//     }
    
//     buttonArray[currentIndex].removeClass('active');
//     buttonArray[newIndex].addClass('active');
    
//     if(newIndex > curentIndex){
//       slideLeft = '100%';
//       animateLeft = '-100%';
//     }else{
//       slideLeft = '-100%';
//       animateLeft = '100%';
//     }
    
//     $slides.eq(newIndex).css({left: slideLeft, display: 'block'});
//     $group.animate({left: animateLeft}, function(){
//       $slides.eq(currentIndex).css({display: 'none'});
//       $slides.eq(newIndex).css({left: 0});
//       $group.css({left: 0});
//       currentIndex = newIndex;
//     });
//   }
  
  
  
  
  
  
  
  
//   function advance(){                            //set timer between slides
//     clearTimeout(timeout);                       //clear timer stored in timeout
//     // start timer to runan anonymous function every 4 second
//     timeout = setTimeout(function(){
//       if(currentIndex < ($slide.length - 1)){
//         move(currentIndex + 1);
//       }else{
//         move(0);
//       }
//     }, 4000);
//   }
  
//   // script for creating next and prev button and slides
//   $.each($slides, function(index){
//     //create button element for button
//     var $button = $('<button type="button" class="slide-btn">&bull;</button>');
//     if (index === currentIndex){ // if index is current  item
//       $button.addClass('active')  // add active class
//     }
//     $button.on('click', function(){
//       move(index);
//     }).appendTo($this.find('.slide-buttons')); //add to the button holder
//     button.Array.push($button);
//   });
  
//   advance();
// });




$('.slider').each(function() {              // For every slider
    var $this   = $(this);                    // Current slider
    var $group  = $this.find('.slide-group'); // Get the slide-group (container)
    var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
    var buttonArray  = [];                    // Create array to hold navigation buttons
    var currentIndex = 0;                     // Hold index number of the current slide
    var timeout;                              // Sets gap between auto-sliding
  
    function move(newIndex) {          // Creates the slide from old to new one
      var animateLeft, slideLeft;      // Declare variables
  
      advance();                       // When slide moves, call advance() again
  
      // If it is the current slide / animating do nothing
      if ($group.is(':animated') || currentIndex === newIndex) {  
        return;
      }
  
      buttonArray[currentIndex].removeClass('active'); // Remove class from item
      buttonArray[newIndex].addClass('active');        // Add class to new item
  
      if (newIndex > currentIndex) {   // If new item > current
        slideLeft = '100%';            // Sit the new slide to the right
        animateLeft = '-100%';         // Animate the current group to the left
      } else {                         // Otherwise
        slideLeft = '-100%';           // Sit the new slide to the left
        animateLeft = '100%';          // Animate the current group to the right
      }
      // Position new slide to left (if less) or right (if more) of current
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
  
      $group.animate( {left: animateLeft}, function() {    // Animate slides and
        $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
        $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
        $group.css( {left: 0} );               // Set position of group of slides
        currentIndex = newIndex;               // Set currentIndex to the new image
      });
    }
  
    function advance() {                     // Used to set 
      clearTimeout(timeout);                 // Clear previous timeout
      timeout = setTimeout(function() {      // Set new timer
        if (currentIndex < ($slides.length - 1)) { // If slide < total slides
          move(currentIndex + 1);            // Move to next slide
        } else {                             // Otherwise
          move(0);                           // Move to the first slide
        }
      }, 4000);                              // Milliseconds timer will wait
    }
  
    $.each($slides, function(index) {
      // Create a button element for the button
      var $button = $('<button type="button" class="slide-btn"></button>');
      if (index === currentIndex) {    // If index is the current item
        $button.addClass('active');    // Add the active class
      }
      $button.on('click', function() { // Create event handler for the button
        move(index);                   // It calls the move() function
      }).appendTo('.slide-buttons');   // Add to the buttons holder
      buttonArray.push($button);       // Add it to the button array
    });
  
    advance();                          // Script is set up, advance() to move it
  
  
  });

  //slider p
  $('.owl-carousel').owlCarousel({
    rtl:true,
    // loop: true,
    margin: 10,
    // autoWidth:true,
    nav: true,
    dots:false,
    navText: [
      "<i class='fa fa-caret-right'></i>",
      "<i class='fa fa-caret-left'></i>"
    ],
    // autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        autoplay:false
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  })
  $(".closeNav").click(function(){
    $(".rsp_box").hide();
  })
  if($(window).width()<600){
    
    $(".headPc").addClass("non");
    $(".headMobile").removeClass("non")
    // $(".home_part4").addClass("non")
    // $(".home_part4Mobile").removeClass("non")
  }