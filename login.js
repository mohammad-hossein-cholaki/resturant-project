
const submit=document.getElementById("submit");

submit.onclick=()=>{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    if(username==="admin" && password==="admin"){
        alert('welcome');
    }else{
        alert('invalid user name or password')
    }
}