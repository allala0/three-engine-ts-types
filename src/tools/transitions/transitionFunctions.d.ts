declare module 'three-engine/tools/transitions/transitionFunctions'{
    export default interface TransitionFunctions{
        linear(x: number): number;
        easeInSine(x: number): number;
        easeOutSine(x: number): number;
        easeInOutSine(x: number): number;
        easeInQuad(x: number): number;
        easeOutQuad(x: number): number;
        easeInOutQuad(x: number): number;
        easeInCubic(x: number): number;
        easeOutCubic(x: number): number;
        easeInOutCubic(x: number): number;
        easeInQuart(x: number): number;
        easeOutQuart(x: number): number;
        easeInOutQuart(x: number): number;
        easeInQuint(x: number): number;
        easeOutQuint(x: number): number;
        easeInOutQuint(x: number): number;
        easeInExpo(x: number): number;
        easeOutExpo(x: number): number;
        easeInOutExpo(x: number): number;
        easeInCirc(x: number): number;
        easeOutCirc(x: number): number;
        easeInOutCirc(x: number): number;
        easeInBack(x: number): number;
        easeOutBack(x: number): number;
        easeInOutBack(x: number): number;
        easeInElastic(x: number): number;
        easeOutElastic(x: number): number;
        easeInOutElastic(x: number): number;
        easeInBounce(x: number): number;
        easeOutBounce(x: number): number;
        easeInOutBounce(x: number): number;
    }
}
