var mouse_event = "empty";
var Last_position_of_x, Last_position_of_y;
color = "black";
width_of_line = 1;
canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", My_mousedown);
function My_mousedown(e)
{
    color=document.getElementById ("color").value;
    width_of_line = document.getElementById ("width_of_the_line").value;
mouse_event = "mousedown";
}
canvas.addEventListener ("mousemove", My_mouseMove);
function My_mouseMove(e)
{
current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if(mouse_event == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log ("Last position of X and Y coordinates are: ");
    console.log ("X= "+Last_position_of_x +"Y= "+Last_position_of_y);
    ctx.moveTo(Last_position_of_x, Last_position_of_y);
    console.log ("Current position of X and Y coordinates are: ");
    console.log ("X= "+current_position_of_mouse_x +"Y= "+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
Last_position_of_x = current_position_of_mouse_x;
Last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener ("mouseup", My_mouseup);
function My_mouseup(e)
{
    mouse_event = "mouseup";
}
canvas.addEventListener ("mouseleave", My_mouseleave);
function My_mouseleave(e)
{
    mouse_event = "mouseleave";
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

