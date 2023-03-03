console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let catPic = document.querySelector('img')

function catMouseover(){
	alert('You think the cat is cross-eyed too.')
}

catPic.addEventListener('mouseover', catMouseover)