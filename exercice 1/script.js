//creer une var qui selectionne la balise html
let button = document.querySelector(".click");

//ajouter un event au bouton avec une fonction
button.addEventListener("click", ()=> fetchFile());

//creer une balise 
let ul = document.createElement('ul');
//appeler la balise
document.body.appendChild(ul);


function fetchFile() {
 fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
		json.fileList.forEach(file => {
			let li = document.createElement('li');
			li.innerText = file;
			ul.appendChild(li);
		
		});
	});
}