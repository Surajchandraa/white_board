
    const canvas = document.getElementById("canvas");
    const paint = document.getElementById("color-type");
    const range=document.getElementById("pencil-size");
    const eraser=document.getElementById("eraser");
    
    

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let painting = false;
    let color ="";
    let size=3;

    paint.addEventListener('input',function(){
        color=paint.value;
        eraser.classList.remove("bg")

    })

    range.addEventListener('input',function(){
        size=range.value;
    })

    eraser.addEventListener("click",function(){
        color="white";
        eraser.classList.add("bg")
    })

    function endpoint() {
        painting = false;
        ctx.beginPath();
        
    }

    function startpoint(e) {
        painting = true;
        
        draw(e);
      

      
    }

    function draw(e) {
        if (!painting) {
            return;
        }

        const rect = canvas.getBoundingClientRect();
        const offsetX = rect.left;
        const offsetY = rect.top;

        ctx.strokeStyle=color;
        ctx.lineWidth = size;
        ctx.lineCap = "round";
        
        ctx.lineTo(e.clientX-offsetX, e.clientY-offsetY);
        ctx.stroke();
    
       
    
    }

canvas.addEventListener("touchstart", startpoint);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", endpoint);
