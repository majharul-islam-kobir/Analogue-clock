let myClockEliment = document.querySelector('.clock')
myClockEliment.append(stripeArea())
myClockEliment.append( numberArea())
myClockEliment.append(hrElement ())

function stripeArea(){
    let creatPerenDiv = document.createElement('div')
    creatPerenDiv.classList.add('stripe-area')
   

    for(let i = 0; i < 60; i++){
        let creatspentteg = document.createElement ('span')
        creatspentteg.style.transform = `rotate(${i * 6}deg)`;
        if ( i % 5 == 0){
            creatspentteg.classList.add('stripe', 'circle')
        }
      else{
        creatspentteg.classList.add('stripe')
    }
    creatPerenDiv.append(creatspentteg)
    }

    return creatPerenDiv;
}

function numberArea(){
    let numberAreaEliment = document.createElement ('div')
    numberAreaEliment.classList.add('number-area');

    for(i = 1 ; i <= 12; i++){
        let numberElement = document.createElement('div')
        numberElement.classList.add ('number');
        numberElement.style.transform = `rotate(${i * 30}deg)`; 


        let creteSpan = document.createElement ('span')
        creteSpan.textContent = i;
        creteSpan.style.transform = `rotate( -${i * 30}deg)`; 
        numberElement.append (creteSpan);
        numberAreaEliment.append(numberElement);

    }

    return numberAreaEliment;
}

function hrElement (){
    let hrElementDiv = document.createElement ('div')
    hrElementDiv.classList.add ('time-hendeler')
    let hrElement = document.createElement ('div');
    hrElement.classList.add ('hr')
    let minElement = document.createElement ('div');
    minElement.classList.add ('min')
    let secElement = document.createElement ('div');
    secElement.classList.add ('sec')

    hrElementDiv.append (hrElement);
    hrElementDiv.append (minElement);
    hrElementDiv.append (secElement);


    return hrElementDiv;

    

  
}

function numberHendeler(){
    let d = new Date()
    let sec = d.getSeconds() / 60;
    let min = (sec + d.getMinutes()) / 60;
    let hr =( min + d.getHours()) /12;

    let secElem = document.querySelector('.sec')
    let minElem = document.querySelector('.min')
    let hrElem = document.querySelector('.hr')

    secElem.style.transform = `rotate(${sec * 360}deg)`; 
    minElem.style.transform = `rotate(${min * 360}deg)`; 
    hrElem.style.transform = `rotate(${hr * 360}deg)`; 
   
}

numberHendeler();
setInterval(numberHendeler, 1000);



