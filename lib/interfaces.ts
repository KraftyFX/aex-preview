namespace aex
{
    export type AeSerializable = Project | Item | ItemCollection | Layer | LayerCollection;
    export type AexObject = IProject | IItemBase | IItemBase[] | ILayerBase | ILayerBase[];

    export enum Status
    {
        Success = 'success',
    }

    export interface IToJsObjectResult
    {
        status : Status
        value : AexObject;
        errors? : any[];
    }

    export interface IReadOptions
    {
        skipDefaults?: boolean
    }

    export enum CollectionBehavior
    {
        ReplaceAll = 'replaceall',
        AddOnly = 'add',
        AddAndMerge = 'merge',
    }

    export interface IAssignOptions
    {
        itemCollectionBehavior?: CollectionBehavior
        layerCollectionBehavior?: CollectionBehavior
    }

    export interface IAssignResult
    {
        status : Status
        errors? : any[];
    }
}