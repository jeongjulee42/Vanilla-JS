const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("eraser-btn");
canvas.width = 800;
canvas.height = 800;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

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
function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeClick(event){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText="Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}
function onCanvasClick(event){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick(event){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick(event){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", onMouseUp)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraserClick);