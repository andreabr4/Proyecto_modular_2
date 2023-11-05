let userID=sessionStorage.getItem('user-id')
    
if(userID==undefined){
window.location.href = "./index.html"
}else{

document.getElementById("newPlanButton").addEventListener("click", function(){
    let name=document.getElementById('planName').value;
    let description=document.getElementById('planDescription').value;
    let opinion = document.getElementById('starRating').value;
    let userID=sessionStorage.getItem('user-id')

    fetch('http://localhost:3000/plans',{
        method:"POST",
        body:JSON.stringify({
        name:name,
        description:description, 
        userID:userID,
        opinion:parseInt(opinion),
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

let opinion = document.getElementById('starRating');
let stars = document.querySelectorAll('.star');

opinion.addEventListener('input', function() {
    updateStars(opinion.value);
});

function updateStars(value) {
    stars.forEach((star, index) => {
        if (index < value) {
        star.textContent = '\u2605'; 
        star.classList.add('checked');
        } else {
        star.textContent = '\u2606'; 
        star.classList.remove('checked');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    updateStars(opinion.value);
});


document.getElementById("closeSession").addEventListener("click", function(){
        sessionStorage.removeItem('user-id')
        window.location.href = "./index.html"
})