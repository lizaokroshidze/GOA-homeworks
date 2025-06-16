const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.style.color = 'red';
    console.log('Clicked element:', event.target);
    console.log('Event object:', event);
  });
});



const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
  box.addEventListener('click', (event) => {
    const clickedDiv = event.currentTarget; 
    const id = clickedDiv.id;

    const colors = {
      red: 'red',
      green: 'green',
      blue: 'blue',
      yellow: 'yellow'
    };

    const color = colors[id];

    if (color) {
      clickedDiv.style.backgroundColor = color;

      const p = clickedDiv.querySelector('p');
      if (p) {
        p.textContent = `Color: ${color}`;
      }

      console.log(`Clicked div ID: ${id}`);
      console.log(`Changed color to: ${color}`);
    }
  });
});