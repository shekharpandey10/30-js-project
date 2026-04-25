

document.addEventListener('DOMContentLoaded',()=>{
   const clockSection= document.querySelector('.clock-section')
    const hourDiv=document.createElement('div')

    const minuteDiv=document.createElement('div')
    const secondDiv=document.createElement('div')
    const firstColon=document.createElement('div')



    const secondColon=document.createElement('div')

    const timeCycle=document.createElement('div')
    const timeCycleContainer=document.createElement('div')

    firstColon.innerText=':'
    secondColon.innerText=':'
    hourDiv.classList.add('clock-part')
    minuteDiv.classList.add('clock-part')
    secondDiv.classList.add('clock-part')
    firstColon.classList.add('colon')
    secondColon.classList.add('colon')
    timeCycle.classList.add('time-cycle')
    timeCycleContainer.append(timeCycle)
            hourDiv.innerText='00'
    minuteDiv.innerText='00'
    secondDiv.innerText='00'
 const getCurrentTime=()=>{
       const time=new Date()
    const currentTime=time.toLocaleTimeString()
    const hour=String(time.getHours()).padStart(2,'0')
    const minute=String(time.getMinutes()).padStart(2,'0')
    const second=String(time.getSeconds()).padStart(2,'0')
    hourDiv.innerText=hour
    minuteDiv.innerText=minute
    secondDiv.innerText=second
    if(hour>=12){
        timeCycle.innerText='PM'
    }else{
        timeCycle.innerText='AM'
    }

}
clockSection.append(hourDiv,firstColon,minuteDiv,secondColon,secondDiv,timeCycleContainer)

 setInterval(()=>{
getCurrentTime()
 },1000)

})