
const clock=[1,2,3,4,5,6,7,8,9,10,11,12]

document.addEventListener('DOMContentLoaded',()=>{
    const clockEle=document.querySelector('.clock-skeleton');
    const secondHand=document.querySelector('.second-hand')
    const minuteHand=document.querySelector('.minute-hand')
    const hourHand=document.querySelector('.hour-hand')


    const runClock=()=>{
        console.log('heello')
        const now=new Date();
        const second=now.getSeconds()
        const minute=now.getMinutes()
        const hour=now.getHours()


        const secDeg=second*6;
        const minDeg=minute*6;
const hourDeg = hour * 30 + minute * 0.5;


        secondHand.style.transform=`translate(-50%) rotate(${secDeg}deg)`
        minuteHand.style.transform=`translate(-50%) rotate(${minDeg}deg)`
        hourHand.style.transform=`translate(-50%) rotate(${hourDeg}deg)`

        console.log(minuteHand)


    }


    clock.forEach((cl,i)=>{
        const number=document.createElement('div')
        number.innerText=cl
        number.classList.add('number')
        number.setAttribute('style',`--i:${cl}`)

        clockEle.appendChild(number)
    })
    runClock()
setInterval(runClock, 1000);

   
})