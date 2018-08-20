namespace aex
{
    export enum TypeName
    {
        Project = 'IProject',
        CompItem = 'ICompItem',
        FolderItem = 'IFolderItem',
        AVLayer = 'IShapeLayer',
        ShapeLayer = 'IShapeLayer',
        LightLayer = 'ILightLayer',
        CameraLayer = 'ICameraLayer',
    }

    export interface IProject
    {
        type: TypeName.Project
        bitsPerChannel: number
        transparencyGridThumbnails: boolean

        items: IItemBase[]
    }

    export interface IItemBase
    {
        type: TypeName,
        id: number,
        name: string,
        comment: string,
        label: number,
    }

    export interface IFolderItem extends IItemBase
    {
        type: TypeName.FolderItem
        items: IItemBase[]
    }

    export interface ICompItem extends IItemBase
    {
        type: TypeName.CompItem,
        layers: ILayerBase[],
        width : number,
        height: number,
        pixelAspect: number,
        duration: number,
        frameRate: number
    }

    export interface ILayerBase
    {
        type: TypeName
    }

    export interface IShapeLayer extends ILayerBase
    {
        type: TypeName.ShapeLayer
    }
}