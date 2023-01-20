// import {Color, Vector2, Vector3, Vector4, Euler, Object3D, Camera} from 'three';
import 'three';
declare global{
    interface Number{
        clone: () => this,
        moveTo(to: number, amount: number): number,
    }
}

declare module 'three'{
    type axis = 'x' | 'y' | 'z';

    interface Color{
        moveTo(to: this, amount: number): this,
    }

    interface Vector2{
        moveTo(to: this, amount: number): this,
    }

    interface Vector3{
        moveTo(to: this, amount: number): this,
    }

    interface Vector4{
        moveTo(to: this, amount: number): this,
    }

    interface Euler{
        moveTo(to: this, amount: number): this,
    }

    export interface Object3D{
        getSurface(): number,
        getVolume(): number,
        getSize(): Vector3,
        centerGeometry(): this,
        center(): this,
        normalize(axis?: axis): this,
        setSize(size: number, axis?: axis): this,
        hoverCheck(mouse: Vector2, camera: Camera): boolean,
        dispose(disposeTextures?: boolean): void,
        setupClickable(clickableObject?: Object3D): void,

        disposed: boolean,
        clickableObject: Object3D | null,
        isClickDisabled: boolean,
        isClickable: boolean,
        isHovered: boolean,
        isLeftClicked: boolean,
        isWheelClicked: boolean,
        isRightClicked: boolean,
        get isClicked(): boolean,
        isPressed: boolean,
        get isLeftPressed(): boolean,
        get isRightPressed(): boolean,
        get isWheelPressed(): boolean,
        isDragged: boolean,
        get isLeftDragged(): boolean,
        get isRightDragged(): boolean,
        get isWheelDragged(): boolean,
        hoverDistance: number,
        _isLeftClickNeedCallback: boolean,
        _isRightClickNeedCallback: boolean,
        _isWheelClickNeedCallback: boolean,
        set isLeftClickNeedCallback(val: boolean),
        set isRightClickNeedCallback(val: boolean),
        set isWheelClickNeedCallback(val: boolean),
        onClick(): void,
        onRightClick(): void,
        onWheelClick(): void,
        onHover(): void,
        onHoverUpdate(): void,
        onHoverEnd(): void,
    }
}
