declare module 'three-engine/tools/assets/Texture'{
    import Asset from './Asset';

    export default class Texture extends Asset{
        constructor(path: string, loadCallback?: () => void, parameters?: object);

        isTexture: boolean;
    }
}
