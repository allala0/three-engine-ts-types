declare module 'three-engine/tools/assets/Asset'{
    import {Loader} from 'three';

    export default class Asset{
        constructor(path: string, loader: Loader, loadCallback?:() => void , parameters?: object);

        isAsset: boolean;

        path: string;
        loader: Loader;
        loadCallback: () => void;
        parameters: object;

        data: object;
        failedToLoad: boolean;

        get loaded(): boolean;
    }
}
