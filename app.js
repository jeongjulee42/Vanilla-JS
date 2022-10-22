const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return ;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);

}
function startPainting(event){
    isPainting = true;
}
function onMouseUp(event){
    isPainting = false;
}
function cancelPainting(event){
    isPainting = false;
}
function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", onMouseUp)
canvas.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange);
