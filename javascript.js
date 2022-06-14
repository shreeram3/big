const hambuger = document.querySelector(".hambuger");
const links = document.querySelector(".links");
hambuger.addEventListener('click',() =>{
	links.classList.toggle("open")
	})