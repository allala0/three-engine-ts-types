declare module 'three-engine/tools/assets/Font'{
    import Asset from './Asset';

    export default class Font extends Asset{
        constructor(path: string, loadCallback?: () => void, parameters?: object);

        isFont: boolean;
    }
}
