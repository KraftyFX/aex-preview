namespace aex
{
    export class FolderItemReader
    {
        constructor(public aeFolder:FolderItem, public options: IReadOptions)
        {
        }

        toJsObject() : IFolderItem
        {
            const { aexType, commonMembers } = mapping.folderItem;

            const jsFolder = { __type: aexType } as IFolderItem;

            assignMembersFrom(jsFolder, this.aeFolder, commonMembers);

            jsFolder.items = new ItemCollectionReader(this.aeFolder.items, this.options).toJsObject();

            return jsFolder;
        }
    }
}