// Function to fine the image is landscape or portrait.
function isLandscape(width, height) {
    return width > height;
}

// Get user input for width and height
let width = Number(prompt("Width of the image?"));
let height = Number(prompt("Height of the image?"));

// Check if input is valid.
if (isNaN(width) || isNaN(height) || !width || !height) {
    console.log("Invalid input.");
}
else {
    if (isLandscape(width, height)) {
        console.log("Image is Landscape");
    }
    else {
        console.log("Image is portrait.");
    }
}