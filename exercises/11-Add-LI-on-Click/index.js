let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let lista= document.querySelector("#myList");
	let TagLi= document.createElement("li");
	TagLi.innerHTML= "Fourth element";
	lista.appendChild(TagLi);

});
