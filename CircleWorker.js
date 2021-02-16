onmessage = function(e) {
    var intervalID;
    var radius = e.data[0];
    var color = e.data[1];


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    intervalID = setInterval(generateCoord,1000); 

    function generateCoord(){
        x=getRandomInt(600);
        y=getRandomInt(600);
        postMessage([x,y,radius,color]);
    }
}