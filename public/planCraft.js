document.getElementById("newPlanButton").addEventListener("click", function(){
    let name=document.getElementById('planName').value;
    let description=document.getElementById('planDescription').value;
    let userID=document.getElementById('userID').value;
    
    fetch('http://localhost:3000/plans',{
        method:"POST",
        body:JSON.stringify({
        name:name,
        description:description,
        userID:userID, 
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
        window.location.href = "./planes.html"
    })
    .catch((err)=>alert(err))
    })