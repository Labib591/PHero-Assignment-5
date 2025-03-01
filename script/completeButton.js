const completeButton1 = getButton("completeButton-1");
completeButton1.addEventListener("click", 
    function(){
        const recentTask = numberFromString("recent-task");
        const totalTask = numberFromString("total-task");
    
        const presentTask = recentTask - 1;
        document.getElementById("total-task").innerText = totalTask + 1;
        document.getElementById("recent-task").innerText = presentTask;
    
        const button = document.getElementById("completeButton-1");
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        button.style.cursor = "default";
        alert("Board Completed Successfully");

        if(presentTask===0){
            alert("Thanks");
        }
    }
);

const completeButton2 = getButton("completeButton-2");
completeButton2.addEventListener("click", 
    function (){
        const recentTask = numberFromString("recent-task");
        const totalTask = numberFromString("total-task");
    
        const presentTask = recentTask - 1;
        document.getElementById("total-task").innerText = totalTask + 1;
        document.getElementById("recent-task").innerText = presentTask;
    
        const button = document.getElementById("completeButton-2");
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        button.style.cursor = "default";
        alert("Board Completed Successfully");
        if(presentTask===0){
            alert("Thanks");
        }
    }
);

const completeButton3 = getButton("completeButton-3");
completeButton3.addEventListener("click", 
    function (){
        const recentTask = numberFromString("recent-task");
        const totalTask = numberFromString("total-task");
    
        const presentTask = recentTask - 1;
        document.getElementById("total-task").innerText = totalTask + 1;
        document.getElementById("recent-task").innerText = presentTask;
    
        const button = document.getElementById("completeButton-3");
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        button.style.cursor = "default";
        alert("Board Completed Successfully");
        if(presentTask===0){
            alert("Thanks");
        }
    }
);

const completeButton4 = getButton("completeButton-4");
completeButton4.addEventListener("click", 
    function (){
        const recentTask = numberFromString("recent-task");
        const totalTask = numberFromString("total-task");
    
        const presentTask = recentTask - 1;
        document.getElementById("total-task").innerText = totalTask + 1;
        document.getElementById("recent-task").innerText = presentTask;
    
        const button = document.getElementById("completeButton-4");
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        button.style.cursor = "default";
        alert("Board Completed Successfully");
        if(presentTask===0){
            alert("Thanks");
        }
    }
);

const completeButton5 = getButton("completeButton-5");
completeButton5.addEventListener("click", 
    function (){
        const recentTask = numberFromString("recent-task");
        const totalTask = numberFromString("total-task");
    
        const presentTask = recentTask - 1;
        document.getElementById("total-task").innerText = totalTask + 1;
        document.getElementById("recent-task").innerText = presentTask;
    
        const button = document.getElementById("completeButton-5");
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        button.style.cursor = "default";
        alert("Board Completed Successfully");
        if(presentTask===0){
            alert("Thanks");
        }
    }
);


const completeButton6 = getButton("completeButton-6");
completeButton6.addEventListener("click",
    function (){
        const recentTask = numberFromString("recent-task");
        const totalTask = numberFromString("total-task");
    
        const presentTask = recentTask - 1;
        document.getElementById("total-task").innerText = totalTask + 1;
        document.getElementById("recent-task").innerText = presentTask;
    
        const button = document.getElementById("completeButton-6");
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        button.style.cursor = "default";
        alert("Board Completed Successfully");
        if(presentTask===0){
            alert("Thanks");
        }
    }
);

