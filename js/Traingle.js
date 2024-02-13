function calculateTriangleArea() {
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText =triangleBaseInput.value;
    const base =parseFloat(triangleBaseText)
    console.log(base)

const hightInput = document.getElementById('triangle-hight');
const hightText =hightInput.value;
const hight =parseFloat(hightText)
console.log(hight);

//calculate area //
const area = 0.5 *base*hight;
console.log('area of the triangle;', area);

//display triangle area//
const triangleAreaSpan =document.getElementById("triangleArea");
triangleAreaSpan.innerText =area;
const display=document.getElementById('displayBoard');
const p = document.createElement('p');
p.innerText='Area of Triangle is :' + area;
display.appendChild(p);
}

function calculateRectangleArea() {
    const rectangleWidthInput =document.getElementById('rectangleWidth');
    const rectangleWidthText =rectangleWidthInput.value;
    const width =parseFloat(rectangleWidthText)
    console.log(width)

const rectangleLengthInput = document.getElementById('rectangleLength');
const rectangleLengthText =rectangleLengthInput.value;
const length =parseFloat(rectangleLengthText)
console.log(length);

//calculate area //
const area = width * length;
console.log('area of the Rectangle;', area);

//display Rectangle area//
const rectangleAreaSpan =document.getElementById("rectangleArea");
rectangleAreaSpan.innerText =area;
const display=document.getElementById('displayBoard1');
const p = document.createElement('p');
p.innerText='Area of Rectangle is :' + area;
display.appendChild(p);
}


function calculateParallelogramArea() {
    const parallelogramBaseInput =document.getElementById('parallelogram-base');
    const parallelogramBaseText =parallelogramBaseInput.value;
    const base =parseFloat(parallelogramBaseText)
    console.log(base)

const hightInput = document.getElementById('parallelogram-hight');
const hightText =hightInput.value;
const hight =parseFloat(hightText)
console.log(hight);

//calculate area //
const area = base*hight;
console.log('area of the parallelogram;', area);

//display  Parallelogram area//
const parallelogramAreaSpan =document.getElementById("parallelogramArea");
parallelogramAreaSpan.innerText =area;
const display=document.getElementById('displayBoard2');
const p = document.createElement('p');
p.innerText='Area of parallelogram is :' + area;
display.appendChild(p);
}


//main calculate box//


