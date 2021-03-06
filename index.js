
// Load event triggers changes
const load = () => {
  // page load checks
  if (window.location.href.includes('nycatx')) {
    // document.getElementsByClassName('main-valprop')[0].innerText = 'Life is a grind, prioritize your time and make your side hustle a reality.'
    console.log("load");
  }
}
window.onload = load;



// Sign up and email validation
let appStoreBtn = document.getElementById('app-store-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let successMessage = document.getElementById('demo-success');
let errorMessage = document.getElementById('demo-error');
let isErrorHidden = true;
let isSuccessHidden = true;

getEmailAddress = () => {
  console.log('clicked');
  let email = document.getElementById("email").value;
  console.log(email);
  if (email) {
    return email;
  } else {
    email = "This is not a valid email address";
    return email;
  }
}

appStoreBtn.addEventListener('click', function() {
  // send event to woopra for App Store Btn click
  console.log('clicked');
  woopra.track('app_store', {
    type: "iOS Store"
  });
})

// signUpBtn.addEventListener('click', function() {
//
//   let email = getEmailAddress();
//   let firstName = document.getElementById('first-name').value;
//   let lastName = document.getElementById('last-name').value;
//   let message = document.getElementById('message')
//
//   console.log(email, firstName, lastName);
//
//   let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//   if (regex.test(email) && firstName && lastName) {
//     console.log('test passed');
//     // identify requestor by email
//     woopra.identify({
//       email: email,
//       first_name: firstName,
//       last_name: lastName
//     })
//     // send event to woopra to subscribe user to Mailchimp list
//     woopra.track('waitlist_joined', {
//       email: email,
//       first_name: firstName,
//       last_name: lastName
//     });
//
//     console.log(message);
//
//     // show success message
//     message.style.background = 'lightgreen';
//     message.style.color = 'green';
//     message.style.width = '40%';
//     message.style.height = '60px';
//     message.style.margin = '20px auto';
//     message.textContent = 'Thank you for joing the waitlist. You will receive a personal email';
//
//     fbq('track', 'CompleteRegistration');
//
//     console.log(message);
//
//   } else {
//     console.log(message.value);
//     // show fail message
//     message.style.background = 'mistyrose';
//     message.style.color = 'red';
//     message.style.width = '40%';
//     message.style.height = '60px';
//     message.style.margin = '20px auto';
//     message.textContent = 'Please make sure all fields are correct';
//
//     console.log(message.value);
//   }
// });
