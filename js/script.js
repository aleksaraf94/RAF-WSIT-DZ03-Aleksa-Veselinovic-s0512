var hamburger = document.getElementById("hamburger");
var header = document.getElementById("header");

hamburger.addEventListener("click", function(e){
	//e.target.style.display="none";
	
	if(header.style.display=="block"){
		header.style.display="none";
	}
	else{
		header.style.display="block";
	}
}



)