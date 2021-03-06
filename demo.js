// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(150,10);
btn.setText("Button Name");

btn.onclick(function(e){
	console.log(e);
});
btn.onmouseover(function(e){
	console.log(e);
});
btn.onmouseout(function(e){
	console.log(e);
});
btn.onmouseup(function(e){
	console.log(e);
});

var checkbx = new MyToolkit.CheckBox;
checkbx.move(50,10);
checkbx.setText("Checkbox Name");


checkbx.onclick(function(e){
	console.log(e);
});
checkbx.onmouseout(function(e){
	console.log(e);
});
checkbx.onmouseup(function(e){
	console.log(e);
});

var radioBtns = []
radioBtns.push(["Radio 1", false])
radioBtns.push(["Radio 2", true])
radioBtns.push(["Radio 3", false])
radioBtns.push(["Radio 4", false])
let btnGroup = new MyToolkit.RadioButton(radioBtns);
btnGroup.move(250,10);

btnGroup.onclick(function(e){
	console.log(e);
});

var txtBox = new MyToolkit.TextBox;
txtBox.move(50,20)

var scrollBar = new MyToolkit.ScrollBar;
scrollBar.move(200,0);
scrollBar.setHeight(250);

var progBar = new MyToolkit.ProgressBar;
progBar.move(65,30);
progBar.setWidth(300);
progBar.setIncrement(100);


var slider = new MyToolkit.HorizontalSlide;
slider.move(100,0);
slider.setWidth(250);
slider.onclick(function(e){
	console.log(e);
});
slider.onmouseover(function(e){
	console.log(e);
});
slider.onmouseout(function(e){
	console.log(e);
});
slider.onmouseup(function(e){
	console.log(e);
});

