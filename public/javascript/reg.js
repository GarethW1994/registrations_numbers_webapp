/**
 * Created by bootcamp on 5/18/17.
 */

//get elements
var error = document.getElementById('error_report');
var textbox = document.querySelector('.form-control');
var add_button = document.getElementById('add');
var errorContainer = document.querySelector('.errorContainer');
function validations() {
    if (textbox.value === "") {
        error.innerHTML = "Please Enter A Registration Number";
        errorContainer.classList.add('show');
        errorContainer.classList.remove('hide');
    }
}


add_button.addEventListener('click', function () {
   validations();
});