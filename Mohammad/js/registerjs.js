function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    var num = document.getElementById("phone");
    if (checkBox.checked === true) {
        num.style.display = "block";
        text.style.display = "block";
    } else {
        num.style.display = "none";
        text.style.display = "none";
    }
}

function previewFile() {
    var preview = document.querySelector('img'); //selects the query named img
    var file = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    }
}

previewFile();  //calls the function named previewFile()
function validateName() {
    var x = document.forms.login;
    var nam = x.fname.value;
    var namePattern = "[A-Za-z]";
    if (!nam.match(namePattern)) {
        document.getElementById("fnam").innerHTML = "<i class='fa fa-exclamation-circle' ></i> name should containe only words";
        document.getElementById("fnam").style.color = "red";
        document.getElementById("fnam").style.border = "1px solid red";
        document.getElementById("fnam").style.background = "white";

    } else {

        document.getElementById("fnam").innerHTML = "<i class='fa fa-check' ></i>";
        document.getElementById("fnam").style.color = "green";
    }
}
function remAlertName() {
    document.getElementById("fnam").innerHTML = "*";
    document.getElementById("fnam").style.border = null;
    document.getElementById("fnam").style.background = null;

}



function validatePass() {
    var x = document.forms.login;

    var pas = "";
    var cpas = "";
    var passPattern = ".{6,}";


    pas = x.pass.value;
    cpas = x.conf_pass.value;
    if (!pas.match(passPattern)) {
        document.getElementById("pas").innerHTML = "<i class='fa fa-exclamation-circle' ></i> please match the requested formate";
        document.getElementById("pas").style.color = "red";
        document.getElementById("pas").style.border = "1px solid red";
        document.getElementById("pas").style.background = "white";
        //        document.getElementById("pas").style.=" white";
    } else if (pas === cpas) {
        document.getElementById("con_pas").innerHTML = "<i class='fa fa-check' ></i>";
        document.getElementById("con_pas").style.color = "green";
        document.getElementById("pas").innerHTML = "<i class='fa fa-check' ></i>";
        document.getElementById("pas").style.color = "green";
    } else {
        document.getElementById("con_pas").innerHTML = "<i class='fa fa-exclamation-circle' ></i>password doesn't match";
        document.getElementById("con_pas").style.color = "red";
        document.getElementById("con_pas").style.border = "1px solid red";
        document.getElementById("con_pas").style.background = "white";
    }
}
function remAlertPass() {
    document.getElementById("con_pas").innerHTML = "*";
    document.getElementById("con_pas").style.border = null;
    document.getElementById("con_pas").style.background = null;

}
function remAlertPass_() {
    document.getElementById("pas").innerHTML = "*";
    document.getElementById("pas").style.border = null;
    document.getElementById("pas").style.background = null;

}
function validateMail() {
    var x = document.forms.login;
    var mailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
    var temp_mail = x.email.value;
    if (!temp_mail.match(mailPattern)) {
        document.getElementById("mail").innerHTML = "<i class='fa fa-exclamation-circle' ></i> Valid email is required: ex@abc.xyz";
        document.getElementById("mail").style.color = "red";
        document.getElementById("mail").style.border = "1px solid red";
        document.getElementById("mail").style.background = "white";

    } else {

        document.getElementById("mail").innerHTML = "<i class='fa fa-check' ></i>";
        document.getElementById("mail").style.color = "green";
    }
}

function remAlertMail() {
    document.getElementById("mail").innerHTML = "*";
    document.getElementById("mail").style.border = null;
    document.getElementById("mail").style.background = null;

}

function validatePhone() {
    var x = document.forms.login;
    var phonePattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    var temp_phone = x.company_num.value;
    if (!temp_phone.match(phonePattern)) {
        document.getElementById("ph").innerHTML = "<i class='fa fa-exclamation-circle' ></i> please match the format: 123-456-7890";
        document.getElementById("ph").style.color = "red";
        document.getElementById("ph").style.border = "1px solid red";
        document.getElementById("ph").style.background = "white";

    } else {

        document.getElementById("ph").innerHTML = "<i class='fa fa-check' ></i>";
        document.getElementById("ph").style.color = "green";
    }

}
function remAlertPhone() {
    document.getElementById("ph").innerHTML = "*";
    document.getElementById("ph").style.border = null;
    document.getElementById("ph").style.background = null;

}
//Don't show numbers in names' fields
$(".alpha-only").on("input", function () {
    var regexp = /[^a-zA-Z]/g;
    if ($(this).val().match(regexp)) {
        $(this).val($(this).val().replace(regexp, ''));
    }
});
//don't show alphabets in phone field
$(".digit-only").on("input", function () {
    var regexp = /[^0-9]/;
    if ($(this).val().match(regexp)) {
        $(this).val($(this).val().replace(regexp, ''));
    }
});