
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric. Image fromURL("golf-h1.png", function(Ing) {
	hole_obj - Ing;
	hole_obj.scaletowidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
	top: holey.
	left:hole_x
	canvas.add(hole_obj),
	});
	new_image();
	function new_image()
	fabric. Image.FromURL("ball.png", function(Img) {
	ball_obj - Ing;
	ball_obj.scaleTokidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set(
	top: bally.
	left: ball_x
	});
	canvas.add(ball_obj);
	});

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y--hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
document.getElementById("myCanvas").style.bordercolor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	function up()
	f(bally (45)
	bally - ball_y - block_image_height;
	console.log("block image height = " + block_inage_height);
	console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y)
	canvas.remove(ball_0b});
	new_image();

	function down()
	f(bally (45)
	bally - ball_y + block_image_height;
	console.log("block image height = " + block_inage_height);
	console.log("When Height arrow key is pressed, X = " + ball_x + " , Y = "+ball_y)
	canvas.remove(ball_0b});
	new_image();

	function left()
	{
		if(ball_x >5)
		{
	
f(bally (45)
bally - ball_y + block_height_width;
console.log("block image width = " + block_inage_height);
console.log("When left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y)
canvas.remove(ball_0b});
new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			f(bally (45)
bally - ball_y - block_height_width;
console.log("block image width = " + block_inage_height);
console.log("When left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y)
canvas.remove(ball_0b});
new_image();
		}
	}
	
}

