


function getRGB(color){

        // Variables for red, green, blue values
        var r, g, b, hsp;
        
        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {
    
            // If HEX --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            
            r = color[1];
            g = color[2];
            b = color[3];
        } 
        else {
            
            // If RGB --> Convert it to HEX: http://gist.github.com/983661
            color = +("0x" + color.slice(1).replace( 
            color.length < 5 && /./g, '$&$&'));
    
            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }
     
    return [r,g,b];
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function getComplementBrightness(color){
    var colorRGB=getRGB(color);
    var brightnessComplement=colorRGB.map((value)=>{
        return (value+128)%255;
    });
    var hexValue="#";
    brightnessComplement.forEach((value)=>{
        hexValue=hexValue+componentToHex(value);
    })
    return hexValue

}



export default getComplementBrightness;