declare module 'three-engine/tools/transitions/TransitionChain'{
    import Transition from './Transition';

    interface Parameters{
        loop?: boolean;
        autoplay?: boolean;
    }

    export default class TransitionChain{
        constructor(transitions: Transition[], parameters?: Parameters);

        transitions: Transition[];
        currentIndex: number;

        loop: boolean;
        autoplay: boolean;

        paused: boolean;

        play(): this;
        pause(): this;
        toggle(): this;

        get ended(): boolean;

        reset(): this;
        skip(): this;
        update(): void;
    }
}
