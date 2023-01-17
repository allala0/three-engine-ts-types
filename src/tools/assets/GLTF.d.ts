declare module 'three-engine/tools/assets/GLTF'{
    import Asset from './Asset';

    export default class GLTF extends Asset{
        constructor(path: string, loadCallback?: () => void, parameters?: object);

        isGLTF: boolean;
    }
}
