//Get the data-user-template
const userCardTemplate = document.querySelector("[data-user-template]")   ; 
//Get the data-user-cards-container
const userCardContainer = document.querySelector("[data-user-cards-container]")   ; 
const searchInput = document.querySelector("[data-search]")   ; 

let users = []  ;

// code below filters the card
searchInput.addEventListener("input" , e =>{
    const value = e.target.value.toLowerCase()    ;
    users.forEach(user => {
        // Code below hids the card
        const isVisible = 
        user.name.toLowerCase().includes(value) || 
        user.email.toLowerCase().includes(value) ; // convert lower case in name and email because its key sensitive.
        user.element.classList.toggle("hide" , !isVisible)   ; 
    })
}) ;

// This line of code fetch fake data from this website.
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
   users =  data.map(user => {
        //Get the content inside the template in html . and clone it
        const card = userCardTemplate.content.cloneNode(true).children[0]   ; 
        const header = card.querySelector("[data-header]"); // get body
        const body = card.querySelector("[data-body]"); // get header
        //this line of code add the content.
        header.textContent = user.name  ;
        body.textContent = user.email   ;
        userCardContainer.append(card)  ;
       
        return {name: user.name , email: user.email , element: card}   ;
    });
    
}) ; // to display data on the page you need a template on html file