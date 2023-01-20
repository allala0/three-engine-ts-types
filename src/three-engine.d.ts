declare module 'three-engine'{
    import 'three';
    
    type transitionObject = number | Vector2 | Vector3 | Vector4 | Color | Euler;

    interface Parameters{
        setup?: {
            DEV_MODE?: boolean,
            domContainer: HTMLElement,
            enableControls?: boolean,
            controlsEnabled?: boolean,
            enableStats?: boolean,
            enableGui?: boolean,
            disableContextMenu?: boolean,
            enablePostprocessing?: boolean,
            enableLoadingBar?: boolean,
            enableLoadingCircle?: boolean, 
            cameraType?: 'perspective' | 'orthographic',
            controlsType?: 'orbit' | 'trackball' | 'pointerlock' | 'arcball',
            enableControlsPan?: boolean,
            enableControlsDamping?: boolean,
            enableOrbitControlsZoomToCursor?: boolean,
            enableTestLights?: boolean,
            enableShadows?: boolean,
            enableAlpha?: boolean,
            enableAntialias?: boolean,
            enableAutoFullscreenOnMobile?: boolean,
            backgroundColor?: boolean,
            enableFXAA?: boolean,
            enableSMAA?: boolean,
            cameraPosition?: Vector3,
            cameraLookAt?: Vector3,
            cameraUp?: Vector3,
            cameraZoom?: number,
            perspectiveCameraFov?: number,
            perspectiveCameraNear?: number,
            perspectiveCameraFar?: number,
            orthographicCameraMinWidth?: number,
            orthographicCameraMinHeight?: number,
            orthographicCameraNear?: number,
            orthographicCameraFar?: number,
            cameraTransitionDuration?: number,
            cameraTransitionFunction?(x: number): number,
            enableSRGBEncoding?: boolean,
        
            assets?: object,
            objectsToUpdate?: object[],
        },
        callbacks?: {
            update?(engine: ThreeEngine): void,
            updateLoaded?(engine: ThreeEngine): void,
            init?(engine: ThreeEngine): void,
            initLoaded?(engine: ThreeEngine): void,
            onMouseDown?(event: Event, engine: ThreeEngine): void,
            onMouseUp?(event: Event, engine: ThreeEngine): void,
            onMouseMove?(event: Event, engine: ThreeEngine): void,
            onTouchStart?(event: Event, engine: ThreeEngine, lastTouch: object): void,
            onTouchMove?(event: Event, engine: ThreeEngine, lastTouch: object): void,
            onTouchEnd?(event: Event, engine: ThreeEngine, lastTouch: object): void,
            onWheel?(event: Event, engine: ThreeEngine): void,
            onScroll?(event: Event, engine: ThreeEngine): void,
            onKeydown?(event: Event, engine: ThreeEngine): void,
        }
    }
    
    export default class ThreeEngine{
        constructor(parameters?: Parameters);
    
        protected loaded: boolean;
        protected inited: boolean;
        protected initedLoaded: boolean;
        protected renderInited: boolean;
    
        protected isMouseDown: boolean;
        protected lastTouch: boolean;
    
        protected _cameraUp: Vector3;
        protected _cameraLookAt: Vector3;
        protected _cameraPosition: Vector3;
        protected _cameraZoom: number;
    
        protected cameraTransition: function;
        protected clock: Clock;
        protected mouse: Vector2;
        protected raycaster: Raycaster;
        renderer: WebGLRenderer;
    
        scene: Scene;
    
        domElement: HTMLElement
    
        protected setParameter(name: string, defaultValue: transitionObject, object?: object): void;
        protected loadCss(): void;
        protected setupDomElement(): void;
        protected addLoadingBar(): void;
        protected setLoadingBarVisibility(value: number): void;
        protected setLoadingBarProgress(value: number): void;
        protected addLoadingCircle(): void;
        protected setLoadingCircleVisibility(value: number): void;
        protected addPostProcessing(): void;
        protected updateFxaaPass(): void;
        protected addRenderer(): void;
        protected addCamera(): void;
        protected addPerspectiveCamera(): void;
        protected calculateOrtographicCameraSize(): Vector2;
        protected addOrthographicCamera(): void;
        protected addControls(): void;
        protected addTrackballControls(): void;
        protected addOrbitControls(): void;
        protected addPointerLockControls(): void;
        protected addArcballControls(): void;
        protected addStats(): void;
        protected addGui(): void;
        protected assetsLoadedCheck(): boolean;
        protected resizeCheck(): boolean;
        protected GameLoop(): void;
        protected updateCamera(): void;
        protected addCameraTransition(): void;
        protected setCameraPosition(): void;
        protected updateObjects(): void;
        protected get clickableObjects(): object[];
        protected handleClickableObjectsClick(event: Event): void;
        protected handleClickableObjectsMouseUp(): void;
        protected updateClickableObjects(): void;
        protected _init(): void;
        protected _initLoaded(): void;
        protected _update(): void;
        protected renderScene(): void;
        protected addTestLights(): void;
        protected requestFullscreen(): void;
        protected addEventListeners(): void;
        protected _onResize(): void;
        protected _onMouseMove(): void;
        protected promptDebugInfo(): void;
        protected randomCameraPosition(): void;
        protected addDebugGuiFields(): void;
        getTextureQuality(maxTextureQuality?: string, maxMobileTextureQuality?: string, textureQualitySizes?: object): string;
        dispose(): void;
    }
}
