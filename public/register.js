document.getElementById("registerButton").addEventListener("click", function(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let name=document.getElementById('name').value;
    let surname=document.getElementById('surname').value;
    
    fetch('http://localhost:3000/users/register',{
        method:"POST",
        body:JSON.stringify({
        email:email, 
        password:password,
        name:name,
        surname:surname,
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error ('Error al registrar nuevo/a usuario/a');
        } return response.text()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>alert(err))
    
    })