window.onload = function()
{
    var submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', function(event)
    {
        event.preventDefault()
        validateName()
        validateSurname()
        validateAge()
        validateGendar()
        validateAddress()
        validatePhone()
       
    })
}
/**
 * This function get the value of name
 * from the name input
 */
function validateName(){
     var name = document.getElementById('name')
     var nameErrorMessage = document.getElementById("name_error") 
     if(name.value == "" || name.value == undefined){

       
         nameErrorMessage.classList.remove('is-invisible')
      }

      else{
         nameErrorMessage.classList.add('is-invisible')
     }
}
/**
 * This function get the value of surname
 * from the surname input
 */
function validateSurname(){
    var sruname = document.getElementById('name')
     var nameErrorMessage = document.getElementById("surname_error") 
     if(surname.value == "" || surname.value == undefined){
       
        nameErrorMessage.classList.remove('is-invisible')
     }
     else{
         nameErrorMessage.classList.add('is-invisible')
     }
}
/**
 * This function get the value of age
 * from the age input
 */
function validateAge(){
    var age = document.getElementById('age')
    var nameErrorMessage = document.getElementById("age_error")
    var ageErooMessage = document.getElementById("secondage_error")
     if(age.value < 18 ){
        
        nameErrorMessage.classList.remove('is-invisible')
        ageErooMessage.classList.add('is-invisible')
        
     }
         else if(age.value > 64){
        
        ageErooMessage.classList.remove('is-invisible')
        nameErrorMessage.classList.add('is-invisible')
         }
          else{
           nameErrorMessage.classList.add('is-invisible')
           ageErooMessage.classList.add('is-invisible')
         }
        //ageErooMessage.classList.remove('is-invisible')
       
     
}
/**
 * This function get the value of the address
 * from the address input
 */
function validateGendar(){
    var gender = document.getElementById('gender')
     var nameErrorMessage = document.getElementById("gender_error") 
     if(gender.value == "" || gender.value == undefined){
       
        nameErrorMessage.classList.remove('is-invisible')
     }
     else{
         nameErrorMessage.classList.add('is-invisible')
     }
}
/**
 * This function get the value of the address
 * from the address input
 */
function validateAddress(){
    var address = document.getElementById('address')
     var nameErrorMessage = document.getElementById("address_error") 
     if(address.value == "" || address.value == undefined){
       
        nameErrorMessage.classList.remove('is-invisible')
     }
     else{
         nameErrorMessage.classList.add('is-invisible')
     }
}
/**
 * This function get the value of the phone number
 * from the phone number input
 */
function validatePhone(){
    var phone = document.getElementById('number')
     var nameErrorMessage = document.getElementById("phone_error") 
     if(phone.value == "" || phone.value == undefined){
       
        nameErrorMessage.classList.remove('is-invisible')
     }
     else{
         nameErrorMessage.classList.add('is-invisible')
     }
}