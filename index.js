/** @format */

// Simple Mobile USSD Transfer App

// Display welcome message
const welcome = confirm(
  "Welcome to the USSD Banking. N6.98 Network Charge will apply to your account for banking services on this channel"
);

const message = parseInt(prompt("Press 919 to Accept or 2 to Reject: "));

//Accept or Reject
if (welcome) {
  message;
}

if (message === 919) {
  alert("Thank you. Proceed with Transaction");
} else if (message === 2) {
  alert(
    "You have not given consent to proceed for USSD. Banking Session will be closed.\n\nThank you. Have a nice day."
  );
} else {
  alert("Invalid Input. Kindly reload page or dial *919#");
}

if (welcome === 919) {
  const amount = prompt("Enter Amount: ");
  const name = prompt("Enter Name: ");
  alert("Your Transaction has been Completed. Thank You");
} else if (welcome === 2) {
  alert(
    "You have not given consent to proceed for USSD. Banking Session will be closed.\n\nThank you. Have a nice day."
  );
}
