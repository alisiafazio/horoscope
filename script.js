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
    var horoscope = determineHoroscope(sign);
    document.getElementById("sign").innerHTML = sign;
}

function determineSign(month, day){
    var name = document.getElementById("name").value;
    if(month == 1){
        if(day <= 19){
            return  name + "You are a capricorn! ";
        }
        if(day > 19 && day <= 31){
            return "Aquarius";
        }
    }
    if(month == 2){
        if(day <= 19){
            return "Aquarius";
        }
        if(day > 19 && day <= 29){
            return "Pisces";
        }
    }
    if(month == 3){
        if(day <= 21){
            return "Pisces";
        }
        if(day > 21 && day <= 31){
            return "Aries";
        }
    }
    if(month == 4){
        if(day <= 19){
            return "Aries";
        }
        if(day > 19 && day <= 30){
            return "Taurus";
        }
    }
    if(month == 5){
        if(day <= 20){
            return "Taurus";
        }
        if(day > 20 && day <= 31){
            return "Gemini";
        }

    }
    if(month == 6){
        if(day <= 20){
            return "Gemini";
        }
        if(day > 20 && day <= 30){
            return "Cancer";
        }
    }
    if(month == 7){
        if(day <= 22){
            return "Cancer";
        }
        if(day > 22 && day <= 31){
            return "Leo";
        }
    }
    if(month == 8){
        if(day <= 22){
            return "Leo";
        }
        if(day > 22 && day <= 31){
            return "Virgo";
        }
    }
    if(month == 9){
        if(day <= 22){
            return "Virgo";
        }
        if(day > 22 && day <= 30){
            return "Libra";
        }
    }
    if(month == 10){
        if(day <= 22){
            return "Libra";
        }
        if(day > 22 && day <= 31){
            return "Scorpio";
        }
    }
    if(month == 11) {
        if (day <= 21) {
            return "Scorpio";
        }
        if (day > 21 && day <= 30) {
            return "Sagittarius";
        }
    }
    if(month == 12){
        if(day <= 21){
            return "Sagittarius";
        }
        if(day > 21 && day <= 31){
            return "Capricorn";
        }
    }
}