

document.addEventListener('DOMContentLoaded',()=>{

const lowerCase = [
  'a','b','c','d','e','f','g','h','i','j',
  'k','l','m','n','o','p','q','r','s','t',
  'u','v','w','x','y','z'
];

const upperCase = [
  'A','B','C','D','E','F','G','H','I','J',
  'K','L','M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z'
];

const numbersList = [
  '0','1','2','3','4','5','6','7','8','9'
];

const symbols = [
  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+','[',']','{','}',';',':',
  '"',"'",'<','>','?','/','|','\\','`','~'
];


   const generatedPassword= document.getElementById('generatedPassword')
  const length= document.getElementById('length')
  const lowercase= document.getElementById('lowercase')
  const uppercase= document.getElementById('uppercase')
  const numbers= document.getElementById('numbers')
  const Symbols= document.getElementById('symbols')

  let finalChar=[...lowerCase,...upperCase,...numbersList,...symbols]
let finalPass=''



  function generatedPasswordFun(passLength){
    const len=passLength
    const listLen=finalChar.length
    for(let i=0;i<len;i++){
      const ran=Math.floor(Math.random()*listLen);
      finalPass+=finalChar[ran]
    }
    generatedPassword.value=finalPass
  }

  length.addEventListener('change',(e)=>{
    const passLength=e.target.value;
    generatedPasswordFun(passLength)
  })
  uppercase.addEventListener('change',(e)=>{
     if(uppercase.checked){
      finalChar=[...finalChar,...upperCase]
     }else{

     }

  })
  lowercase.addEventListener('change',(e)=>{
     if(lowercase.checked){
      finalChar=[...finalChar,...lowerCase]
     }else{

     }

  })
  numbers.addEventListener('change',(e)=>{
     if(numbers.checked){
      finalChar=[...finalChar,...numbersList]
     }else{

     }

  })
  Symbols.addEventListener('change',(e)=>{
     if(Symbols.checked){
      finalChar=[...finalChar,...symbols]
     }else{

     }

  })
})