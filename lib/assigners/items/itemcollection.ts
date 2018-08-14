namespace aex
{
    export class ItemCollectionAssigner
    {
        constructor(public aeItems:ItemCollection, public options: IAssignOptions)
        {
        }

        assign(jsItems: IItemBase[])
        {
            switch(this.options.itemCollectionBehavior) 
            {
                case CollectionBehavior.ReplaceAll:
                    this.clearAllItems();
                    this.addItems(jsItems);
                    break;
                
                case CollectionBehavior.AddOnly:
                    this.addItems(jsItems);
                    break;

                default:
                    throw new Error(`Unsupported collection behavior ${this.options.itemCollectionBehavior}`);
            }

        }

        private clearAllItems()
        {
            const items = this.aeItems;

            while (items.length > 0) {
                items[0].remove();
            }
        }

        private addItems(jsItems: IItemBase[])
        {
            forEach(jsItems, jsItem => {
                this.addItem(jsItem);
            });
        }

        private addItem(jsItem: IItemBase)
        {
            switch (jsItem.__type)
            {
                case TypeName.CompItem: this.addCompItem(jsItem as ICompItem); break;
                case TypeName.FolderItem: this.addFolderItem(jsItem as IFolderItem); break;
                default:
                    throw new Error(`Item type ${jsItem.__type} is not supported.`);
            }
        }

        private addCompItem(jsCompItem: ICompItem)
        {
            CompAssigner.addToItemCollection(this.aeItems, jsCompItem, this.options);
        }

        private addFolderItem(jsFolderItem: IFolderItem)
        {
            FolderAssigner.addToItemCollection(this.aeItems, jsFolderItem, this.options);
        }
    }
}