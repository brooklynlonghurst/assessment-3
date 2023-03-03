
let buttonForRest = document.querySelector('#restaurantButton')

function getTheFood(){

    let restaurants = ["Purple Turtle", "The Holy Grill", "Pho No. 1", "PG Pool Hall / Star Saloon", "Chubby's Cafe", "Taco Amigo"]

    let randomRest = Math.floor(Math.random() * restaurants.length)
    let answer = (randomRest, restaurants[randomRest])
    alert(answer)
}

buttonForRest.addEventListener('click', getTheFood)