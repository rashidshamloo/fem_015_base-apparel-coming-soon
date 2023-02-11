/* variable devlarations */

let errorIcon, messageBox, emailContainer;
let emptyMessage = "Please provide an email address";
let invalidMessage = "Please provide a valid email address";
let successMessage = "Your email has been submitted successfully!";

/* function declarations */

//initializes the elements, so they are only set one time and not for every validation
function initFormElements() {
  errorIcon = document.getElementById("icon-error");
  messageBox = document.getElementById("message-box");
  emailContainer = document.getElementById("email-container");
}

//validates the submitted email address and shows the appropriate message
function validate() {
  //get the email from the input field
  let email = document.getElementById("email-field").value;
  //if email field is empty, show the relevant error message
  if (email.trim() == "") {
    setMessage(emptyMessage);
    //if email is invalid show the relevant error message
  } else if (!validateEmail(email)) {
    setMessage(invalidMessage);
    //else if email passes validation, show the success message
  } else {
    setMessage(successMessage, false);
    document.getElementById("email-field").value = "";
  }
}

//validates the email using regex
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(email)) return true;
  return false;
}

//sets the error / success message and relevant styles
function setMessage(message, error = true) {
  //in case of error, set error styles and remove success styles
  if (error) {
    messageBox.classList.remove("success-message");
    emailContainer.classList.remove("border-green");
    emailContainer.classList.add("border-red");
    errorIcon.style.visibility = "visible";
    //in case of success, set success styles and remove error styles
  } else {
    messageBox.classList.add("success-message");
    emailContainer.classList.add("border-green");
    emailContainer.classList.remove("border-red");
    errorIcon.style.visibility = "";
  }
  //make the message box visible and show the message
  messageBox.style.visibility = "visible";
  messageBox.children[0].innerHTML = message;
}
