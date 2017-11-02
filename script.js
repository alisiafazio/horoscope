function doDays(month){
    month = parseInt(month);
    var mDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for(var i = 1; i <= mDays[month]; i++){
        result += "<option value =" +  ">" + i + "</option>"
    }
    document.getElementById("day").innerHTML=result;
}

function onSubmit(){
    var findMonth = document.getElementById("month").value;
    var findDay = document.getElementById("day").value;
    var sign = determineSign(findMonth, findDay);
    document.getElementById("sign").innerHTML = sign;
}

function determineSign(month, day){
    var name = document.getElementById("name").value;
    if(month == 1){
        if(day <= 19){
            return "Capricorn";
        }
        if(day > 19 && day <= 31){
            return "Aquarius";
        }
    }
    if(month == 2){
        if(day <= 19){
            return "Aquarius";
        }
        if(day > 19 && day <= 28){
            return "Pisces";
        }
    }
}