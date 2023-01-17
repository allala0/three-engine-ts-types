import AnimatedMaterial from '../materials/AnimatedMaterial';

export default class AnimatedPass{
    constructor(animatedMaterial: AnimatedMaterial, cameraAspect?: number);

    isAnimatedPass: boolean;
    animatedMaterial: AnimatedMaterial;

    update(cameraAspect?: number): void;
}