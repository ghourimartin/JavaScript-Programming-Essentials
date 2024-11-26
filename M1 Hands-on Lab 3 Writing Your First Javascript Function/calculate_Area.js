let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
    document.getElementById('lengths').innerText = `The area of the rectangle is: ${length}`;
    document.getElementById('widths').innerText = `The area of the rectangle is: ${width}`;
    }