(function() {

    'use strict';
    console.log('reading js');

    //setting the variables to the checked values
    let selectedPrice = '';
    const form = document.querySelector('form');

    //querySelectorAll returns all matches into an HTML Collection
    const priceButtons = document.querySelectorAll('#priceOptions input[type="radio"]');

     //traverse the priceButtons collection to attach a click event to each one
     for (let i = 0; i < priceButtons.length; i++) {
        // console.log(priceButtons[i]);
        priceButtons[i].addEventListener('click', function(){
            // remove all classes from each priceButton
            for (let i = 0; i < priceButtons.length; i++) {
                console.log(priceButtons[i].nextElementSibling);
                const classes = priceButtons[i].nextElementSibling.classList;
                classes.remove('radioSelected');
            }
            //the keyword this means which radio button called this function
            selectedPrice = this.getAttribute('value');
            const selectedElement = this.nextElementSibling.className='radioSelected';
            console.log(`price selected: ${selectedPrice}`);
            console.log(selectedElement);

        });
    }

    // define functions
    function whichPrice() {
    }

    const sections = document.querySelectorAll('section');

    form.addEventListener('submit', function(evt){
        //stop the page from reloading
        evt.preventDefault();

    });

    form.addEventListener('submit',function(event){
       event.preventDefault();
       document.getElementById('formOutput').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('formOutput').className ='hidden';
    });

}());