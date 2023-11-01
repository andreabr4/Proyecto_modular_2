document.getElementById("loginButton").addEventListener("click", function(){
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;

fetch('http://localhost:3000/users/login',{
    method:"POST",
    body:JSON.stringify({
    email:email, 
    password:password
    }),
    headers:{
        "Content-type":"application/json; charset=UTF-8"
    }
})
.then((response)=>{
    if(!response.ok){
        throw new Error ('Error');
    } return response.text()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>alert(err))

})