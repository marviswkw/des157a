(function(){
    'use strict';
    console.log('reading js');

    window.onload = function() {
      alert("Hello and welcome to the user testing!\n\nPlease complete the following three tasks: \n- Hover over the image to see if the hover interaction functioning well\n- Click on the image and make the overlay window shows up. \n- Close each overlay with the button");
    };
    const lastSection = document.getElementById('lastSection');
    const timelineLine = document.querySelector('.timelineList:before');

    //variables targetting the timeline images
    const timelineImg1 = document.querySelector('.tlimage1');
    const timelineImg2 = document.querySelector('.tlimage2');
    const timelineImg3 = document.querySelector('.tlimage3');
    const timelineImg4 = document.querySelector('.tlimage4');
    const timelineImg5 = document.querySelector('.tlimage5');
    

    const overlay1 = document.querySelector('#overlay1');
    const overlay2 = document.querySelector('#overlay2');
    const overlay3 = document.querySelector('#overlay3');
    const overlay4 = document.querySelector('#overlay4');
    const overlay5 = document.querySelector('#overlay5');

    const closeBtns = document.querySelectorAll('.closeBtn');
    const body = document.querySelector('body');

    timelineImg1.addEventListener('click',function(event){
       event.preventDefault();
       overlay1.className = 'showing';
       body.style.backgroundImage = "url('images/bg2.png')";
    });

    timelineImg2.addEventListener('click',function(event){
        event.preventDefault();
        overlay2.className = 'showing';
        body.style.backgroundImage = "url('images/bg2.png')";
     });
     
     timelineImg3.addEventListener('click',function(event){
      event.preventDefault();
      overlay3.className = 'showing';
      body.style.backgroundImage = "url('images/bg2.png')";
   });

   timelineImg4.addEventListener('click',function(event){
      event.preventDefault();
      overlay4.className = 'showing';
      body.style.backgroundImage = "url('images/bg2.png')";
   });

   timelineImg5.addEventListener('click',function(event){
      event.preventDefault();
      overlay5.className = 'showing';
      body.style.backgroundImage = "url('images/bg2.png')";
   });


     for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', function(event) {
          event.preventDefault();
          overlay1.className ="hidden";
          overlay2.className ="hidden";
          overlay3.className ="hidden";
          overlay4.className ="hidden";
          overlay5.className ="hidden";
          body.style.backgroundImage = "url('images/bg1.png')";
         
       

        });
      }

   


})();