const pad = document.getElementById('pad-box');

pad.addEventListener('mousemove', (e) => {

  const rect = pad.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;


  const red = Math.round((x / rect.width) * 255);
  const green = Math.round((y / rect.height) * 255);
  const blue = 150;

  pad.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});