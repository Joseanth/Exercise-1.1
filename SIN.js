// for clear button
function clearsin() {
    document.getElementById("sinvalue").value;
}

    // for validate button
    function validate() {
    //get value form input box and declare as variable:
    var x = document.getElementById("sinvalue").value;
        try {
            if (x=="") throw <br>"empty"</br>;
            if (isNaN(x)) throw "not a number";
            x = Number("");
            if (x>9) throw "too high";
        }
        catch(error){
            document.write("input is" + error);
            console.error(error);
        }
        

    //add background on alert messega
    var sinvalue = document.getElementById("message");
    console.log(primary);
    primary.add('alert-validate')

    //check field (if empty)
     if (sinNumber ==""){
        document.getElementById("message").innerHTML = "Enter Sin Number!";
        return false;
        }

     //check if value less than 9
     if (sinNumber.length<9){
     document.getElementById("message").innerHTML ="Enter 9 digit sin!";
        return false;
        }

        
    //remove the digit (last two digit):
    // var sevenNum = sinNum.substring(0, sinNum.length - 2);
        lastDigit = sinNumber.substring(7,7+2);

    //extract 2nd,4th,6th,8th digit:
        var eNumbers = (sinNumber.substring(1,1+1)) + (sinNumber.substring(3,3+1)) +
        (sinNumber.substring(5,5+1)) + (sinNumber.substring(7,7+1));

    //extract 1st,3rd,5th,7th digit:
        var oddNumbers = (sinNumber.substring(0,0+1)) + (sinNumber.substring(2,2+1)) +
        (sinNumber.substring(4,4+1)) + sinNumber.substring(6,6+1);

    var eNumbersum = "";
    var esum = 0;
    var sinNumber ="";

        //double digit and add together:
    for (var a = 0; a <eNumbers.length; a++) {
        var resEven = (eNumbers.substring(a,a+1)*2 );
        eNumbersum = eNumbersum + resEven
    
    for (var a = 0; a <eNumbers.length; a++) {
        var resOdd = (enumber.substring(a,a+1));
        esum =((esum) + (resOdd));
    }
    }

     checkNumber = (esum + oddNumbers)
        //check the total is multiple by 10
     if (checkNumber <=10){
        (checkdigit = (10 -checkNumber));
    }
      if (checkNumber > 10 && checkNumber <= 20) {
        (checkdigit = (20 - checkNumber));
    }
     if (checkNumber > 20 && checkNumber <= 30) {
        (checkdigit = (30 - checkNumber));
    }
     if (checkNumber > 30 && checkNumber <= 40) {
        (checkdigit = (40 - checkNumber));
    }
      if (checkNumber > 40 && checkNumber <= 50) {
        (checkdigit = (50 - checkNumber)); 
    }

    // display error if incorrect SIN
    if (checkdigit != lastDigit) {
        var sinNumber = document.getElementById("sinvalue").value;
        document.getElementById("message").innerHTML = sinNumber + "SIN number not valid";
        return false;
    } else {
        var sinNumber = document.getElementById("sinvalue").value;
        document.getElementById("message").innerHTML = sinNumber + "SIN number valid";
    }
    /** 
     * show results even number
     * document.getElementById("message(01)").innerHTML = "SIN Number:" + eNumbers;
     * show results odd number
     * document.getElementById("message(02)").innerHTML = "SIN Number:" + oddNumbers;
     * show result if 35 for 345123678 sample SIN
     * document.getElementById("message(03)")innerHTML = "Sin Number:" + checkdigit;
     */ 
}   





