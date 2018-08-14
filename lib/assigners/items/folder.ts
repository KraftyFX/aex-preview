namespace aex
{
    export class FolderAssigner
    {
        constructor(public aeFolderItem:FolderItem, public options: IAssignOptions)
        {
        }

        public static addToItemCollection(aeItems: ItemCollection, jsFolderItem: IFolderItem, options: IAssignOptions)
        {
            const aeFolderItem = aeItems.addFolder(
                jsFolderItem.name
            );

            const assigner = new FolderAssigner(aeFolderItem, options);

            assigner.assign(jsFolderItem);
        }

        assign(jsFolderItem:IFolderItem)
        {
            const { aexType, commonMembers } = mapping.folderItem;

            assertIsType(jsFolderItem, aexType);

            assignMembersFrom(this.aeFolderItem, jsFolderItem, commonMembers);

            const jsItems = new ItemCollectionAssigner(this.aeFolderItem.items, this.options);

            jsItems.assign(jsFolderItem.items);
        }
    }
}