let button = document.querySelector(".click");
button.addEventListener("click", ()=> fetchFile());

let ul = document.createElement('ul');
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