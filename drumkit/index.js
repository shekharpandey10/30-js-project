const soundsArr = [
  {
    name: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyId: "Q"
  },
  {
    name: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyId: "W"
  },
  {
    name: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyId: "E"
  },
  {
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyId: "A"
  },
  {
    name: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyId: "S"
  },
  {
    name: "Open-HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyId: "D"
  },
  {
    name: "Kick-n'-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyId: "Z"
  },
  {
    name: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyId: "X"
  },
  {
    name: "Closed-HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyId: "C"
  }
];



  document.addEventListener('DOMContentLoaded',(e)=>{

  const keyContainer=document.querySelector('.keyContainer')
    const playAudio=async(source)=>{
    const audio=new Audio(source)
    audio.play()
    }

    const activeButton=(key)=>{
        const btn=document.querySelector(`[data-key="${key}"]`)
        if(!btn){
return;
        }

        btn.classList.add('active')

        setTimeout(() => {
            btn.classList.remove('active')
        }, 200);
    }

  soundsArr.map((sound,i)=>{
  const listButton=  document.createElement('button')
    listButton.classList.add('key')
    listButton.dataset.key=sound.keyId
    const h1=document.createElement('h1')
    const div=document.createElement('div')
    h1.innerText=sound.keyId
    div.innerText=sound.name
    listButton.append(h1,div)
    listButton.addEventListener('click',(e)=>{playAudio(sound.source)
        activeButton(sound.keyId)
    })

    keyContainer.appendChild(listButton)
  })

  document.addEventListener('keydown',(e)=>{
    console.log(e)
    const key=e.key.toUpperCase();


 const sound=   soundsArr.find((sound)=>sound.keyId===key)
 if(sound){
    console.log('sound called',sound)
    playAudio(sound.source)
    activeButton(sound.keyId)
 }

  })

  })


  