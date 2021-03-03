const displayer = $('[data-displayer]');
const pictures = $('[data-pic]');

var imgShow = 3;
var minImgShow = imgShow - 1;
var maxImgShow = Math.ceil((pictures.length / 3));//This is used to round numbers.
