namespace aex
{
    export function toJsObject(aeObject: AeSerializable, options?: IReadOptions) : IToJsObjectResult
    {
        options = options || {};

        const clazz: any = getReaderForAeObject(aeObject);
        const reader = new clazz(aeObject, options);

        const value = reader.toJsObject();

        return { status : Status.Success, value };
    }

    export function assign(aeObject: AeSerializable, jsObject: AexObject, options?: IAssignOptions) : IAssignResult
    {
        options = options || {};

        const clazz: any = getAssignerForAeObject(aeObject);
        const assigner = new clazz(aeObject, options);

        ensureFunctionHasType(jsObject, clazz);

        assigner.assign(jsObject);

        return { status : Status.Success };
    }

    function ensureFunctionHasType(jsObject: AexObject, clazz: any)
    {
        if (!('type' in jsObject)) {
            // Lets assume the target type actually belongs to the assigner class
            return (jsObject as any).__type = clazz.type;
        }
    }

    function getReaderForAeObject(aeObject: AeSerializable)
    {
        if (aeObject instanceof Project) return ProjectReader;
        if (aeObject instanceof ItemCollection)    return ItemCollectionReader;
        if (aeObject instanceof LayerCollection)   return LayerCollectionReader;

        // TODO: Add other object types
        
        throw new Error(`The object passed in is not supported for conversion to a javascript object`);
    }

    function getAssignerForAeObject(aeObject: AeSerializable)
    {
        if (aeObject instanceof Project) return ProjectAssigner;

        // TODO: Add other object types
        
        throw new Error(`The object passed in does not have a supported assigner`);
    }
}