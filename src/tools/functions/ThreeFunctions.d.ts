declare module 'three-engine/tools/functions/ThreeFunctions'{
    import {Camera} from 'three';

    declare module 'three'{
        interface Number{
            clone: () => this,
            moveTo(to: this, amount: this): this,
        }

        interface Color{
            moveTo(to: this, amount: Number): this,
        }

        interface Vector2{
            moveTo(to: this, amount: Number): this,
        }

        interface Vector3{
            moveTo(to: this, amount: Number): this,
        }

        interface Vector4{
            moveTo(to: this, amount: Number): this,
        }

        interface Euler{
            moveTo(to: this, amount: Number): this,
        }

        interface Object3D{
            getSurface(): number,
            getVolume(): number,
            getSize(): Vector3,
            centerGeometry(): this,
            center(): this,
            normalize(axis: 'x' | 'y' | 'z'): this,
            setSize(size: number, axis: 'x' | 'y' | 'z'): this,
            hoverCheck(mouse: Vector2, camera: Camera): boolean,
            dispose(disposeTextures: boolean): void,
            setupClickable(clickableObject: Object3D): void,

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
}
