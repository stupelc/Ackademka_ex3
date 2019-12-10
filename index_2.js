
var btn = document.getElementById("enter");
if (btn) {
    btn.addEventListener('click', function () {
    email_input = document.getElementById("E-mail").value
    pass_op1 = document.getElementById("pass1").value
    pass_op2 = document.getElementById("pass2").value
    
    var mask = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((pass_op1 == pass_op2) && (pass_op1.length > 6) && (pass_op2.length > 6) 
                                                                    && (mask.test(String(email_input).toLowerCase()))) {
        document.body.className = "correct"
    } else {
        alert("Incorrect email or password")
    }
})          
}