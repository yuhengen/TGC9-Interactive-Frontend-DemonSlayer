document.querySelector("#feedback-form").addEventListener("submit", function (event) {

    // Error Flags
    let emailError = false;
    let nameError = false;
    let issueError = false;
    let descError = false;

    // Clear error messages
    document.querySelector("#emailError").innerHTML = ""
    document.querySelector("#nameError").innerHTML = ""

    // Check email for @ and .
    let email = document.querySelector("#feedback-email").value;
    if (!email.includes("@") || !email.includes(".")) {
        emailError = true;
    }

    // Check username (Min 4 characters, Max 15 characters, no symbols)
    let username = document.querySelector("#feedback-name").value;
    if (username.length < 4 || username.length > 15) {
        nameError = true;
    } else {
        let symbols = "@#$%!^&";
        for (let chars of username) {
            if (symbols.includes(chars)) {
                nameError = true;
            }
        }
    }

    // Display error messages
    if (emailError) {
        document.querySelector("#emailError").innerHTML = "Email should include an '@' and a '.'"
        event.preventDefault();
    }
    if (nameError) {
        document.querySelector("#nameError").innerHTML = "Username should not contain symbols and must be between 4 and 15 characters"
        event.preventDefault();
    }

    alert("Your feedback has been submitted! We will get back to you shortly");
})