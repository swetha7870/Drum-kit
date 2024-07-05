// mouse click 

var btn = document.querySelectorAll(".drum");

for( var i = 0 ; i< btn.length ; i++){
    
    btn[i].addEventListener("click", function (){
        var value = this.innerHTML;
        makesound(value);
}
    )

document.addEventListener("keypress" , function(event){
    makesound(event.key);
})

// keyboard presss

function makesound(value){
    switch (value) {
        case  "w":
            var audio = new Audio(src = "sounds/tom-1.mp3");
            audio.play()
            
            break;
        case  "a":
            var audio = new Audio(src = "sounds/tom-2.mp3");
            audio.play()
                
            break;
        case  "s":
            var audio = new Audio(src = "sounds/tom-3.mp3");
            audio.play()
                
            break;
        case  "d":
            var audio = new Audio(src = "sounds/tom-4.mp3");
            audio.play()
                
            break;
            
        case  "j":
            var audio = new Audio(src = "sounds/snare.mp3");
            audio.play()
            
        break;

        case  "k":
            var audio = new Audio(src = "sounds/crash.mp3");
            audio.play()
            
        break;


        case  "l":
            var audio = new Audio(src = "sounds/kick-bass.mp3");
            audio.play()
            
        break;
        default:
            break;
    }
};
}


