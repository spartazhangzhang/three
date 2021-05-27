import { WebGLRender } from 'three';


function createRender(){
    const render = new WebGLRender({});
    renderer.physicallyCorrectLights = true;

  return renderer;
}


export {createRender};