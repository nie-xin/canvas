var SNAPSHOT = (function() {
    var init = function() {
        var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d'),
            snapshotButton = document.getElementById(('snapshotButton'),
            snapshotImageElement = document.getElementById(('snapshotImageElement'),
            loop;

            context.font = FONT_HEIGHT + 'px Arial';
            loop = setInterval(drawClock, 1000);
    };

    var eventHandle = function(e) {
        snapshotButton.onclick = function(e) {
            var dataUrl;

            if (snapshotButton.value === 'Take snapshot') {
                dataUrl = canvas.toDataURL();
                clearInterval(loop);
                snapshotImageElement.src = dataUrl;
                snapshotImageElement.style.display = 'inline';
                canvas.style.display = 'none';
                snapshotButton.value = 'Return to Canvas';
            } else {
                canvas.style.display = 'inline';
                snapshotImageElement.style.display = 'none';
                loop = setInterval(drawClock, 1000);
                snapshotButton.value = 'Take snapshot';
            }
        };
    };
})();
