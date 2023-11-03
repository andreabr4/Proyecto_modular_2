    let userID=sessionStorage.getItem('user-id')
    fetch(`http://localhost:3000/plans/users/${userID}`)
    .then((response=>response.json()))
    .then((data)=>{
        
        data.forEach(plan => {
            
            let plansInfo=document.getElementById("plansInfo")
            
            let addedPlan=document.createElement("div")
            addedPlan.textContent = `${plan.name}`
            plansInfo.appendChild(addedPlan)

            let addedDescription=document.createElement("div")
            addedDescription.textContent = `${plan.description}`
            plansInfo.appendChild(addedDescription)
    
        });
    })
    .catch()