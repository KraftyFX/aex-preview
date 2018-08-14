namespace aex
{
    export class ItemCollectionReader
    {
        constructor(public aeItems:ItemCollection, public options: IReadOptions)
        {
        }

        toJsObject() : IItemBase[]
        {
            return map(this.aeItems, aeItem => this.toItem(aeItem));
        }

        private toItem(aeItem: Item) : IItemBase
        {
            if (aeItem instanceof FolderItem) 
                return new FolderItemReader(aeItem, this.options).toJsObject();

            if (aeItem instanceof CompItem) 
                return new CompItemReader(aeItem, this.options).toJsObject();

            throw new Error(`TODO: Implement reader for ${aeItem.typeName}`);
        }
    }
}