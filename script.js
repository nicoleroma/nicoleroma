
    function turnOnOff() {
        var image=document.getElementById('Image');
        if(image.src.match("ONbulb"))
            image.src=
"https://i.postimg.cc/6QyTynzr/bulb-on.png";
        else
            image.src=
"https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    }
 
    <img id="Image"
          onclick="turnOnOff()"
          src=
"https://i.postimg.cc/KjK1wL3c/bulb-off.png">
    else
    
<p>
    Click on the bulb to turn it ON and OFF
</p>