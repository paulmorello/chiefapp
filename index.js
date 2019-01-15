console.log('working');

let signUpBtn = document.getElementById('sign-up-btn');

let successMessage = document.getElementById('demo-success');
let errorMessage = document.getElementById('demo-error');
let isErrorHidden = true;
let isSuccessHidden = true;

getEmailAddress = () => {
  let email = document.getElementById("email");
  if (email) {
    return email.value;
  } else {
    email = "This is not a valid email address";
    return email;
  }
}

signUpBtn.addEventListener('click', function() {
  let email = getEmailAddress();
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let message = document.getElementById('message')

  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email) && firstName && lastName) {
    // identify requestor by email
    woopra.identify({
      email: email,
      first_name: firstName,
      last_name: lastName
    })
    // send event to woopra to subscribe user to Mailchimp list
    woopra.track('waitlist_joined', {
      email: email,
      first_name: firstName,
      last_name: lastName
    });

    // show success message
    message.style.background = 'lightgreen';
    message.style.color = 'green';
    message.style.width = '40%';
    message.value = 'Success. You will receive a personal email';

  } else {
    // show fail message
    message.style.background = 'mistyrose';
    message.style.color = 'red';
    message.style.width = '40%';
    message.value = 'Please make sure all fields are correct';
  }
});
