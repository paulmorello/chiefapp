console.log('working');

let demoBtn = document.getElementById('demo-btn');
let inputVal = document.getElementById('demo-input');
let successMessage = document.getElementById('demo-success');
let errorMessage = document.getElementById('demo-error');
let isErrorHidden = true;
let isSuccessHidden = true;

demoBtn.addEventListener('click', function() {

  if (inputVal.value.includes('.com')) {

    // Woopra tracking demo sign up
    woopra.identify({
      email: inputVal.value
    });

    woopra.track('demo-sign-up', {
      email: inputVal.value
    })

    if (isSuccessHidden) {
      if(!isErrorHidden) {
        errorMessage.classList += ' hidden';
        isErrorHidden = true;
      }
      // show success message
      successMessage.classList.remove('hidden');
      isSuccessHidden = false;
    } else {
      successMessage.classList += ' hidden';
      isSuccessHidden = true;
    }

  } else {
    if (isErrorHidden) {
      if(!isSuccessHidden) {
        successMessage.classList += ' hidden';
        isSuccessHidden = true;
      }
      // show error message
      errorMessage.classList.remove('hidden');
      isErrorHidden = false;
    } else {
      errorMessage.classList += ' hidden';
      isErrorHidden = true;
    }
  }
});
