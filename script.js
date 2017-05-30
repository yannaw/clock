document.write("Klart");    
  var doctitle= document.getElementById('doctitle');
  console.log(doctitle.innerHTML);
  doctitle.innerHTML="Tjena";

  var addDot = function(){
    this.innerHTML = this.innerHTML +".";
    
  }
 addDot(); 
  
  doctitle.addEventListener('click', addDot,false);
  
  
  var elements= document.getElementsByClassName('ingress');
  for(var i=0; i<elements.length; i++){
    elements[i].addEventListener('click', addDot, false);
  }
  


  (function () {

      var time = function () {
          var now = new Date();

          document.write(now.getHours() + '.'
                         + now.getMinutes() + ':'
                        + now.getSeconds() + '<br />');

          var hourElement = document.getElementById('hours');
          var minutesElement = document.getElementById('minutes');
          var secondsElement = document.getElementById('seconds');
          var hoursText = now.getHours();
          var minutesText = now.getMinutes();
          var secondsText = now.getSeconds();
          hourElement.innerHTML = hoursText;
          minutesElement.innerHTML = hoursText;
          secondsElement.innerHTML = hoursText;

      }
      time();
      var interval = setInterval(time, 1000);

  })();