// 1. create link form java script to image.html tag
// 2. create fetch
// 3.make a function that will set the image to the html image tag
// 4.
const baseURL = 'https://rickandmortyapi.com/api/character/';

const imageOne = document.getElementById('imageOne');
const imageTwo = document.getElementById('imageTwo');

fetch(baseURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        displayRecords(data);
    })
    .catch((err) => {
        console.log(err);
    })

displayRecords = (records) => {
    const image1 = records.results[0].image;
    const image2 = records.results[9].image;
    imageOne.src = image1;
    imageTwo.src = image2;
}