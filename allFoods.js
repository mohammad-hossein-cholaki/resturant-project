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
// if(search.classList==='active'){
//   clear.classList.add('hide')

// }else{
//   clear.classList.remove()
// }

// fix this codes
const clear=document.querySelector('.clear');
const searchInput=document.querySelector('#searchInput');
console.log(searchInput.value)
clear.onclick=function(){
  document.querySelector('#searchInput').value=''
}


// end of search bar code

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '416351d1b2mshb109934ca946399p1c0a87jsn5cab645fbe7f',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    console.log(response.results)
    console.log(response.results[0])
    console.log(response.results[0].thumbnail_url)
  })
	.catch(err => console.error(err));