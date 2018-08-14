namespace aex
{
    export enum TypeName
    {
        Project = 'IProject',
        CompItem = 'ICompItem',
        FolderItem = 'IFolderItem',
        Layer = 'ILayer'
    }

    export interface IProject
    {
        __type: TypeName.Project
        bitsPerChannel: number
        transparencyGridThumbnails: boolean

        items: IItemBase[]
    }

    export interface IItemBase
    {
        __type: TypeName,
        id: number,
        name: string,
        comment: string,
        label: number,
    }

    export interface IFolderItem extends IItemBase
    {
        __type: TypeName.FolderItem
        items: IItemBase[]
    }

    export interface ICompItem extends IItemBase
    {
        __type: TypeName.CompItem,
        layers: ILayerBase[],
        width : number,
        height: number,
        pixelAspect: number,
        duration: number,
        frameRate: number
    }

    export interface ILayerBase
    {
        __type: TypeName.Layer
    }
}