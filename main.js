window.onload = () =>{
	let check = document.querySelector("input[type='checkbox']")
	document.addEventListener("change",()=>{
		console.log(check.checked)
	let body = document.querySelector("body").style
	let text = document.querySelector(".light-white")
	if (check.checked){
		body.background = "linear-gradient(hsl(225, 100%, 98%) 30%,  hsl(0, 0%, 100%) 30%)"
		body.color = "hsl(230, 17%, 14%)"
		text.classList.add("dark-white")
	document.querySelectorAll(".card-bg-dark").forEach((e)=>{
		e.classList.add("card-bg-light")
  		e.style.setProperty('--td-background-color', '#e1e3f0');
		})

	}
	else{
	body.background = "linear-gradient(hsl(232, 19%, 15%) 30%,hsl(230, 17%, 14%) 30%)"
		body.color = "hsl(0, 0%, 100%)"
		text.classList.remove("dark-white")
		document.querySelectorAll(".card-bg-dark").forEach((e)=>{
		e.classList.remove("card-bg-light")
  		e.style.setProperty('--td-background-color', '#333a56');
		})
	}

	})
}