function myFunc(){
    
    var items = ["BC - Musa","Cute - Musa","So Jao - Duaa","Haan ye karlo pehlay - Duaa","Yaaaaaaar - Musa", "Chaaalo - Musa", "... - Duaa", "Aap relate karlo pehlay - Duaa", "Warr gae bhai - Musa", "Sleep - Musa", "Pagal - Duaa", "Idiot - Duaa", "Wtf - Duaa", "YEEEEET! - Musa", "Bae - Musa", "Babe - Musa", "Dfaa - Duaa", "Khaana khaya?! - Both xD", "Let's sleep - Musa", "Thappar paray ga - Duaa", "DUAAAAAAAAAAAA - Musa", "MUSAAAAAAAAA - Duaa", "Noob - Musa", "Hello Hello - Duaa", "ILY - Musa", "Fittay Mu - Duaa", "Chawal - Musa", "OYEEEEEEE - Duaa", "TF - Duaa", "Bongay - Duaa", "Abay Saalay - Duaa", "Aadha samjha dia hai baaki aadha samajhna tumhaara kaam hai - Duaa", "Samajh gya - Musa", "Sorry - Both", "Jee. - Duaa", "Hawww - Duaa", "Rude - Duaa", "Mein kabh kaha hai aisa? - Duaa", ":)))))))))))))))))))) - Duaa", "Dumb - Duaa", "You're my peace, my harmony - Musa"];
    
var random = Math.floor(Math.random()*items.length);
    
document.getElementById("Quote").innerHTML = items[random];
}

