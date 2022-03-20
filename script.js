  // Called when user hits Compute Interest button
function compute()
{
    //get user input, calculate interest and year
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //validate that principal is a positive amount submitted before displaying results
    if (principal <= 0) {
        document.getElementById("result").innerHTML = ""; 
        alert("The Amount must be a positive number");
        document.getElementById("principal").focus();

    } else {
        var result_message = "If you deposit <span class='highlight'>" + principal +
        "\</span>,\<br\> at an interest rate of \<span class='highlight'>" + rate + 
        "%\ </span>,\<br\> You will receive an amount of \<span class='highlight'>" +  
        interest + 
        "\</span>,\<br\>in the year \<span class='highlight'>" + year + "\</span>.\<br\>";

        // Update result with computation
        document.getElementById("result").innerHTML = result_message; 

    }

}

// display the value of the interest rate slider bar
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
        