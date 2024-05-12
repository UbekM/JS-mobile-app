/** @format */

// Simple Mobile USSD Transfer App

//User info stored

let user = {
  name: "Michael Ubek",
  balance: 10960.0,
  pin: 1234,
  phone: 919,
  bank: "access",
};

// Display welcome message
const welcome = confirm(
  "Welcome to the USSD Banking. N6.98 Network Charge will apply to your account for banking services on this channel"
);

const message = parseInt(prompt("Press 919 to Accept or 2 to Reject: "));

//Accept or Reject
if (welcome) {
  message;
}

//Accept
if (message === 919) {
  alert("\nThank you.\nPlease Proceed with Transaction.");

  const main_menu = parseInt(
    prompt(
      "EasyBanking\n\nSelect any of the following menus:\n1> Transfer\n2> Airtime\n3> Data\n4> Bill Payment\n5> Check Balance\n6> Register\n7> Self-Service\n8> Next"
    )
  );

  if (main_menu === 1) {
    const transfer = parseInt(
      prompt(
        "Select any of the following options:\n\n1> Access\n2> Other Banks"
      )
    );
    if (transfer === 1) {
      let access_account = parseInt(prompt("Enter Account Number"));
      let access_amount = parseInt(prompt("Enter Amount"));
      while (true) {
        if (access_amount >= user.balance || access_amount <= 0) {
          alert(
            "Insufficient Balance. Your Current Balance is" +
              user.balance +
              "\nEnter Proper Amount"
          );
        }
        break;
      }
      current_balance = user.balance -= access_amount;

      let access_pin = parseInt(prompt("Enter Your Pin"));
      while (true) {
        if (access_pin !== user.pin) {
          alert(
            "Wrong Pin. For the sake of this project, use 1234 as Pin\nN.B: A pin is never to be disclosed to anyone"
          );
        }
        break;
      }
      confirm(
        "Confirm Entered Information\nBank: Access\n\nAccount Number: " +
          access_account +
          "\nAmount: " +
          access_amount +
          "\nCurrent Balance: " +
          current_balance
      );
      alert("Transfer Successful\n\n Thank you. Have a nice day!");
    }

    if (transfer === 2) {
      let other_bank = parseInt(
        prompt(
          "Select any of the following options:\n\n1> UBA\n2> GTB\n3> FCMB\n4> First Bank"
        )
      );
      if (other_bank === 1) {
        let uba_account = parseInt(prompt("Enter Account Number"));
        let uba_amount = parseInt(prompt("Enter Amount"));
        while (true) {
          if (uba_amount >= user.balance || uba_amount <= 0) {
            alert(
              "Insufficient Balance. Your Current Balance is" +
                user.balance +
                "\nEnter Proper Amount"
            );
          }
          break;
        }

        current_balance = user.balance -= uba_amount;

        let uba_pin = parseInt(prompt("Enter Your Pin"));
        while (true) {
          if (uba_pin !== user.pin) {
            alert(
              "Wrong Pin. For the sake of this project, use 1234 as Pin\nN.B: A pin is never to be disclosed to anyone"
            );
          }
          break;
        }
        confirm(
          "Confirm Entered Information\n\nBank: UBA\nAccount Number: " +
            uba_account +
            "\nAmount: " +
            uba_amount +
            "\nCurrent Balance: " +
            current_balance
        );
        alert("Transfer Successful\n\n Thank you. Have a nice day!");
      } else if (other_bank === 2 || other_bank === 3 || other_bank === 4) {
        // Implement logic for other banks (GTB, FCMB, First Bank)
        alert(
          "Transfers to other banks are not currently implemented. Please select UBA for now."
        );
      } else {
        alert("Invalid bank selection. Please try again.");
      }
    }
  }
}
//menu two
else if (main_menu === 2) {
  const airtime = parseInt(
    prompt(
      "Select any of the following options:\n\n1> MTN\n2> Airtel\n3> Glo\n4> 9mobile"
    )
  );
  if (airtime === 1) {
    prompt()
  }
}

//Bank Balance - menu 5
else if (main_menu === 5) {
  alert(
    "Your Current Account Balance is" +
      user.balance +
      "\n\nThank you. Have a nice day!"
  );
} else if (message === 2) {
  alert(
    "You have not given consent to proceed for USSD. Banking Session will be closed.\n\nThank you. Have a nice day!"
  );
} else {
  alert("Invalid Input.\n\nKindly reload page or dial *919#");
}
