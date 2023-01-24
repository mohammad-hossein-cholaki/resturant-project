// navbar

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');    
}

// start search bar code

const icon=document.querySelector('.icon');
const search=document.querySelector('.search');
icon.onclick=function(){
  search.classList.toggle('active')
  clear.classList.toggle('hide')
}

// fix this codes
const clear=document.querySelector('.clear');
const searchInput=document.querySelector('#searchInput');
console.log(searchInput.value)
clear.onclick=function(){
  document.querySelector('#searchInput').value=''
}


// ---------------------------------------------------------------------
const arrivalContainer = document.querySelector(".box-container");
let products=null
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3850f46647msh199d97ce978a0a4p1ddad0jsn5371e3ab4dd6',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};


async function fetchProducts(){

const res =await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options);

const data=await res.json();
food = data.results;
return data

}	
fetchProducts().then((data)=> {
  // console.log(data.results)
testfunc(data.results)

})


function testfunc(object){
  for(let data of object){
    const section= document.createElement("section");
    section.classList.add("box");
    const imageSection= document.createElement("section");
    imageSection.classList.add("image");
    const img= document.createElement("img");
    img.src=data.thumbnail_url;
    const contentSection=document.createElement("section");
    contentSection.classList.add("content");
    const h3=document.createElement("h3");
    h3.innerHTML=`${data.name}`;
    // const p=document.createElement("p");
    // p.innerHTML=`${data.name}`;
    const a = document.createElement("a");
    a.classList.add("btn");
    a.innerHTML='Order'

    imageSection.appendChild(img);
    contentSection.append(h3,a);
    section.append(imageSection,contentSection);
    arrivalContainer.appendChild(section)

  }

}

// -----------------------------------------------------------------------

searchInput.addEventListener("keyup",()=>{
  const input=document.querySelector("#searchInput").value.trim();
  const cards=document.querySelectorAll(".box");
  console.log(cards)
  // console.log(input.length)

cards.forEach((boxx) => {
  let title = boxx.querySelector(".cardTitle");
    if (title.innerHTML.toLowerCase().indexOf(input) > -1) {
      section.style.display = "";
    } else {
      section.style.display = "none";
    }
  });
});

