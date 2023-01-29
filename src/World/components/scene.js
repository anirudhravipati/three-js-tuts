import { AxesHelper, Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();
  const axesHelper = new AxesHelper( 100 );
  
  scene.add( axesHelper );
  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };
