

class Loop{
    constructor(camera, scene, renderer){
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
    }

    start(){
        this.renderer.setAnimationLoop(()=>{
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop(){
        this.renderer.setAnimationLoop(null);
    }
}


export {Loop};