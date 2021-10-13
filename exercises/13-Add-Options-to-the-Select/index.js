window.onload = function() {
	console.log("The website was loaded...");
	const countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
   const select= document.querySelector("#mySelect");
   
   countries.forEach((country,index)=>{
	let option= document.createElement("option");
	option.setAttribute("value",`${index}`);
	let textNode= document.createTextNode(country)
	option.appendChild(textNode);
	select.appendChild(option);
   });
};

const mySelect= document.querySelector("#mySelect");
mySelect.addEventListener("change", alerta);

export default function alerta(){

	switch (mySelect.value) {
		case '0':
			alert('USA');
			mySelect.value='-1';
			break;
		case '1':
		alert('France');
	    mySelect.value='-1';
		break;

		case '2':
		alert('Italy');
		mySelect.value='-1';
		break;
		case '3':
		alert('Brazil');
		mySelect.value='-1';
		break;
		case '4':
		alert('Colombia');
		mySelect.value='-1';
		break;
		case '5':
		alert('Belize');
		mySelect.value='-1';
		break;
		case '6':
		alert('Venezuela');
		mySelect.value='-1';
		break;
	
		default:
			console.log('No seleccionaste una opción valida');
			break;
	}
};
