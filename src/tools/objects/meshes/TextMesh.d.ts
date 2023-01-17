declare module 'three-engine/tools/objects/meshes/TextMesh'{
    import {Material, Mesh, Vector3} from 'three';

    interface Parameters{
        size: number,
        height: number,
        material: Material
    }

    export default class TextMesh extends Mesh{
        constructor(text: string, font: object, parameters?: Parameters);

        font: object;
        size: number;
        height: number;
        protected _text: string;
        text: string;
        _position: Vector3;

        update(): void;
    }
}
