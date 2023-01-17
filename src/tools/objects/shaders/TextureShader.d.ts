import Texture from '../../assets/Texture';

interface TextureShader{
    isTextureShader: boolean;
    uniforms: object;
    vertexShader: string;
    fragmentShader: string;
}

export default function(texture: Texture): TextureShader;
