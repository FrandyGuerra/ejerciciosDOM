let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let myDiv= document.createElement("div");
	myDiv.style.backgroundColor="yellow";
	//let textDiv= document.createTextNode('Hello World');
	myDiv.innerHTML="Hello World";

	document.body.appendChild(myDiv);
	
});

