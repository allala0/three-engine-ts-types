declare module 'three-engine/tools/assets/SpriteSheet'{
    import {Vector2} from 'three';
    import Texture from './Texture';

    export default class SpriteSheet extends Texture{
        constructor(path: string, tileCount: Vector2, loadCallback?:() => void , parameters?: object);
        
        isSpriteSheet: boolean;

        tileCount: Vector2
    }
}