let userID=sessionStorage.getItem('user-id')
    
    if(userID==undefined){
    window.location.href = "./index.html"
    }else{

    fetch(`http://localhost:3000/plans/users/${userID}`)
    .then((response=>response.json()))
    .then((data)=>{
        let plansInfo=document.getElementById("plansInfo")
        
        data.forEach(plan => {
            
            let planCard=document.createElement("div")
            
           
            let addedPlan=document.createElement("div")
            addedPlan.id="addedPlan"
            addedPlan.textContent = `${plan.name}`
            planCard.appendChild(addedPlan)

            let addedDescription=document.createElement("div")
            addedDescription.id="addedDescription"
            addedDescription.textContent = `${plan.description}`
            planCard.appendChild(addedDescription)

            let opinionPlan=document.createElement("div")
            opinionPlan.id="opinionPlan"

           let  opinionStars = ""

            for(let i = 0; i< 5; i++){
                if (i< plan.opinion){
                    opinionStars += `⭐`
                }else{
                    opinionStars +=  `☆`
                }
            }

            opinionPlan.textContent= opinionStars
            planCard.appendChild(opinionPlan)

            let deletePlan=document.createElement("button")
            deletePlan.id="deletePlan"
            deletePlan.textContent="Eliminar"
            deletePlan.dataset.id=`${plan.planID}`

            deletePlan.addEventListener('click', function(event) {
               
                const itemId = event.target.dataset.id;
                console.log(itemId)
            
       
                fetch(`http://localhost:3000/plans/${itemId}`, {
                  method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    window.location.href="./planes.html"
                })
                .catch(error => {
                    alert ('Error deleting item:', error);
                });
              })

            planCard.appendChild(deletePlan)
            plansInfo.appendChild(planCard)

        });
    })
    .catch((err)=> alert ("Error"))
}



function deletePlanUser(){
    console.log(planCard.id)
}

document.getElementById("closeSessionPlans").addEventListener("click", function(){
    sessionStorage.removeItem('user-id')
    window.location.href = "./index.html"
})
