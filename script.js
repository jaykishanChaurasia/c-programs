let counter = new Date;
setInterval(()=>{
    counter = new Date;
    console.log(counter);
    document.getElementById("count").textContent = counter;
},1000)