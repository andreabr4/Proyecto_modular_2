let userID=sessionStorage.getItem('user-id')
    
if(userID==undefined){
window.location.href = "./index.html"
}else{

document.getElementById("newPlanButton").addEventListener("click", function(){
    let name=document.getElementById('planName').value;
    let description=document.getElementById('planDescription').value;
    let userID=sessionStorage.getItem('user-id')
    
    fetch('http://localhost:3000/plans',{
        method:"POST",
        body:JSON.stringify({
        name:name,
        description:description, 
        userID:userID
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then((response)=>{
        if(response.status==201){
            window.location.href = "./planes.html"
        }else{
            alert(response.statusText)
        }        
    })
    .catch((err)=>alert(err))
    })}