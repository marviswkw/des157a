(function(){
    'use strict';
    console.log('reading js');
    
    const lastSection = document.getElementById('lastSection');
    const timelineLine = document.querySelector('.timelineList:before');
    

    // function newTimelineHeight(){
    // const sectionRect = lastSection.getBoundingClientRect();
    // const bottomPosition = sectionRect.bottom + 20;
    // timelineLine.style.height = bottomPosition + 'px';
    // console.log('Updating timeline height');
    // }
    // window.addEventListener('scroll', newTimelineHeight);

    // function newTimelineHeight(event){
    //     const mouseY = event.clientY;
    //     const sectionRect = lastSection.getBoundingClientRect();
    //     const bottomPos = sectionRect.bottom;
    //     const newHeight = Math.max(0, mouseY - bottomPos);
    //     timelineLine.style.height = newHeight + 'px'; 
    // };

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

    timelineImg1.addEventListener('click',function(event){
       event.preventDefault();
       overlay1.className = 'showing';
    });

    timelineImg2.addEventListener('click',function(event){
        event.preventDefault();
        overlay2.className = 'showing';
     });
     
     timelineImg3.addEventListener('click',function(event){
      event.preventDefault();
      overlay3.className = 'showing';
   });

   timelineImg4.addEventListener('click',function(event){
      event.preventDefault();
      overlay4.className = 'showing';
   });

   timelineImg5.addEventListener('click',function(event){
      event.preventDefault();
      overlay5.className = 'showing';
   });


     for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', function(event) {
          event.preventDefault();
          overlay1.className ="hidden";
          overlay2.className ="hidden";
          overlay3.className ="hidden";
          overlay4.className ="hidden";
          overlay5.className ="hidden";
         
       

        });
      }

   


})();