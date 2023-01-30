import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/light.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';


import {DirectionalLightHelper,AmbientLight} from 'three'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    // light = createLights();
    const light = createLights();
    scene.add( light );

    const cube = createCube();
    scene.add(cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
