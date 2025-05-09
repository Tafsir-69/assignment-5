const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lavender', 'lightpink', 'aliceblue'];

let colorIndex = 0;

document.getElementById('theme-btn').addEventListener('click', function changeColor() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
function resetColor() {
    document.body.style.backgroundColor = '#cbe0ec'; //  original color
    colorIndex = 0; // start from first color again
  }
  

