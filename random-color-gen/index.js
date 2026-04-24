

document.addEventListener('DOMContentLoaded',()=>{
    const colorContainer=document.querySelector('.buttons-color-list')
    const refreshButton=document.querySelector('.refresh-button')
    const toster=document.querySelector('.toster')


    refreshButton.addEventListener('click',()=>{
        colorContainer.innerHTML=''
        paintColor()
    })
    const generateColor=()=>{
        let colorstr='#'
        for(let i=0;i<6;i++){
         const num=  Math.floor( Math.random()*16)
         console.log(num,'this isnn')
         if(num>9){
          const genNum=(num-10)+'a'.charCodeAt(0)
          colorstr+=String.fromCodePoint(genNum)
         }else{
colorstr+=num
         }
        }
return colorstr;
    }

    const LoadColor=()=>{
        const arr=new Array(6).fill(0)
      return arr.map((a,i)=>generateColor())
    }
                const showToaster=(msg,color)=>{
                    console.log(msg)
                                 toster.innerText=msg
                                  toster.style.display = "flex"; 
                        toster.style.setProperty('--toaster-col',color)
                        setTimeout(() => {
                        toster.style.display="none"
                        }, 2000);
            }
  

    const paintColor=()=>{
         LoadColor().map((col,i)=>{
          const colorButton=  document.createElement('button')
          colorButton.classList.add('color-button')
          colorButton.innerText=col
          colorButton.style.setProperty('--col',col)
          colorContainer.appendChild(colorButton)

          colorButton.addEventListener('click',()=>{
            navigator.clipboard.writeText(col).then(()=>{
showToaster('copied successfully','green')
            }).catch((err)=>{
                showToaster(err||"Copied failed",'red')
            })
          })
         })
    }

    paintColor()

})