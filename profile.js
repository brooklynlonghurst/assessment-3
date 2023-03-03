let favColor = document.querySelector('#color')

function colorButton(){
    alert('My favorite color is forest green.')
}

favColor.addEventListener('click', colorButton)



let favPlace = document.querySelector('#place')

function placeButton(){
    alert('My favorite place to be is my home.')
}

favPlace.addEventListener('click', placeButton)



let favRitual = document.querySelector('#ritual')

function ritualButon(){
    alert('My favorite ritual is to have my headphones on playing Promise by Ben Howard while writing in my journal. Of course there is a eucalyptus and mint candle nearby and if chance would have it, it is rainy outside and I have my comfy clothes on too.')
}

favRitual.addEventListener('click', ritualButon)



let sumbitButton = document.querySelector('#profileSumbit')

function getTheMessage(){
    alert('Thank you for your message. We will be in touch soon!')
}

sumbitButton.addEventListener('click', getTheMessage)