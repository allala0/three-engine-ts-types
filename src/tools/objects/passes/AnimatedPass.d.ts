declare module 'three-engine/tools/objects/passes/AnimatedPass'{
    import AnimatedMaterial from '../materials/AnimatedMaterial'; 
    import {ShaderPass} from 'three';

    export default class AnimatedPass extends ShaderPass{
        constructor(animatedMaterial: AnimatedMaterial, cameraAspect?: number);

        isAnimatedPass: boolean;
        animatedMaterial: AnimatedMaterial;

        update(cameraAspect?: number): void;
    }
}
