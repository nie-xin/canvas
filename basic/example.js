var HELLOCANVAS = (function() {

    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    var init = function() {
        context.font = '38pt Arial';
        context.fillStyle = 'cornflowerblue';
        context.strokeStyle = 'blue';
    };

    var draw = function() {
        context.fillText('Hello Canvas', canvas.width/2 - 150, canvas.height/2 + 15);
        context.strokeText('Hello Canvas', canvas.width/2 - 150, canvas.height/2 + 15);
    };

    return {
        init: init,
        draw: draw
    };

})();

// run hello example
HELLOCANVAS.init();
HELLOCANVAS.draw();

