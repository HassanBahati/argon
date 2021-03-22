//constants and regex
const user = document.user;
var email = document.user.userEmail;
var userName = document.user.userName;
var confirmedPassword = document.user.confirmPassword;
var password = document.user.userPassword;
const lettersRegex = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//email validation
let emailVaidate = () => {
  if (email.value == '') {
    email.style.border = '2px solid red';
    email.focus();
    return false;
  }
  //email regex
  if (email.value.match(emailRegex)) {
    return true;
  } else {
    email.focus();
    email.style.border = '2px solid red';
    alert('Please make sure your email is in right format eg bahati@mail.com');
  }
};

//name validation
let nameValiate = () => {
  if (userName.value == '') {
    userName.style.border = '2px solid red';
    userName.focus();
    return false;
  }
  //name regex
  if(userName.value.match(lettersRegex)){
    return true;
  }
};

//password validation
let passwordValiate = () => {
  if (password.value == '') {
    password.style.border = '2px solid red';
    password.focus();
    return false;
  }
};

//confirmed password validation
let confirmPassword = () => {
  if (confirmedPassword.value == '') {
    confirmedPassword.style.border = '2px solid red';
    confirmedPassword.focus();
    return false;
  }
  if (confirmedPassword.value.match(password.value)) {
      return true;
  }else{
      confirmedPassword.focus();
      confirmedPassword.style.value = '2px solid red'
      alert('Please make sure your passwords match')
  }
};

//validation function calling all sub functions
let userValidation = () => {
  emailVaidate();
  passwordValiate();
  nameValiate();
  confirmPassword();
};

//event listener watching submissionof form
user.addEventListener('submit', userValidation);
