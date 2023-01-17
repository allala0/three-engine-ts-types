import {Loader} from 'three';

export default class Asset{
    constructor(path: string, loader: Loader, loadCallback:() => void , parameters: Object)

    isAsset: boolean;

    path: string;
    loader: Loader;
    loadCallback: () => void;
    parameters: Object;

    data: Object;
    failedToLoad: boolean;

    get loaded(): boolean;
}
