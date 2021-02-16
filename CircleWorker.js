onmessage = function(e) {
    var intervalID;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    intervalID = setInterval(generateCoord,1000); 

    function generateCoord(){
        x=getRandomInt(600);
        y=getRandomInt(600);
        postMessage([x,y]);
    }

  }