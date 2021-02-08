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

function validatePass() {
    var x = document.forms.login;

    var pas = x.conf_pass.value;

    var passPattern = ".{6,}";

    if (!pas.match(passPattern)) {
        document.getElementById("con_pas").innerHTML = "<i class='fa fa-exclamation-circle' ></i> please match the requested formate";
        document.getElementById("con_pas").style.color = "red";
        document.getElementById("con_pas").style.border = "1px solid red";
        document.getElementById("con_pas").style.background = "white";
    } else {
        {

            document.getElementById("con_pas").innerHTML = "<i class='fa fa-check' ></i>";
            document.getElementById("con_pas").style.color = "green";
        }
    }
}
function remAlertPass() {
    document.getElementById("con_pas").innerHTML = "*";
    document.getElementById("con_pas").style.border = null;
    document.getElementById("con_pas").style.background = null;

}