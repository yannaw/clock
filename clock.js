(function() {
    
  var time=function(){
  var now = new Date();
        
     var hourElement= document.getElementById('hours');
     var minutesElement= document.getElementById('minutes');
   var secondsElement= document.getElementById('seconds');

    var hoursText=now.getHours();
    var minutesText=now.getMinutes();
    var secondsText=now.getSeconds();
    if(secondsText<10){
      secondsText='0'+secondsText;
    }
        if(minutesText<10){
      minutesText='0'+minutesText;
    }
        if(hoursText<10){
      hoursText='0'+hoursText;
    }
  hourElement.innerHTML=hoursText;
   minutesElement.innerHTML=minutesText;
     secondsElement.innerHTML=secondsText;
    
    }
  time();
  var interval = setInterval(time, 1000);
  
})();