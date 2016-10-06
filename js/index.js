$(document).ready(start);

function start() {
  $('.gin-form').submit(validate);
}

function validate(e) {
  if(firstNameValid()) {
    firstNameClearError()
  } else {
      firstNameError();
    }
  if(lastNameValid() !=true)  {
    lastNameError();
  }
  if(ageValid() !=true){
    ageError();
  }
  if(firstNameValid() && lastNameValid() && ageValid() ){
    alert('thanks for entering');
  } else {
  e.preventDefault();
  }
}
function firstNameError() {
  $('#first_name').addClass('error');
  $('#first_name').siblings('.error-msg').show();
}

function firstNameClearError(){
  $('#first_name').removeClass('error');
  $('#first_name').siblings('.error-msg').hide();

}
function lastNameError() {
  $('#last_name').addClass('error');
  $('#last_name').siblings('.error-msg').show();
}

function ageError() {
  $('#age').addClass('error');
  $('#age').siblings('.error-msg').show();
}


function firstNameValid(){
  var firstName= $('#first_name').val();
  return firstName.length > 0;
}

function lastNameValid(){
  var lastName= $('#last_name').val();
  return lastName.length > 0;
}

function ageValid(){
  var age= $('#age').val();
  age = parseInt(age);
  return age >= 18;
}
