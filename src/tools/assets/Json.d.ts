declare module 'three-engine/tools/assets/Json'{
    import Asset from './Asset';
    
    export default class Json extends Asset{
        constructor(path: string, loadCallback?: () => void, parameters?: object);

        isJson: boolean;
    }
}
