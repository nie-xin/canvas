var RUBBERBAND = (function(){

    var canvas = document.getElementById(('canvas'),
        context = canvas.getContext('2d'),
        rubberbandDiv = document.getElementById('rubberbandDiv'),
        image = new Image(),
        mousedown = {},
        rubberbandRectangle = {},
        dragging = false;

    // Methods
    var rubberbandStart = function(x, y) {
        mousedown.x = x;
        mousedown.y = y;

        rubberbandRectangle.left = mousedown.x;
        rubberbandRectangle.top = mousedown.y;

        moveRubberbandDiv();
        showRubberbandDiv();

        dragging = true;
    };

    var rubberbandStretch = function(x, y) {
        rubberbandRectangle.left = x < mousedown.x ? x :  mousedown.x;
        rubberbandRectangle.top = y < mousedown.y ? y : mousedown.y;

        rubberbandRectangle.width = Math.abs(x - mousedown.x);
        rubberbandRectangle.height = Math.abs(y - mousedown.y);

        moveRubberbandDiv();
        resizeRubberbandDiv();
    };

    var rubberbandEnd = function() {
        var bbox = canvas.getBoundingClientRect();

        try {
            context.drawImage(canvas,
                              rubberbandRectangle.left - bbox.left,
                              rubberbandRectangle.top - bbox.top,
                              rubberbandRectangle.width,
                              rubberbandRectangle.height,
                              0, 0, canvas.width, canvas.height);
        } catch(e) {
            // error message
        }

        resetRubberbandRectangle();

        rubberBandDiv.style.width = 0;
        rubberbandDiv.style.height = 0;

        hideRuberbandDiv();

        dragging = false;
    };

    var moveRubberbandDiv = function() {
        rubberbandDiv.style.width = rubberbandRectangle.width + 'px';
        rubberbandDiv.style.height = rubberbandRectangle,height + 'px';
    };

    var resizeRubberbandDiv = function() {
        rubberbandDiv.style.width = rubberbandRectangle.width + 'px';
        rubberbandDivd.style.height = rubberbandRectangle.height + 'px';
    };

    var showRubberbandDiv = function() {
        rubberbandDiv.style.display = 'inline';
    };

    var hideRubberbandDiv = function() {
        rubberbandDiv.style.display = 'none';
    };

    var resetRubberbandRectangle = function() {
        rubberbandRectangle = { top: 0, left: 0, width: 0, height: 0 };
    };

    var eventHandle = function(e) {

        canvas.onmousedown = function(e) {
            var x = e.clientX,
                y = e.clientY;

            e.preventDefault();
            rubberbandStart(x, y);
        };

        window.onmousemove = function(e) {
            var x = e.clientX,
                y = e.clientY;

            e.preventDefault();

            if (dragging) {
                rubberbandStretch(x, y);
            }
        };

        window.onmouseup = function(e) {
            e.preventDefault();
            rubberbandEnd();
        };
    };

    var init = function() {
        image.onload = function() {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };

        resetButton.onclick = function(e) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvasheight);
        };

        image.src = 'curved-road.png';
    };

    return {
        inti: init
    };
});

