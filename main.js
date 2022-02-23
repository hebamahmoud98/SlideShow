var slideImg=['img/1.jpg','img/2.jpg','img/3-.jpg'];
var i=0;
var slideshow =function(){
    document.Slideshow.src=slideImg[i];
    if(i<slideImg.length-1){
i++
    }else{
        i=0;
    }
    setTimeout("slideshow()",2000)
}
slideshow()