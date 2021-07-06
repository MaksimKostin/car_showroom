function readMore(){
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");
	var newpost= document.getElementById("newpost");
	
	if(dots.style.display === "none"){
		dots.style.display = "inline";
		btn.innerHTML="Готовы?";
		more.style.display ="none";
		newpost.hidden=1;
	} else{
		dots.style.display = "none";
		btn.innerHTML="Мощь!";
		more.style.display ="inline";
		newpost.hidden=0;
		
	}
}
