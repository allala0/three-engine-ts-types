import {Vector2, Vector3, Vector4, Color, Euler} from 'three';

declare module 'three-engine/tools/transitions/TransitionObject'{
    
    type transitionObject = number | Vector2 | Vector3 | Vector4 | Color | Euler;

    interface Parameters{
        function?(x: number): number;
        useFunctionSeparately?: boolean;
        enableDynamicStartState?: boolean;
    }

    interface Keyframe{
        progress: number,
        value: transitionObject
    }

    export default class TransitionObject{
        constructor(object: object, property: string, keyframes: object, parameters?: object);

        object: object;
        property: string;
        keyframes: object;
        parameters: Parameters;

        function(x: number): number;
        useFunctionSeparately: boolean;
        enableDynamicStartState: boolean;

        sortKeyframes(): void;
        getCurrentStartKeyframe(progress: number): Keyframe;
        getCurrentEndKeyframe(progress: number): Keyframe;
        getCurrentKeyframeProgress(progress: number): number;
        getCurrentValue(progress: number): transitionObject;

        clone(): this;
    }
}
