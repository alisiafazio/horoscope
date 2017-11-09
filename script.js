function doDays(month){
    month = parseInt(month);
    var mDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for(var i = 1; i <= mDays[month]; i++){
        result += "<option value='" + i +"'>" + i + "</option>"
    }

    document.getElementById("day").innerHTML=result;
}

function onSubmit(){
    var findMonth = document.getElementById("month").value;
    var findDay = document.getElementById("day").value;
    findMonth = parseInt(findMonth);
    findDay = parseInt(findDay);
    var sign = determineSign(findMonth, findDay);
    document.getElementById("sign").innerHTML = sign;
    document.getElementById("birthday").innerHTML = yourBirthday(findMonth, findDay);

}

function determineSign(month, day) {
    var name = document.getElementById("name").value;
    if (month == 1) {
        if (day <= 19) {
            document.getElementById("image").innerHTML = '<img src="img/capricorn.jpeg">'
            return name + " you are a capricorn! No matter what the subject or where you happen to be, you are rarely " +
                "shy about expressing an opinion. You're not exactly shy now either, but you may start to feel a bit of " +
                "unusual emotional interference coming on, so remind yourself that if anyone has the right to be confident," +
                " it's you. You've been so diligent and hardworking for so long, so relax. Let the rest of the world worry" +
                " about your feelings for a change!";
        }
        if (day > 19 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/aquarius.jpeg">'
            return name + " you are an aquarius! If you're worried that you might say or do something to offend someone," +
                " especially if you know what's coming, take a friend along for the ride who's wellequipped to mediate " +
                "when necessary. You know who you need to ask -- because you've probably had to call on them in the past!" +
                " Remember, though, that it's not you who they're watching out for -- it's anyone who gets in your way " +
                "or challenges your opinions.";
        }
    }
    if (month == 2) {
        if (day <= 19) {
            document.getElementById("image").innerHTML = '<img src="img/aquarius.jpeg">'
            return name + " you are an aquarius! If you're worried that you might say or do something to offend someone," +
                " especially if you know what's coming, take a friend along for the ride who's wellequipped to mediate " +
                "when necessary. You know who you need to ask -- because you've probably had to call on them in the past!" +
                " Remember, though, that it's not you who they're watching out for -- it's anyone who gets in your way " +
                "or challenges your opinions.";
        }
        if (day > 19 && day <= 29) {
            document.getElementById("image").innerHTML = '<img src="img/pisces.jpeg">'
            return name + " you are a pisces! You may not be in the mood for shopping at the moment, but that doesn't " +
                "mean there isn't something out there that's so appealing that you don't go to any extremes to have it " +
                "delivered to your door within 24 hours. If you're not sure you can afford it, call the one wisest person" +
                " you know who can talk you out of it without making you feel like you're cheating yourself.";
        }
    }
    if (month == 3) {
        if (day <= 21) {
            document.getElementById("image").innerHTML = '<img src="img/pisces.jpeg">'
            return name + " you are a pisces! You may not be in the mood for shopping at the moment, but that doesn't " +
                "mean there isn't something out there that's so appealing that you don't go to any extremes to have it " +
                "delivered to your door within 24 hours. If you're not sure you can afford it, call the one wisest person" +
                " you know who can talk you out of it without making you feel like you're cheating yourself.";
        }
        if (day > 21 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/aries.jpeg">'
            return name + " you are an aries! If anyone decides that it might be fun to see just how far you can be " +
                "pushed, they are in for a serious lesson. At this point, you're not willing to go very far at all. If " +
                "people came with warning labels (how did that get skipped?), yours would say 'Danger -- Do not exceed " +
                "capacity.' Of course, with your fiery energy, this situation isn't exactly rare, so the next best thing" +
                " is to shut all doors as soon as you can.";
        }
    }
    if (month == 4) {
        if (day <= 19) {
            document.getElementById("image").innerHTML = '<img src="img/aries.jpeg">'
            return name + " you are an aries! If anyone decides that it might be fun to see just how far you can be " +
                "pushed, they are in for a serious lesson. At this point, you're not willing to go very far at all. If " +
                "people came with warning labels (how did that get skipped?), yours would say 'Danger -- Do not exceed " +
                "capacity.' Of course, with your fiery energy, this situation isn't exactly rare, so the next best thing" +
                " is to shut all doors as soon as you can.";
        }
        if (day > 19 && day <= 30) {
            document.getElementById("image").innerHTML = '<img src="img/taurus.jpeg">'
            return name + " you are a taurus! Making a new friend isn't easy for anyone, especially if we enjoy privacy," +
                " as you certainly do. You may be feeling even more secretive at the moment, however, so if you decide " +
                "to let someone in on your feelings and plans and how you've reached this point, they need to understand" +
                " just how special that makes them. If they didn't, though, you probably wouldn't have let them get this" +
                " close to begin with!";
        }
    }
    if (month == 5) {
        if (day <= 20) {
            document.getElementById("image").innerHTML = '<img src="img/taurus.jpeg">'
            return name + " you are a taurus! Making a new friend isn't easy for anyone, especially if we enjoy privacy," +
                " as you certainly do. You may be feeling even more secretive at the moment, however, so if you decide " +
                "to let someone in on your feelings and plans and how you've reached this point, they need to understand" +
                " just how special that makes them. If they didn't, though, you probably wouldn't have let them get this" +
                " close to begin with!";
        }
        if (day > 20 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/gemini.jpeg">'
            return name + " you are a gemini! You know well how wonderful it is to have entertaining friends. You've spent" +
                " plenty of time assembling just such a crew, and you take their affection seriously. You don't just invite" +
                " any old person into that circle without considering what they're likely to add to it, or how your current" +
                " friends might take to them. If you're ready to open the books, be sure that someone lets this fortunate" +
                " newcomer know just how special the invitation is.";
        }
    }
    if (month == 6) {
        if (day <= 20) {
            document.getElementById("image").innerHTML = '<img src="img/gemini.jpeg">'
            return name + " you are a gemini! You know well how wonderful it is to have entertaining friends. You've spent" +
                " plenty of time assembling just such a crew, and you take their affection seriously. You don't just invite" +
                " any old person into that circle without considering what they're likely to add to it, or how your current" +
                " friends might take to them. If you're ready to open the books, be sure that someone lets this fortunate" +
                " newcomer know just how special the invitation is.";
        }
        if (day > 20 && day <= 30) {
            document.getElementById("image").innerHTML = '<img src="img/cancer.jpeg">'
            return name + " you are a cancer! You've always had a decent relationship with your bosses, teachers and other" +
                " authority figures. In fact, they have often treated you as an equal. That's exactly how you feel now when" +
                " higher-ups actually come to you for advice. If you hear gossip, try not to get too stressed about it. " +
                "Everyone needs someone else to talk about!";
        }
    }
    if (month == 7) {
        if (day <= 22) {
            document.getElementById("image").innerHTML = '<img src="img/cancer.jpeg">'
            return name + " you are a cancer! You've always had a decent relationship with your bosses, teachers and other" +
                " authority figures. In fact, they have often treated you as an equal. That's exactly how you feel now when" +
                " higher-ups actually come to you for advice. If you hear gossip, try not to get too stressed about it. " +
                "Everyone needs someone else to talk about!";
        }
        if (day > 22 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/leo.jpeg">'
            return name + " you are a leo! Your friends live by one simple rule: When you're happy, everyone's happy. " +
                "Your fiery nature just doesn't allow anyone to be depressed in your immediate vicinity -- unless you're" +
                " feeling down yourself! At the moment, you're feeling pretty great, which means you do your very best to" +
                " make everyone around you as happy as they can be. It's a great way to celebrate that well-deserved streak" +
                " of luck you're currently enjoying!";
        }
    }
    if (month == 8) {
        if (day <= 22) {
            document.getElementById("image").innerHTML = '<img src="img/leo.jpeg">'
            return name + " you are a leo! Your friends live by one simple rule: When you're happy, everyone's happy. " +
                "Your fiery nature just doesn't allow anyone to be depressed in your immediate vicinity -- unless you're" +
                " feeling down yourself! At the moment, you're feeling pretty great, which means you do your very best to" +
                " make everyone around you as happy as they can be. It's a great way to celebrate that well-deserved streak" +
                " of luck you're currently enjoying!";
        }
        if (day > 22 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/virgo.jpeg">'
            return name + " you are a virgo! If you're not sure quite how you should handle a certain situation that's a" +
                " little too delicate for prime time, then hold off on mentioning it to anyone, at least for the time being." +
                " You know perfectly well that there are still interlocking issues to be resolved, and until then, silence" +
                " is the best strategy. You're in charge, and you know it -- so call a meeting if you must, just to be sure" +
                " that everyone is on the same page.";
        }
    }
    if (month == 9) {
        if (day <= 22) {
            document.getElementById("image").innerHTML = '<img src="img/virgo.jpeg">'
            return name + " you are a virgo! If you're not sure quite how you should handle a certain situation that's a" +
                " little too delicate for prime time, then hold off on mentioning it to anyone, at least for the time being." +
                " You know perfectly well that there are still interlocking issues to be resolved, and until then, silence" +
                " is the best strategy. You're in charge, and you know it -- so call a meeting if you must, just to be sure" +
                " that everyone is on the same page.";
        }
        if (day > 22 && day <= 30) {
            document.getElementById("image").innerHTML = '<img src="img/libra.png">'
            return name + " you are a libra! Relationships are almost always your number one priority, but at the moment," +
                " nothing else can even come close! Your lucky partner -- or prospective partner, or even your latest crush" +
                " -- should enjoy all kinds of sweet attention, aimed simply at ensuring that they know how deeply and securely" +
                " you care for them. You expect your feelings to be returned, but it's still vital to have the conversation" +
                " anyway.";
        }
    }
    if (month == 10) {
        if (day <= 22) {
            document.getElementById("image").innerHTML = '<img src="img/libra.png">'
            return name + " you are a libra! Relationships are almost always your number one priority, but at the moment," +
                " nothing else can even come close! Your lucky partner -- or prospective partner, or even your latest crush" +
                " -- should enjoy all kinds of sweet attention, aimed simply at ensuring that they know how deeply and securely" +
                " you care for them. You expect your feelings to be returned, but it's still vital to have the conversation " +
                "anyway.";
        }
        if (day > 22 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/scorpio.jpeg">'
            return name + " you are a scorpio! You know how to make awesome plans and see them through to the end, never" +
                " even thinking about aborting the mission. You're a planner and a plotter, containing equal parts detective" +
                " and analyst. Today's plan is just about perfect from beginning to end -- so much so that you should be " +
                "confident about sharing it with anyone, even rivals. If it involves helping a loved one out of a tough " +
                "spot, don't lose sight of your own needs in the process.";
        }
    }
    if (month == 11) {
        if (day <= 21) {
            document.getElementById("image").innerHTML = '<img src="img/scorpio.jpeg">'
            return name + " you are a scorpio! You know how to make awesome plans and see them through to the end, never" +
                " even thinking about aborting the mission. You're a planner and a plotter, containing equal parts detective" +
                " and analyst. Today's plan is just about perfect from beginning to end -- so much so that you should be " +
                "confident about sharing it with anyone, even rivals. If it involves helping a loved one out of a tough " +
                "spot, don't lose sight of your own needs in the process.";
        }
        if (day > 21 && day <= 30) {
            document.getElementById("image").innerHTML = '<img src="img/sagittarius.png">'
            return name + " you are a sagittarius! Generosity and excess are dangerous qualities to tote around in tandem," +
                " and it takes a very special kind of person to pull it off. For the most part, you're up for the challenge," +
                " and pretty happy about it, too! Still, you really need to make sure that everyone appreciates what you're" +
                " doing for them, and that they don't just take you for granted. You should also take a little time for " +
                "yourself now, just because you can.";
        }
    }
    if (month == 12) {
        if (day <= 21) {
            document.getElementById("image").innerHTML = '<img src="img/sagittarius.png">'
            return name + " you are a sagittarius! Generosity and excess are dangerous qualities to tote around in tandem," +
                " and it takes a very special kind of person to pull it off. For the most part, you're up for the challenge," +
                " and pretty happy about it, too! Still, you really need to make sure that everyone appreciates what you're" +
                " doing for them, and that they don't just take you for granted. You should also take a little time for " +
                "yourself now, just because you can.";
        }
        if (day > 21 && day <= 31) {
            document.getElementById("image").innerHTML = '<img src="img/capricorn.jpeg">'
            return name + " you are a capricorn! No matter what the subject or where you happen to be, you are rarely " +
                "shy about expressing an opinion. You're not exactly shy now either, but you may start to feel a bit of " +
                "unusual emotional interference coming on, so remind yourself that if anyone has the right to be confident," +
                " it's you. You've been so diligent and hardworking for so long, so relax. Let the rest of the world worry" +
                " about your feelings for a change!";
        }
    }
}
function yourBirthday(month, day) {
    var now = new Date();
    var todaysMonth = now.getMonth();
    var todaysDay = now.getDate();

    if ((todaysMonth + 1) == month && todaysDay == day) {
        return "Happy Birthday!";
    } else {
            return "";
    }
}