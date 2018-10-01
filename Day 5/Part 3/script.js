window.onload = function(){
    var submitButton = document.getElementById('submit')
            
    submitButton.addEventListener('click', function(event){
            event.preventDefault()
            var name = getName()
            var surname = getSurname()
            var age = getAge()
            var gender = getGender()
            var phone = getPhone()
            var address = getAddress()

            if(phone.length < 10){
                alert('Enter 10 digits')
            }

            if(age < 18){
                alert("You're not old enough to use this form")
            }else if(name == "" || name == undefined){
                alert('You must enter a name!')
            }else if(surname == "" || surname == undefined){
                alert('You must enter a surname')
            }
            else{
                alert("Hello " + name + "" + surname + "." +
                " How can we help you?")
            }

            alert("Hello " + name + " " + surname + "." + "You are " + age + "" + 
            " years old" + "." + " You're a " + gender + "," + " residing in " +
            address + "." + "Your phone number is " + phone)

        
        })
    }
    /**
     * Function gets name from the input.
     */
function getName(){
    var name = document.getElementById('name')
    return name.value
}

/**
 * Function gets surname from input.
 */
function getSurname(){
    var surname = document.getElementById('surname')
    return surname.value
}

/**
 * Function gets age from input.
 */
function getAge(){
    var age = document.getElementById('age')
    return age.value
}
/**
 * Function gets gender
 */
function getGender(){
    var gender =document.getElementById('gender')
    return gender.value
}
/**
 * Function gets phone number
 */
function getPhone(){
    var phone = document.getElementById('phone')
    return phone.value
}
/**
 * Function gets address
 */
function getAddress(){
    var address = document.getElementById('address')
    return address.value
}