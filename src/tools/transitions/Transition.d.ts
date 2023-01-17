declare module 'three-engine/tools/transitions/Transition'{
    import {Clock} from 'three';
    import TransitionObject from './TransitionObject';

    interface Parameters{
        autoplay?: boolean,
        duration?: number,
        count?: number,
        delay?: number,
        forwards?: boolean,
        callback?: Function,
        callbackEveryIteration?: Function,
        callbackEveryUpdate?: Function,

        function?: Function,
        useFunctionSeparately?: boolean,
    }

    export default class Transition{
        constructor(transitionObjects: TransitionObject[] | TransitionObject, parameters?: Parameters);

        isTransition: boolean;
        transitionObjects: TransitionObject[];
        parameters: Parameters;

        autoplay: boolean;
        duration: number;
        count: number;
        delay: number;
        forwards: boolean;
        callback: Function;
        callbackEveryIteration: Function;
        callbackEveryUpdate: Function;

        function: Function;
        useFunctionSeparately: boolean;

        counter: number;
        progress: number;
        paused: boolean;
        ended: boolean;
        isPlayRequested: boolean;
        clock: Clock;

        startTime: number;


        init(): this;

        setStartTime(): void;
        setTransitionObjectValue(): void;
        setTransitionObjectsValueFromStartState(): void;
        setTransitionObjectsValueFromEndState(): void;
        setTransitionObjectsValueFromProgress(): void;
        setTransitionObjectsValue(): void;
        updateStartState(): this;
        moveToStartState(): this;
        clone(): this;
        reset(): this;
        skip(): void;
        play(): void;
        pause(): void;
        toggle(): void;
        update(): void;
    }
}
