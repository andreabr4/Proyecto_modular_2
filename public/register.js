let userID=sessionStorage.getItem('user-id')
if(userID!=undefined){
    window.location.href = "./planes.html"
}

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
        if(response.status==201){
            response.json()
            .then(data=>{
                sessionStorage.setItem('user-id',data.userID)
                window.location.href = "./planes.html"
            })
        }else{
            alert(response.statusText)
        }        
    })
    .catch((err)=>alert(err))
    
    })