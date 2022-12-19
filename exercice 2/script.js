function searchAge() {
    let searchName = document.getElementById('name').value;
    let searchCountry = document.getElementById('country').value;

    const fetchName = (name, country) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);

    fetchName (searchName, searchCountry)
.then((response) => response.json())
.then((json)=> {
    let addDiv = document.createElement("div");
    addDiv.innerText= searchName + ", poeple with the same name are " + json.age + " years old and there are " + json.count;
    document.body.appendChild(addDiv);
    })
    .catch((error) =>{
        console.log(error);
    });
}
document.querySelector('.press1').addEventListener("click", searchAge)

let testObject = {};

localStorage.setItem('testObject', JSON.stringify(testObject));

let retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject:', JSON.parse(retrievedObject));