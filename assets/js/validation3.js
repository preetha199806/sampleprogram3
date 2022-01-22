class FormValidation{
formValues = {
    username: "",
    email : "",
    phonenumber: "",
    password: "",
    confirmpassword: ""
}
// properties
errorValues = {
    username: "",
    email : "",
    phonenumber: "",
    password: "",
    confirmpassword: ""
}
// Methods
showErrorMsg(index,msg){
const form_group = document.getElementsByClassName('form-group')
// first form group get it index
[index]
form_group.classList.add('error')
form_group.getElementsByTagName('span')[0].textContent = msg
}
showSuccessMsg(index){
    const form_group = document.getElementsByClassName('form-group')
    [index]
    form_group.classList.remove('error')
    form_group.classList.add('success')

    form_group.getElementsByTagName('span')[0].textContent = msg
}
getInputs(){
    // this current value get trim used to remove white space
this.formValues.username = document.getElementById('username').value.trim();
this.formValues.email = document.getElementById('email').value.trim();
this.formValues.phonenumber = document.getElementById('phonenumber').value.trim();
this.formValues.password = document.getElementById('password').value.trim();
this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim();
}
ValidateUsername(){
if(this.formValues.username === ""){
    this.errorValues.usernameErr = "*Please Enter Your name"
    this.showErrorMsg(0,this.errorValues.usernameErr)
}else if(this.formValues.username.length <= 4){
    this.errorValues.usernameErr = "* Username must be atleast 5 chracters"
    this.showErrorMsg(0,this.errorValues.usernameErr)
}else if(this.formValues.username.length > 14){
    this.errorValues.username = "* Username should not exceeds 14 characters"

    this.showErrorMsg(0,this.errorValues.usernameErr)
}else{
    this.errorValues.usernameErr = ""
    this.showSuccessMsg(0)
}
}


ValidateEmail(){
// ABC.co.in/
const regExp = /^(a-zA-Z0-9-_\.]+)@(a-zA-Z0-9]+)\.(a-zA-Z]{2,10})(\a-zA-z]{2,8})?$/
if(this.formValues.email === ""){
    this.errorValues.emailErr = "*Please Enter Valid Email address"
    this.showErrorMsg(1,this.errorValues.emailErr)
}else if(!(regExp.test(this.formValues.email))){
this.errorValues.emailErr = "* Invalid Email"
this.showErrorMsg(1,this.errorValues.emailErr)
}else{
    this.errorValues.emailErr = ""
    this.showSuccessMsg(1)
}

}
validatePhonenumber(){

}
validatePassword(){

}
validateConfirmpassword(){

}
alertMessage(){

}
removeInputs(){

}
}

const ValidateUserInputs = new FormValidation()
// condition checking
document.getElementsByClassName('form')[0].
addEventListener('submit',event=>{
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()


        })
