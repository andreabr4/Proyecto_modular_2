sessionStorage.removeItem('user-id')

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
.then((response)=>response.json())
.then((data)=>{
    if(data.message!="Login successfully"){
        throw new Error (data.message)
    } else{
        sessionStorage.setItem('user-id',data.user.userID)
        window.location.href = "./planes.html"
    }
})
.catch((err)=>alert(err))

})
