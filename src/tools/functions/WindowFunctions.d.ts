declare module 'three-engine/tools/functions/WindowFunctions'{
    interface Window{
        cursorPointer(): void,
        cursorArrow(): void,
        mobileCheck(): boolean,
        isIOS: boolean
    }
}
