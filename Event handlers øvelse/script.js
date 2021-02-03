function handleClick(element){
    element.style="background-color:blue;"
}

var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
    this.style ="box-shadow: 2px 2px 2px grey;"
    this.width = "400"
    
});

image.addEventListener("mouseout", function(){
    this.style =""
    this.width = "300"
});

function fadeOut(){
    const square = document.getElementById('square1');

    square.style.opacity = '0'
}