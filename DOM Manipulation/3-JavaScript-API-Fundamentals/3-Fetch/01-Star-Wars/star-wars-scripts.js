let starWarsPeopleList = document.querySelector('ul')

fetch('https://swapi.dev/api/people')
.then(function(response){
    return response.json();
})
.then(function(json) {
let people =json.results;

for(p of people){
    let listItem = document.createElement('li');
    listItem.innerHTML = '<p>' +p.name + '</p>';
    starWarsPeopleList.appendChild(listItem);
}
});


let starWarsPlanetList = document.querySelector('li2')

fetch('https://swapi.dev/api/planets')
.then(function(response){
    return response.json();
})
.then(function(json){
    let planets=json.results;
    for(p of planets){
        let listItem = document.createElement('li2');
        listItem.innerHTML = '<p>' +p.name + '</p>';
        starWarsPlanetList.appendChild(listItem);
    }
})