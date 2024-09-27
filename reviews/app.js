const reviews =[
    {
        id:1,
        name:"krish jathare",
        job:"Electrical Engineer",
        img:"https://www.course-api.com/images/people/person-1.jpeg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id:2,
        name:"Aman Jathare",
        job:"Chef",
        img:"https://www.course-api.com/images/people/person-1.jpeg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id:3,
        name:"Avinash Virkar",
        job:"HR management",
        img:"https://www.course-api.com/images/people/person-1.jpeg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id:4,
        name:"pratik tadge",
        job:"Electrical Engineer",
        img:"https://www.course-api.com/images/people/person-1.jpeg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nxtbtn = document.querySelector(".prev-btn");
const prvbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");
let currentItem = 0;
const item = reviews[currentItem];

window.addEventListener("DOMContentLoaded",function(){
    const item =reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person){
    const item =reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nxtbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prvbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length -1;
    }
});
randombtn.addEventListener("click",function(){

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});