function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var futureYear = currentYear + years;

    var total = principal * years * rate;
    var result = document.getElementById("result");

    var output = "If you deposit <mark>" + principal + "</mark>,<br/>" + "at an interest rate of <mark>" + interest + "</mark>%,<br/>" + "You will receive an amount of <mark>" + total + "</mark>,<br/> in the year <mark>" + futureYear + "</mark>";

    result.innerHTML = output;

}
        
function showRange() 
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate").nextElementSibling.innerHTML = rate + ' %';
}

function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    var errorMessage = 'Enter a positive number'
    if ((principal == 0) || (principal < 0)) {
        if (confirm(errorMessage)) {
            document.getElementById("principal").focus();
        }
    }
}
