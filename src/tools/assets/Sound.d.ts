export default class Sound{
    constructor(path: string, parameters: Object);

    isSound: boolean;

    protected soundElement: HTMLAudioElement;
    protected source: HTMLSourceElement;

    autoplay: boolean;

    play(): void;
    pause(): void;
    reset(): void;
    update(): void;

    get paused(): boolean;
    get ended(): boolean;
    get volume(): number;
    set volume(value: number);
    get loop(): boolean;
    get currentTime(): number;
    get duration(): number;
    get muted(): boolean;
    set muted(value: boolean);
    get speed(): number;
    set speed(value: number);
    get preload(): boolean;
    set preload(value: boolean);
}
