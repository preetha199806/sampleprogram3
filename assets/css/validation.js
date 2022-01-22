const name = document.getElementById("name")
const name = document.getElementById("email")
const name = document.getElementById("password")
const name = document.getElementById("confirm password")
const form = document.getElementById("form")
const errorElement = document.getElementById('error')


form.addEventListener("submit", (e) =>{
   let message  = []
   if(name.value = ""|| name.value){
       messages.push('name is required ')
   }

if(password.length<=6){
    messages.push("password must be longer than 6 character")
}

   if(messages.length>0){
    e.preventDefault()
    error.innerText = message.join(",")
}
})