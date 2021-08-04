const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'BeLSWFdAqPC3RJIdwh3V8sepG3I8A0J2'; //2
let url; //3

//SEARCH FORM        Grab refrences to all the dom elements you'' need to manipulate
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submiteBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none'; //toggles through page results. hide nav until we have results

        
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage);

function submitSearch(e){
    pageNumber = 0;
    fetchResults(e);
}

function fetchResults(e) {
    e.preventDefault(); // prevents the page from refresing when entered in input

    //assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //fetch info from api
    console.log("URL:", url);

        if(startDate.value !==''){
            console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
        };

        if(endDate.value !== '') {
            url += '&end_date=' + endDate.value;
        };

    
    fetch(url).then(function(result) {  // puts info in json format
        return result.json(); 
    }) .then(function(json) {
        dislplayResults(json); 
    });
}

//2
function dislplayResults(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild); //removes previous searches
    }
    let articles = json.response.docs;

    if(articles.length === 10){
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; // hides the nav display if less than 10 items are in the array
    }
    
    const article =json.response.docs;

    if(articles.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i ++){ //creates elements within HTML
            let article = document.createElement('article')
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img'); //1
            let para = document.createElement('p'); 
            let clearfix = document.createElement('div'); //2

            let current = articles[i]; // fills loop with objects
            console.log("Current:", current);

            link.href = current.web_url;//grabs hyperlink
            link.textContent = current.headline.main; 

            link.textContent = 'Keywords: '; //3

            //4
            for(let j = 0; j < current.keywords.length; j++) { //create new element in span, creates loop to pull keywords (dot notation to diplay words)
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' '; // adds keywords 
                para.appendChild(span);
            }

            //2
            if(current.multimedia.length > 0) { // creates loop for images
                //3
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;//grabs first item in array
                //4
                img.alt = current.headline.main; // describes image
            }

            clearfix.setAttribute('class', 'clearfix');// possibly clears div

            
            
            console.log("Current:", current);
            
            article.appendChild(heading); // displays articles
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article); //adds all elements info to html
        }
    }
    
};

function nextPage(e) {  // makes the nav buttons work
    pageNumber++; 
    fetchResults(e);
    console.log("Page number:", pageNumber);
};

function previousPage(e){
    if (pageNumber > 0) {
        pageNumber--;
    }else {
        return;
    }
    fetchResults(e);
    console.log("Page;", pageNumber);
}

function nextPage() {
    console.log("Next button clicked");
}//5

function previousPage() {
    console.log("Next button clicked");
}