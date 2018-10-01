window.onload = function()
{
    var submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', function(event)
    {
        event.preventDefault()
       // alert('you clicked again')
       var name = getName()
       //alert("Hellow " + name)

       var surname = getSurname()
       var age = getAge()
       var gendar = getGendar()
       var address = getAddress()
       var phone = getPhone()

       if(age < 18){
           alert("You are not old enough to use this form")
        }
       else if(name == "" || name == undefined){
        alert("You must enter a name")
        }
        else if(surname == "" || surname == undefined){
            alert("You must enter a surname")
            }
            else if(gendar == "" || gendar == undefined){
                alert("You must enter a gender")
                }
                else if(address == "" || address == undefined){
                    alert("You must enter a address")
                    }
                    else if(phone == "" || phone == undefined){
                        alert("You must enter a phone number")
                        }
                        else if(phone.length !== 10){
                            alert("You must enter 10 digits on your phone number")
                            }
           else
           {
               alert("Hellow " + name + " " + surname + " your age is " + getAge()
           + " you are a " + gendar + " you live at " + address + " your phone number is " + phone)
           }
       



    })
}
/**
 * This function get the value of name
 * from the name input
 */
function getName(){
     var name = document.getElementById('name')
     return name.value;
}
/**
 * This function get the value of surname
 * from the surname input
 */
function getSurname(){
    var surname = document.getElementById('surname')
    return surname.value;
}
/**
 * This function get the value of age
 * from the age input
 */
function getAge(){
    var age = document.getElementById('age')
    return age.value;
}
/**
 * This function get the value of the address
 * from the address input
 */
function getGendar(){
    var gendar = document.getElementById('gendar')
    return gendar.value;
}
/**
 * This function get the value of the address
 * from the address input
 */
function getAddress(){
    var address = document.getElementById('address')
    return address.value;
}
/**
 * This function get the value of the phone number
 * from the phone number input
 */
function getPhone(){
    var phone_number = document.getElementById('number')
    return phone_number.value;
}