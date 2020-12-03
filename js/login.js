function loginmodal() {
    let loginmodal = `<div class="modal fade login-window" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
		aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
				</div>
				<form class="login-form">
					<div class="modal-body">
						<input type="text" class="form-control mb-3 mt-3 login-user" placeholder="Username/Email"/>
						<div class="user-error"></div>
						<input type="password" class="form-control mb-3 mt-3 login-pw" placeholder="Password"/>
						<div class="pw-error"></div>
						<button type="submit" class="btn btn-secondary form-control login-btn mb-3 mt-3">Login</button>
					</div>
					<div class="modal-footer d-flex justify-content-around">
						<button type="button" class="btn btn-secondary form-control mb-3 mt-3">Register</button>
						<button type="button" class="btn btn-secondary form-control mb-3 mt-3">Forget Password</button>
					</div>
				</form>
			</div>
		</div>
	</div>`

    document.querySelector(".login-modal").innerHTML = loginmodal;
}

loginmodal();

document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let emptyUser = false;
    let invalidUser = false;
    let emptyPassword = false;
    let invalidPassword = false;

    document.querySelector(".user-error").innerHTML = ""
    document.querySelector(".pw-error").innerHTML = ""

    let username = document.querySelector(".login-user").value;
    if (username.length === 0) {
        emptyUser = true;
    } else if (username !== "admin") {
        invalidUser = true;
    }

    let password = document.querySelector(".login-pw").value;
    if (password.length === 0) {
        emptyPassword = true;
    } else if (password !== "admin") {
        invalidPassword = true;
    }

    if (emptyUser) {
        document.querySelector(".user-error").innerHTML = "*Username cannot be empty"
        event.preventDefault();
    }
    if (emptyPassword) {
        document.querySelector(".pw-error").innerHTML = "*Password cannot be empty"
        event.preventDefault();
    }
    if (invalidUser) {
        document.querySelector(".pw-error").innerHTML = "*Account does not exist"
        event.preventDefault();
    }
    if (invalidUser == false && invalidPassword == true) {
        document.querySelector(".pw-error").innerHTML = "*Invalid password"
        event.preventDefault();
    }

    if (!emptyUser && !invalidUser && !emptyPassword && !invalidPassword) {
        alert("Login success!");
        document.querySelector(".login-form").submit();
        document.querySelector(".login-btn").style.display = "none";
    }
})