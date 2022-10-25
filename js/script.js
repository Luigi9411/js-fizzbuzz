
 for (let i = 1; i <=100; i++){
    
     if (i % 3==0 && i % 5==0){
        i='FizzBuzz'
     }else if(i%3==0){ 
        i='Fizz'
     }else if(i%5==0){
        i='Buzz'
     }
         console.log (i);
     }
    
    const eleSquares = document.querySelector('.squares');

    for (let i = 1; i <=100; i++){

        if (i % 3==0 && i % 5==0){
           eleSquares.innerHTML += `<div class="sq4">FizzBuzz</div>`;
        }else if(i%3==0){ 
           eleSquares.innerHTML += `<div class="sq2">Fizz</div>`;
        }else if(i%5==0){
            eleSquares.innerHTML += `<div class="sq3">Buzz</div>`;
        }
        else{
            eleSquares.innerHTML += `<div class="sq">${i}</div>`;
        }

    }
    