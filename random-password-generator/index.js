const button = document.getElementById('btn')
const input = document.getElementById('input')
const alertIcon = document.getElementById('alert')

const copyIcon = document.querySelector('.far')


copyIcon.addEventListener('click',()=>{
  copyPass()
  if(input.value){
    setTimeout(()=>{
      alertIcon.classList.add('active')
    },2000)
  
    alertIcon.classList.remove('active')
  }


})

button.addEventListener('click',()=>{

  updatePassword()
})


function updatePassword(){

  const character = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

 let password= ''
 const passwordLength = 14

 for(let i = 0; i<passwordLength;i++){

const random =Math.floor( Math.random()*character.length)

password += character.substring(random,random+1)

console.log(password)


  
 }

 input.value = password 
 
alertIcon.innerText = password + " Copied"

}

function copyPass(){

  input.select()
  navigator.clipboard.writeText(input.value) 
}
