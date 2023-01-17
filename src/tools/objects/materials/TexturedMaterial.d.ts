declare module 'three-engine/tools/objects/materials/TexturedMaterial'{
    import {Texture, Vector2, Vector4, ShaderMaterial} from 'three';

    interface Parameters{
        colorMultiplier?: Vector4;
        colorAdd?: Vector4;
        repeat?: number;
        offset?: Vector2;
        aspectRatio?: number;
        repeatTexture?: boolean;
        centerTexture?: boolean;
    }

    export default class TexturedMaterial extends ShaderMaterial{
        constructor(texture: Texture, parameters?: Parameters, materialParameters?: ShaderMaterial);

        isTexturedMaterial: boolean;

        colorMultiplier: Vector4;
        colorAdd: Vector4;
        repeat: number;
        offset: Vector2;
        aspectRatio: number;
        repeatTexture: boolean;
        centerTexture: boolean;

        // texture: Texture;
        parameters: Parameters;
        materialParameters: ShaderMaterial;

        set texture(texture: Texture);
        get texture(): Texture;

        setAspectRatio(aspectRatio: number): void;
        clone(): this;
    }
}
