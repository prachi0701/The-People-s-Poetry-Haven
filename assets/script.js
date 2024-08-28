// Toggle Password Visibility
function togglePassword() {
    const passwordInput = document.getElementById("myInput");
    const showPasswordCheckbox = document.getElementById("showPassword");
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
