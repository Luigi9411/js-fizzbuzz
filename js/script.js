
 for (let i = 1; i <=100; i++){
    let numString=i;

     if (i % 3==0 && i % 5==0){
        numString='FizzBuzz'
     }else if(i%3==0){ 
        numString='Fizz'
     }else if(i%5==0){
        numString='Buzz'
     }
         console.log (numString);
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
    