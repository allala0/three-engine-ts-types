declare module 'three-engine/tools/objects/materials/AnimatedMaterial'{
    import {Clock, Vector2, Vector4, ShaderMaterial} from 'three';
    import SpriteSheet from '../../assets/SpriteSheet';

    interface Parameters{
        colorMultiplier?: Vector4;
        colorAdd?: Vector4;
        aspectRatio?: number;
        repeat?: number;
        offset?: Vector2;
        repeatTexture?: boolean;
        centerTexture?: boolean;

        reverse?: boolean;
        loop?: boolean;
        bounce?: boolean;
        hideAfterPause?: boolean;
        autoplay?: boolean;
        fps?: number;
        numOfBlankTiles?: number;
        playCount?: number;
    }

    export default class AnimatedMaterial extends ShaderMaterial{
        constructor(spriteSheet: SpriteSheet, parameters?: Parameters, materialParameters?: ShaderMaterial);

        isAnimatedMaterial: boolean;

        colorMultiplier: Vector4;
        colorAdd: Vector4;
        aspectRatio: number;
        repeat: number;
        offset: Vector2;
        repeatTexture: boolean;
        centerTexture: boolean;

        reverse: boolean;
        loop: boolean;
        bounce: boolean;
        hideAfterPause: boolean;
        autoplay: boolean;
        fps: number;
        numOfBlankTiles: number;
        playCount: number;

        tileOffset: Vector2;

        vertexShader: string;
        fragmentShader: string;

        protected uniforms: object;

        // spriteSheet: SpriteSheet;
        parameters: Parameters;
        materialParameters: ShaderMaterial;

        hidden: boolean;
        x: number;
        y: number;
        protected clock: Clock;
        protected lastFrameChange: number;
        protected paused: boolean;
        protected startedReverse: boolean;

        get frameIndex(): number;
        set frameIndex(index: number);

        set spriteSheet(spriteSheet: SpriteSheet);
        get spriteSheet(): SpriteSheet;

        setAspectRatio(aspectRatio: number): void;
        nextFrame(): void;
        previousFrame(): void;
        play(): void;
        pause(): void;
        update(): void;
        clone(): this;
    }
}
