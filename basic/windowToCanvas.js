/**
 * Convert window coordinate to canvas coordinate
 * @param  {canvas} canvas canvas object
 * @param  {number} x      window x coordinate
 * @param  {number} y      window y coordinate
 * @return {object}        object contains converted coordinate of canvas
 */
var windowToCanvas = function(canvas, x, y) {
	var bbox = canvas.getBoundingClientRect();	// get canvas bounding box

	return {
		x: x - bbox.left * (canvas.width/bbox.width),
		y: y - bbox.top * (canvas.height/bbox.height)
	};
};
