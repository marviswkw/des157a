(function() {

    'use strict';
    console.log('reading js');

    const form = document.querySelector('form');

    form.addEventListener('submit',function(event){
       event.preventDefault();
       document.getElementById('formOutput').className = 'showing';
       console.log('show hidden');
    });

    form.addEventListener('submit',function(event){
    const result = document.getElementById('result');
    const beverages = document.getElementById('beverages').value;
    const time = document.getElementById('time').value;
    const mood = document.getElementById('mood').value;
    const atmosphere = document.getElementById('atmosphere').value;
    const food = document.getElementById('food').value;

    result.innerHTML = (`Wanna stay in a <span class="coloredText"> ${atmosphere} </span> coffee shop in Davis? This one is a perfect match for you. It is open at <span class="coloredText"> ${time}</span>, Monday through Sunday. It is a great study spot, chill and chat place after work or school. It has fantastic <span class="coloredText">${food}</span>. Craving for your favorite <span class="coloredText">${beverages}</span>? No problem! Here always has the best one for you on your <span class="coloredText">${mood}</span> day.`);

    const shopName = document.querySelector('#formOutput h2');
    console.log(shopName);
    const atmosphereOptions = document.getElementById("atmosphere");
    const atmosphereValue = atmosphereOptions.value;
    const foodOptions = document.getElementById("food");
    const foodValue = foodOptions.value;
    const shopImg = document.querySelector('#formOutput div');

    if(atmosphereValue === "quiet"){
        shopName.innerHTML = ('- PARCHAMAMA -');
        shopImg.innerHTML = (`<img id="shopImage" src="images/pachamama1.png" alt="coffee shop">`);
        
        console.log(shopImg);
    }

    if(atmosphereValue === "cozy"){
        shopName.innerHTML = ('- TEMPLE -');
    }

    if(atmosphereValue === "upbeat"){
        shopName.innerHTML = ('- PHILZ -');
        shopImg.innerHTML = (`<img id="shopImage" src="images/philz1.png" alt="coffee shop">`);}

     if(atmosphereValue === "busy"){
        shopName.innerHTML = ('- STARBUCKS -');
        shopImg.innerHTML = (`<img id="shopImage" src="images/starbuck3.png" alt="coffee shop">`);    
     }

    });


    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('formOutput').className ='hidden';
        
    });


}());