let login = prompt('pls enter ur login name');
let pw = '';
let isLoggedIn = false;

if (!login) {
  alert('cancelled');
  console.log(login);
} else if (login != 'Admin') {
  alert('dont now you');
  console.log(login);
}

if (login == 'Admin') {
  pw = prompt('enter password');
  if (!pw) {
    alert('cancelled');
    console.log(login);
  } else if (pw != 'TheMaster') {
    alert('wrong password');
  } else isLoggedIn = true;
}

const message = isLoggedIn && 'Welcome';
console.log(message);
