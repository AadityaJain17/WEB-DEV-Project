const quotes=["Repeated failures lead to success",
            "Time is Money",
            "You miss 100% of the shots you dont take",
            "Stay focused, go after your dreams and keep moving toward your goals.",
            "What you stay focused on will grow.",
            "Everyone’s time is limited. What matters most is to focus on what matters most.",
            ]
var i=0;
setInterval(function(){
    const element=document.getElementById("quotes")
    setInterval(function(){
        element.innerHTML=quotes[i%quotes.length] 
        //console.log(element.innerHTML)
    },1000)
    element.innerHTML=""
    //console.log(element.innerHTML)
    i++
    i=i%quotes.length
},5000)