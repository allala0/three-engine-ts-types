declare module 'three-engine/objects/geometries/EquilateralTriangleGeometry'{
    export default class EquilateralTriangleGeometry{
        constructor(sideLength?: number);

        isEquilateralTriangle: boolean;
        sideLength: number;
    }
}
