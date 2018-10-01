window.onload = function(){
    var submitButton = document.getElementById('submit')
            
    submitButton.addEventListener('click', function(event){
            event.preventDefault()
            validateName()
            validateSurname()
            checkAge()
    })
}

/**
 * Function validates name
 */

function validateName() {
    var name = document.getElementById('name')
    var nameErrorMessage = document.getElementById('name-error')
    if(name.value == "" || name.value == undefined){
        //show error message
        nameErrorMessage.classList.remove('is-invisible')
    }else{
        nameErrorMessage.classList.add('is-invisible')
    }
}

/**
 * Function validates surname
 */
function validateSurname(){
    var surname = document.getElementById('surname')
    var surnameErrorMessage = document.getElementById('surname-error')
    if(surname.value == "" || surname.value == undefined){
        //show error message
        surnameErrorMessage.classList.remove('is-invisible')
    }else{
        surnameErrorMessage.classList.add('is-invisible')
    }
}

function checkAge(){
    var age = document.getElementById('age')
    var ageErrorMessage = document.getElementById('age-error')
    var tooYoung = document.getElementById('too-young')
    var tooOld = document.getElementById('too-old')
    if(age < 18) {
        tooYoung.classList.remove('is-invisible')
        tooOld.classList.add('is-invisible')
    }
    else if(age > 64){
        tooYoung.classList.remove('is-invisible')
        tooOld.classList.add('is-invisible') 
    } else{
        tooOld.classList.remove('is-invisible')
        tooYoung.classList.add('is-invisible')
    }
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
