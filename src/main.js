import { World } from './World/World.js';


function main() {
  var setRenderTrue = false;

  
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  document.getElementById("trigger-render").addEventListener("click",(event)=> {  
    event.target.style.background = 'lightgrey';
    event.target.style.color = 'grey';
    event.target.style.border = 'none';
    event.target.innerHTML = 'rendered!'
    world.render();
  });
}


main();
